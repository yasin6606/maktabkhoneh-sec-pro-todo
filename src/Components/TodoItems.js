import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';

class TodoItems extends Component {

    state = {
        id: 0,
        list: [],
    };

    // remove item by click on times icon
    remove = e => {
        let newList = this.state.list.filter(i => Number(i.key) !== Number(e))

        this.setState({ list: newList });
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
                        removed={this.remove}
                    />,
                    ...this.state.list,
                ],
            });
        };
    };

    render() {
        return (
            <>
                <MDBContainer className={this.props.data ? "text-center col-6 py-3" : "d-none"}>
                    <MDBRow>
                        <MDBCol>
                            {this.state.list}
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