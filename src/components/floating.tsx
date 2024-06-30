"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa";

const Floating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden fixed bottom-4 right-4">
      <div className="relative inline-block">
        <button
          type="button"
          className="rounded-full border px-4 py-2 text-white bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium text-sm inline-flex items-center w-full h-full"
          onClick={toggleDropdown}
        >
          <FaPhone className={`${isOpen === true ? "hidden" : ""} w-7 h-11`} />
          <ImCross className={`${isOpen === true ? "" : "hidden"} w-7 h-11`} />
        </button>

        {isOpen && (
          <div className="origin-bottom-left absolute bottom-16 right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  href="tel:+84902327775"
                  className="flex items-center gap-2 px-2 pt-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <FaPhone
                    className={`rounded-full p-2 w-10 h-10 text-white bg-orange-400 `}
                  />
                  0902 327 775
                </a>
              </li>
              <li>
                <a
                  href="fb-messenger://user-thread/114214031746625
                  "
                  className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <FaFacebookMessenger
                    className={`rounded-full p-2 w-10 h-10 text-white bg-blue-400 `}
                  />
                  Messenger
                </a>
              </li>
              <li>
                <a
                  href="https://zalo.me/0902327775
                  "
                  className="flex items-center gap-2 px-2 pb-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <img
                    src="./image/icon-zalo.png"
                    alt="zalo-icon"
                    className={`rounded-full p-2 w-10 h-10 text-white bg-blue-400 `}
                  />
                  Zalo
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Floating;
