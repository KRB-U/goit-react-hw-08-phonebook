// COMPONENTS
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

//STYLED
import { TitlePhonebook, TitleContacts, ContainerWrapper } from './App.styled';

// NOTIFY
import { Toaster } from 'react-hot-toast';
import { toastConfig } from 'components/toastConfig';

// TOOLKIT
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//ACTIONS-MOVEMENT
import { selectIsLoading, selectError } from './redux/selectors';
import { fetchContacts } from './redux/operations';
import { Link, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';

import { Layout } from './Layout';

const App = () => {
  const dispatch = useDispatch();

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
    // <ContainerWrapper>
    //   <TitlePhonebook>Phonebook</TitlePhonebook>
    //   <ContactForm />
    //   <TitleContacts>Contacts</TitleContacts>
    //   <Filter />
    //   {/* {isLoading && !error && <b>Request in progress...</b>}
    //   {error && <p>{error}</p>} */}
    //   <ContactList />
    //   <Toaster {...toastConfig} />
    // </ContainerWrapper>
  );
};

export { App };
