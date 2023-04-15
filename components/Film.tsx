import Image from "next/image";
import { useReducer } from "react";

const Film = () => {
  const [isFilmBarPressed, setIsFilmBarPressed] = useReducer(
    (isFilmBarPressed) => !isFilmBarPressed,
    false,
  );

  return (
    <section id="影片拍攝" className="pt-24 overflow-hidden">
      <div className="relative w-full h-screen">
        <button
          onClick={setIsFilmBarPressed}
          className="absolute z-20 w-[270px] h-40 left-16 rounded-3xl "
        />
        <div className="absolute w-full h-[220px] -top-[216px] left-[70px] z-10 bg-primary"></div>
        <div className="relative w-96 h-96">
          <div className="absolute z-10 w-ful left-5 h-96">
            <Image
              priority
              src="/film/filmbar.svg"
              height={300}
              width={700}
              alt="A film bar"
            />
          </div>

          <div
            className={`${
              isFilmBarPressed ? "top-[160px]" : "-top-[210px]"
            } absolute  left-[80px] z-0 duration-1000`}
          >
            <Image
              priority
              src="/film/film.svg"
              height={330}
              width={230}
              alt="A film"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Film;
