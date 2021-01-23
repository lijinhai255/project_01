import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Advice from "./pages/Advice/indx"
import Advicea from "./pages/Advice/second"
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={ Advice } />
                    <Route exact path="/a" component={ Advicea } />
                </Switch>
            </React.Fragment>
        )
    }
}

export default App