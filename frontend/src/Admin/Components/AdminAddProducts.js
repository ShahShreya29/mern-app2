import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const AdminAddProducts = () => {
  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .max(120, "Title must be 120 characters or less")
      .min(10, "Title must be at least 10 characters long"),
    name: yup.string().required("Name is required"),
    description: yup
      .string()
      .required("Description is required")
      .max(520, "Description must be 520 characters or less")
      .min(10, "Description must be at least 10 characters long"),
    color: yup.string().required("Color is required"),
    price: yup
      .string()
      .required("Price is required")
      .max(120, "Price must be 120 characters or less")
      .min(1, "Price must be at least 1 character long"),
  });

  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleAddProduct = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("img", image);
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("color", values.color);
      formData.append("brand", values.brand);
      formData.append("size", values.size);

      const response = await axios.post(
        "http://localhost:8080/api/admin/addProducts",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data);
      resetForm();
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
    }
  };

  const onImageUpdate = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <h1 className="text-center m-5">ADD BLOG</h1>
      <Formik
        initialValues={{
          title: "",
          name: "",
          description: "",
          color: "",
          price: "",
          size: "",
          brand: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleAddProduct}
      >
        <Form>
          <div className="container m-5">
            <div className="row justify-content-center">
              <div className="form-group col-md-4 col-md-offset-5 align-center">
                <TextField
                  style={{ margin: "15px" }}
                  id="title"
                  label="Title"
                  name="title"
                  variant="standard"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                  style={{ color: "red" }}
                />

                <TextField
                  style={{ margin: "15px" }}
                  id="name"
                  label="Name"
                  name="name"
                  variant="standard"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                  style={{ color: "red" }}
                />

                <TextField
                  style={{ margin: "15px" }}
                  id="description"
                  label="Description"
                  name="description"
                  variant="standard"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  style={{ color: "red" }}
                />

                <TextField
                  style={{ margin: "15px" }}
                  id="color"
                  label="Color"
                  name="color"
                  variant="standard"
                />
                <ErrorMessage
                  name="color"
                  component="div"
                  style={{ color: "red" }}
                />

                <TextField
                  style={{ margin: "15px" }}
                  id="price"
                  label="Price"
                  name="price"
                  variant="standard"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  style={{ color: "red" }}
                />

                <TextField
                  style={{ margin: "15px" }}
                  id="size"
                  label="Size"
                  name="size"
                  variant="standard"
                />
                <ErrorMessage
                  name="size"
                  component="div"
                  style={{ color: "red" }}
                />

                <TextField
                  style={{ margin: "15px" }}
                  id="brand"
                  label="Brand"
                  name="brand"
                  variant="standard"
                />
                <ErrorMessage
                  name="brand"
                  component="div"
                  style={{ color: "red" }}
                />

                <input
                  type="file"
                  name="blog_img"
                  onChange={onImageUpdate}
                  className="form-control"
                />
                <ErrorMessage
                  name="blog_img"
                  component="div"
                  style={{ color: "red" }}
                />

                <div>
                  <Button type="submit" variant="outlined">
                    ADD
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AdminAddProducts;
