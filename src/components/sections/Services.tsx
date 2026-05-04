import Image from "next/image";

const services = [
  {
    title: "Property Investment",
    description: "Master-planned property development with modern amenities.",
    icon: "/assets/images/Icon/ser-1.svg",
  },
  {
    title: "Property Sale",
    description: "Discover luxury homes for sale in Lekki and prime investment opportunities.",
    icon: "/assets/images/Icon/ser-2.svg",
  },
  {
    title: "Property Development",
    description: "End-to-end property development in Nigeria, from concept to handover.",
    icon: "/assets/images/Icon/ser-3.svg",
  },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-40 h-40 mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={192}
                  height={192}
                  className="w-full h-full"
                />
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-dark text-[15px] leading-relaxed max-w-70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
