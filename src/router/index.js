import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hello, Login, Main, Register } from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    );
};

export default Router;