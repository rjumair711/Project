import React, { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { CiBaseball } from "react-icons/ci";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 z-50 flex justify-between h-[82px] items-center p-4 bg-white/70 backdrop-blur-[15px]">
        <div className="max-w-[1280px] mx-auto w-full z-50 flex justify-between h-[82px] items-center p-4">

          {/* Left Logo and Title */}
          <div className="flex items-center space-x-2">
            <CiBaseball
              size={34}
              style={{ color: "white", backgroundColor: "blue", borderRadius: "50%" }}
            />
            <p className="text-gradient">
              <span className="font-normal">Wie</span>Führerschein
            </p>
          </div>

          {/* Space Header */}
          <div className="w-[34vw] h-[7vh] bg-transparent rounded-md"></div>

          {/* Desktop Menu */}
          <div className="hidden 1200:flex items-center space-x-4 relative right-5">
            {/* Menu 1 */}
            <div className="relative group">
              <button className="text-black hover:bg-gray-100 mt-0 text-[17px] p-2 rounded-md flex items-center">
                Menu
              </button>
            </div>

            {/* Menu 2 */}
            <div className="dropdown-group group">
              <button className="dropdown-button text-black whitespace-nowrap hover:bg-gray-100 flex group-hover:bg-gray-100 group-hover:rounded-md -mr-1 p-2 rounded-md items-center">
                Menu 2
                <span className="flex items-center justify-center w-6 h-6">
                  <img
                    className="transform transition-transform duration-300 ease-in-out group-hover:rotate-180 brightness-0 filter invert-0"
                    src="/assets/keyboardArrowDown.svg"
                    alt="Dropdown arrow"
                  />
                </span>
              </button>
              <div className="dropdown-hover-bridge"></div>
              <div className="dropdown-menu-1 absolute top-full left-0 opacity-0 transform -translate-y-2 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <p className="dropdown-item">Example 1</p>
                <p className="dropdown-item">Example Item 2</p>
              </div>
            </div>

            {/* Menu 3 */}
            <div className="dropdown-group group">
              <button className="dropdown-button whitespace-nowrap text-black hover:bg-gray-100 flex items-center p-2  rounded-md group">
                Menu 3
                <span className="flex items-center justify-center w-6 h-6">
                  <img
                    className="transform transition-transform duration-300 ease-in-out group-hover:rotate-180 brightness-0 filter invert-0"
                    src="/assets/keyboardArrowDown.svg"
                    alt="Dropdown arrow"
                  />
                </span>
              </button>

              <div className="dropdown-hover-bridge"></div>
              <div className="dropdown-menu-2 absolute top-full left-0 opacity-0 transform -translate-y-2 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <p className="dropdown-item">Example 1</p>
                <p className="dropdown-item">Example Item 1</p>
                <p className="dropdown-item">Example Item 2</p>
              </div>
            </div>
          </div>
          {/* Third Part */}
          <div className="hidden 1200:flex items-center space-x-6">
            {/* Icons */}
            <img
              src="/assets/FlagGermany.svg"
              alt="German Flag"
              className="h-[25px] w-[25px] cursor-pointer rounded-full object-cover"
            />
            <svg
              className="h-[35px] w-[35px] flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="#4611F5"
              stroke="#4611F5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <button className="active:bg-[#2B0F87] active:text-white font-satoshi w-[110px] h-[44px] border border-blue-600 text-black px-4 py-1 rounded-[8px] hover:bg-[#4611F5] hover:text-white transition-colors duration-200">
              Anmelden
            </button>
          </div>

          {/* Mobile Menu Icon */}
          {!isOpen && (
            <button onClick={() => setIsOpen(true)} className="1200:hidden">
              <MdMenu className="text-gray-700 text-4xl" />
            </button>
          )}
        </div>
      </header>

      {/* --- Mobile Sidebar + Overlay, rendered OUTSIDE header --- */}
      <div
        className={`fixed inset-0 z-[60] 1200:hidden transition-opacity duration-300 ${isOpen ? "opacity-95 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        {/* Dim backdrop */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Sidebar panel */}
        <div
          className={`absolute right-0 top-0 h-screen w-[50%]
    bg-white/85 backdrop-blur-[15px] shadow-lg z-[1]
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    flex flex-col`}   // 👈 make it flex column
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto scroll-smooth">
            <div className="px-1 py-5 border-b border-gray-300 w-[90%] mx-auto">
              <h2 className="text-black text-[20px] font-satoshi">Mobile Menu</h2>
            </div>

            {/* Menu 1 */}
            <div className="w-[90%] mx-auto border-b border-gray-300">
              <div
                className="flex items-center justify-between px-1 py-3 cursor-pointer"
                onClick={() => setMenu1Open(!menu1Open)}
              >
                <span className="text-black text-[20px] font-satoshi">
                  Mobile Menu 1
                </span>
                <img
                  className={`h-[25px] w-[25px] brightness-0 transition-transform ${menu1Open ? "rotate-180" : ""
                    }`}
                  src="/assets/keyboardArrowDown.svg"
                  alt="Arrow"
                />
              </div>
              {menu1Open && (
                <motion.div
                  initial={{ opacity: 0, y: 1 }}
                  animate={{ opacity: 1, y: 5 }}
                  transition={{
                    type: "spring",
                    duration: 0.4,
                    bounce: 0.2,
                  }}
                  className="px-1 pb-4 mb-4 space-y-2 max-h-40 overflow-y-auto scroll-smooth"
                >
                  <p className="dropdown-menu-item">Example</p>
                  <p className="dropdown-menu-item">Example 2</p>
                  <p className="dropdown-menu-item">Example Item 3</p>
                </motion.div>
              )}
            </div>

            {/* Menu 2 */}
            <div className="w-[90%] mx-auto border-b border-gray-300">
              <div
                className="flex items-center justify-between px-1 py-3 cursor-pointer"
                onClick={() => setMenu2Open(!menu2Open)}
              >
                <span className="text-black text-[20px] font-satoshi overflow-y-auto scroll-smooth">
                  Mobile Menu 2
                </span>
                <img
                  className={`h-[25px] w-[25px] brightness-0 transition-transform ${menu2Open ? "rotate-180" : ""
                    }`}
                  src="/assets/keyboardArrowDown.svg"
                  alt="Arrow"
                />
              </div>
              {menu2Open && (
                <motion.div
                  initial={{ opacity: 0, y: 1 }}
                  animate={{ opacity: 1, y: 5 }}
                  transition={{
                    type: "spring",
                    duration: 0.4,
                    bounce: 0.2,
                  }}
                  className="px-1 pb-4 mb-4 space-y-2 max-h-40 overflow-y-auto scroll-smooth"
                >
                  <p className="dropdown-menu-item">Example</p>
                  <p className="dropdown-menu-item">Example 2</p>
                  <p className="dropdown-menu-item">Example Item 3</p>
                </motion.div>
              )}
            </div>
          </div>
          {/* Fixed bottom section */}
          <div className="p-4 border-t border-gray-200 w-[90%] mx-auto flex items-center gap-4">
            {/* Flag */}
            <img
              src="/assets/FlagGermany.svg"
              alt="German Flag"
              className="h-[25px] w-[25px] cursor-pointer rounded-full object-cover"
            />

            {/* Button grows/shrinks with available space */}
            <button className="flex-1 font-satoshi active:bg-[#1A065C] active:text-white h-[44px] text-[20px] text-white cursor-pointer rounded-[10px] bg-[#4611F5] hover:bg-[#300CA8] hover:text-white">
              Anmelden
            </button>

            {/* User Icon */}
            <svg
              className="h-[35px] w-[35px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="#4611F5"
              stroke="#4611F5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
