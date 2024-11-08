/** @jsxImportSource @emotion/react */

import {
  buttonStyle,
  cardStyle,
  heartButtonStyle,
  imageStyle,
  imageWrapper,
  textWrapper,
  titleStyle,
} from "./LikeProductCard.style";

interface ProductCardProps {
  productImage: string;
  productName: string;
  productLink: string;
}

const LikeProductCard = ({
  productImage,
  productName,
  productLink,
}: ProductCardProps) => {
  const handleLink = () => {
    window.open(productLink, "_blank");
  };

  return (
    <article css={cardStyle}>
      <div css={imageWrapper}>
        <img src={productImage} css={imageStyle} alt={productName} />
      </div>
      <div css={textWrapper}>
        <h3 css={titleStyle}>{productName}</h3>
        <button css={buttonStyle} onClick={handleLink}>
          올리브영에서 확인하기 &gt;
        </button>
      </div>
      <button css={heartButtonStyle}>♥</button>
    </article>
  );
};

export default LikeProductCard;
