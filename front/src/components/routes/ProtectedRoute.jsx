import React, { Children } from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children}) => {
    const isAuthenticated = JSON.parse(sessionStorage.getItem('user'));
    return isAuthenticated ? children : (
        <Navigate to="/Login" replace />
    );
};

export default ProtectedRoute;
