/** @jsxImportSource @emotion/react */
import React from "react";

import { REPORT } from "../../constants/report";
import { getSkinType } from "../../utils/type";
import {
  bgStyle,
  buttonStyle,
  contentBoxStyle,
  dialogStyle,
  headerStyle,
  modalTitleStyle,
} from "./ReportModal.style";

interface ReportModalProps {
  onClose: () => void;
  skinType: number;
  modalType: "feature" | "care";
}

const ReportModal = ({ onClose, skinType, modalType }: ReportModalProps) => {
  const type = getSkinType(skinType);

  const reportData = REPORT[type];

  return (
    <div css={bgStyle}>
      <dialog css={dialogStyle}>
        <header css={headerStyle}>
          {modalType === "feature" ? (
            <h4 css={modalTitleStyle}>{type} 피부 특징</h4>
          ) : (
            <h4 css={modalTitleStyle}>{type} 피부 관리 방법</h4>
          )}
          <button css={buttonStyle} onClick={onClose} aria-label="Close Modal">
            X
          </button>
        </header>
        <div css={contentBoxStyle}>
          {modalType === "feature" ? (
            <p>{reportData.feature}</p>
          ) : (
            <p>{reportData.care}</p>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default ReportModal;
