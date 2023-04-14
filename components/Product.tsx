import { useRef, useEffect, useState, RefObject } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Product = () => {
  const targetRef = useRef<HTMLInputElement>(null);

  const useReachedViewPortTop = (ref: RefObject<HTMLElement>) => {
    const [isReached, setIsReached] = useState(false);

    const isReachedOnTop = () => {
      if (ref.current !== null) {
        const rect = ref.current.getBoundingClientRect();

        return rect.top === 0 && rect.bottom <= window.innerHeight;
      }
      return false;
    };

    useEffect(() => {
      const handleScroll = () => {
        const Reached = isReachedOnTop();

        if (Reached !== isReached) {
          setIsReached(Reached);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });

    return isReached;
  };

  const isReached = useReachedViewPortTop(targetRef);

  return (
    <section id="特色商品" className="relative min-h-screen ">
      <div ref={targetRef} className="sticky top-0">
        {/* Title */}
        <div className="absolute left-0 right-0 z-20 px-16 py-3 mx-auto bg-white shadow-lg top-28 h-14 top-15 rigt-0 bottom-16 w-fit rounded-2xl">
          <h2 className="px-8 font-bold border-b-4 border-primary">特色商品</h2>
        </div>

        {/* Front */}
        <div className="absolute z-[15] w-fit left-0 right-0 mx-auto">
          <Image
            priority
            src="/product/bag-top.svg"
            height={310}
            width={310}
            alt="A bag full of presents"
          />
        </div>

        {/* Bottom */}
        <div className="absolute left-0 -top-[3px] right-0 z-0 mx-auto w-fit">
          <div>
            <Image
              priority
              src="/product/bag-bottom.svg"
              height={303}
              width={303}
              alt="A bag full of presents"
            />
          </div>
        </div>

        {/* Products */}
        {isReached && (
          <motion.div className="absolute left-0 right-0 z-10 mx-auto w-fit">
            <Image
              priority
              src="/product/product1.png"
              height={300}
              width={300}
              alt="product key rings and stickers"
            />
          </motion.div>
        )}
        {/* 
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute left-0 right-0 z-10 mx-auto w-fit"
        >
          <Image
            priority
            src="/product/product2.png"
            height={300}
            width={300}
            alt="product key rings and stickers"
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Product;
