// TOOLKIT
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

//ACTIONS-MOVEMENT
import {
  selectError,
  selectIsLoading,
} from 'components/redux/contcts/selectors';
import { fetchContacts } from 'components/redux/contcts/operations';
import { LoaderDna } from 'Spiner/Spiner';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContainerWrapper>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm />
        <TitleContacts>Contacts</TitleContacts>
        <Filter />

        {isLoading && !error && <LoaderDna />}
        {/* {error && <p>{error}</p>} */}

        <ContactList />
      </ContainerWrapper>
    </>
  );
}
