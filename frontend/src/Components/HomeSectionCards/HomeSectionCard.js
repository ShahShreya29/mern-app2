import React from "react";

const HomeSectionCard = ({product}) => {
  return (
    <>
      <div className="cursor-pointer  flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem] ">
          <img
            className="object-cover object-top w-full h-full"
            src="data:image/jpeg;base64,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"
          // src={product.image}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            {/* {product.title} */}
            </h3>
          <p className="mt-3 text-sm text-gray-500">
            dv,mlfv,mlfd,v,kvmlds,frm,lfcv
            {/* {product.details} */}
          </p>
        </div>
      </div>        
    </>
  );
};

export default HomeSectionCard;
