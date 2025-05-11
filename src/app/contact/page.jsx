import HeaderFull from "@/components/Header/HeaderFull";
import { SEO_DATA, SEO_IMAGES } from "@/config/seo";
import ContactForm from "@/pages/contact/ContactForm";

export const metadata = {
  title: SEO_DATA.contact.title,
  description: SEO_DATA.contact.description,
  keywords: SEO_DATA.contact.keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SEO_DATA.contact.title,
    description: SEO_DATA.contact.description,
    url: SEO_DATA.contact.url,
    siteName: SEO_DATA.siteName,
    images: [SEO_IMAGES.default],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: SEO_DATA.twitterHandle,
    creator: SEO_DATA.twitterHandle,
    title: SEO_DATA.contact.title,
    description: SEO_DATA.contact.description,
    images: [SEO_IMAGES.default.url],
  },
};

const Page = () => {
  return (
    <>
      <HeaderFull />

      <div
        className="bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white min-h-[90vh] flex items-center justify-center text-center px-4"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(80deg, var(--primary) 1%, #000 40%)",
        // }}
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
