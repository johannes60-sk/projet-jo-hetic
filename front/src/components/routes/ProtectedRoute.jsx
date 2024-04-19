import React, { Children } from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated = true}) => {
    console.log('ProtectedRoute', isAuthenticated);
    return isAuthenticated ? children : (
        <Navigate to="/Login" replace />
    );
};

export default ProtectedRoute;
