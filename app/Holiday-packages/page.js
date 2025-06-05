"use client";
import Banner from "../../components/Banner";
import Subscribe from "../../components/Subscribe";
import ReveloLayout from "../../layout/ReveloLayout";
import Link from "next/link";
import HolidayPackages from "../../components/Packages/HolidayPackages"

const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Holiday Packages"}
        pageName={"Holiday Packages"}
        search={true}
      />
      {/* Tour Grid Area start */}
      <section className="tour-grid-page py-100 rel z-2">
        <div className="container">
          
 
          <HolidayPackages />
            
        </div>
      </section>
      {/* Tour Grid Area end */}
     </ReveloLayout>
  );
};
export default page;
