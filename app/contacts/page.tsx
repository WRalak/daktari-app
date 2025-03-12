

import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">CONTACT US</h1>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-[560px]"> {/* Ensure the container has a height */}
          <Image 
            src="/contacts.png" 
            alt="Office" 
            width={560} 
            height={560} 
            className="rounded-lg h-full object-cover" 
          />
        </div>

        {/* Right Side - Office Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl mt-10 font-semibold">OUR OFFICE</h2>
          <p className="mt-4 text-xs">54709 Wiles Station, Suite 350, Washington, USA</p>
          <p className="mt-4 text-xs">Tel: (415) 555‑0132</p>
          <p className="mt-4 text-xs">Email: contact@prescripto.com</p>

          <h1 className="mt-8  text-xl font-semibold">CAREERS AT MEDICARE</h1>
          <p className="mt-4 text-xs">Learn more about our teams and job openings.</p>

          <button className="mt-8 bg-blue-600 text-xs text-white px-6 py-2 rounded-lg hover:bg-blue-700">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


  