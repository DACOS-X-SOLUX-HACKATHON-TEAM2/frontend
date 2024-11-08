/** @jsxImportSource @emotion/react */
import React from "react";
import Button from "../../../../components/Button/Button";
import { titleStyle } from "../../SurveyReport.style";
import { layoutStyle } from "./ReportBox.style";

interface ReportBoxProps {
  title: string;
  onClick: () => void;
}

const ReportBox = ({ title, onClick }: ReportBoxProps) => {
  return (
    <div css={layoutStyle}>
      <h4 css={titleStyle}>{title}</h4>
      <Button variant="primary" onClick={onClick}>
        자세히 보기
      </Button>
    </div>
  );
};

export default ReportBox;
