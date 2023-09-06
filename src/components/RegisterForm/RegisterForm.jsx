import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { register } from 'redux/auth/authOperations';
import * as yup from 'yup';
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
  name: yup
    .string()
    .matches(/^[A-Za-z\s'-]+$/, 'Please enter a valid name.')
    .required('Name is required!'),
  email: yup
    .string()
    .email('Invalid email address.')
    .required('Email is required!'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      'Password must contain at least one letter, one number, and one special character'
    )
    .required('Password is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Confirm password is required!'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: ({ name, email, password }) => {
      dispatch(register({ name, email, password }));
      formik.resetForm();
    },
  });

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box bg="white" p={10} rounded="md" w={500} boxShadow="xl">
        <VStack as="form" spacing={4} noValidate onSubmit={formik.handleSubmit}>
          <FormControl
            isRequired
            mb={2}
            isInvalid={formik.touched.name && formik.errors.name}
          >
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              variant="filled"
              focusBorderColor="purple.400"
            />

            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            {/* {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null} */}
          </FormControl>

          <FormControl
            isRequired
            mb={2}
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

            {/* {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null} */}
          </FormControl>

          <FormControl
            isRequired
            mb={2}
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

            {/* {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null} */}
          </FormControl>

          <FormControl
            isRequired
            mb={3}
            isInvalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          >
            <FormLabel>Confirm password</FormLabel>
            <Input
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              variant="filled"
              focusBorderColor="purple.400"
            />
            <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>

            {/* {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null} */}
          </FormControl>

          <Button type="submit">Sign up</Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
