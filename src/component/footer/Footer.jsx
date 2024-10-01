import React from "react";
import CuteBot from "../model/CuteBot";

const Footer = () => {
  return (
    <footer className="bg-[#E1E1E1] mt-12 ">
      -<span className="absolute mt-[-10rem]">
          <CuteBot/>
        </span>
      <div className="w-full mx-auto max-w-screen-xl mt-[-1.5rem] p-6 md:flex md:items-center md:justify-between">       
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Faiz Mohamad™
          </a>
          . Portfolio
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
