import { RiTeamFill, RiMessage2Fill } from "react-icons/ri";
import { BsVectorPen } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Sidebar {
  icon: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

const Sidebar: Sidebar[] = [
  {
    icon: RiTeamFill,
    title: "團隊介紹",
    href: "/團隊介紹",
  },
  {
    icon: "/sidebar-icons/event-icon.png",
    title: "近期活動",
    href: "/近期活動",
  },
  {
    icon: "/sidebar-icons/product-icon.png",
    title: "特色商品",
    href: "/特色商品",
  },
  {
    icon: "/sidebar-icons/game-icon.png",
    title: "遊戲開發",
    href: "/遊戲開發",
  },
  {
    icon: "/sidebar-icons/film-icon.png",
    title: "影片拍攝",
    href: "/影片拍攝",
  },
  {
    icon: BsVectorPen,
    title: "漫畫作品",
    href: "/漫畫作品",
  },
  {
    icon: MdWork,
    title: "訂製服務",
    href: "/訂製服務",
  },
  {
    icon: MdPermPhoneMsg,
    title: "聯絡我們",
    href: "/聯絡我們",
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <ul
        className={`${
          isSidebarOpen ? "-left-5" : "-left-[100%]"
        } top-[80px] duration-500 fixed flex flex-col gap-y-1 text-xl`}
      >
        <Link href={Sidebar[0].href}>
          <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
            <span className="px-12 mr-5 border-b-4 border-primary ">
              {Sidebar[0].title}
            </span>
            <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
              {React.createElement(Sidebar[0].icon)}
            </span>
          </li>
        </Link>
        <Link href={Sidebar[1].href}>
          <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
            <span className="px-12 border-b-4 border-primary ">
              {Sidebar[1].title}
            </span>
            <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
              <Image
                src={`${Sidebar[1].icon}`}
                alt={Sidebar[1].title}
                width={25}
                height={20}
              />
            </span>
          </li>
        </Link>
        <Link href={Sidebar[2].href}>
          <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
            <span className="px-12 border-b-4 border-primary ">
              {Sidebar[2].title}
            </span>
            <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
              <Image
                src={`${Sidebar[2].icon}`}
                alt={Sidebar[2].title}
                width={20}
                height={15}
              />
            </span>
          </li>
        </Link>
        <Link href={Sidebar[3].href}>
          <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
            <span className="px-12 border-b-4 border-primary ">
              {Sidebar[3].title}
            </span>
            <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
              <Image
                src={`${Sidebar[3].icon}`}
                alt={Sidebar[3].title}
                width={20}
                height={15}
              />
            </span>
          </li>
        </Link>
        <Link href={Sidebar[4].href}>
          <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
            <span className="px-12 border-b-4 border-primary ">
              {Sidebar[4].title}
            </span>
            <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
              <Image
                src={`${Sidebar[4].icon}`}
                alt={Sidebar[4].title}
                width={25}
                height={20}
              />
            </span>
          </li>
        </Link>
        <Link href={Sidebar[5].href}>
          <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
            <span className="px-12 border-b-4 border-primary ">
              {Sidebar[5].title}
            </span>
            <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
              {React.createElement(Sidebar[5].icon)}
            </span>
          </li>
        </Link>
        <Link href={Sidebar[6].href}>
          <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
            <span className="px-12 border-b-4 border-primary ">
              {Sidebar[6].title}
            </span>
            <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
              {React.createElement(Sidebar[6].icon)}
            </span>
          </li>
        </Link>
        <Link href={Sidebar[7].href}>
          <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
            <span className="px-12 border-b-4 border-primary ">
              {Sidebar[7].title}
            </span>
            <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
              {React.createElement(Sidebar[7].icon)}
            </span>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
