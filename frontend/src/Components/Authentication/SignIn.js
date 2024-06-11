import React from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/User/authAction';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Is Required'),
    password: Yup.string().required('Password Is Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(login(values.email, values.password));
        toast.success('SignIn successful!');
        navigate("/");
      } catch (error) {
        toast.error('SignIn failed! Please check your credentials.');
      }
    },
  });

  return (
    <Grid
      container
      justifyContent="center"
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom align="center">
            SignIn
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              {...formik.getFieldProps('email')}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              {...formik.getFieldProps('password')}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '10px' }}
            >
              SignIn
            </Button>
          </form>
          <h3 className='text-center m-3'>
            Have not Account? <Link to={"/signUp"}>SignUp</Link>!!!
          </h3>
        </Paper>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default SignIn;
