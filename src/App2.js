import React, { Component } from "react";
import SignUp from "./SignUp";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

class App2 extends Component {
  render() {
    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/SignUp">SignUp</Link>
                    </li>

                </ul>
                <Switch>
                    
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </Router>
        </div>
    )
  }
}

export default App2;
