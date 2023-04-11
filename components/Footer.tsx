import { AiFillInstagram, AiFillWechat } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="grid bg-primary">
      <ul className="flex justify-center w-full p-12 text-3xl text-white cursor-pointer gap-7 ">
        <li>
          <AiFillWechat />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsDiscord />
        </li>
      </ul>
      <p className="pb-3 text-sm text-center">
        Copyright © 2023 Studio EternalStory. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
