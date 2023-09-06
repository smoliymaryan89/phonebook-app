import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from 'redux/auth/authOperations';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter valid email')
    .required('Please enter your email address.'),
  password: yup.string().required('Please enter your password.'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: value => {
      dispatch(login(value));
      formik.resetForm();
    },
  });

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box bg="white" p={10} rounded="md" w={500} boxShadow="xl">
        <VStack as="form" spacing={4} noValidate onSubmit={formik.handleSubmit}>
          <FormControl
            isRequired
            mb={3}
            isInvalid={formik.touched.email && formik.errors.email}
          >
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              variant="filled"
              focusBorderColor="purple.400"
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={5}
            isInvalid={formik.touched.password && formik.errors.password}
          >
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              variant="filled"
              focusBorderColor="purple.400"
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>

          <Button type="submit">Login</Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LoginForm;
