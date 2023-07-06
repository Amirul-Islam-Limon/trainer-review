import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading......</div>
    }

    if (user) {
        return children;
    }
        return <Navigate to="/log-in" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;