import { NavLinkNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkNav to="/register">Register</NavLinkNav>
      <NavLinkNav to="/login">Log In</NavLinkNav>
    </div>
  );
};
