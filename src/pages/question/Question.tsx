/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  recommendationHeading,
  recommendationParagraph,
} from "../login/Login.style";
import { layoutStyle, pageStyle, skipButtonStyle } from "./Question.style";

const Question = () => {
  const navigate = useNavigate();

  return (
    <div css={pageStyle}>
      <div css={layoutStyle}>
        <h1 css={recommendationHeading}>SkinLAB</h1>
        <p css={recommendationParagraph}>
          SkinLAB을 통해 나의 피부 타입에 맞는 기초 제품을 추천받아 보세요!
        </p>
        <Button
          variant="primary"
          css={{ width: "25rem" }}
          onClick={() => navigate("/question/1")}
        >
          피부 진단 하러 가기
        </Button>
        <button css={skipButtonStyle} onClick={() => navigate("/main")}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default Question;
