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
import Error from "./Components/Error";
import AdminAddProducts from "../src/Admin/Components/AdminAddProducts";
import AdminProducts from "../src/Admin/Components/AdminProducts";
import AdminCustomers from "../src/Admin/Components/AdminCustomers";
import AdminOrders from "../src/Admin/Components//AdminOrders";
import Admin from "./Admin/Components/Admin";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
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
        <Route path="/signUp" element={<SignUp />} /> */}
        <Route path="/" element={<Admin />}></Route>

        <Route path="/admin/addProduct" element={<AdminAddProducts />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/customer" element={<AdminCustomers />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
