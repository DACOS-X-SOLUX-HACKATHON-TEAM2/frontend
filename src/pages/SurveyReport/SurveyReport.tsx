/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import ReportBox from "./components/ReportBox/ReportBox";
import ReportModal from "./components/ReportModal/ReportModal";

import { useNavigate, useParams } from "react-router-dom";
import theme from "../../styles/theme";
import {
  pageStyle,
  reportSectionStyle,
  reportStyle,
  textLayoutStyle,
  titleStyle,
} from "./SurveyReport.style";
import { putType } from "./apis/putType";

type Modal = "feature" | "care";

const SurveyReport = () => {
  const [skinType, setSkinType] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<Modal>("feature");

  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const fetchSkinType = async () => {
      try {
        const data = await putType(+userId!);
        setSkinType(data?.skinType);
      } catch (error) {
        console.error("Failed to fetch skin type", error);
      }
    };

    fetchSkinType();
  }, []);

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
          <h2 css={reportStyle}>당신의 피부 타입은 {skinType}입니다.</h2>
        </div>
        <section css={reportSectionStyle}>
          <ReportBox
            title={`${skinType} 피부 특징`}
            onClick={() => handleOpenModal("feature")}
          />
          <ReportBox
            title={`${skinType} 피부 관리 방법`}
            onClick={() => handleOpenModal("care")}
          />
        </section>
        <Button
          variant="primary"
          css={{
            ...theme.fonts.subtitle3,
          }}
          onClick={() => navigate("/main")}
        >
          피부 타입에 맞는 추천 화장품 보러 가기 &gt;
        </Button>
      </main>
      {isModalOpen && modalType && (
        <ReportModal
          modalType={modalType}
          skinType={skinType}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SurveyReport;
