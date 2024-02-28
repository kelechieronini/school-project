import React, { useState } from "react";
import { NavData } from "../data/NavData";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleToggle = () => {
    setShowMobileNav(!showMobileNav);
  };

  // active navLinks
  const activeLink = " text-red-500 duration-300";
  const normalLink = " ";

  return (
    <React.Fragment>
      <section>
        <div className="w-full h-20 flex justify-between align-center text-white text-xl px-10 md:px-0">
          {/* logo section */}
          <div className="centered">
            <p className="font-bold">
              ECE
              <span className="text-red-500 font-bold"> GROUP 3</span>
            </p>
          </div>

          {/* large screen */}
          <div className="hidden md:flex">
            <div className="flex space-x-10 centered">
              {NavData.map((item, index) => (
                <div key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className="font-bold">{item.title}</span>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>

          {/* mobile screen */}
          <section className="md:hidden">
            <div className="centered h-20">
              <div className="">
                <FaBars onClick={handleToggle} />
                {/* Mobile NavLinks */}
                {showMobileNav && (
                  <div className="flex flex-col space-y-4 mobile-navbar absolute right-5 mt-4">
                    {NavData.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        className="font-bold"
                        onClick={() => setShowMobileNav(false)} // Close the navigation menu on link click
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
