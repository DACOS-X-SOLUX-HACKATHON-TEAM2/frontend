/** @jsxImportSource @emotion/react */

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import theme from "../../../../styles/theme";
import { postLike } from "../../apis/postLike";
import {
  cardStyle,
  descriptionStyle,
  imagestyle,
  titleStyle,
} from "./ProductCard.style";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  link: string;
  description: string;
}

const ProductCard = ({
  id,
  image,
  name,
  link,
  description,
}: ProductCardProps) => {
  const [isLike, setIsLike] = useState(false);
  const userId = useParams();

  const handleLink = () => {
    window.open(link, "_blank");
  };

  const handleLike = () => {
    setIsLike(!isLike);
    postLike(id, +userId);
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
      <div css={descriptionStyle} className="description">
        {description}
      </div>
    </article>
  );
};

export default ProductCard;
