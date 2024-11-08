/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis/axios";
import {
  q,
  qAppContainer,
  qButtonGrid,
  qContent,
  qQuestion,
  qTopicButton,
} from "./Question.style";

const Q4: React.FC = () => {
  const navigate = useNavigate();

  const handleTopicClick = async (topic: { num: string; path: string }) => {
    try {
      await axiosInstance.post("/survey", {
        surveyAnswer: topic.num,
      });

      navigate(topic.path);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };
  const topics = [
    { num: "0", path: "/question/5", name: "눈가 주름이 꽤 있는 편이다." },
    { num: "1", path: "/question/5", name: "보통이다." },
    { num: "2", path: "/question/5", name: "눈가 주름이 별로 없다." },
  ];

  return (
    <div css={qAppContainer}>
      <div css={qContent}>
        <h5 css={q}>피부 상태 테스트</h5>
        <h3 css={qQuestion}>Q. 눈가 주름의 정도를 선택하세요.</h3>
        <div css={qButtonGrid}>
          {topics.map((topic) => (
            <button
              key={topic.num}
              onClick={() => handleTopicClick(topic)}
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

export default Q4;
