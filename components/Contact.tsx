import Image from "next/image";
import { useReducer } from "react";

const Contact = () => {
  const [isCameraPressed, setIsCameraPressed] = useReducer(
    (isCameraPressed) => !isCameraPressed,
    false,
  );

  return (
    <section id="聯絡我們" className="min-h-screen">
      <div className="relative mx-auto w-72">
        <div className="absolute top-[70px] z-10">
          <Image
            src="/contact/contact-camara.svg"
            width={300}
            height={300}
            alt="contact"
          />
        </div>
        <button
          className=" z-20 absolute w-9 top-[195px] left-[17px] rounded-full h-9 "
          onClick={() => setIsCameraPressed()}
        ></button>

        <div
          className={`${
            isCameraPressed ? "top-[400px]" : "top-[70px]"
          } absolute left-6 duration-1000`}
        >
          <Image
            src="/contact/contact-picture.svg"
            width={240}
            height={240}
            alt="contact-picture"
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
