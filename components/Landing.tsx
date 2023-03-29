import React from "react";
import Image from "next/image";
import { useIsScrolling } from "./hooks/useIsScrolling";

const Landing = () => {
  const isScrolling = useIsScrolling(true);

  return (
    <header className="grid h-screen place-items-center px-7">
      <Image
        src={"/es-logo-name.svg"}
        alt="Eternal Story logo"
        width={400}
        height={400}
        className={`${
          isScrolling ? "scale-75 self-center" : "scale-100 self-end"
        }  duration-500`}
      />
      <Image
        src={"/es-logo-font.svg"}
        alt="Eternal Story logo"
        width={200}
        height={200}
        className={` ${
          isScrolling && " animate-fadeOutBottom opacity-0"
        } self-start`}
      />
    </header>
  );
};

export default Landing;
