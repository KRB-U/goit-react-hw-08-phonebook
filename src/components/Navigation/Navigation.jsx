import { useAuth } from 'components/hooks';
import { NavLinkNav } from './Navigation.styled';
// import Button from '@mui/material/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkNav to="/">Home</NavLinkNav>
      {isLoggedIn && <NavLinkNav to="/contacts">Contacts</NavLinkNav>}
    </nav>
  );
};
