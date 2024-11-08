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

const Q7: React.FC = () => {
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
    { num: "1", path: "/Q8", name: "이마 탄력이 꽤 있는 편이다." },
    { num: "2", path: "/Q8", name: "보통이다." },
    { num: "3", path: "/Q8", name: "이마 탄력이 별로 없다." },
  ];

  return (
    <div css={qAppContainer}>
      <div css={qContent}>
        <h5 css={q}>피부 상태 테스트</h5>
        <h3 css={qQuestion}>Q. 이마 탄력의 정도를 선택하세요.</h3>
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

export default Q7;
