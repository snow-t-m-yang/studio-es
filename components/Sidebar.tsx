import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { BsVectorPen } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";

interface Sidebar {
  icon: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

const SidebarItems: Sidebar[] = [
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

interface SidebarProps {
  isSidebarOpen: boolean;
}
const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <ul
      className={`${
        isSidebarOpen ? "-left-5" : "-left-[100%]"
      } top-[80px] duration-500 fixed flex flex-col gap-y-1 text-xl`}
    >
      <Link href={SidebarItems[0].href}>
        <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
          <span className="px-12 mr-5 border-b-4 border-primary ">
            {SidebarItems[0].title}
          </span>
          <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
            {React.createElement(SidebarItems[0].icon)}
          </span>
        </li>
      </Link>
      <Link href={SidebarItems[1].href}>
        <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
          <span className="px-12 border-b-4 border-primary ">
            {SidebarItems[1].title}
          </span>
          <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
            <Image
              src={`${SidebarItems[1].icon}`}
              alt={SidebarItems[1].title}
              width={25}
              height={20}
            />
          </span>
        </li>
      </Link>
      <Link href={SidebarItems[2].href}>
        <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
          <span className="px-12 border-b-4 border-primary ">
            {SidebarItems[2].title}
          </span>
          <span className="absolute px-[14.5px] py-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
            <Image
              src={`${SidebarItems[2].icon}`}
              alt={SidebarItems[2].title}
              width={20}
              height={15}
            />
          </span>
        </li>
      </Link>
      <Link href={SidebarItems[3].href}>
        <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
          <span className="px-12 border-b-4 border-primary ">
            {SidebarItems[3].title}
          </span>
          <span className="absolute px-[16px] py-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
            <Image
              src={`${SidebarItems[3].icon}`}
              alt={SidebarItems[3].title}
              width={15}
              height={10}
            />
          </span>
        </li>
      </Link>
      <Link href={SidebarItems[4].href}>
        <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
          <span className="px-12 border-b-4 border-primary ">
            {SidebarItems[4].title}
          </span>
          <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
            <Image
              src={`${SidebarItems[4].icon}`}
              alt={SidebarItems[4].title}
              width={25}
              height={20}
            />
          </span>
        </li>
      </Link>
      <Link href={SidebarItems[5].href}>
        <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
          <span className="px-12 border-b-4 border-primary ">
            {SidebarItems[5].title}
          </span>
          <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
            {React.createElement(SidebarItems[5].icon)}
          </span>
        </li>
      </Link>
      <Link href={SidebarItems[6].href}>
        <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
          <span className="px-12 border-b-4 border-primary ">
            {SidebarItems[6].title}
          </span>
          <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
            {React.createElement(SidebarItems[6].icon)}
          </span>
        </li>
      </Link>
      <Link href={SidebarItems[7].href}>
        <li className="relative flex py-3 px-9 rounded-3xl gap-x-7 bg-tertiary ">
          <span className="px-12 border-b-4 border-primary ">
            {SidebarItems[7].title}
          </span>
          <span className="absolute p-3 self-center text-2xl right-[3px] rounded-full bg-secondary">
            {React.createElement(SidebarItems[7].icon)}
          </span>
        </li>
      </Link>
    </ul>
  );
};

export default Sidebar;
