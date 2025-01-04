import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import FamilyPackages from "../../components/Packages/FamilyPackages"

const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Family Packages"}
        pageName={"Family Packages"}
        search={true}
      />
      {/* Tour Grid Area start */}
      <section className="tour-grid-page py-100 rel z-2">
        <div className="container">
           

          <FamilyPackages />
            
        </div>
      </section>
      {/* Tour Grid Area end */}
      <Subscribe />
    </ReveloLayout>
  );
};
export default page;
