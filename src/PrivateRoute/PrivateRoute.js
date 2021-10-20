import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
    const {user , isLogin} = useAuth();
    if(isLogin ){
        return(
            <div className="text-center my-5 py-5">
            <Spinner className="text-center" animation="grow" />
          </div>)
    }
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >
        </Route>
        </div>
    );
};

export default PrivateRoute;