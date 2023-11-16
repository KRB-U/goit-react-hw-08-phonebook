import { logIn } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';

// import { Formik, Field } from 'formik';
// import {
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Input,
//   VStack,
// } from '@chakra-ui/react';

// import toast from 'react-hot-toast';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();

//     const form = e.currentTarget;

//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );

// return (
//   <Flex bg="gray.100" align="center" justify="center" h="100vh">
//     <Box bg="white" p={6} rounded="md" w={64}>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//           rememberMe: false,
//         }}
//         onSubmit={values => {
//           dispatch(logIn(values))
//             .unwrap()
//             .then(() => {
//               toast.success('успіх');
//             })
//             .catch(() => toast.error('такою юзера нема'));
//         }}
//       >
//         {({ handleSubmit, errors, touched }) => (
//           <form onSubmit={handleSubmit}>
//             <VStack spacing={4} align="flex-start">
//               <FormControl>
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <Field
//                   as={Input}
//                   id="email"
//                   name="email"
//                   type="email"
//                   variant="filled"
//                 />
//               </FormControl>
//               <FormControl isInvalid={!!errors.password && touched.password}>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <Field
//                   as={Input}
//                   id="password"
//                   name="password"
//                   type="password"
//                   variant="filled"
//                   validate={value => {
//                     let error;

//                     if (value.length < 6) {
//                       error = 'Password must contain at least 6 characters';
//                     }
//                     return error;
//                   }}
//                 />
//                 <FormErrorMessage>{errors.password}</FormErrorMessage>
//               </FormControl>
//               <Field
//                 as={Checkbox}
//                 id="rememberMe"
//                 name="rememberMe"
//                 colorScheme="purple"
//               >
//                 Remember me?
//               </Field>
//               <Button type="submit" colorScheme="purple" width="full">
//                 Login
//               </Button>
//             </VStack>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   </Flex>
// );,
// };

const defaultTheme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      logIn({
        email: data.get('email'),
        password: data.get('password'),
      })
    );
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
