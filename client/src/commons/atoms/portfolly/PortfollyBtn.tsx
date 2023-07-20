import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #FF69B4, 0 0 25px #FF69B4, 0 0 50px #FF69B4, 0 0 200px #FF69B4;
  }
  40% {
    box-shadow: 0 0 5px #FF69B4, 0 0 25px #FF69B4, 0 0 50px #FF69B4, 0 0 200px #FF69B4;
  }
  100% {
    box-shadow: 0 0 10px #800080, 0 0 20px #800080, 0 0 40px #800080, 0 0 100px #800080;
  }
`;

const StyledButton = styled.button<{ isClicked: boolean }>`
  font-size: 1.5em;
  text-align: center;
  color: white;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  background: ${(props) => (props.isClicked ? '#FF69B4' : '#FF69B4')};
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  animation: ${glow} 2s infinite alternate;

  &:hover {
    background: #ff69b4;
    transform: scale(1.05);
  }
`;

const CenteredDiv = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Cursor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 9999;
`;

export default function PortfollyBtn() {
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <CenteredDiv>
      <StyledButton
        isClicked={isClicked}
        onClick={() => {
          setIsClicked(!isClicked);
          navigate('/main');
        }}
      >
        Portfolly
      </StyledButton>
      <Cursor style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    </CenteredDiv>
  );
}
