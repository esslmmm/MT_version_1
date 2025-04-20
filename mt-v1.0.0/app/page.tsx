'use client'


import Advertisement from "@/components/user/hompage/Advertisement";

import "./globals.css";
import MedicalList from "@/components/user/hompage/MedicalList";
import Footer from "@/components/user/main/Footer";
import Hospitaltap from "@/components/user/hompage/Hospitaltap";



interface HomePageProps {
  children: React.ReactNode;
}

const HomePage: React.FC<HomePageProps> = ({ children }) => {
  
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
      <MedicalList/>
      <Hospitaltap/>
      <Footer />
      {children} {/* Renders the page content that is passed from the individual page component */}
    </div>
  );
};

export default HomePage;


