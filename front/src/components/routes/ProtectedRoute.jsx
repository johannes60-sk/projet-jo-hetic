import React, { Children } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import Athletes from '../../pages/Athletes';
import Statistics from '../../pages/Statistics';
import AdminRoute from './AdminRoute';
import Header from '../Header';
import Footer from '../Footer';
import CountryMedals from '../../pages/CountryMedals';

const ProtectedRoute = ({ children }) => {

    const isAuthenticated = JSON.parse(sessionStorage.getItem('user'));
    return isAuthenticated ? (
        <>
            <Header />
            <Routes>
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/athletes" element={<Athletes />} />
                <Route path="/country-medals" element={<CountryMedals />} />
                <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>} />
            </Routes>
            <Footer />
        </>
    ) : (
        <Navigate to="/Login" replace />
    );
};

export default ProtectedRoute;
