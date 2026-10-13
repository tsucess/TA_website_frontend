import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="flex flex-col bg-primary-dark shadow-sm lg:p-2  text-white">
      <div className="">
        <MobileNavbar />
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <a className="btn btn-ghost text-xl">
          <img src="./images/logo.png" alt="Tunde Logo" />
        </a>
        <ul className="menu menu-horizontal px-1">
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
      </div> */}
      <div className="">
        <a className="bg-white text-black p-2 rounded">Invite Tunde Adisa</a>
      </div>
    </div>
  );
};

export default Navbar;
