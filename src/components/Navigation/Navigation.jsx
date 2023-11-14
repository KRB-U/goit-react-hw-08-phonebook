import { useAuth } from 'components/hooks';
import { NavLinkNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkNav to="/">Home</NavLinkNav>
      {isLoggedIn && <NavLinkNav to="/contacts">Contacts</NavLinkNav>}
    </nav>
  );
};
