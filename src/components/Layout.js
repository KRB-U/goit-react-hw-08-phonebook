import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useAuth } from './hooks';

export const Layout = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
