import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

// this is initial list of id of works that completed
let ids = [];

class TodoItems extends Component {

    state = {
        id: 0,
        list: [],
        numCompleted: 0,
        show: {
            all: true,
            completed: false,
            uncompleted: false,
        },
    };

    // completed handler status
    completedHandler = (status, id) => {
        if (status === true) {
            ids.push(id);
        } else if (status === false) {
            ids = ids.filter(i => i !== id);
        };

        this.setState({ numCompleted: ids.length });
    };

    // remove item by click on times icon
    remove = e => {
        let newList = this.state.list.filter(i => Number(i.key) !== Number(e))

        this.setState({ list: newList });
    };

    // show all works
    showAll = () => {
        this.setState({ show: { all: true } });
    };

    // show uncompleted works
    showUncompleted = () => {
        this.setState({ show: { uncompleted: true } });
    };

    // show completed works
    showCompleted = () => {
        this.setState({ show: { completed: true } });
    };

    componentDidUpdate = preProps => {
        // first check last prop with current prop, after that call componentDidMount to refresh list of works and show new work.
        if (preProps.data !== this.props.data) {
            this.componentDidMount();
        };
    };

    componentDidMount = () => {
        // first check incoming value of input, if it doesn't exist or not empty, send value for create new item.
        if (this.props.data !== undefined) {
            this.setState({
                id: this.state.id + 1,
                list: [
                    <TodoItem
                        key={this.state.id}
                        id={this.state.id}
                        title={this.props.data}
                        completed={this.completedHandler}
                        status={false}
                        removed={this.remove}
                    />,
                    ...this.state.list,
                ],
            });
        };
    };

    render = () => {
        return (
            <>
                <MDBContainer className="text-left col-6 py-3">
                    <MDBRow className={this.props.data ? null : "d-none"}>
                        <MDBCol className="text-white">
                            {
                                (this.state.show.all === true && this.state.list) ||
                                (this.state.show.completed === true && this.state.list.filter(i => ids.includes(Number(i.key)))) ||
                                (this.state.show.uncompleted === true && this.state.list.filter(i => !ids.includes(Number(i.key))))
                            }
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <MDBRow>
                                <MDBCol xl="3" className="py-3" middle={true}>
                                    <p className="m-0 text-white">
                                        {this.state.list.filter(i => !ids.includes(Number(i.key))).length} item(s) left
                                    </p>
                                </MDBCol>
                                <MDBCol xl="7" className="py-3" middle={true}>
                                    <MDBRow>
                                        <MDBCol className="text-right">
                                            <MDBBtn className="text-white" onClick={this.showAll}>All</MDBBtn>
                                        </MDBCol>
                                        <MDBCol className="text-right">
                                            <MDBBtn className="text-white" onClick={this.showUncompleted}>Active</MDBBtn>
                                        </MDBCol>
                                        <MDBCol className="text-right">
                                            <MDBBtn className="text-white" onClick={this.showCompleted}>Completed</MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    };
};
const mapStateToProps = state => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(TodoItems);