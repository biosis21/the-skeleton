import React from "react";

export default class LeftSidebarComponent extends React.Component {

    render () {
        return (
            <div className="col-md-8">
                Left SideBar

                <div className="jumbotron">
                    <h1>Hello, world!</h1>
                    <p>...</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>

            </div>
        );
    }
}