import React from "react";
import AppComponent from "../components/app-component";

export default class HomeCtrl {

    static get (req, res, next) {

        let AppElement = React.createFactory(AppComponent);
        let html = React.renderToString(AppElement({ }));

        res.type('html');
        res.send(html);
    }

}