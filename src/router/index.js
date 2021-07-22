import React, {Component} from 'react';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import Login from "../views/login";
import MyLayout from "../views/layout";

class MyRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {token} = this.props
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route
                        path="/"
                        render={() => {
                            if (!token) {
                                return <Redirect to="/login"/>
                            } else {
                                return <MyLayout/>
                            }
                        }}
                    />
                </Switch>
            </HashRouter>
        );
    }
}

const mapStateToProps = state => state.user
export default connect(mapStateToProps)(MyRouter);