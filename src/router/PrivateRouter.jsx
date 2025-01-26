import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/Context/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading, setLoading, } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    };


    return <Navigate to='/signIn' state={location?.pathname}></Navigate>
};

export default PrivateRouter;