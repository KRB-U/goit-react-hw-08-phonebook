import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
