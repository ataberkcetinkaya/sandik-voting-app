import React, { Suspense, useEffect, useState } from 'react';
import { Hello, Login, Main, Register, Create, Comments } from './pages';
// Redux
import { useSelector } from 'react-redux';
// Router
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/appComponents';
import { Toaster } from 'react-hot-toast';
import i18n from './i18n';
import LocaleContext from './LocaleContext';

const App = () => {

  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  useEffect(() => {
    if (!user && location.pathname !== '/login' && location.pathname !== '/register') {
      navigate('/')
    } else if ((user && location.pathname === '/login') || (user && location.pathname === '/register') || (user && location.pathname === '/')) {
      navigate('/main')
    }
  }, [user])

  return (
    <>
    <LocaleContext.Provider value={{locale, setLocale}}>
    <Suspense >
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/create" element={<Create />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      </Suspense>
      </LocaleContext.Provider>
    </>
  );
};

export default App;