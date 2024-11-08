/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../apis/axios";
import {
  q,
  qAppContainer,
  qButtonGrid,
  qContent,
  qQuestion,
  qTopicButton,
} from "./Question.style";

const Q1: React.FC = () => {
  const navigate = useNavigate();
  const user_id = useParams();

  const handleTopicClick = async (topic: { num: string; path: string }) => {
    try {
      await axiosInstance.post(`/survey/${user_id}/1`, {
        surveyAnswer: topic.num,
      });

      navigate(topic.path);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  const topics = [
    { num: "10", path: "/question/2", name: "10대" },
    { num: "20", path: "/question/2", name: "20대" },
    { num: "30", path: "/question/2", name: "30대" },
    { num: "40", path: "/question/2", name: "40대" },
    { num: "50", path: "/question/2", name: "50대 이상" },
  ];

  return (
    <div css={qAppContainer}>
      <div css={qContent}>
        <h5 css={q}>피부 상태 테스트</h5>
        <h3 css={qQuestion}>Q. 나이대를 선택하세요.</h3>
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

export default Q1;
