const accommodations = [
    {
      id: 1,
      name: "Khamthana Hotel",
      address: "651/8 Moo 24 Tambon Robviang, Amphur Muang, ChiangRai 57000",
      rating: 4.5,
      reviews: 377,
      description:
        "In addition to the standard of SHA, all guests get free Wi-Fi in all rooms and free parking if arriving by car. Conveniently situated in the City Center part of Chiang Rai, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Wat Rong Khun. This 4-star property features outdoor pool to make your stay more indulgent and memorable.",
      facilities: [
        "Free Wi-Fi",
        "Swimming pool",
        "Free parking",
        "Front desk [24-hour]",
        "Mini golf course",
        "Airport transfer",
      ],
      rooms: [
        { type: "Deluxe Twins", count: 1 },
        { type: "Deluxe King", count: 1 },
      ],
      originalPrice: 20000,
      discountPrice: 10000,
    },
  ];
  
  const AccommodationDetails = () => {
    return (
      <div className="p-4 md:p-10 flex flex-col items-center gap-8">
  {accommodations.map((hotel) => (
    <div
      key={hotel.id}
      className="w-full max-w-5xl bg-white p-6 md:p-8 rounded-lg flex flex-col lg:flex-row gap-6"
    >
      {/* Left Section: Hotel Info */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl text-[#000000] font-bold">{hotel.name}</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">{hotel.address}</p>
        <a
          href="https://maps.app.goo.gl/H4JvdSmMiiPFiCsE9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 font-medium mt-2 flex items-center text-sm md:text-base"
        >
          See map 📍
        </a>

        <p className="text-gray-700 mt-4 text-sm md:text-base">{hotel.description}</p>

        {/* Facilities List */}
        <h3 className="text-lg md:text-xl font-semibold mt-6 text-[#000000]">Facilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-gray-700 text-sm md:text-base">
          {hotel.facilities.map((facility, index) => (
            <span key={index}>✔ {facility}</span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

    );
  };
  
  export default AccommodationDetails;
  