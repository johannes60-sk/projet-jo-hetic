import { Navigate } from 'react-router-dom';

const AdminRoute = (children) => {

    const userAdmin = JSON.parse(sessionStorage.getItem('user'));
    const isAdmin = userAdmin?.role;
    return isAdmin === 'admin' ? children : (
        <Navigate to="/" replace />
    );
};

export default AdminRoute;
