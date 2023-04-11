import Image from "next/image";

const Contact = () => {
  return (
    <section id="聯絡我們" className="grid min-h-screen place-items-center">
      <div className="px-16 py-3 bg-white shadow-lg rounded-2xl">
        <h2 className="px-8 font-bold border-b-4 border-primary">聯絡我們</h2>
      </div>

      <Image
        src="/contact/contact-camara.svg"
        width={500}
        height={500}
        alt="contact"
      />
    </section>
  );
};
export default Contact;
