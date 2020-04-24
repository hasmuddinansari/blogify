import React from 'react'
import Navbar from "../components/Common/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Editor from "../components/Text_editor/Editor"

export default function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact render={() => <h2>Home page</h2>} />
                <Route path="/write" component={Editor} />
            </Switch>

        </Router>
    )
}
