import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import './../CSS/Outline-none.css';

class TodoEntry extends Component {
    render() {
        return (
            <>
                <MDBContainer className="text-center col-6 py-2">
                    <MDBRow>
                        <MDBCol>
                            <MDBRow>
                                <MDBCol>
                                    <h1>Todo App</h1>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-3 border rounded-top shadow">
                                <MDBCol className="py-2">
                                    <input placeholder="What needs to be done ? " className="px-2 border-0 col-12 shadow-none" />
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    };
};

export default TodoEntry;