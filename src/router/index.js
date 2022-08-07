import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { Hello, Login, Main, Register } from '../pages';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Router = () => {
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log(location);
        if (!user && location.pathname !== '/login' && location.pathname !== '/register') {
            navigate('/')
        } else if (user && (location.pathname === '/login' || '/register')) {
            navigate('/main')
        }
    }, [])

    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Hello />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </>
    );
};

export default Router;