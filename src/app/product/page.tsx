"use client";

import { useState } from "react";
import Image from 'next/image';
import AllProducts from "@/components/product-list-page/AllProducts";
import Pagination from "@/components/product-list-page/Pagination";
import Payment from "@/components/product-list-page/Payment";
import { Button } from "@/components/ui/button";

const Product = () => {
  return (
    <div className="container mt-28 mx-auto px-4 py-8">
      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="relative h-96">
            <Image
              src="/main.png" // Update with the actual image path
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Thumbnail */}
          <div className="mt-4 flex justify-center">
            <Image
              src="/main-mini-1.png" // Thumbnail image
              alt="Thumbnail"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-4">
  <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Floating Phone</h1>
  
  <div className="flex items-center mb-4">
    <span className="text-yellow-400 text-lg mr-2">★★★★★</span>
    <span className="text-gray-500 text-sm sm:text-base">(10 Reviews)</span>
  </div>

  <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">$1,139.33</p>
  
  <p className="text-sm sm:text-base text-green-600 mb-4">
    Availability: <span className="font-medium">In Stock</span>
  </p>

  <p className="text-sm sm:text-base text-gray-700 mb-4">
    Met minim Mollie not desert Alamo est sit cliquey pain do met sent.
    RELIT official consequence door SO RELIT Mollie.
    Excitation venial consequent sent nostrum met.
  </p>

          {/* Color Options */}
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Colors:</span>
            <div className="flex space-x-2">
              <span className="block w-6 h-6 rounded-full bg-green-500"></span>
              <span className="block w-6 h-6 rounded-full bg-orange-500"></span>
              <span className="block w-6 h-6 rounded-full bg-blue-500"></span>
              <span className="block w-6 h-6 rounded-full bg-gray-900"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Select Options</Button>
            <Button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </Button>
            <Button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <Tabs />
      <AllProducts />
      <Pagination />
      <Payment />
    </div>
  );
};

export default Product;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'reviews'>('description');

  const tabContent: Record<'description' | 'additional' | 'reviews', JSX.Element> = {
    description: (
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <img 
            src="/card.png" 
            alt="Art on Wall" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">The quick fox jumps over</h2>
          <p className="text-gray-600 mb-4">
            Met minim Mollie not desert Alamo est sit cliquey pain do met sent.
            RELIT official consequence door SO RELIT Mollie.
            Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-gray-600 mb-4">
            Met minim Mollie not desert Alamo est sit cliquey pain do met sent.
            RELIT official consequence door SO RELIT Mollie.
            Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-gray-600">
            Met minim Mollie not desert Alamo est sit cliquey pain do met sent.
            RELIT official consequence door SO RELIT Mollie.
            Excitation venial consequent sent nostrum met.
          </p>
        </div>
      </div>
    ),
    additional: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">The quick fox jumps over</h2>
          <p className="text-gray-600 mb-4">
            Met minim Mollie not desert Alamo est sit cliquey pain do met sent.
            RELIT official consequence door SO RELIT Mollie.
            Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-gray-600 mb-4">
            Met minim Mollie not desert Alamo est sit cliquey pain do met sent.
            RELIT official consequence door SO RELIT Mollie.
            Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-gray-600">
            Met minim Mollie not desert Alamo est sit cliquey pain do met sent.
            RELIT official consequence door SO RELIT Mollie.
            Excitation venial consequent sent nostrum met.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">The quick fox jumps over</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li className="text-gray-600">The quick fox jumps over the lazy dog</li>
            <li className="text-gray-600">The quick fox jumps over the lazy dog</li>
            <li className="text-gray-600">The quick fox jumps over the lazy dog</li>
            <li className="text-gray-600">The quick fox jumps over the lazy dog</li>
            <li className="text-gray-600">The quick fox jumps over the lazy dog</li>
          </ul>
        </div>
      </div>
    ),
    reviews: <p>No reviews yet.</p>,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex justify-center border-b mb-8">
        <Button
           className={`px-4 py-2 font-medium ${activeTab === 'additional' ? 'text-black border-b-2 border-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('additional')}
        >
          Description
        </Button>
        <Button
          className={`px-4 py-2 font-medium ${activeTab === 'additional' ? 'text-black border-b-2 border-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('additional')}
        >
          Additional Information
        </Button>
        <Button
          className={`px-4 py-2 font-medium ${activeTab === 'reviews' ? 'text-black border-b-2 border-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (0)
        </Button>
      </div>

      {/* Content */}
      <div>{tabContent[activeTab]}</div>
    </div>
  );
};
