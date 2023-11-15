import { useState } from "react";

// import { NavLink } from "react-router-dom";

import ClickAwayListener from "react-click-away-listener";
import NavbarLink from "./NavbarLink";
import folderImage from "../../src/assets/images/folderImage.png";
import homePageLogo from "../../src/assets/images/homePageLogo.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prevValue) => !prevValue);
  }

  const links = [
    { name: "Home", image: folderImage },
    { name: "Films", image: folderImage },
    { name: "People", image: folderImage },
    { name: "Planets", image: folderImage },
    { name: "Starships", image: folderImage },
    { name: "Species", image: folderImage },
    { name: "Vehicles", image: folderImage },
  ];

  return (
    <div className="relative">
      <nav className="flex flex-row flex-start bg-[#03123D] w-screen shadow-lg p-4">
        <div className="self-center ml-3">
          <button
            className="menu outline-sm flex flex-start mx-2"
            onClick={toggleNav}
          >
            <svg viewBox="0 0 100 80" width="40" height="25">
              <rect width="100" height="15" fill="#ffffff"></rect>
              <rect y="30" width="100" height="15" fill="#ffffff"></rect>
              <rect y="60" width="100" height="15" fill="#ffffff"></rect>
            </svg>
          </button>
        </div>

        <div
          className="w-[72px] h-[36px] flex-shrink-0"
          style={{
            background: `url(${homePageLogo})`,
          }}
        ></div>

        <div className="flex items-center justify-center mr-7 mt-[1.3rem]"></div>
      </nav>

      {navOpen && (
        <ClickAwayListener onClickAway={toggleNav}>
          <div className="flex flex-col w-223 h-576 p-2 md:p-3 flex-shrink-0 gap-2 bg-[#03123D]">
            {links.map(({ name, image }) => (
              <div
                className="flex p-2 md:p-3 justify-center items-center gap-1"
                key={name}
                style={{ borderRadius: "6px" }}
              >
                <NavbarLink
                  name={name}
                  key={name}
                  toggleNav={toggleNav}
                  image={image}
                ></NavbarLink>
              </div>
            ))}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Navbar;
