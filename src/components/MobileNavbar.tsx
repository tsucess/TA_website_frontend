import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../lib/navLinks";
import { IoCloseSharp } from "react-icons/io5";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between p-3">
        <a className="btn btn-ghost text-xl">
          <img src="./images/logo.png" alt="Tunde Logo" />
        </a>
        <div tabIndex={0} role="button" className="p-2 ">
          <button
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {" "}
            {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      <ul tabIndex={-1} className={`${isOpen ? "block" : "hidden"} absolute bg-primary-dark z-1 mt-3 w-full  shadow uppercase`}>
        {navLinks.map((link, i) => (
          <li className="border-b p-2 px-4" key={i}>
            <a href={link.href} key={link.key}>
              {link.label}
            </a>
          </li>
        ))}
        <li className="p-3">
             <a className="bg-white text-black p-2 rounded">Invite Tunde Adisa</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
