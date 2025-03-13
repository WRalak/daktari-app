
  // data.ts
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
}

export const doctors: Doctor[] = [
  { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", image: "/doctor1.png" },
  { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist", image: "/doc2.png" },
  { id: 3, name: "Dr. Emily Johnson", specialty: "Pediatrician", image: "/doc3.png" },
  { id: 4, name: "Dr. Michael Brown", specialty: "Orthopedist", image: "/doc4.png" },
  { id: 5, name: "Dr. Sarah Davis", specialty: "Neurologist", image: "/doc5.png" },
  { id: 6, name: "Dr. David Wilson", specialty: "Oncologist", image: "/doctor1.png" },
  { id: 7, name: "Dr. Laura Martinez", specialty: "Psychiatrist", image: "/doc5.png" },
  { id: 8, name: "Dr. James Anderson", specialty: "Endocrinologist", image: "/doc4.png" },
  { id: 9, name: "Dr. Olivia Thomas", specialty: "Gastroenterologist", image: "/doc3.png" },
  { id: 10, name: "Dr. William Jackson", specialty: "Pulmonologist", image: "/doc2.png" },
  { id: 11, name: "Dr. Sophia White", specialty: "Rheumatologist", image: "/doc3.png" },
  { id: 12, name: "Dr. Daniel Harris", specialty: "Urologist", image: "/doc2.png" },
  // Add more doctors...
];