import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

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

const SlideCard = () => {
  console.log("slideCard is rendered");
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="h-96 w-80"
      >
        <SwiperSlide className=" border-8 border-white rounded-[75px]">
          <Image
            src={EventItems[0].src}
            alt={EventItems[0].alt}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </SwiperSlide>
        <SwiperSlide className="border-8 border-white rounded-[75px]">
          <Image
            src={EventItems[1].src}
            alt={EventItems[1].alt}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </SwiperSlide>
        <SwiperSlide className="border-8 border-white rounded-[75px]">
          <Image
            src={EventItems[2].src}
            alt={EventItems[2].alt}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideCard;
