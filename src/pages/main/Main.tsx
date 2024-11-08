/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Button from "../../components/Button/Button";
import { pageStyle } from "../SurveyReport/SurveyReport.style";
import { buttonStyle, categoryLayoutStyle, productLayout } from "./Main.style";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { PRODUCTS } from "./constants/products";

const categories = ["스킨", "에센스", "로션"];

const Main = () => {
  const [category, setCategory] = useState<number>(0);

  const filteredItems = PRODUCTS.filter((item) => item.category === category);

  return (
    <div css={pageStyle}>
      <Header />
      <div css={categoryLayoutStyle}>
        {categories.map((categoryName, index) => (
          <Button
            key={categoryName}
            variant="secondary"
            onClick={() => setCategory(index)}
            css={buttonStyle(index === category)}
          >
            {categoryName}
          </Button>
        ))}
      </div>

      <div css={productLayout}>
        {filteredItems.map((product) => (
          <ProductCard
            key={product.productName}
            image={product.productImage}
            link={product.productLink}
            name={product.productName}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
