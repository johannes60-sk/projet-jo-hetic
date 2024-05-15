import { Route, Navigate, Routes } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import Athletes from '../../pages/Athletes';
import Statistics from '../../pages/Statistics';
import AdminRoute from './AdminRoute';
import CountryMedals from '../../pages/CountryMedals';

const ProtectedRoute = (isLogged) => {

    return isLogged ? (
        <>
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
