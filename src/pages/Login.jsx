import { LoginForm } from 'components/LoginForm/LoginForm';
// STYLES
import { ChakraProvider } from '@chakra-ui/react';

export default function Login() {
  return (
    <div>
      <ChakraProvider>
        <LoginForm />
      </ChakraProvider>
    </div>
  );
}
