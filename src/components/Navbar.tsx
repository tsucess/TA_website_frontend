import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-primary-dark  lg:p-2 gap-2  text-white">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <a className="hidden lg:flex text-xl">
        <img src="./images/logo.png" alt="Tunde Logo" />
      </a>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1 text-[1.2vw]">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/mold">MOLD</a>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <a href="/events">EVENTS</a>
          </li>
          <li>
            <a href="/resources">RESOURCES</a>
          </li>
          <li>
            <a href="/books">BOOKS</a>
          </li>
          <li>
            <a href="/speaking">SPEAKING</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="p-2 px-3 mb-2 lg:mb-0">
        <a className="bg-white text-black p-2 rounded">
          Invite Tunde Adisa
        </a>
      </div>
    </div>
  );
};

export default Navbar;
