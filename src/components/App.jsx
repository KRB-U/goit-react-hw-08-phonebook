import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';

import { Layout } from './Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrentUser } from './redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export { App };
