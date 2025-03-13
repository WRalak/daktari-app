

import Link from 'next/link';
import { doctors } from '../data';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-gray-700 font-bold text-center mb-8">Our Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {doctors.map((doctor) => (
          <div 
            key={doctor.id} 
            className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <Link href={`/doctor/${doctor.id}`}>
              <div className="cursor-pointer">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-lg text-gray-700 font-semibold">{doctor.name}</h2>
                <p className="text-blue-600 text-xs">{doctor.specialty}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
