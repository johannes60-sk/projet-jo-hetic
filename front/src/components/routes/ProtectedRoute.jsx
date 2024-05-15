import React, { Children, useEffect, useState } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import Athletes from '../../pages/Athletes';
import Statistics from '../../pages/Statistics';
import AdminRoute from './AdminRoute';
import Header from '../Header';
import Home from '../../pages/Home';
import CountryMedals from '../../pages/CountryMedals';

const ProtectedRoute = ({ children }) => {

    const [isLogged, setIsLogged] = useState(true);

    const deleteCookie = () => {
        for(let cookie of document.cookie.split(";")) {
            if(cookie.trim().startsWith("jwt=")) {
            console.log('cookie')
            const newCookie = cookie.replace("jwt=", "");
            document.cookie = `jwt=${newCookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC}`;
            }
        }
    }
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = document.cookie.split(';').find((cookie) => cookie.includes('jwt'));
                if (!token) {
                    setIsLogged(false);
                    return <Navigate to="/Login" replace />;
                } else {
                    const response = await fetch("http://localhost:3000/users/verify", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": token.substring(5),
                        },
                    })

                    const data = await response.json();
                    console.log(data.result);
                    setIsLogged(data.result);
                    !data.result && deleteCookie();
                }
            } catch (error) {
                setIsLogged(false);
                console.error("Error:", error);
                deleteCookie();
            }
        }

        checkAuth();
    }, []);

    return isLogged ? (
        <>
            <Header isLogged={isLogged} />
            <Routes>
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/athletes" element={<Athletes />} />
                <Route path="/country-medals" element={<CountryMedals />} />
                <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>} />
            </Routes>
        </>
    ) : (
        <Navigate to="/Login" replace />
    );
};

export default ProtectedRoute;
