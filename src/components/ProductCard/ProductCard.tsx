/** @jsxImportSource @emotion/react */

import Button from "../Button/Button";
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
  const handleLink = () => {
    window.open(productLink, "_blank");
  };

  return (
    <article css={cardStyle}>
      <img src={productImage} css={imagestyle} />
      <h3 css={titleStyle}>{productName}</h3>
      <Button variant="primary" css={{ width: "100%" }} onClick={handleLink}>
        올리브영에서 확인하기 &gt;
      </Button>
    </article>
  );
};

export default ProductCard;
