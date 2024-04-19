import React, { Children } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import Athletes from '../../pages/Athletes';
import Statistics from '../../pages/Statistics';
import AdminRoute from './AdminRoute';
import Header from '../Header';
import Home from '../../pages/Home';

const ProtectedRoute = ({ children, isAuthenticated = true}) => {
    console.log('ProtectedRoute', isAuthenticated);
    return isAuthenticated ? (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/statistics" element={<Statistics />}/>
                <Route path="/athletes" element={<Athletes />} />
                <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>}/>
            </Routes>
        </>
    ) : (
        <Navigate to="/Login" replace />
    );
};

export default ProtectedRoute;
