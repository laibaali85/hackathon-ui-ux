import React from "react";
import Image from "next/image";

const EditorsPick = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">EDITOR&apos;S PICK</h2>
          <p className="text-gray-600">Curated selection of our finest products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 lg:row-span-2">
            <CategoryCard
              src="/editors-pick/men.png"
              alt="Men's Fashion"
              title="MEN"
              className="h-[500px] lg:h-full"
            />
          </div>
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <CategoryCard
              src="/editors-pick/women.png"
              alt="Women's Fashion"
              title="WOMEN"
              className="h-[400px] lg:h-full"
            />
          </div>
          <div>
            <CategoryCard
              src="/editors-pick/accessories.png"
              alt="Accessories"
              title="ACCESSORIES"
              className="h-[300px]"
            />
          </div>
          <div>
            <CategoryCard
              src="/editors-pick/kids.png"
              alt="Kids' Fashion"
              title="KIDS"
              className="h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ src, alt, title, className }) => (
  <div className={`relative overflow-hidden group ${className}`}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40" />
    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="inline-block bg-white px-4 py-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>
    </div>
  </div>
);

export default EditorsPick;

