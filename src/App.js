import React, { useEffect } from 'react';
import { Hello, Login, Main, Register, Create } from './pages';
// Redux
import { useSelector } from 'react-redux';
// Router
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/appComponents';
import { Toaster } from 'react-hot-toast';

const App = () => {

  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname !== '/login' && location.pathname !== '/register') {
      navigate('/')
    } else if ((user
      && ((location.pathname === '/login') || (location.pathname === '/register'))
      || (user && location.pathname === '/'))) {
      navigate('/main')
    }
  }, [user])

  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;