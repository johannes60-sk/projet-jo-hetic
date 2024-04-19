import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children, isAdmin = true}) => {
    console.log('ProtectedRoute', isAdmin);
    return isAdmin ? children : (
        <Navigate to="/Home" replace />
    );
};

export default AdminRoute;
