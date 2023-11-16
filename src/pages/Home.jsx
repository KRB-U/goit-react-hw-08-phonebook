import { Container } from '@chakra-ui/react';
import { Title } from './Home.styled';
import { ContactList } from 'components/ContactList/ContactList';

export default function Home() {
  return (
    <Container>
      <Title>Phonebook</Title>
    </Container>
  );
}
