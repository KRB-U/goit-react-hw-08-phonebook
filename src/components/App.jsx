// LAYOUT
import { Layout } from './Layout';

// HOOKS
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// OPERATIONS
import { fetchCurrentUser } from './redux/auth/operations';

// NOTIFY
import { Toaster } from 'react-hot-toast';
import { toastConfig } from 'components/toastConfig';

// ROUTES
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AppBarRename } from './AppBar/AppBar';

// PAGES
const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBarRename />
      <Toaster {...toastConfig} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export { App };
