import HeaderFull from "@/components/Header/HeaderFull";
import CareerHome from "@/pages/career/CareerHome";
import WantToJoin from "@/pages/career/WantToJoin";

export const metadata = {
  title: "Zyeltrex  Solutions",
  description: "Zyeltrex  Solutions",
};

const page = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeaderFull />
      <CareerHome />
      <WantToJoin />
    </div>
  );
};

export default page;
