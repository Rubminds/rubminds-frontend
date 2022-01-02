import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import rootReducer, { rootSaga } from './modules';
require('dotenv').config();

console.log("DB_HOST:", process.env.REACT_APP_DB_HOST);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
);

reportWebVitals();
