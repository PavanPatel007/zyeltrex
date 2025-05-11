import HeaderFull from "@/components/Header/HeaderFull";
import Marketing from "@/pages/services/marketing/Marketing";

export const metadata = {
  title: "Marketing - Zyeltrex  Solutions",
  description: "Zyeltrex  Solutions",
};
const page = () => {
  return (
    <>
      <HeaderFull />
      <Marketing />
    </>
  );
};

export default page;
