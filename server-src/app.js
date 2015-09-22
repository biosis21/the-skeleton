import express from "express";
import http from "http";
import path from "path";
import React from "react";
import Router, {Route} from "react-router";
import BodyComponent from "./components/body-component";

import AboutComponent from "./components/about-component";
import InfoComponent from "./components/info-component";
import InfoSomeComponent from "./components/info-some-component";

import fs from "fs";
var mainJS = fs.readFileSync(__dirname+'/../client-build/app.js');

//let app = express();

//app.use('/js', express.static(path.join(__dirname, '../client-build')));
//app.use('/css', express.static(path.join(__dirname, '../client-build/css')));


let write = module.exports = (string, type, res) => {
    res.writeHead(200, {
        'Content-Length': string.length,
        'Content-Type': type
    });
    res.write(string);
    res.end();
};

var routes = (
    <Route name="root" path="/" handler={BodyComponent}>
        <Route name="about" path="about" handler={AboutComponent} />
        <Route name="info" path="info" handler={InfoComponent} />
        <Route name="same-info" path="info/:id" handler={InfoSomeComponent} />
    </Route>
);

var renderApp = (req, cb) => {
    var path = req.url;

    var router = Router.create({
        routes: routes,
        location: path,
        onAbort: function (redirect) {
            cb({redirect});
        },
        onError: function (err) {
            console.log('Routing Error');
            console.log(err);
        }
    });

    router.run((Handler, state) => {

        var html = React.renderToString(<Handler />);
        //
        var output = "<html><head><title>11111</title></head><body>{{body}}</body></html>"
            .replace(/\{\{body\}\}/g, html);


        cb(null, output);
    });
};

let appServer = http.createServer((req, res) => {

    console.log(req.url);

    switch (req.url) {
        case '/js/app.js':
            return write(mainJS, 'text/javascript', res);
        default:
            renderApp(req, (error, html) => {
                if (!error) {
                    write(html, 'text/html', res);
                }
                else if (error.redirect) {
                    res.writeHead(303, {'Location': error.redirect.to});
                    res.end();
                }
                else if (error.notFound) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.write(html);
                    res.end();
                }
            });
    }
});

appServer.listen(process.env.PORT || 3000);