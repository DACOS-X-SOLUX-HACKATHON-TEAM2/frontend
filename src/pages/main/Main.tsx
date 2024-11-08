/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Button from "../../components/Button/Button";
import theme from "../../styles/theme";
import { pageStyle } from "../SurveyReport/SurveyReport.style";
import { TYPE } from "../SurveyReport/constants/report";
import { buttonStyle, categoryLayoutStyle, productLayout } from "./Main.style";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { PRODUCTS } from "./constants/products";

const CATEGORIES = ["스킨", "에센스/세럼/앰플", "로션", "크림"];
const OILY_CATEGORIES = ["스킨/토너", "로션"];

const Main = () => {
  const type = TYPE.type;

  const [category, setCategory] = useState(0);

  const currentCategories =
    type === 0 || type === 1 ? CATEGORIES : OILY_CATEGORIES;

  const filteredItems = PRODUCTS.filter((item) => item.routine === category);

  return (
    <div css={pageStyle}>
      <Header />
      <div css={categoryLayoutStyle}>
        {currentCategories.map((categoryName, index) => (
          <Button
            key={categoryName}
            variant="secondary"
            onClick={() => {
              setCategory(index);
              console.log(index === category);
            }}
            css={[buttonStyle(index === category), { ...theme.fonts.body1 }]}
          >
            {categoryName}
          </Button>
        ))}
      </div>

      <div css={productLayout}>
        {filteredItems.map((product) => (
          <ProductCard
            key={product.cosmetics_id}
            id={product.cosmetics_id}
            image={product.img}
            link={""}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
