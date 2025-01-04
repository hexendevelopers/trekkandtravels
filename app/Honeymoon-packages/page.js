import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import HoneymoonPackages from "../../components/Packages/HoneymoonPackages"

const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Honeymoon Packages"}
        pageName={"Honeymoon Packages"}
        search={true}
      />
      {/* Tour Grid Area start */}
      <section className="tour-grid-page py-100 rel z-2">
        <div className="container">
           

          <HoneymoonPackages />
            
        </div>
      </section>
      {/* Tour Grid Area end */}
      <Subscribe />
    </ReveloLayout>
  );
};
export default page;
