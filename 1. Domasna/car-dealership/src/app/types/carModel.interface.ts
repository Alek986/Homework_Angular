export interface Car {
    id: string;
    description: string;
    price: number;
    brand: string;
    model: string;
}
export interface CarModel {
  id: string; // e.g.
    description: string; // e.g. Како нова, баба ја возела, etc.
    price: number; // e.g. 100.000, 200.000, etc.
    brand: string;
    model: string;
    images: string[]; // array of image URLs
    type: "Sedan" | "SUV" | "Coupe" | "Hatchback" | "Convertible"; //...etc. (or enum)
    year: number; // e.g. 2022, 2023, 2024, etc.
    color: string; // e.g. White, Black, Red, etc. (or enum)
    fuelType: "Petrol" | "Diesel" | "Electric"; //...etc. (or enum)
    distance: number; // e.g. 100.000, 200.000, etc.
    isNew: boolean; // true or false
    location: {
      // or interface
      city: string; // e.g. Skopje, etc.
      country: string; // e.g. Macedonia, etc.
    };
    enginePower: number; // e.g. 150 (kW), 200 (kW), etc.
    doors: number; // e.g. 2, 3, 4, etc.
    seats: number; // e.g. 2, 4, 6, etc.
    transmission: string; // e.g. Manual, Automatic, etc. (or enum)
  }