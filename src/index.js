import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Homepage from './page/Homepage';
import store from './redux/store';
// import Apidata from './redux/api/api';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Apidata /> */}
      <Homepage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
