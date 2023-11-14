import { useAuth } from 'components/hooks';
import { logOut } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};