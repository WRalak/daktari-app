



import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 text-center md:text-left">
        <Link href="/" className="text-xl font-bold text-blue-600">
            <span>Medi</span><span className="text-black">Care</span>
          </Link>
         <p className='mt-2 text-xs'>Book your appointment today and experience <br /> healthcare you can trust.</p>
        </div>
        
        {/* Company Links */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-sm">COMPANY</h3>
          <ul className="mt-2 space-y-1 text-xs">
            <li><Link legacyBehavior href="/about"><a className="hover:text-blue-500">About Us</a></Link></li>
            <li><Link legacyBehavior href="/contact"><a className="hover:text-blue-500">Contact Us</a></Link></li>
            <li><Link legacyBehavior href="/"><a className="hover:text-blue-500">Home</a></Link></li>
            <li><Link legacyBehavior href="/privacy-policy"><a className="hover:text-blue-500">Privacy Policy</a></Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="w-full text-xs md:w-1/3 text-center md:text-right">
          <h3 className="text-sm">GET IN TOUCH</h3>
          <p className="mt-2 text-xs">Phone: +123 456 7890</p>
          <p className="text-xs">Email: info@example.com</p>
        </div>
      </div>
      
      {/* Divider */}
      <hr className="my-6 border-gray-300" />
      
      {/* Copyright */}
      <div className="text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} MediCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
