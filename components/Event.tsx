import SlideCard from "./SlideCard";

const Event = () => {
  return (
    <section
      id="近期活動"
      className="grid h-screen overflow-hidden place-items-center gap-y-7 place-content-center"
    >
      <div className="px-16 py-3 bg-white shadow-lg rounded-2xl">
        <h2 className="px-8 font-bold border-b-4 border-primary">近期活動</h2>
      </div>
      <SlideCard />
      <div className=" font-bold text-center w-full py-2 bg-white shadow-lg rounded-[40px]">
        <h3 className="pb-3 text-xl px-13 text-quaternary">
          奶茶與他的朋友們-第三彈特典
        </h3>
        <p>女王的秘密到底是什麼...美食嗎？</p>
        <p>2022年11月14日-澳門-塔石藝墟</p>
      </div>
    </section>
  );
};

export default Event;
