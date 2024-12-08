import React from "react";
import Image from "next/image";

const EditorsPick = () => {
  return (
    <div className="  mt-20  ">
      <div className="container px-5 py-20 mx-auto">
        <div className=" flex justify-center items-center flex-col text-center text-myHeading mb-4">
          <h1 className="text-3xl font-bold">EDITOR'S PICK</h1>
          <h6 className="text-myGry">
            Problems trying to resolve the conflict between
          </h6>
        </div>
        <div className="grid lg:grid-cols-4 lg:grid-rows-2 w-full py-10 text-[#FAFAFA]">
          <div className="col-span-2 row-span-2 relative md:w-full md:h-full w-full h-80">
            <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3 ">
              <h1 className="text-2xl bg-white w-[180px] font-semibold text-black text-center py-3">
                MEN
              </h1>
            </div>
            <Image
              src={"/editors-pick/men.png"}
              alt=""
              width={500}
              height={500}
              className="w-full h-full lg:object-cover object-contain"
            />
          </div>
          <div className="col-span-1 row-span-2 flex justify-between relative p-6 overflow-hidden md:w-full md:h-full w-full h-96">
            <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3">
              <h1 className="text-2xl bg-white w-[180px] font-semibold text-black text-center py-3">
                WOMEN
              </h1>
            </div>
            <Image
              src={"/editors-pick/women.png"}
              alt=""
              width={600}
              height={600}
              className="w-full h-full object-cover absolute top-0 -right-20 z-0 "
            />
          </div>
          <div className="col-span-1 row-span-1 p-4 relative md:w-full md:h-full w-full h-96">
            <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute md:bottom-5 md:left-5 bottom-10 left-10">
              <h1 className="text-2xl bg-white w-[180px] font-semibold text-black text-center py-3">
                ACCESSORIES
              </h1>
            </div>
            <Image
              src={"/editors-pick/accessories.png"}
              alt=""
              width={600}
              height={600}
              className="w-full h-full lg:object-cover object-contain"
            />
          </div>
          <div className="col-span-1 row-span-1 p-4 relative md:w-full md:h-full w-full h-96">
            <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute md:bottom-5 md:left-5 bottom-10 left-10">
              <h1 className="text-2xl bg-white w-[180px] font-semibold text-black text-center py-3">
                KIDS
              </h1>
            </div>
            <Image
              src={"/editors-pick/kids.png"}
              alt=""
              width={600}
              height={600}
              className="w-full h-full lg:object-cover object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
