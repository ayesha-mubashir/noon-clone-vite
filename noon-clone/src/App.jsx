import { Routes, Route } from "react-router-dom";
import HeaderMain from "./components/Header/HeaderMain";
import HeaderTop from "./components/Header/HeaderTop";
import Carousel from "./components/Carousel/Carousel";
import ReasonsToShop from "./components/ReasonsToShop/ReasonsToShop";
import Recommendations from "./components/Recommendations/Recommendations";
import Discount from "./components/Discount/Discount";
import Fashion from "./components/Fashion/Fashion";
import Savings from "./components/Savings/Savings";
import Footer from "./components/Footer/Footer";
import ViewAllPage from "./pages/ViewAllPage";
import { settings } from "./utils/constantsData";
import { beauty, electronics, products } from "./utils/ProductsData";
import { fashion } from "./utils/FashionData";

const App = () => {
  return (
    <>
      <HeaderTop />
      <HeaderMain />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <ReasonsToShop />
              <Recommendations />
              <Discount
                heading="30-60% off on fashion"
                btnText="VIEW ALL"
                products={products}
                settings={settings}
                navigateTo="/view-all-fashion"
              />
              <Savings />
              <Discount
                heading="Top deals in electronics"
                btnText="VIEW ALL"
                products={electronics}
                settings={settings}
              />
              <Discount
                heading="Bestsellers in beauty"
                btnText="VIEW ALL"
                products={beauty}
                settings={settings}
              />

              {fashion.map((category, index) => (
                <Fashion
                  key={index}
                  heading={category.heading}
                  items={category.items}
                  navigateTo={category.navigateTo}
                  buttonText={category.buttonText}
                />
              ))}

              <Footer />
            </>
          }
        />
        <Route path="/view-all-fashion" element={<ViewAllPage />} />
      </Routes>
    </>
  );
};

export default App;
