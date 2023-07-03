import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <>
      <Link
        href="/product/1"
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img src="/product-1.webp" className="w-full" alt="Product Image" />
        <div>
          <h2 className="text-lg font-medium">Product Name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">&#8377;200</p>
            <p className="text-base  font-medium line-through">&#8377;300</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
