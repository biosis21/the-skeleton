
import React from "react";
import Router, { DefaultRoute, Route, NotFoundRoute } from "react-router";
import BodyComponent from "../../components/body-component";
import AboutComponent from "../../components/about-component";

//
//var routes = (
//    <Route name="root" path="/" handler={BodyComponent}>
//        <Route name="about" path="about" handler={AboutComponent} />
//    </Route>
//);
//
//Router.run(routes, Router.HistoryLocation, function (Handler, state) {
//    console.log(state);
//    React.render(<Handler/>, document.body);
//});