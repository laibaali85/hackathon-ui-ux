import React from "react";
import ProductCard from "../ProductCard";

const AllProducts = () => {
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product1.png",
    },
    {
      id: 2,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product2.png",
    },
    {
      id: 3,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product3.png",
    },
    {
      id: 4,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product4.png",
    },
    {
      id: 5,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product5.png",
    },
    {
      id: 6,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product6.png",
    },
    {
      id: 7,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product7.png",
    },
    {
      id: 8,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product8.png",
    },
    {
      id: 9,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product9.png",
    },
    {
      id: 10,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product10.png",
    },
    {
      id: 11,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product11.png",
    },
    {
      id: 12,
      name: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
      colors: ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600"],
      imgUrl: "/products/product12.png",
    },
  ];
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap mt-12 ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          category={product.category}
          imgUrl={product.imgUrl}
          price={product.price}
          salePrice={product.salePrice}
          colors={product.colors}
        />
      ))}
    </div>
  );
};

export default AllProducts;
