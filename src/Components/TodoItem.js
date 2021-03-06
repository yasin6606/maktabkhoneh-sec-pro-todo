import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { FaTimes } from 'react-icons/fa';
import './../CSS/Line-on-text.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.checkedStatus = React.createRef();
    };

    state = {
        completedChecked: false,
    };

    // handler check box to completed or not
    completedHandler = e => {
        this.setState({ completedChecked: e.currentTarget.checked });

        // this.props.status = e.currentTarget.checked

        this.props.completed(e.currentTarget.checked, this.props.id);
    };

    // call remove function from prop to remove specific item from the list
    remove = () => this.props.removed(this.props.id);

    render = () => {
        return (
            <>
                <MDBRow className="text-left py-3 border-bottom d-flex justify-content-between px-3" key={this.props.id}>
                    <MDBCol xs="10">
                        <MDBRow>
                            <MDBCol middle={true}>
                                <input
                                    type="checkbox"
                                    value="off"
                                    ref={this.checkedStatus}
                                    onChange={this.completedHandler}
                                />
                            </MDBCol>
                            <MDBCol middle={true}>
                                <p className={`font-weight-bold h5 ${this.state.completedChecked && `line-through text-secondary italic`}`}>{this.props.title}</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol xs="2">
                        <FaTimes className="text-warning" onClick={this.remove} />
                    </MDBCol>
                </MDBRow>
            </>
        );
    };
};

export default connect()(TodoItem);