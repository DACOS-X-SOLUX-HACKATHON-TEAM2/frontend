/** @jsxImportSource @emotion/react */

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../../../../components/Button/Button";
import theme from "../../../../styles/theme";
import { cardStyle, imagestyle, titleStyle } from "./ProductCard.style";

interface ProductCardProps {
  productImage: string;
  productName: string;
  productLink: string;
}

const ProductCard = ({
  productImage,
  productName,
  productLink,
}: ProductCardProps) => {
  const [isLike, setIsLike] = useState(false);

  const handleLink = () => {
    window.open(productLink, "_blank");
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <article css={cardStyle}>
      <img src={productImage} css={imagestyle} />
      <div css={{ display: "flex", gap: "1rem" }}>
        <h3 css={titleStyle}>{productName}</h3>
        <FontAwesomeIcon
          icon={isLike ? faSolidHeart : faRegularHeart}
          color={isLike ? theme.colors.red : theme.colors.black}
          size="2xl"
          onClick={handleLike}
          css={{ cursor: "pointer" }}
        />
      </div>
      <Button variant="primary" css={{ width: "100%" }} onClick={handleLink}>
        올리브영에서 확인하기 &gt;
      </Button>
    </article>
  );
};

export default ProductCard;
