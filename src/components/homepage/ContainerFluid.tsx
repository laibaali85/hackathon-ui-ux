import React from "react";
import Image from "next/image";

const ContainerFluid = () => {
  return (
    <section className="bg-white text-black body-font">
      <div className="flex justify-center items-center gap-12 flex-col-reverse px-6 mt-20 md:mt-0 md:flex-row">
        <div className=" rounded-xl">
          {/* Image */}
          <Image src="/summer.png" alt={"summer"} width={600} height={600} />
        </div>
        <div className=" flex justify-center items-center  md:items-start flex-col gap-5">
          <h3 className="font-semibold text-[#bdbdbd] text-base sm:text-lg">
            SUMMER 2020
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold title-font text-center">
            Part of the Neutral <br /> Universe
          </h1>
          <p className="text-[#737373] text-sm font-medium leading-relaxed max-w-[600px] text-center ">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col sm:flow-row justify-center gap-4 font-semibold">
            <button
              type="button"
              className="bg-[#2DC071] text-white px-8 py-3 rounded-md"
            >
              BUY NOW
            </button>
            <button
              type="button"
              className="border-2 border-[#2dc071] text-[#2dc071] px-8 py-3 rounded-md"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerFluid;
