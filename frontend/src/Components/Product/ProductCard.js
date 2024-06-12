import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../Redux/Store/store";


export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const {products} = useSelector((store)=>store.products)

  return (
    <>
      <Card
        onClick={() => navigate(`http://localhost:8080/api/products/${product._id}`)}
        sx={{ maxWidth: 245, margin: 5, cursor: "pointer" }}
        className="Card"
      >
        <CardMedia
          sx={{ height: 340 }}
          style={{ objectFit: "cover" }}
          image={products.product.image}
          title="green iguana"
        />
        <CardContent className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
           {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ margin: 5 }}
          >
        {products.product.details}
          </Typography>
          <Typography style={{ margin: 5 }}>
            ₹{products.product.price}&nbsp;&nbsp;&nbsp;<del>₹{products.product.discountPrice}</del>
          </Typography>

          <Typography color={"green"}>{products.product.discountPercent}</Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </>
  );
}
