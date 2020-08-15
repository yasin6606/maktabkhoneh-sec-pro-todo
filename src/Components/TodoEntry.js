import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class TodoEntry extends Component {
    render() {
        return (
            <>
                <MDBContainer className="text-center">
                    <MDBRow>
                        <MDBCol>
                            <MDBRow>
                                <MDBCol>
                                    <h1>Todo App</h1>
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