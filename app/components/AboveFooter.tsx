


import Image from "next/image";

const BookAppointmentSection = () => {
  return (
    <div className="relative w-full h-[400px] bg-[#5F6FFF] flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
      {/* Left Side - Text Content */}
      <div className="text-white max-w-lg">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold leading-tight">
          Book Appointment <br /> With 100+ Trusted Doctors
        </h2>
        <button className="mt-6 bg-white text-gray-600 px-6 py-3 text-xs  rounded-3xl shadow-md hover:bg-gray-100 transition">
          Create Account
        </button>
      </div>

      {/* Right Side - Image fully touching bottom */}
      <div className="w-full md:w-1/2 flex justify-end relative h-full">
        <Image
          src="/hero2.png" // Replace with your actual image path
          alt="Doctor"
          width={580}
          height={529}
          className="absolute bottom-0 object-cover h-full"
        />
      </div>
    </div>
  );
};

export default BookAppointmentSection;


