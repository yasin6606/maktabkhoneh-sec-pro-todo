import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './../CSS/Outline-none.css';
import { connect } from 'react-redux';

class TodoEntry extends Component {

    constructor(props) {
        super(props);

        this.title = React.createRef();
    };

    // add new work to the list
    addNewWork = e => {
        e.preventDefault();

        if (this.title.current.value.length > 0) {
            this.props.dispatch({ type: "ADDNEWWORK", payload: this.title.current.value });

            this.title.current.value = "";
            this.title.current.focus();
        };
    };

    render = () => {
        return (
            <>
                <MDBContainer className="text-center col-6">
                    <MDBRow>
                        <MDBCol>
                            <MDBRow>
                                <MDBCol>
                                    <h1>Todo App</h1>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-3 border rounded-top">
                                <MDBCol className="py-2 col-12">
                                    <form onSubmit={this.addNewWork}>
                                        <MDBRow className="d-flex justify-content-around">
                                            <MDBCol middle={true}>
                                                <input placeholder="What needs to be done ? " ref={this.title} className="px-2 border-0 col-12 shadow-none" />
                                            </MDBCol>
                                            <MDBCol middle={true} className="col-2 py-1">
                                                <MDBBtn color="primary" className="font-weight-bolder" type="submit">ADD</MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    };
};

export default connect()(TodoEntry);