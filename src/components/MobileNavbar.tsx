import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between p-3">
          <a className="btn btn-ghost text-xl">
            <img src="./images/logo.png" alt="Tunde Logo" />
          </a>
          <div tabIndex={0} role="button" className="p-2 lg:hidden">
          <GiHamburgerMenu />
        </div>
      </div>
      <ul tabIndex={-1} className=" rounded-box z-1 mt-3 w-full  shadow">
        <li className="border-b p-2">
          <a href="/">HOME</a>
        </li>
        <li className="border-b p-2">
          <a href="/about">ABOUT</a>
        </li>
        <li className="border-b p-2">
          <a href="/mold">MOLD</a>
        </li>
        <li className="border-b p-2">
          <a href="/services">SERVICES</a>
        </li>
        <li className="border-b p-2">
          <a href="/events">EVENTS</a>
        </li>
        <li className="border-b p-2">
          <a href="/resources">RESOURCES</a>
        </li>
        <li className="border-b p-2">
          <a href="/books">BOOKS</a>
        </li>
        <li className="border-b p-2">
          <a href="/speaking">SPEAKING</a>
        </li>
        <li className="border-b p-2">
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
