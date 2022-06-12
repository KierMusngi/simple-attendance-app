import jwt from 'jsonwebtoken';
import config from 'config';
import { useNavigate } from 'react-router-dom';

export const ValidateToken = () => {
    const navigate = useNavigate();
    if (localStorage.getItem('token') === null) {
        navigate('/login');
    }
};

export const GetCurrentUserName = () => {
    const navigate = useNavigate();
    if (localStorage.getItem('token') === null) {
        navigate('/login');
    } else {
        const decoded = jwt.verify(localStorage.getItem('token'), config.jwtSecret);
        return decoded.name;
    }
    return;
};

export const GetCurrentUserRole = () => {
    const decoded = jwt.verify(localStorage.getItem('token'), config.jwtSecret);
    return decoded.role;
};
