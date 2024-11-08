/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { TYPE } from "../../../SurveyReport/constants/report";
import { getSkinType } from "../../../SurveyReport/utils/type";
import {
  buttonStyle,
  categoryLayoutStyle,
  entireHeaderStyle,
  headerStyle,
  titleLayoutStyle,
  titleStyle,
  typeStyle,
} from "./Header.style";

type Routine = "스킨" | "에센스" | "로션";

const Header = () => {
  const type = getSkinType(TYPE.type);

  const navigate = useNavigate();
  const [category, setCategory] = useState<Routine>("스킨");

  const categories = ["스킨", "에센스", "로션"];

  return (
    <>
      <header css={entireHeaderStyle}>
        <div css={headerStyle}>
          <div css={titleLayoutStyle}>
            <h2 css={typeStyle}>{type}</h2>
            <h1 css={titleStyle}>추천 피부 관리 루틴</h1>
          </div>
          <div css={{ display: "flex", gap: "2rem" }}>
            <Button variant="secondary" css={{ height: "4rem" }}>
              마이페이지
            </Button>
            <Button
              variant="secondary"
              css={{ height: "4rem" }}
              onClick={() => navigate("/")}
            >
              로그아웃
            </Button>
          </div>
        </div>
      </header>

      <div css={categoryLayoutStyle}>
        {categories.map((categoryName) => (
          <Button
            key={categoryName}
            variant="secondary"
            onClick={() => setCategory(categoryName as Routine)}
            css={buttonStyle(categoryName === category)}
          >
            {categoryName}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Header;
