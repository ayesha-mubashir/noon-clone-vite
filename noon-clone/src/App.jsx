import { Routes, Route } from 'react-router-dom';
import HeaderMain from './components/HeaderMain/HeaderMain';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Carousel from './components/Carousel/Carousel';
import ReasonsToShop from './components/ReasonsToShop/ReasonsToShop';
import Recommendations from './components/Recommendations/Recommendations';
import Discount from './components/Discount/Discount';
import Fashion from './components/Fashion/Fashion';
import Savings from './components/Savings/Savings';
import Footer from './components/Footer/Footer';
import ViewAllPage from './pages/ViewAllPage';
import { settings } from './utils/constants';
import { beauty, electronics, products } from './utils/ProductsConst';
import { womenCategoryData, menCategoryData } from './utils/FashionConst';

const App = () => {
  return (
    <>
    <HeaderTop/>
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
          
         
            <Fashion
                heading="Women's Fashion"
                items={womenCategoryData}
                navigateTo="/view-all-womens-fashion"
                buttonText="View All"
              />
              
              <Fashion
                heading="Men's Fashion"
                items={menCategoryData}
                navigateTo="/view-all-mens-fashion"
                buttonText="View All"
              />

              <Fashion
                heading="Beauty"
                items={womenCategoryData}
                navigateTo="/view-all-beauty"
                buttonText="View All"
              />
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
