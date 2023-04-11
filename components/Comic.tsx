import Image from "next/image";
import { motion } from "framer-motion";

const Comic = () => {
  return (
    <section id="漫畫作品" className="grid min-h-screen ">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="self-center px-16 py-3 mt-10 bg-white shadow-lg justify-self-center rounded-2xl"
      >
        <h2 className="px-8 font-bold border-b-4 border-primary">漫畫作品</h2>
      </motion.div>

      <div className="flex justify-center gap-5">
        <span className="flex self-center gap-4 px-3 py-2 rounded-xl bg-black/30 h-fit">
          <p className="self-center">瞭解更多</p>
          <Image
            src="/comic/comic-fingure.svg"
            width={20}
            height={20}
            alt="comic"
            className="-scale-x-100 animate-pulse"
          />
        </span>
        <span className="self-center">
          <Image
            src="/comic/comic-poster-1.svg"
            width={250}
            height={250}
            alt="comic"
            className=""
          />
        </span>
      </div>

      <div className="flex">
        <span className="self-center">
          <Image
            src="/comic/comic-poster-2.svg"
            width={250}
            height={250}
            alt="comic"
            className=""
          />
        </span>
        <span>
          <Image
            src="/comic/comic-figure-1.svg"
            width={150}
            height={150}
            alt="comic"
            className=""
          />
        </span>
      </div>

      <div className="flex">
        <span className="self-center">
          <Image
            src="/comic/comic-figure-2.svg"
            width={250}
            height={250}
            alt="comic"
            className=""
          />
        </span>
        <div className="self-center">
          <Image
            src="/comic/comic-poster-3.svg"
            width={400}
            height={400}
            alt="comic"
            className=""
          />
        </div>
      </div>
    </section>
  );
};
export default Comic;
