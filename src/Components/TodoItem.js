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
    completedHandler = e => this.setState({ completedChecked: e.currentTarget.checked });

    // call remove function from prop to remove specific item from the list
    remove = () => this.props.removed(this.props.id);

    render = () => {
        return (
            <>
                <MDBRow className="text-left py-3 border-bottom" key={this.props.id}>
                    <MDBCol className="col-11">
                        <MDBRow>
                            <MDBCol middle={true} xl="1" lg="1" md="2" sm="2" xs="2">
                                <input
                                    type="checkbox"
                                    value="off"
                                    ref={this.checkedStatus}
                                    onChange={this.completedHandler}
                                />
                            </MDBCol>
                            <MDBCol middle={true} xl="11" lg="11" md="10" sm="10" xs="10">
                                <p className={`font-weight-bold h5 ${this.state.completedChecked && `line-through text-secondary italic`}`}>{this.props.title}</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className="col-1">
                        <FaTimes className="text-danger" onClick={this.remove} />
                    </MDBCol>
                </MDBRow>
            </>
        );
    };
};

export default connect()(TodoItem);