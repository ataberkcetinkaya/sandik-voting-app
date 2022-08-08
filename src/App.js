import React, { useEffect } from 'react';
import { Hello, Login, Main, Register } from './pages';
// Redux
import { useSelector } from 'react-redux';
// Router
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/appComponents';

const App = () => {

  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname !== '/login' && location.pathname !== '/register') {
      navigate('/')
    } else if (user && (location.pathname === '/login' || '/register')) {
      navigate('/main')
    }
  }, [user])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;