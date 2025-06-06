"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import Footer from "../../../components/user/main/Footer";
import "../../../app/globals.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const services = [
  { icon: "❤️", name: "Heart" },
  { icon: "🎗", name: "Cancer" },
  { icon: "🦴", name: "Bone" },
  { icon: "🧠", name: "Brain" },
  { icon: "🚑", name: "Trauma" },
  { icon: "✅", name: "Check-up" },
  { icon: "🔪", name: "Surgery" },
  { icon: "🦷", name: "Dental" },
  { icon: "👶", name: "Child" },
  { icon: "💆", name: "Aesthetic" },
  { icon: "👁️", name: "Eye & ENT" },
  { icon: "➕", name: "Others" },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto space-y-10 p-4 sm:p-8 lg:p-20">
        {/* Header */}
        <div className="overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105">
          <Image
            src="/img/hospital/hospital1.png"
            alt="Hospital Building"
            width={800}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Title and Info */}
        <div className="space-y-2 mt-10 sm:mt-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            MAE FAH LUANG MEDICAL CENTER HOSPITAL
          </h1>
          <div className="flex items-center text-gray-700">
            <FaMapMarkerAlt className="w-4 h-4 text-red-500 mr-2" />
            <p className="text-xs sm:text-sm lg:text-base">
              365 Nang Lae, Mueang Chiang Rai District, Chiang Rai 57100
            </p>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-4xl">
            MAE FAH LUANG MEDICAL CENTER HOSPITAL was established in 1972 as one
            of the first private hospitals in Thailand. Over the past 50 years
            we have expanded our operations to become a tertiary care facility
            with dedicated hospitals for cancer and cardiology.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-4 mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-4 text-center rounded-2xl shadow hover:shadow-lg transition"
              >
                <div>
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">
                    {service.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
