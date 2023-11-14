import { useAuth } from 'components/hooks';
import { logOut } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { ConteinerWrapper, LogoutButton, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <ConteinerWrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </ConteinerWrapper>
  );
};
