import Image from "next/image";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <section id="特色商品" className="relative w-full min-h-screen ">
      <div className="sticky top-0 w-full ">
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
          {/* Ring-top */}
          {/* <Image
            priority
            src="/product/bag-ring-top.svg"
            height={300}
            width={300}
            alt="A bag full of presents"
            className="absolute top-48"
          /> */}
        </div>

        {/* Bottom */}
        <div className="absolute left-0 right-0 z-0 mx-auto w-fit">
          <div>
            <Image
              priority
              src="/product/bag-bottom.svg"
              height={300}
              width={300}
              alt="A bag full of presents"
            />
          </div>
        </div>

        {/* layer 2 */}
        <motion.div className="absolute left-0 right-0 z-10 mx-auto w-fit">
          <Image
            priority
            src="/product/product1.png"
            height={300}
            width={300}
            alt="product key rings and stickers"
          />
        </motion.div>

        <motion.div className="absolute left-0 right-0 z-10 mx-auto w-fit">
          <Image
            priority
            src="/product/product2.png"
            height={300}
            width={300}
            alt="product key rings and stickers"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
