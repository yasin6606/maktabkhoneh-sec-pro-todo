import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import Reducer from './Reducer/Reducer';
import TodoEntry from './Components/TodoEntry';
import TodoItems from './Components/TodoItems';

function App() {

  const store = createStore(Reducer);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="container d-flex justify-content-center mt-5">
            <TodoEntry />
            <TodoItems />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
