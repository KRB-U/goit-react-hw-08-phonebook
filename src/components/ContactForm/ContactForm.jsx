import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'components/redux/contcts/operations';
import { selectContacts } from 'components/redux/contcts/selectors';

//MUI
import { Button } from '@mui/material';

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
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <LabelInputName htmlFor={formNameUniqueKey}>
          Name
          <InputName
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
            id={formNameUniqueKey}
          />
        </LabelInputName>

        <LabelInputPhone htmlFor={formNumberUniqueKey}>
          Number
          <InputPhone
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleChange}
            id={formNumberUniqueKey}
          />
        </LabelInputPhone>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
    </FormContainer>
  );
};

export { ContactForm };
