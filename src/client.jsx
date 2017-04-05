/**
 * Created by daishun on 2017/4/4.
 */
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createStore, applyMiddleware,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
let defaultState = {}
if(typeof STATE_FROM_SERVER != "undefined"){
    defaultState=STATE_FROM_SERVER;
}
let reducer = combineReducers({...reducers});
const store = createStore(reducer,defaultState,composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))