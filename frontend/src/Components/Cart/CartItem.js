import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <>
      <div className="p-5 shadow-lg border rounded-md">
        <div className="flex item-center">
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img
              src=""
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="ml-5 space-y-1">                                                                                
            <p>Dress</p>
            <p>Size</p>
            <div className="flex space-x-5 item-center text-lg lg:text-xl mt-6">
              <p font-semibold>2012</p>
              <p>
                <del>2220</del>
              </p>{" "}
              <p style={{ color: "green" }}>5% off</p>{" "}
            </div>

            <div className="lg:flex items-center lg:space-x-10 pt-4">
              <div className="lg:flex items-center space-x-2">
                <IconButton sx={{ color: "purple" }}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <span className="py-1 px-7 ">2</span>
                <IconButton sx={{ color: "purple" }}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
              <div>
                {" "}
                <Button color="error">Remove</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
