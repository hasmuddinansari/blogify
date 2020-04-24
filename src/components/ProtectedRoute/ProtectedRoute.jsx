import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                const token = localStorage.getItem("token")
                if (isLoggedIn || token !== null) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};
const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoute)