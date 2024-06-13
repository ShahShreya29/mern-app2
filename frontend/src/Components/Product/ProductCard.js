import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { title, details, image, price, discountPrice, discountPercent, color } =
    product;
  const navigate = useNavigate();
  console.log(product);

  return (
    <Card
      onClick={() =>
        navigate(`http://localhost:8080/api/products/${product?._id}`)
      }
      sx={{ maxWidth: 245, margin: 5, cursor: "pointer" }}
      className="Card"
    >
      <CardMedia
        sx={{ height: 340 }}
        style={{ objectFit: "cover" }}
        image={image}
        title="Product Image"
      />
      <CardContent className="CardContent">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ margin: 5 }}
        >
          {details}
        </Typography>
        <Typography style={{ margin: 5 }}>
          ₹{price}&nbsp;&nbsp;&nbsp;
          <del>₹{discountPrice}</del>
        </Typography>
        <Typography color={"green"}>{discountPercent}</Typography>
      </CardContent>
   
    </Card>
  );
}
