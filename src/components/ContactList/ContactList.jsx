import { useDispatch, useSelector } from 'react-redux';
import { Button, ContactItem } from './ContactList.styled';

import { deleteContact } from 'components/redux/contcts/operations';
import { selectVisibleContacts } from 'components/redux/contcts/selectors';

import toast from 'react-hot-toast';

//MUI_ICON
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success('Видалено');
  };

  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            {name}: {number}
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => handleDeleteContact(id)}
            >
              <DeleteIcon />
            </IconButton>
          </ContactItem>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
