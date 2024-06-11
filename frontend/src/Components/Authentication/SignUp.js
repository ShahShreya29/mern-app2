import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/User/authAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name Is Required"),
      email: Yup.string().email("Invalid email").required("Email Is Required"),
      password: Yup.string().required("Password Is Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password Is Required"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("profilePic", values.profilePic);

      dispatch(register(formData)).then(() => {
        toast.success("Signup successful!");
        navigate("/signIn");
      });
    },
  });

  const handleFileChange = (e) => {
    formik.setFieldValue("profilePic", e.currentTarget.files[0]);
  };

  return (
    <Grid
      container
      justifyContent="center"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom align="center">
            Signup
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              type="text"
              margin="normal"
              variant="outlined"
              {...formik.getFieldProps("name")}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              {...formik.getFieldProps("email")}
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
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              margin="normal"
              variant="outlined"
              {...formik.getFieldProps("confirmPassword")}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            <input
              accept="image/*"
              id="profilePic"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }} // Hide the input field
            />
            <label htmlFor="profilePic">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{ marginLeft: "10px" }}
              >
                <PhotoCamera />
              </IconButton>
              Upload Profile Picture
            </label>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Signup
            </Button>
          </form>
          <h3 className="text-center m-3">
            Have Account <Link to={"/signIn"}>SignIn</Link>!!!
          </h3>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={4}
        style={{ textAlign: "center" }}
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        <img
          src="/path/to/your/image.jpg"
          alt="Signup Image"
          style={{ maxWidth: "100%", maxHeight: "300px", margin: "20px auto" }}
        />
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default SignUp;
