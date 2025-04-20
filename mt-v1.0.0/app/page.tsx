'use client';

import Advertisement from "@/components/user/hompage/Advertisement";
import "./globals.css";
import MedicalPackageList from "@/components/user/hompage/MedicalPackageList";
import Footer from "@/components/user/main/Footer";
import HospitalList from "@/components/user/hompage/HospitalList";

const HomePage = () => {
  return (
    <div>
      <Advertisement />
      <div className="text-center pt-10 pb-8">
        <h1 className="font-semibold text-[#4D4D4D]" style={{ fontSize: 35 }}>
          Select your package <br />
        </h1>
        <b className="text-[#717171] font-regular" style={{ fontSize: 16 }}>
          Choose the package that's right for you?
        </b>
      </div>
      <MedicalPackageList />
      <HospitalList />
      <Footer />
    </div>
  );
};

export default HomePage;
