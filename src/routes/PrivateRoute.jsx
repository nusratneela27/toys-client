import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user', user);

    if (loading) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="info" />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;