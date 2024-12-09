import { Heart, Search, ShoppingCart,} from "lucide-react";
import { ChevronDown, User } from "lucide-react";
 import React from "react";
 import { Button } from "@/components/ui/button";
 import{Sheet,
     SheetContent,
     SheetTrigger,
     SheetHeader,
     SheetTitle

  } from "@/components/ui/sheet"
  import { Menu } from "lucide-react";

 export const Navbar = () => {
   return (
     <nav className="w-full  p-4 z-10 bg-white ">
       <div className="max-w-7xl mx-auto w-full  flex justify-between">
         <h1 className="text-2xl font-bold text-gray-700">Bandage</h1>
         <div className="gap-4  hidden md:flex items-center justify-center mx-auto ">
           <a href={"/#"} className="text-md font-normal">
             Home
           </a>
           <a href={"/shop"} className="text-md font-normal flex items-center">
             Shop
 <ChevronDown/> 
           </a>
           <a href={"/pricing"} className="text-md font-normal">
             Pricing
           </a>
           
           <a href={"/contact"} className="text-md font-normal">
             Contact
           </a>
           <a href={"/product"} className="text-md font-normal">
             Product
           </a>
           <a href={"#"} className="text-md font-normal">
             Blog
           </a>
         </div>
         <div className=" gap-4 hidden md:flex">
          <div className="p-2 gap-2 flex text-blue-600 ">
        <span ><User/></span>
         <p >LogIn/Register</p></div>
            <Button variant={"outline"} size={"icon"} className="rounded-full">
             <Heart  className="text-blue-600"/>
             </Button>
             <Button variant={"outline"} size={"icon"} className="rounded-full">
             <ShoppingCart className="text-blue-600" />
             </Button>
             <Button variant={"outline"} size={"icon"} className="rounded-full">
             <Search className="text-blue-600" />
             </Button>
         </div>
         <Sheet>
         <SheetTrigger className="flex md:hidden">
             <Button variant={"outline"} size={"icon"}>
                 <Menu className="size-4 text-gray-400"  />
             </Button>
         </SheetTrigger>
         <SheetContent side={"right"}>
             <SheetHeader className="flex items-center">
                 <SheetTitle>
                     Bandage
                 </SheetTitle>
             </SheetHeader>
             <div className=" flex flex-col gap-4 mt-6">
             <a href={"/"} className="text-md font-normal">
              Home
           </a>
           <a href={"/shop"} className="text-md font-normal">
             Shop
                    <ChevronDown/>
           </a>
           <a href={"/pricing"} className="text-md font-normal">
             Pricing
           </a>
           
           <a href={"/contact"} className="text-md font-normal">
             Contact
          </a>
          <a href={"/product"} className="text-md font-normal">
            Product
          </a>
          <a href={"#"} className="text-md font-normal">
             Blog
           </a>
            <div className="mt-4">
            <div className="p-2 gap-2 flex  text-blue-600">
                <span  > <User/></span>
                <p>LogIn/Register</p>
            </div>
            <div className="flex mt-6 gap-4">
             <Button variant={"outline"} size={"icon"} className="rounded-full">
             <Heart className=" text-blue-600"/>
             </Button>
           <Button variant={"outline"} size={"icon"} className="rounded-full">
             <ShoppingCart className=" text-blue-600" />
             </Button> 
             <Button variant={"outline"} size={"icon"} className="rounded-full">
             <Search  className=" text-blue-600"/>
              </Button> 
             </div>

             </div>
             </div>

         </SheetContent>
      </Sheet>
       </div>
   
     </nav>
   )
 }
 export default Navbar;
