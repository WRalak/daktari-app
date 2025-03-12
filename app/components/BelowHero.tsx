


import { FaUserMd, FaStethoscope, FaHeartbeat, FaBrain, FaChild, FaLungs } from "react-icons/fa";

const SpecialitySection = () => {
  const specialities = [
    { icon: <FaUserMd size={40} />, title: "General Physician" },
    { icon: <FaStethoscope size={40} />, title: "Gynecologist" },
    { icon: <FaHeartbeat size={40} />, title: "Dermatologist" },
    { icon: <FaChild size={40} />, title: "Pediatricians" },
    { icon: <FaBrain size={40} />, title: "Neurologist" },
    { icon: <FaLungs size={40} />, title: "Gastroenterologist" },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto text-center py-16 px-6">
      {/* Section Title */}
      <h2 className="text-xl md:text-xl font-bold text-gray-800 font-poppins">Find by Speciality</h2>
      <p className="text-gray-400 mt-4 max-w-2xl text-xs mx-auto font-poppins">
        Simply browse through our extensive list of trusted doctors, schedule <br /> your appointment hassle-free.
      </p>

      {/* Specialities List */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 lg:flex-nowrap">
        {specialities.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#5F6FFF] text-white shadow-lg hover:bg-[#4a5de7] transition">
              {item.icon}
            </div>
            <p className="mt-4 text-xs font-poppins text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialitySection;
