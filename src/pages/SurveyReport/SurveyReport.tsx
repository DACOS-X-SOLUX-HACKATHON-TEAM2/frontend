/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Button from "../../components/Button/Button";
import ReportBox from "./components/ReportBox/ReportBox";
import ReportModal from "./components/ReportModal/ReportModal";

import theme from "../../styles/theme";
import { TYPE } from "./constants/report";
import {
  pageStyle,
  reportSectionStyle,
  reportStyle,
  textLayoutStyle,
  titleStyle,
} from "./SurveyReport.style";
import { getSkinType } from "./utils/type";

type Modal = "feature" | "care";

const SurveyReport = () => {
  const type = getSkinType(TYPE.type);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<Modal>("feature");

  const handleOpenModal = (type: Modal) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div css={{ height: "100dvh" }}>
      <main css={pageStyle}>
        <div css={textLayoutStyle}>
          <h1 css={titleStyle}>피부 상태 진단 결과</h1>
          <h2 css={reportStyle}>당신의 피부 타입은 {type}입니다.</h2>
        </div>
        <section css={reportSectionStyle}>
          <ReportBox
            title={`${type} 피부 특징`}
            onClick={() => handleOpenModal("feature")}
          />
          <ReportBox
            title={`${type} 피부 관리 방법`}
            onClick={() => handleOpenModal("care")}
          />
        </section>
        <Button
          variant="primary"
          css={{
            ...theme.fonts.subtitle3,
          }}
        >
          피부 타입에 맞는 추천 화장품 보러 가기 &gt;
        </Button>
      </main>
      {isModalOpen && modalType && (
        <ReportModal
          modalType={modalType}
          skinType={TYPE.type}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SurveyReport;
