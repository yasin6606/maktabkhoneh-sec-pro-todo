import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import Reducer from './Reducer/Reducer';
import TodoEntry from './Components/TodoEntry';
import TodoItems from './Components/TodoItems';
import { MDBContainer } from 'mdbreact';
import './CSS/Bg-image.css';

function App() {

  const store = createStore(Reducer);

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <MDBContainer className="mt-5">
            <TodoEntry />
            <TodoItems />
          </MDBContainer>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
