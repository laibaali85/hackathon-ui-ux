import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-cover mt-20 bg-center h-screen text-white body-font sm:pt-20  bg-no-repeat"
      style={{ backgroundImage: "url('/banners/hero.jpg')", backgroundPosition: "top",   }}
    >
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2  md:pl-16 flex flex-col md:items-start md:text-left mb-16 sm:mb-0 items-center text-center gap-6">
          <h3 className="font-semibold">SUMMER 2020</h3>
          <h1 className="title-font text-4xl sm:text-5xl font-bold mt-2 ">
            NEW COLLECTION
          </h1>
          <p className="  font-medium leading-relaxed">
            We know how large objects will act, <br /> but things on a small
            scale.
          </p>
          <button
            type="button"
            className="bg-[#2DC071] px-6 py-3 rounded-md hover:scale-105 duration-200"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
