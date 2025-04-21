"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const hospital = {
  name: "Mae Fah Luang Medical Center Hospital",
  address: "365 Nang Lae, Mueang Chiang Rai District, Chiang Rai 57100",
  image: "/img/hospital/hospital1.png",
};

const HospitalCard = () => {
  const router = useRouter();

  const navigateToHospitalPage = () => {
    router.push(`/user/hospital`);
  };

  return (
    <div className="px-4">
      <div className="border border-t border-gray-200 my-5"></div>
      <div className="flex justify-center items-center w-full bg-white p-4">
        <div className="flex flex-col sm:flex-row items-center p-4 bg-white rounded-xl shadow-md border border-gray-300 w-full max-w-2xl space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Image Section */}
          <div className="w-60 h-35 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={hospital.image}
              alt={hospital.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>


          {/* Hospital Details */}
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg text-[#000000] font-semibold">{hospital.name}</h2>
            <p className="flex flex-col sm:flex-row justify-center sm:justify-start items-center text-gray-600 text-sm mt-1 text-center sm:text-left break-words">
              <FaMapMarkerAlt className="text-red-500 mr-1 mb-1 sm:mb-0" />
              <span>{hospital.address}</span>
            </p>


            {/* Button */}
            <button
              onClick={navigateToHospitalPage}
              className="mt-3 px-4 py-2 text-green-500 border border-green-300 rounded-full text-sm hover:bg-green-100 transition"
            >
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
