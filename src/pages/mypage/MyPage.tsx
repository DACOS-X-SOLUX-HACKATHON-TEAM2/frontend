/** @jsxImportSource @emotion/react */
import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import Button from "../../components/Button/Button";
import LikeProductCard from "../../components/LikeProductCard/LikeProductCard";

import {
  pageContainer,
  headerStyle,
  buttonWrapper,
  bodyStyle,
} from "./MyPage.style";

const MyPage = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/");
  };

  const handleMainClick = () => {
    navigate("/main");
  };

  const products = [
    {
      productImage:
        "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/550/10/0000/0018/A00000018893309ko.jpg?l=ko",
      productName: "라네즈 크림스킨 170ml",
      productLink: "https://example.com",
    },
    {
      productImage:
        "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/550/10/0000/0018/A00000018893309ko.jpg?l=ko",
      productName: "제품명 2",
      productLink: "https://example.com",
    },
    {
      productImage:
        "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/550/10/0000/0018/A00000018893309ko.jpg?l=ko",
      productName: "제품명 3",
      productLink: "https://example.com",
    },
  ];

  return (
    <div css={pageContainer}>
      <header css={headerStyle}>
        <h1 css={theme.fonts.subtitle3}>좋아요 목록</h1>
        <div css={buttonWrapper}>
          <Button variant="secondary" onClick={handleMainClick}>
            메인화면
          </Button>
          <Button variant="secondary" onClick={handleLogoutClick}>
            로그아웃
          </Button>
        </div>
      </header>

      <main css={bodyStyle}>
        {products.map((product, index) => (
          <LikeProductCard
            key={index}
            productImage={product.productImage}
            productName={product.productName}
            productLink={product.productLink}
          />
        ))}
      </main>
    </div>
  );
};

export default MyPage;
