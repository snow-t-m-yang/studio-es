import React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

type EventItems = {
  alt: string;
  src: string;
};

const EventItems: EventItems[] = [
  {
    alt: "奶茶與他的朋友們-第三彈特典",
    src: "/event/event-1.png",
  },
  {
    alt: "奶茶與他的朋友們-第三彈特典",
    src: "/event/event-2.png",
  },
  {
    alt: "奶茶與他的朋友們-第三彈特典",
    src: "/event/event-3.png",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentIndex === EventItems.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(EventItems.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  type slideIndex = number;

  const clickToSlide = (slideIndex: slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div>
      <div className="relative grid  w-full px-2 pt-3 bg-white rounded-[40px] group">
        <Image
          src={EventItems[currentIndex].src}
          alt={EventItems[currentIndex].alt}
          width={400}
          height={300}
        />
        <div
          onClick={() => prevSlide()}
          className="absolute hidden p-2 text-2xl text-white rounded-full cursor-pointer left-1 top-1/2 bg-black/20 group-hover:block"
        >
          <BsChevronCompactLeft />
        </div>
        <div
          onClick={() => nextSlide()}
          className="absolute hidden p-2 text-2xl text-white rounded-full cursor-pointer right-1 top-1/2 bg-black/20 group-hover:block"
        >
          <BsChevronCompactRight />
        </div>
        <div className="flex items-center justify-center w-full text-3xl cursor-pointer md:col-start-2">
          {EventItems.map((item, index) => (
            <div
              className={`${
                index === currentIndex ? "text-gray-900" : "text-gray-900/20"
              } bg-transparent  duration-300`}
              key={item.alt}
              onClick={() => clickToSlide(index)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
