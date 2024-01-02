"use client"

import React, { useState } from "react";
import Logo from "../Component/Logo";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { NavObject } from "@/Utils/dummyData";
import { GrSettingsOption, GrMenu, GrClose } from "react-icons/gr";
import Footer from "../Component/Footer";

const layout = ({ children }) => {

  const [open, setOpen] = useState(false)

   const showNav = () => {
     setOpen((prev) => !open);
    //  console.log("clicked")
   };

   const path = usePathname()
  //  console.log(path)
  return (
    <main>
      <section className="flex bg-darkBrown justify-between w-full pb-10 h-screen">
        {/* FOR MOBILE */}
        <div className="block sm:hidden pt-6 pl-3 z-20" onClick={showNav}>
           { open ? <GrClose color="white" size={26}/> : <GrMenu size={26} color="white"/>}
        </div>

        {/* FOR THE SIDE PANE */}
        <nav className={`bg-brown rounded sm:grid ${open ? "grid" : "hidden"} justify-between text-white pl-10 py-[60px] w-[260px] absolute sm:relative `}
         >
          {/* FOR THE NAV LINKS */}


          <div className="grid justify-between place-content-between">
            <div className="grid gap-5">
              <Logo />
              {/* FOR THE ACTUAL NAV LINKS */}
              <ul className="grid gap-4">
                {NavObject.map((data) => (
                  <Link href={`${data.to}`} key={data.id} onClick={showNav}>

                  <li className={` ${path === data.to ? "text-gold" : ""}  flex items-center gap-4 text-[16px] cursor-pointer`} key={data.id}>
                    {data.icon} {data.name}
                  </li>
                  </Link>
                ))}
              </ul>
              <div className="grid gap-4">
                <p className="font-bold text-lg">SETTINGS</p>
                <Link href="/dashboard/settings" className={`flex items-center gap-4 text-[16px] cursor-pointer ${path === "/dashboard/settings" ? "text-gold" : ""}` } onClick={showNav}>
                  <GrSettingsOption size={24}/> Edit Profile
                </Link>
              </div>
            </div>

            {/* FOR THE LAST PART OF THE NAV BAR THAT CONTAINS THE PROFILE DETAILS */}
            <div className="text-[12px]">
              <div className="mb-4">
                <p className="font-bold">Wallet Address:</p>
                <p className="text-lightGold">0x f768 912a 2016 45nn q710 o0c6 81b6 ny85 1776 934j</p>
              </div>
              <div >
                <p className="font-bold">Available Balance:</p>
                <p className="text-lightGold">765.8 ETH</p>
              </div>
            </div>

          </div>
        </nav>

        {/* FOR THE EVRYTHING ELSE IN THE DASHBOARD */}
        <section className="w-full px-6 pt-14 overflow-auto hide-scrollbar">{children}</section>
      </section>
        <Footer />
    </main>
  );
};

export default layout;
