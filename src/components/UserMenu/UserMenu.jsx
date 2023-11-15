import { useAuth } from 'components/hooks';
import { logOut } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { ConteinerWrapper, LogoutButton, UserName } from './UserMenu.styled';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <ConteinerWrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutButton
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .then(() => {
              toast.success('успішно');
              navigate('/login');
            })
            .catch(() => toast.error('UPS...'))
        }
      >
        Logout
      </LogoutButton>
    </ConteinerWrapper>
  );
};
