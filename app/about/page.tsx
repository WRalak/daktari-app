

import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center py-12 px-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">ABOUT US</h1>

      {/* Content Section */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/about.png" // Update with the correct image path
            alt="About Us"
            width={687}
            height={485}
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-sm mt-6">
            <strong>Welcome to MediCare</strong>, your trusted partner in managing your healthcare needs conveniently and efficiently. 
            At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>

          <p className="text-gray-600 mt-12 text-sm">
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. 
            Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>

          <h2 className="text-xl font-semibold mt-16">Our Vision</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Our vision at Prescripto is to create a seamless healthcare experience for every user. 
            We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <h2 className="text-lg font-semibold mt-12">WHY CHOOSE US</h2>

      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg mt-6 grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-300 overflow-hidden">
        {/* Box 1 */}
        <div className="p-6 text-center">
          <h3 className="text-sm  ">EFFICIENCY:</h3>
          <p className="text-gray-600 text-xs mt-2">
            Streamlined appointment scheduling <br /> that fits into your busy lifestyle.
          </p>
        </div>

        {/* Box 2 */}
        <div className="p-6 text-center">
          <h3 className="text-sm">CONVENIENCE:</h3>
          <p className="text-gray-600 text-xs mt-2">
            Access to a network of trusted <br /> healthcare professionals in your area.
          </p>
        </div>

        {/* Box 3 */}
        <div className="p-6 text-center">
          <h3 className="text-xs ">PERSONALIZATION</h3>
          <p className="text-gray-600 text-xs mt-2">
            Tailored recommendations and reminders <br /> to help you stay on top of your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


  