const Customize = () => {
  return (
    <section id="訂製服務" className="grid min-h-screen place-items-center">
      <div className="px-16 py-3 bg-white shadow-lg rounded-2xl">
        <h2 className="px-8 font-bold border-b-4 border-primary">訂製服務</h2>
      </div>
      <div className="p-9 self-start font-bold flex flex-col space-y-5 text-center w-fit bg-white shadow-lg rounded-[40px]">
        <div className="">
          <p className="text-xl px-13">我們暫時只提供影片拍攝及剪輯服務</p>
          <p className="text-xl px-13 ">如需報價服務可聯絡官方電郵</p>
        </div>
        <a
          className="cursor-pointer duration-300 hover:-translate-y-0.5 hover:text-slate-100"
          href="mailto:storyneverdie2020@gmail.com"
          target="_blank"
        >
          storyneverdie2020@gmail.com
        </a>
      </div>
    </section>
  );
};
export default Customize;
