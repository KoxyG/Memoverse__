import Link from "next/link";
import { gradientStyle } from "../Elements/GradientStyle";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky bg-dark top-0 z-100">
      <nav className="sm:grid sm:grid-cols-2">
        <div style={gradientStyle}>
          <div
            className="sm:container
        sm:mx-auto  pt-[60px] pb-[20px] sm:pb-[0] sm:pt-[60px]"
          >
            <div className=" sm:pl-[80px] flex justify-between container mx-auto px-8">
              <Image
              
                alt="logo"
                src="/MEMOVERSE (2).png"
                width={126}
                height={26}
              />

              <div className="hidden sm:flex  text-stone-950 text-semibold font-medium  space-x-4">
                <Link href="/">
                  <button className="">Home</button>
                </Link>

                <Link href="/explore">
                  <button>Explore</button>
                </Link>

                <Link href="/about-us">
                  <button>About us</button>
                </Link>

                <Link href="/dashboard">
                  <button>Dashboard</button>
                </Link>

                
              </div>

              <div className="md:hidden mb-4 ">
                <button className="text-dark" onClick={toggleMenu}>
                  {isOpen ? (
                    <FaTimes className="text-2xl" />
                  ) : (
                    <FaBars className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid bg-stone-950 ">
          <div
            className=" sm:container
        mx-auto p-[60px]"
          >
            <div className="hidden sm:grid justify-items-end">
              <Link href="/SignIn">
                <button
                  className="bg-gradient-to-r from-orange-400 px-5 py-2.5 
                  to-orange-400 text-white rounded-sm text-center"
                >
                  Connect Wallet
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed z-20 top-0 bg-stone-950
         right-0 bottom-0 left-0 flex flex-col 
         items-center gap-6 justify-center"
        >
          <button
            className="text-white absolute top-[60px] right-[40px]"
            onClick={toggleMenu}
          >
            <FaTimes className="text-2xl" />
          </button>

          <h3 className="text-white text-sm font-normal leading-none">
            <Link href="/">Home</Link>
          </h3>
          <h3 className="text-white text-sm font-normal leading-none">
            <Link href="/dashboard">Dashboard</Link>
          </h3>

          <Link href="/SignIn">
            <div className="flex">
              <button className=" bg-gradient-to-r from-orange-400 px-5 py-2.5  to-orange-400 text-white rounded-sm text-center ">
                SignIn
              </button>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}