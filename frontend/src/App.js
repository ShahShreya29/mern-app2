import "./App.css";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Product/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import HomePage from "./Pages/HomePage/HomePage";
import CheckOut from "./Components/CheckOut/CheckOut";
import { Routes, Route } from "react-router-dom";
import OrderDetails from "./Components/CheckOut/OrderDetails";
import orderList from "./Components/CheckOut/orderList";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/:LevelOne/:LevelSecond/:LevelThird"
          element={<Products />}
        />
        <Route path="/product/productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<orderList />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>

      <div>
        <Footer />
      </div>

      {/* <Admin/> */}
    </>
  );
}

export default App;

