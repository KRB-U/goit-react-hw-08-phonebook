import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'components/redux/contcts/operations';
import { selectContacts } from 'components/redux/contcts/selectors';

// NOTIFY
import toast from 'react-hot-toast';

import { nanoid } from 'nanoid';

import {
  FormContainer,
  LabelInputName,
  InputName,
  LabelInputPhone,
  InputPhone,
  // Button,
} from './ContactForm.styled';

//MUI
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Container,
} from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const formNameUniqueKey = nanoid(10);
  const formNumberUniqueKey = nanoid(7);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isNameInContacts = allContacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      toast.error(`контакт з іменем ${name} вже є`);
      return;
    }

    dispatch(addContact({ name, number }));
    toast.success('Додано');
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
          {/* <InputLabel htmlFor={formNameUniqueKey}>Name</InputLabel> */}
          <TextField
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
            id={formNameUniqueKey}
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
          {/* <InputLabel htmlFor={formNumberUniqueKey}>Number</InputLabel> */}
          <TextField
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleChange}
            id={formNumberUniqueKey}
          />
        </FormControl>

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
    </Container>
  );
};

export { ContactForm };
