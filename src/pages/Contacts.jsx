// TOOLKIT
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

//STYLED
import {
  TitlePhonebook,
  TitleContacts,
  ContainerWrapper,
} from './Contacts.styled';

// COMPONENTS
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

// NOTIFY
import { Toaster } from 'react-hot-toast';
import { toastConfig } from 'components/toastConfig';

//ACTIONS-MOVEMENT
import { selectError, selectIsLoading } from 'components/redux/selectors';
import { fetchContacts } from 'components/redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <TaskEditor /> */}

      <ContainerWrapper>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm />
        <TitleContacts>Contacts</TitleContacts>
        <Filter />

        {isLoading && !error && <b>Request in progress...</b>}
        {error && <p>{error}</p>}

        <ContactList />
        <Toaster {...toastConfig} />
      </ContainerWrapper>
    </>
  );
}
