import { useNavigate } from "react-router-dom";
import { SkipButtonWrapper } from "./SkipButton.styled";

export default function SkipButton () {

  const navigate = useNavigate();

  const SkipToHome = () => {
    navigate(`/main`)
  }
  return (
    <>
      <SkipButtonWrapper onClick={SkipToHome}>
        <span>Skip</span>
      </SkipButtonWrapper>
    </>
  );
}