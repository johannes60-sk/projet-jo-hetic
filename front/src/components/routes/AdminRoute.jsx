import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children}) => {

    // Check jwt token is valid
    // const token = document.cookie.split(';').find((cookie) => cookie.includes('jwt'));
    // if (!token) {
    //     return <Navigate to="/login" replace />;
    // }


    const userAdmin = JSON.parse(sessionStorage.getItem('user'));
    const isAdmin = userAdmin?.role;
    return isAdmin === 'admin' ? children : (
        <Navigate to="/" replace />
    );
};

export default AdminRoute;
