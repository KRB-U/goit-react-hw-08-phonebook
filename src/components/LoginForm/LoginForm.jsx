import { logIn } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';

import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  // Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const form = e.currentTarget;

  //   dispatch(
  //     logIn({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  // return (
  //   <form onSubmit={handleSubmit} autoComplete="off">
  //     <label>
  //       Email
  //       <input type="email" name="email" />
  //     </label>
  //     <label>
  //       Password
  //       <input type="password" name="password" />
  //     </label>
  //     <button type="submit">Log In</button>
  //   </form>
  // );

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            // rememberMe: false,
          }}
          onSubmit={values => {
            console.log(values);
            dispatch(logIn(values));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={value => {
                      let error;

                      if (value.length < 6) {
                        error = 'Password must contain at least 6 characters';
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {/* <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field> */}
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
