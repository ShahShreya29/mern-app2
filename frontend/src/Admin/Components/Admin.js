import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CategoryIcon from "@mui/icons-material/Category";
import { useNavigate } from "react-router-dom";

const menu = [
  { name: "DashBoard", path: "/admin" },
  { name: "PRODUCTS", path: "/admin/products" },
  { name: "ADD PRODUCTS", path: "/admin/addProducts" },
  { name: "CUSTOMER", path: "/admin/customer" },
  { name: "ORDERS", path: "/admin/orders" },
];

const Admin = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome Admin</h1>
      <Box
        height={400}
        width={400}
        my={4}
        m={"auto"}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box
              height={150}
              width={150}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              onClick={navigate("/products")}
            >
              <Button color="secondary" sx={{ m: "2px" }}>
                <CategoryIcon sx={{ m: "3px" }} />
                PRODUCTS
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              height={150}
              width={150}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              onClick={navigate("/addProducts")}
            >
              <Button color="secondary" sx={{ m: "2px" }}>
                <AddToPhotosIcon sx={{ m: "3px" }} />
                ADD PRODUCTS
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              height={150}
              width={150}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              cursor="pointer"
              onClick={navigate("/customer")}
            >
              <Button color="secondary" sx={{ m: "2px" }}>
                <GroupsOutlinedIcon sx={{ m: "3px" }} />
                CUSTOMER{" "}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              height={150}
              width={150}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              onClick={navigate("/orders")}
            >
              <Button sx={{ m: "2px" }}>
                <CardGiftcardIcon color="secondary" sx={{ m: "3px" }} />
                ORDERS{" "}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Admin;
