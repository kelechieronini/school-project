import React, { useState } from "react";
import { NavData } from "../data/NavData";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // active navLinks
  const activeLink = " text-red-500 duration-300";
  const normalLink = " ";
  return (
    <React.Fragment>
      <section>
        <div className=" w-full h-20 flex justify-between align-center text-white text-xl px-10 md:px-0">
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
              {NavData.map((item, index) => {
                return (
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
                );
              })}
            </div>
          </div>

          {/* mobile screen */}
          <section className="md:hidden">
            <div className="centered h-20">
              <div className="">
                {toggle === false ? (
                  <FaBars onClick={handleToggle} />
                ) : (
                  <React.Fragment>
                    <FaTimes onClick={handleToggle} />
                    {/* Mobile NavLinks */}
                    <div className="flex flex-col space-y-4 mobile-navbar">
                      {NavData.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path}
                          className="font-bold"
                          onClick={() => setToggle(false)} // Close the navigation menu on link click
                        >
                          {item.title}
                        </NavLink>
                      ))}
                    </div>
                  </React.Fragment>
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
