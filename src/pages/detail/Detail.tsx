/** @jsxImportSource @emotion/react */

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch } from "react";
import {
  buttonStyle,
  imageStyle,
} from "../../components/LikeProductCard/LikeProductCard.style";
import theme from "../../styles/theme";
import { postLike } from "../main/apis/postLike";
import { PRODUCTS } from "../main/constants/products";
import {
  headerStyle,
  layoutStyle,
  pageStyle,
  productNameStyle,
} from "./Detail.style";

interface DetailProps {
  isLike: boolean;
  setIsLike: Dispatch<React.SetStateAction<boolean>>;
  id: number;
  userId: number;
}

const Detail = ({ isLike, setIsLike, id, userId }: DetailProps) => {
  const product = PRODUCTS.find((item) => item.cosmetics_id === id);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLike((prev) => !prev);
    postLike(id, userId);
  };

  return (
    <div css={pageStyle}>
      <header css={[headerStyle, { ...theme.fonts.subtitle1 }]}>
        상세 페이지
      </header>
      <div css={layoutStyle}>
        <img src={product?.img} css={imageStyle} alt="상품 사진" />
        <div css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <h2 css={productNameStyle}>{product?.name}</h2>
          <button
            css={buttonStyle}
            // onClick={() => window.open(product?., "_blank")}
          >
            올리브영에서 확인하기 &gt;
          </button>
        </div>
        <FontAwesomeIcon
          icon={isLike ? faSolidHeart : faRegularHeart}
          color={isLike ? theme.colors.red : theme.colors.black}
          size="2xl"
          onClick={handleLike}
          css={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Detail;
