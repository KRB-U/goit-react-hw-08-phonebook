import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
