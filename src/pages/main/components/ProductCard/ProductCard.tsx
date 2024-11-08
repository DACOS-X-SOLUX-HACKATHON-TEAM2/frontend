/** @jsxImportSource @emotion/react */

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleLink = () => {
    window.open(link, "_blank");
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLike(!isLike);
    postLike(id);
  };

  const handleProductCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate("/detail", {
      state: { product: { id, image, name, link, description }, isLike },
    });
  };

  return (
    <article css={cardStyle} onClick={handleProductCard}>
      <img src={image} css={imagestyle} />
      <div css={{ display: "flex", gap: "1rem" }}>
        <h3 css={titleStyle}>{name}</h3>
        <FontAwesomeIcon
          icon={isLike ? faSolidHeart : faRegularHeart}
          color={isLike ? theme.colors.red : theme.colors.black}
          size="2xl"
          onClick={(e) => handleLike(e)}
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
