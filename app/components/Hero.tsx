

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const BookAppointmentSection = () => {
  return (
    <div className="w-full max-w-[1528px] min-h-screen md:h-[500px] bg-[#5F6FFF] flex flex-col md:flex-row sm:justify-center sm:items-center px-6 md:px-16 mx-auto overflow-hidden">
      {/* Left Side - Text Content */}
      <div className="text-white max-w-lg flex-1 sm:mt-auto sm:mb-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-poppins leading-tight text-center sm:text-left">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <p className="mt-4 text-sm font-poppins text-center sm:text-left">
          Our hospital provides world-class healthcare services with a team of
          experienced professionals. Book an appointment today and get the best
          medical care.
        </p>
        <div className="mt-6 sm:flex sm:justify-center">
          <button className="bg-white text-[#5F6FFF] flex items-center gap-2 px-6 py-3 text-xs md:text-xs rounded-lg shadow-md hover:bg-gray-100 transition">
            Book Appointment <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Right Side - Image (Always Visible & Responsive) */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/Hero.png" // Replace with actual image path
          alt="Doctor"
          width={500} 
          height={500}
          className="object-contain w-full h-auto max-h-[698px]"
        />
      </div>
    </div>
  );
};

export default BookAppointmentSection;

