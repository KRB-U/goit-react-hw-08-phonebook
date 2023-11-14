import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { useAuth } from 'hooks';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
