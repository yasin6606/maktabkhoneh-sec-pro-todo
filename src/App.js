import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import Reducer from './Reducer/Reducer';
import TodoEntry from './Components/TodoEntry';

function App() {

  const store = createStore(Reducer);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div store={store} className="container d-flex justify-content-center mt-5">
            <TodoEntry />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
