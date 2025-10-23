import React from "react";

function AllPlants() {
  const phoneNumber = "9020211841";

  const plants = [
    {
      image: "./nutmeg-plant.svg",
      name: "Premium Bud \\nNutmeg Plants",
      buttonLabel: "Nutmeg",
      description: "Bud Plant, 6 Months old",
      price: "400.00",
    },
    {
      image: "./coconut.svg",
      name: "Coconut - \\n Kuttiyadi",
      buttonLabel: "Coconut",
      description: "6 Months old",
      price: "200.00",
    },
    {
      image: "./mango.svg",
      name: "Mango -\\n Kalapadi",
      buttonLabel: "Mango",
      description: "Bud Plant, 8 Months old",
      price: "250.00",
    },
    {
      image: "./jackfruit.svg",
      name: "Jackfruit - Vietnam \\nSuper Early",
      buttonLabel: "Jackfruit",
      description: "Bud Plant, 8 Months old",
      price: "250.00",
    },
    {
      image: "./budMangosteen.svg",
      name: "Bud Mangosteen \\n(Garcinia mangostana)",
      buttonLabel: "Mangosteen",
      description: "Bud Plant, 12 Months old",
      price: "350.00",
    },
    {
      image: "./budRambutan.svg",
      name: "Bud Rambutan \\nPlants",
      buttonLabel: "Rambutan",
      description: "Bud Plant, 06 Months old",
      price: "250.00",
    },
    {
      image: "./abiu.svg",
      name: "Guava -\\n Plants",
      buttonLabel: "Guava",
      description: "06 Months old",
      price: "200.00",
    },
    {
      image: "./guava.svg",
      name: "Abiu (Pouteria \\ncaimito)Plants",
      buttonLabel: "Abiu",
      description: "Bud Plant, 12 Months old",
      price: "200.00",
    },
  ];

  return (
    <div className="flex justify-between overflow-hidden overflow-x-scroll gap-4">
      {plants.map((plant, index) => {
        const formattedName = plant.name.replace(/\\n/g, "<br />");
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          `Enquire for ${plant.name}`
        )}`;

        return (
          <div
            key={index}
            className="border-[#D9D9D9] border rounded-[16px] min-w-[254px]"
          >
            <img src={plant.image} className="w-full" alt={plant.buttonLabel} />
            <div className="p-4">
              <button className="bg-[#F1F8E9] text-[#1B5E20] text-[14px] rounded-[8px] py-[6px] px-[13px]">
                {plant.buttonLabel}
              </button>
              <h1
                className="text-[16px] sm:text-[20px] font-semibold text-[#333333] pt-4"
                dangerouslySetInnerHTML={{ __html: formattedName }}
              />
              <p className="text-[14px] sm:text-[16px] text-[#333333] pt-2">
                {plant.description}
              </p>
              <p className="pt-2">
                <span className="text-[#1B5E20] font-bold text-[16px] sm:text-[20px]">
                  {plant.price}
                </span>
                <span className="font-light text-[12px] sm:text-[14px] text-[#333333] ps-3">
                  Onwards
                </span>
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#58975B] inline-block text-center rounded-[8px] text-[12px] sm:text-[16px] text-white mt-2 p-2 hover:bg-green-700 transition duration-200"
              >
                Order Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllPlants;
