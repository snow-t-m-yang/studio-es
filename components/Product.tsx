import Image from "next/image";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <section
      id="特色商品"
      className="relative grid h-screen place-items-center"
    >
      <div className="sticky top-0">
        <div className="absolute top-0 z-40 grid w-full">
          <div className="absolute left-0 right-0 px-16 py-3 ml-auto mr-auto bg-white shadow-lg bottom-16 w-fit rounded-2xl">
            <h2 className="px-8 font-bold border-b-4 border-primary">
              特色商品
            </h2>
          </div>
          <div className="justify-self-center">
            <Image
              priority
              src="/product/bag-top.svg"
              height={350}
              width={350}
              alt="A bag full of presents"
              className=""
            />
          </div>
        </div>

        <div className="z-10">
          <div className="">
            <Image
              priority
              src="/product/bag-bottom.svg"
              height={350}
              width={350}
              alt="A bag full of presents"
            />
          </div>
          <div className="">
            <Image
              priority
              src="/product/bag-entry.svg"
              height={350}
              width={350}
              alt="A bag full of presents"
            />
          </div>
        </div>

        <div className="z-30">
          <Image
            priority
            src="/product/product1.png"
            height={300}
            width={300}
            alt="product key rings and stickers"
          />
        </div>
        <div className="z-30">
          <Image
            priority
            src="/product/product2.png"
            height={300}
            width={300}
            alt="product key rings and stickers"
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
