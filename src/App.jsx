/**
 * Created by daishun on 2017/4/4.
 */
import React from "react";
import "babel-polyfill";
import {Switch,Route} from "react-router";
import routes from "./routes";
require('es6-promise').polyfill();

export default function App() {
    return(
        <Switch>
            {routes.map((route,i) => (
                <Route {...route} key={"r_"+i}/>
            ))}
        </Switch>
    )
}

