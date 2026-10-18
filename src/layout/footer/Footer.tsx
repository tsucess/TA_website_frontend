import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { navLinks, footerLinks } from "../../lib/navLinks";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-footer-dark text-white">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-6 xl:gap-18 pb-10 md:p-4 md:pb-10 lg:p-10">
        <div className="basis-2/5 flex flex-col gap-4 p-6 md:p-2">
          <a className="btn btn-ghost text-xl">
            <img src="./images/logo.png" alt="Tunde Logo" />
          </a>
          <p className="text-[3.5vw] md:text-[1.5vw] lg:text-[1.2vw] font-Instrument mb-3 md:mb-6">
            Pastor Tunde Adisa is a pastor, business coach and mentor passionate
            about leadership, personal growth, purpose and helping people live
            with greater intention and impact
          </p>
        </div>
        <div className="basis-1/5">
          <ul tabIndex={-1} className="text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem]">
            {navLinks.map((link, i) => (
              <li className="border-b p-2 px-6 md:px-2" key={i}>
                <a href={link.href} key={link.key}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/5 mb-4">
          <ul tabIndex={-1} className="text-[0.9rem] md:text-[0.75rem] lg:text-[1.1rem]">
            {footerLinks.map((link, i) => (
              <li className="border-b p-2 px-6 md:px-2" key={i}>
                <a href={link.href} key={link.key}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/5 flex gap-6 md:gap-4 lg:gap-8 text-[7vw] md:text-[2vw] lg:text-[1.5vw] justify-center p-4">
          <a href="http:#">
            <FaXTwitter />
          </a>
          <a href="http:#">
            <FaFacebook />
          </a>
          <a href="http:#">
            <FaLinkedin />
          </a>
          <a href="http:#">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="text-center p-4 border-t border-white">
        <p className="text-[3.5vw] md:text-[1.5vw] lg:text-[1rem] font-Instrument mb-3">Copyright c 2026 Tunde Adisa | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
