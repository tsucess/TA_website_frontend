// import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import {navLinks} from "../lib/navLinks";


const Navbar = () => {
 

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between   lg:p-4 lg:px-10 gap-2  text-white">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <a className="hidden lg:flex">
        <img src="./images/logo.png" alt="Tunde Logo" />
      </a>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-2.5 px-1 text-[1.2vw] font-Oswald">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                key={link.key}
                className="text-gray-300 hover:text-white hover:bg-slate-850  font-medium transition-colors uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2 px-3 mb-2 lg:mb-0 hidden lg:block">
        <a className="bg-white text-black p-2 rounded font-Instrument">Invite Tunde Adisa</a>
      </div>
    </div>
  );
};

export default Navbar;
