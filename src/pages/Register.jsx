import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { ChakraProvider } from '@chakra-ui/react';

export default function Register() {
  return (
    <div>
      <ChakraProvider>
        <RegisterForm />
      </ChakraProvider>
    </div>
  );
}
