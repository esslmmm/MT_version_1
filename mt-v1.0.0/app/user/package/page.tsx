import ImageCarousel from "@/components/user/package/ImageCarousel"
import OfferService from "@/components/user/package/OfferService"
import HospitalCard from "@/components/user/package/HospitalCard"
import RoomGallery from "@/components/user/package/RoomGallery"
import AccommodationDetails from "@/components/user/package/AccommodationDetails"

const PackageLandingPage = () => {
  return (
    <div>
    <ImageCarousel/>
    <OfferService />
    <HospitalCard />
    <RoomGallery />
    <AccommodationDetails />
    </div>
  )
}
export default PackageLandingPage