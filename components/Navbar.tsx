import { RiMessage2Fill } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { useIsScrolled } from "./hooks/useIsScrolled";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  const isScrolled = useIsScrolled();

  return (
    <>
      <nav
        className={`${
          isScrolled ? "top-0" : "-top-[100%]"
        } fixed w-full z-40 duration-500 bg-white`}
      >
        <ul className="flex px-3 py-3 text-4xl gap-x-5 text-primary">
          <li
            className="mr-auto"
            onClick={() => setIsSideBarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </li>
          <li>
            <RiMessage2Fill />
          </li>
          <li>
            <GiShoppingBag />
          </li>
        </ul>
      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Navbar;
