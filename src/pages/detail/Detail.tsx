/** @jsxImportSource @emotion/react */

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  buttonStyle,
  imageStyle,
} from "../../components/LikeProductCard/LikeProductCard.style";
import theme from "../../styles/theme";
import { postLike } from "../main/apis/postLike";
import {
  descriptionStyle,
  headerStyle,
  layoutStyle,
  pageStyle,
  productNameStyle,
} from "./Detail.style";
import { getDetail } from "./apis/getDetail";

const Detail = () => {
  const { state } = useLocation();
  const { product, isLike } = state;
  const { cosmeticsId } = useParams();

  const [liked, setLiked] = useState(isLike);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    postLike(product.id);
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const data = await getDetail(+cosmeticsId!);
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetail();
  }, [cosmeticsId]);

  return (
    <div css={pageStyle}>
      <header css={[headerStyle, { ...theme.fonts.subtitle1 }]}>
        상세 페이지
      </header>
      <div css={layoutStyle}>
        <img src={product.image} css={imageStyle} alt="상품 사진" />
        <div css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div css={{ display: "flex" }}>
            <div
              css={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <h2 css={productNameStyle}>{product.name}</h2>
              <button
                css={buttonStyle}
                onClick={() => window.open(product.link, "_blank")}
              >
                올리브영에서 확인하기 &gt;
              </button>
            </div>
            <FontAwesomeIcon
              icon={liked ? faSolidHeart : faRegularHeart}
              color={liked ? theme.colors.red : theme.colors.black}
              size="2xl"
              onClick={handleLike}
              css={{ cursor: "pointer" }}
            />
          </div>
          <span css={[descriptionStyle, { ...theme.fonts.body4 }]}>
            {product.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
