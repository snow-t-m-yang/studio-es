import Image from "next/image";
import { useState } from "react";

const Game = () => {
  const [isRedButtonPressed, setIsRedButtonPressed] = useState(true);

  const handleIsRedButtonPressed = () => {
    setIsRedButtonPressed(!isRedButtonPressed);
  };

  return (
    <section
      id="遊戲開發"
      className="grid min-h-screen mt-36 place-content-center"
    >
      <div className="relative">
        <Image
          priority
          src={`${
            isRedButtonPressed ? "/game/game-red.svg" : "/game/game-blue.svg"
          }`}
          height={350}
          width={350}
          alt="A gameboy"
        />
        <button
          className="absolute bottom-[160px] h-12 w-12 rounded-full   right-[105px]"
          onClick={handleIsRedButtonPressed}
          disabled={isRedButtonPressed}
        ></button>
        <button
          className="absolute bottom-[135px] h-12 w-12 rounded-full   right-[38px]"
          onClick={handleIsRedButtonPressed}
          disabled={!isRedButtonPressed}
        ></button>
      </div>
    </section>
  );
};

export default Game;
