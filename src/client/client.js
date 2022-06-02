import React from "react";
import  ReactDOM from "react-dom";
import CustomRoutes from "./routes"
import {BrowserRouter} from "react-router-dom"
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from "./reducers";
import 'babel-polyfill'
const store=createStore(reducers,{},applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <CustomRoutes />
        </BrowserRouter>
    </Provider>
,document.querySelector('#root'))