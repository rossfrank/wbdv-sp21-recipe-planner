import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";


const PrivateRoute = ({ userCredential, component, ...rest }) =>{
    return (
        <Route
            {...rest}
            render={({ props }) =>
                userCredential["isAuthenticated"] ? (
                    <component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

const stateToPropMapper = (state) => {
    return {
        userCredential: state.userReducer.userCredential
    }
}
const dispatchToPropMapper = (dispatch)=> {
    return {}
}
export default connect(stateToPropMapper, dispatchToPropMapper)(PrivateRoute);