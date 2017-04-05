import { createServer } from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { matchPath } from 'react-router-dom';
import App from './App';
import fs from "fs";
import path from "path";
import routes from "./routes";
import { createStore, applyMiddleware,combineReducers} from 'redux';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
let reducer = combineReducers(reducers);
createServer((req, res) => {
    const context = {}
    if(req.url.indexOf(".")>0){
       fs.readFile(path.join(__dirname,`../public/${req.url}`), (err, data) => {
            if (err) {
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
            res.end();
       });
        return;
    }
    const store = createStore(reducer,applyMiddleware(thunk));
// inside a request
    const promises = []
// use `some` to imitate `<Switch>` behavior of selecting only the first to match
    routes.some(route => {
        // use `matchPath` here
        const match = matchPath(req.url, route);
        if (match)
            promises.push(route.loadData(store,match))
        return match
    })

    Promise.all(promises).then(() => {
        const html = ReactDOMServer.renderToString(
            <Provider store={store} >
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <App/>
                </StaticRouter>
            </Provider>
        )
        if (context.url) {
            res.writeHead(301, {
                Location: context.url
            })
            res.end()
        } else {
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>react-universal-example</title>
                </head>
                <body>
                    <div id="app">${html}</div>
                    <script>var STATE_FROM_SERVER=${JSON.stringify(store.getState())};</script>
                    <script src="./index.js" async></script>
                </body>
                </html>
            `)
            res.end()
        }
    })

}).listen(3001,function () {
    console.log("3000 is listening!")
})

