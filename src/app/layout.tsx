import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/Header";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="w-full fixed top-0 left-0 z-10 ">
          <div className="w-full px-8 py-6 hidden md:flex justify-between items-center bg-[#252B42] text-white ">
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-1">
                <Image
                  src={"/icons/call-icon.png"}
                  alt="call"
                  width={16}
                  height={12}
                />
                <span>(225) 0555 4342</span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <Image
                  src={"/icons/mail.png"}
                  alt={"mail"}
                  width={16}
                  height={12}
                />
                abc@gmail.com
              </div>
            </div>
            <p className="font-semibold">
              Follow us and get a chance to win 80% Off
            </p>
            <div className="flex items-center justify-center gap-3">
              <span>Follow us :</span>
              <Image
                src={"/icons/insta.png"}
                alt={"social"}
                width={16}
                height={16}
              />
              <Image
                src={"/icons/yt.png"}
                alt={"social"}
                width={16}
                height={16}
              />
              <Image
                src={"/icons/fb-icon.png"}
                alt={"social"}
                width={16}
                height={16}
              />
              <Image
                src={"/icons/twitter.png"}
                alt={"social"}
                width={16}
                height={16}
              />
            </div>
          </div>
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
