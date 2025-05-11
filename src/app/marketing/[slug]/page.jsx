import Header from "@/components/Header/Header";
import HeaderFull from "@/components/Header/HeaderFull";
import { marketingServices } from "@/data/webServices";
import SingleTech from "@/pages/services/marketing/singleTech/SingleTech";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;

  const services = [...marketingServices];

  const tech = services?.find((item) => item.slug === slug);

  if (tech) {
    return {
      title: `${tech?.hero?.title} Development | Your Company Name`,
      description:
        tech?.description || "Explore our services and technologies.",
      keywords: tech?.keywords || [
        tech?.label,
        "development",
        "technology",
        "services",
      ],
      openGraph: {
        title: `${tech?.hero?.title} Development | Your Company Name`,
        description:
          tech?.queTitle?.description ||
          "Explore our services and technologies.",
        type: "website",
        url: tech?.href || "/",
        images: [
          {
            url: `/assets/logo/logo-black.svg`,
            width: 1200,
            height: 630,
            alt: `${tech?.hero?.title} Banner Image`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${tech?.hero?.title} Development | Your Company Name`,
        description:
          tech?.queTitle?.description ||
          "Explore our services and technologies.",
        image: `/assets/logo/logo-black.svg`,
      },
    };
  } else {
    return {
      title: "Technology Services | Your Company Name",
      description:
        "Explore a range of technology services offered by our company.",
      keywords: [
        "technology",
        "services",
        "web development",
        "mobile apps",
        "enterprise solutions",
      ],
    };
  }
}

const page = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <>
      {/* <Header /> */}
      <HeaderFull />
      <SingleTech slug={slug} />
    </>
  );
};

export default page;
