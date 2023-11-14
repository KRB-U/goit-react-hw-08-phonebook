// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useAuth();

  // onClick = {() => dispatch(logOut())}

  return (
    <div>
      {/* <p>Welcome, {user.name}</p> */}
      <button type="button">Logout</button>
    </div>
  );
};
