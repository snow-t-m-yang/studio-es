import React from "react";
import Image from "next/image";
import { useIsScrolled } from "./hooks/useIsScrolled";

const Landing = () => {
  const isScrolled = useIsScrolled();

  return (
    <header
      id="團隊介紹"
      className="grid h-screen place-items-center place-content-center"
    >
      <Image
        src={"/es-logo-name.svg"}
        alt="Eternal Story logo"
        width={350}
        height={350}
        className={`${
          isScrolled ? "scale-75" : "scale-100 "
        }  duration-500 self-end`}
      />
      <Image
        src={"/es-logo-font.svg"}
        alt="Eternal Story logo"
        width={200}
        height={200}
        className={` ${
          isScrolled ? " animate-fadeOutBottom hidden" : "block"
        } self-start`}
      />
      <div
        className={`${
          isScrolled ? "animate-fadeInRight block row-start-2" : "hidden"
        } px-16 py-3 bg-white rounded-2xl shadow-lg`}
      >
        <h2 className="px-8 font-bold border-b-4 border-primary">團隊介紹</h2>
      </div>
      <div
        className={` ${
          isScrolled ? "animate-fadeInBottom block row-start-3" : "hidden"
        }
         p-10 text-white self-start`}
      >
        <p>
          我們是一家成立於2021年的澳門本土工作室。我們的宗旨是推動澳門故事創作及文化創意產業。主要業務範疇包括：遊戲開發、以小說和漫畫為媒介孵化的原創IP及影視拍攝服務。
        </p>
      </div>
    </header>
  );
};

export default Landing;
