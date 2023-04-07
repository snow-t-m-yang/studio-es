import Image from "next/image";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <section
      id="特色商品"
      className="relative grid h-screen place-items-center gap-y-7"
    >
      <div className="px-16 py-3 bg-white shadow-lg rounded-2xl">
        <h2 className="px-8 font-bold border-b-4 border-primary">特色商品</h2>
      </div>
      <motion.div animate={{}} className="absolute -top-2">
        <Image
          priority
          src="/product/bag-product.svg"
          height={350}
          width={350}
          alt="A bag full of presents"
        />
      </motion.div>

      <motion.div className="">
        <Image
          priority
          src="/product/product1.png"
          height={300}
          width={300}
          alt="product key rings and stickers"
        />
      </motion.div>
      <motion.div className="">
        <Image
          priority
          src="/product/product2.png"
          height={300}
          width={300}
          alt="product key rings and stickers"
        />
      </motion.div>
    </section>
  );
};

export default Product;
