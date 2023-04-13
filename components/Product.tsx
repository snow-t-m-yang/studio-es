import Image from "next/image";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <section id="特色商品" className="relative w-full h-screen ">
      <div className="sticky top-0 left-0 right-0 mx-auto border">
        {/* layer 3 */}
        {/* <div className="relative "> */}
        {/* Title */}
        {/* <div className="sticky top-0 left-0 z-20 px-16 py-3 mx-auto bg-white shadow-lg h-14 top-15 rigt-0 bottom-16 w-fit rounded-2xl">
            <h2 className="px-8 font-bold border-b-4 border-primary">
              特色商品
            </h2>
          </div> */}
        {/* Front */}
        <div className="absolute z-[15]">
          <Image
            priority
            src="/product/bag-top.svg"
            height={200}
            width={200}
            alt="A bag full of presents"
          />
        </div>
        {/* </div> */}
        {/* layer 1 */}
        <div className="absolute z-0 ">
          {/* Bottom */}
          <div className="">
            <Image
              priority
              src="/product/bag-bottom.svg"
              height={200}
              width={200}
              alt="A bag full of presents"
            />
          </div>

          {/* Entry */}
          <div className="">
            <Image
              priority
              src="/product/bag-entry.svg"
              height={200}
              width={200}
              alt="A bag full of presents"
            />
          </div>
        </div>

        {/* layer 2 */}
        <div className="absolute z-10 ">
          <Image
            priority
            src="/product/product1.png"
            height={200}
            width={200}
            alt="product key rings and stickers"
          />
        </div>

        <div className="absolute z-10 ">
          <Image
            priority
            src="/product/product2.png"
            height={200}
            width={200}
            alt="product key rings and stickers"
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
