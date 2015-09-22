import React from "react";
import {RouteHandler} from "react-router";
import LeftSidebarComponent from "./left-sidebar-component";
import RightSidebarComponent from "./right-sidebar-component";

if (process.env.BROWSER) {
    require("./index.scss");
}

export default class BodyComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <LeftSidebarComponent></LeftSidebarComponent>
                    <RightSidebarComponent></RightSidebarComponent>
                    <RouteHandler/>
                </div>
            </div>
        );
    }
}
