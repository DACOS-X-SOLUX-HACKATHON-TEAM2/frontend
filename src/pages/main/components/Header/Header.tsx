/** @jsxImportSource @emotion/react */

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { TYPE } from "../../../SurveyReport/constants/report";
import { getSkinType } from "../../../SurveyReport/utils/type";
import {
  entireHeaderStyle,
  headerStyle,
  titleLayoutStyle,
  titleStyle,
  typeStyle,
} from "./Header.style";

const Header = () => {
  const type = getSkinType(TYPE.type);

  const navigate = useNavigate();

  return (
    <header css={entireHeaderStyle}>
      <div css={headerStyle}>
        <div css={titleLayoutStyle}>
          <h2 css={typeStyle}>{type}</h2>
          <h1 css={titleStyle}>추천 피부 관리 루틴</h1>
        </div>
        <div css={{ display: "flex", gap: "2rem" }}>
          <Button
            variant="secondary"
            css={{ height: "4rem" }}
            onClick={() => navigate("/myPage")}
          >
            찜한 목록
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
  );
};

export default Header;
