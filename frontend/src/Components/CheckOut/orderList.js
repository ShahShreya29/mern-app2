import React from "react";
import Address from "../Delivery/Address";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";


const orderList = () => {
  return (
    <>
      <div className="p-5">
        <Address />
      </div>
      
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
         {[1,2,3].map((item)=><CartItem />)} 
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border">
          <p className="pb-4">Price Details</p>
          <Divider />
          <div className="space-y-3 ">
            <div className="flex justify-between pt-3 ">
              <span>Price</span>
              <span>2222</span>
            </div>
            <div className="flex justify-between pt-3 ">
              <span>discount</span>
              <span>2302</span>
            </div>
          </div>
          <div className="flex justify-between pt-3 ">
              <span>total price</span>
              <span>2302</span>
            </div>
        </div>
        <Button variant="contained">Total</Button>
      </div>
    
    </>
  );
};

export default orderList;
