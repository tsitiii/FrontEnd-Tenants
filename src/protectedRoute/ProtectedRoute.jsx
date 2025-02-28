import { useAuth } from "@/context/useAuth";
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
    const { user } = useAuth(); 
    const navigate = useNavigate();

    useEffect(() => {
        console.log("User detail from protected route", user);
        if (!user) {
            navigate('/login', { replace: true });
        } else if (role && !role.includes(user.role)) {
            navigate('/', { replace: true });
        }
    }, [navigate, user, role]);

    if (!user || (role && !role.includes(user.role))) {
        return null;
    }

    return children; 
};
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    role: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;
