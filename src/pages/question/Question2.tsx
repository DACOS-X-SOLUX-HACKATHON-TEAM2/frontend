/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  qAppContainer,
  qContent,
  qQuestion,
  qButtonGrid,
  qTopicButton,
  q,
} from "./Question.style";

const Q2: React.FC = () => {
  const [selectedTopic] = useState<{
    num: string;
    path: string;
    name: string;
  } | null>(null);

  const navigate = useNavigate();

  const handleTopicClick = (topicPath: string) => {
    navigate(topicPath);
  };

  const topics = [
    { num: "0", path: "/Q3", name: "남자" },
    { num: "1", path: "/Q3", name: "여자" },
  ];

  return (
    <div css={qAppContainer}>
      <div css={qContent}>
        <h5 css={q}>피부 상태 테스트</h5>
        <h3 css={qQuestion}>Q. 성별을 선택하세요.</h3>
        <div css={qButtonGrid}>
          {topics.map((topic) => (
            <button
              key={topic.num}
              className={`qTopicButton ${
                selectedTopic?.num === topic.num ? "selected" : ""
              }`}
              onClick={() => handleTopicClick(topic.path)}
              css={qTopicButton}
            >
              <span>{topic.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Q2;
