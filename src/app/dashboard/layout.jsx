import React from "react";
import Logo from "../Component/Logo";
import { usePathname } from "next/navigation";
import { NavObject } from "@/Utils/dummyData";
import { GrSettingsOption } from "react-icons/gr";
import Footer from "../Component/Footer";

const layout = ({ children }) => {
  return (
    <main>
      <section className="flex bg-darkBrown justify-between w-full pb-10 h-screen">
        {/* FOR THE SIDE PANE */}
        <nav className="bg-brown rounded grid justify-between text-white pl-10 py-[60px] w-[260px]">
          {/* FOR THE NAV LINKS */}
          <div className="grid justify-between place-content-between">
            <div className="grid gap-5">
              <Logo />
              {/* FOR THE ACTUAL NAV LINKS */}
              <ul className="grid gap-4">
                {NavObject.map((data) => (
                  <li className="flex items-center gap-4 text-[16px]" key={data.id}>
                    {data.icon} {data.name}
                  </li>
                ))}
              </ul>
              <div className="grid gap-4">
                <p className="font-bold text-lg">SETTINGS</p>
                <p className="flex items-center gap-4 text-[16px]">
                  <GrSettingsOption /> Edit Profile
                </p>
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
