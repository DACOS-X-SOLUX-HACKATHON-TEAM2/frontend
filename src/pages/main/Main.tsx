/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Button from "../../components/Button/Button";
import { pageStyle } from "../SurveyReport/SurveyReport.style";
import { buttonStyle, categoryLayoutStyle, productLayout } from "./Main.style";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { PRODUCTS } from "./constants/products";

type Routine = "스킨" | "에센스" | "로션";

const Main = () => {
  const [category, setCategory] = useState<Routine>("스킨");

  const categories = ["스킨", "에센스", "로션"];

  return (
    <div css={pageStyle}>
      <Header />
      <div css={categoryLayoutStyle}>
        {categories.map((categoryName) => (
          <Button
            key={categoryName}
            variant="secondary"
            onClick={() => setCategory(categoryName as Routine)}
            css={buttonStyle(categoryName === category)}
          >
            {categoryName}
          </Button>
        ))}
      </div>

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
