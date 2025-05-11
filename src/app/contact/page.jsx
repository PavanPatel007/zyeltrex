import HeaderFull from "@/components/Header/HeaderFull";
import ContactForm from "@/pages/contact/ContactForm";

export const metadata = {
  title: "Contact - Zyeltrex Solutions",
  description: "Zyeltrex Solutions",
};

const Page = () => {
  return (
    <>
      <HeaderFull />

      <div
        className="bg-black text-white min-h-[90vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(80deg, var(--primary) 1%, #000 40%)",
        }}
      >
        <div className="container py-14">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let's talk about your idea.
            </h2>
            <p className="mt-6 text-base md:text-lg font-medium max-w-2xl mx-auto">
              Have a question or an idea you'd like to discuss?
              <br /> Our team is ready to help. Contact us today, and let's work
              together to bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default Page;
