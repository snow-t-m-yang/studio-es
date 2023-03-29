import { RiMessage2Fill } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { useIsScrolling } from "./hooks/useIsScrolling";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  const isScrolling = useIsScrolling(true);

  return (
    <>
      <nav
        className={`${
          isScrolling ? "top-0" : "-top-[100%]"
        } fixed w-full duration-500 bg-white`}
      >
        <ul className="flex px-3 py-5 text-4xl gap-x-5 text-primary">
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
