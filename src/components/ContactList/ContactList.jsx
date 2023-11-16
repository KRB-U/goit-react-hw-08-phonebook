import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'components/redux/contcts/operations';
import { selectVisibleContacts } from 'components/redux/contcts/selectors';

import toast from 'react-hot-toast';

//MUI_ICON
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from '@mui/material';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success('Видалено');
  };

  return (
    <div>
      <Table>
        <TableHead
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            fontSize: 14,
          }}
        >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredContacts.map(({ name, number, id }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell>{number}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => handleDeleteContact(id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ul></ul>
    </div>
  );
};

export { ContactList };
