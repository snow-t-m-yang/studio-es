import { RiMessage2Fill, RiErrorWarningFill } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { useIsScrolled } from "./hooks/useIsScrolled";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isShopCartClicked, setIsShopCartClicked] = useState(false);

  const isScrolled = useIsScrolled();

  useEffect(() => {
    if (isShopCartClicked) {
      setTimeout(() => {
        setIsShopCartClicked(false);
      }, 3000);
    }
  }, [isShopCartClicked]);

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
            <a href="#訂製服務">
              <RiMessage2Fill />
            </a>
          </li>
          <li>
            <button
              onClick={() => setIsShopCartClicked(!isShopCartClicked)}
              disabled={isShopCartClicked}
            >
              <GiShoppingBag />
            </button>
          </li>
        </ul>
        {isShopCartClicked && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 right-0 flex flex-col items-center w-64 py-5 mx-auto space-y-4 bg-white top-96 shadow-3xl px-7 rounded-xl"
          >
            <RiErrorWarningFill className="text-4xl text-primary" />
            <p className="font-bold ">購物車系統暫未開放</p>
          </motion.div>
        )}
      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Navbar;
