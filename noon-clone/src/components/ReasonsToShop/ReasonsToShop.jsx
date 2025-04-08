"use client";
import './ReasonsToShop.css';


const ReasonsToShop = () => {



  return (

<div className="reasons-container mx-auto">
  <div className="reasons-columns">
    {/* Left Column - Product Highlights */}
    <div className="reasons-column">
      <p className="text-2xl font-bold mb-4">More reasons to shop</p>
      <div className="reasons-grid">
        <div className="reason-card">
          <img src="/images/top-products.png" className="reason-img cursor-pointer" />
        </div>
        <div className="reason-card">
          <img src="/images/bestsellers.png" className="reason-img cursor-pointer" />
        </div>
        <div className="reason-card">
          <img src="/images/new-arrivals.png" className="reason-img cursor-pointer" />
        </div>
        <div className="reason-card">
          <img src="/images/mahali.png" className="reason-img cursor-pointer" />
        </div>
      </div>
    </div>



{/* Middle Column - Mega Deals */}
<div className="reasons-column w-1/2 relative">
          <div className="mega-deals-header flex justify-between items-center mb-4">
            <p className="section-title font-bold text-xl">Mega deals</p>
            <div className="timer-badge flex items-center bg-gray-700 text-white px-2 py-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>22h : 57m</span>
              <button className="deals-button bg-gray-700 text-white px-4 py-1 rounded">ALL DEALS</button>
            </div>
          </div>

          <div className="products-grid grid grid-cols-2 gap-4">
            {/* Product Cards */}
            <div className="product-card bg-white p-3 rounded shadow relative">
              <div className="relative">
                <img src="/images/s24.png" alt="Samsung Galaxy S24" className="mx-auto mb-0" />
                <button className="add-to-cart absolute bottom-2 right-2 bg-white p-1 rounded-full shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
              <div className="product-info text-left">
                <p className="product-name text-xs line-clamp-2">Samsung Galaxy S24 Ultra Dual SIM Titanium Black 12GB RAM...</p>
                <div className="price-container">
                  <span className="original-price line-through text-xs text-red-600">5399</span>
                  <span className="discounted-price font-bold text-lg">2949 AED</span>
                </div>
              </div>
            </div>

            <div className="product-card bg-white p-3 rounded shadow relative">
              <div className="relative">
                <img src="/images/oven.png" alt="NIKAI Microwave Oven" className="mx-auto mb-0 h-45 w-45" />
                <button className="add-to-cart absolute bottom-2 right-2 bg-white p-1 rounded-full shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
              <div className="product-info text-left">
                <p className="product-name text-xs line-clamp-2">NIKAI Microwave Oven, Digital Touch Control, Child Safety...</p>
                <div className="price-container">
                  <span className="original-price line-through text-xs text-red-600">349</span>
                  <span className="discounted-price font-bold text-lg">179 AED</span>
                </div>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="category-button bg-yellow-300 text-black px-3 py-1 rounded mb-0 mt-0 text-center col-span-1">
              Lips deals
            </div>
            <div className="category-button bg-yellow-300 text-black px-3 py-1 rounded mb-0 mt-0 text-center col-span-1">
              Camera & Photo deals
            </div>
          </div>
        </div>

    {/* Right Column - In Focus */}
    <div className="reasons-column">
      <p className="section-title font-bold text-xl">In Focus</p>
      <img src="/images/elevate-style.png" alt="elevate-style" className="mx-auto mb-4" />
      <img src="/images/gaming-universe.png" alt="elevate-style" className="mx-auto mb-4" />
      
    </div>
  </div>

</div>


  );
};

export default ReasonsToShop;