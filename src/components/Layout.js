import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useAuth } from './hooks';

import Animations from './Animations/Animations';

export const Layout = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <Animations />
  ) : (
    <div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
