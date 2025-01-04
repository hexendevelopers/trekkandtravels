import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import HolidayPackages from "../../components/Packages/HolidayPackages"
import Resorts from "../../components/Resorts"
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle={"Explore Resorts"} search={true} />









     <section>
       <Resorts/>
      </section>









      
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
