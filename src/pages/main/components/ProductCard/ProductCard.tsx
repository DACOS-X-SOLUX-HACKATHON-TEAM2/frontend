/** @jsxImportSource @emotion/react */

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../../../../components/Button/Button";
import theme from "../../../../styles/theme";
import { cardStyle, imagestyle, titleStyle } from "./ProductCard.style";

interface ProductCardProps {
  image: string;
  name: string;
  link: string;
  category: number;
}

const ProductCard = ({ image, name, link, category }: ProductCardProps) => {
  const [isLike, setIsLike] = useState(false);

  const handleLink = () => {
    window.open(link, "_blank");
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <article css={cardStyle}>
      <img src={image} css={imagestyle} />
      <div css={{ display: "flex", gap: "1rem" }}>
        <h3 css={titleStyle}>{name}</h3>
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
