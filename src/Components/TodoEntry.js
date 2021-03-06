import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './../CSS/Outline-none.css';
import './../CSS/FontFamily.css';
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

    // focus on input when TodoEntry component is loaded
    componentDidMount = () => this.title.current.focus();

    render = () => {
        return (
            <>
                <MDBContainer className="text-center col-12 col-md-8 col-lg-6">
                    <MDBRow>
                        <MDBCol>
                            <MDBRow>
                                <MDBCol>
                                    <h1 className="text-primary royal-font">Todo App</h1>
                                    <a href="https://github.com/yasin6606" target="_blank" className="text-decoration-none"><sub className="text-danger font-weight-bold text-right d-block">Created By Yassin Gourkani</sub></a>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-3 border rounded-top bg-white">
                                <MDBCol className="py-2 col-12">
                                    <form onSubmit={this.addNewWork}>
                                        <MDBRow className="d-flex justify-content-between px-2">
                                            <MDBCol middle={true} className="px-0 col-9 col-md-10">
                                                <input
                                                    type="text"
                                                    placeholder="What needs to be done ? "
                                                    ref={this.title}
                                                    className="px-2 py-2 border-0 col-12 shadow-none"
                                                />
                                            </MDBCol>
                                            <MDBCol middle={true} className="py-1 px-0 col-3 col-md-2">
                                                <MDBBtn color="warning" className="font-weight-bolder royal-font" type="submit">ADD</MDBBtn>
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