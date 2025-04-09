import Slider from "react-slick";
import { settings } from "../../utils/constantsData";
import { savingsOffers } from "../../utils/SavingsOffersData";

const Savings = () => {
  return (
    <div className="container mx-auto my-6 px-4">
      <h2 className="text-2xl font-bold mb-4">Maximize your savings</h2>
      <Slider {...settings}>
        {savingsOffers.map((offer, index) => (
          <div key={index} className="px-2">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img
                src={offer.image}
                alt={`Savings Offer ${index + 1}`}
                className="w-full h-[300px] object-contain bg-white"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Savings;
