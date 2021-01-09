import "react-native-gesture-handler";
import React, { Component } from "react";
import axios from "axios";
import { AppNavigator } from "./src/Navigator";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./src/redux/sagas";
import reducers from "./src/redux/reducers";
import thunk from "redux-thunk";
// axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.headers.common["Authorization"] = ``;
// axios.defaults.headers.post["Content-Type"] = "application/json";

// middlewared
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const store = createStore(reducers(), compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas);
export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </>
    );
  }
}
export { store };
