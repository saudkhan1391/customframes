import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ContextProvider from './store/store';
import { BrowserRouter } from 'react-router-dom';
import RoutesContainer from './RoutesContainer';

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <RoutesContainer />
        {/* <div>Asdfsdf </div> */}
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App;
