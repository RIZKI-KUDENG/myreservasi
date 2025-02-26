import Image from "next/image";

const images = [
  "OTAFF.jpeg",
  "nursing.webp",
  "kontruksi.webp",
  "jft.jpeg",
  "jfa.webp",
  "asat.webp",
];

export function Service() {
  return (
    <main className=" w-full px-4 py-8 sm:px-8 md:px-12">
      <h1 className="text-center text-4xl font-bold tracking-wide text-black m-4 sm:text-5xl md:text-6xl lg:text-7xl">
        Our Services
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative h-64 w-full overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={`/${img}`} // Menggunakan path dari array
              alt={`Service ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              quality={80}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-xl font-semibold text-white">
                Service {index + 1}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
