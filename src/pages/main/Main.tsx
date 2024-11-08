/** @jsxImportSource @emotion/react */

import { pageStyle } from "../SurveyReport/SurveyReport.style";
import { productLayout } from "./Main.style";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { PRODUCTS } from "./constants/products";

const Main = () => {
  return (
    <div css={pageStyle}>
      <Header />

      <div css={productLayout}>
        {PRODUCTS.map((product) => (
          <ProductCard
            productImage={product.productImage}
            productLink={product.productLink}
            productName={product.productName}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
