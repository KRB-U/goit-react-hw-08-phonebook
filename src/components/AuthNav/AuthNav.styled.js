import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #e84a5f;
  }
`;
