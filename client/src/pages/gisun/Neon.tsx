import tw from 'twin.macro';
import { styled } from 'styled-components';
import { CSSProperties } from 'react';

interface NeonProps {
  style?: CSSProperties | undefined;
}
interface StyledElementProps {
  '--clr': string;
}

const Gradient = styled.div`
  background: linear-gradient(45deg, #ff357a, #fff172);
  cursor: pointer;
  &:hover {
    border: 6px solid var(--clr);
    filter: drop-shadoe(0 0 20px var(--clr));
  }
  ${tw`
    w-10
    h-10
    p-10
    rounded-md

  `}
`;

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerLogin = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const StyledElement = styled.i<StyledElementProps>`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props['--clr']};
`;

export default function Neon({}: NeonProps) {
  const customColor = '#00ff0a'; // 원하는 색상 값
  const styledElementStyle: StyledElementProps = {
    '--clr': customColor,
  };

  return (
    <div className="p-auto m-0 flex h-screen w-screen justify-center bg-black">
      <div className="relative flex h-[500px] w-[500px] items-center justify-center">
        {/* <StyledElement style={styledElementStyle} /> */}
        <Container>
          <ContainerLogin></ContainerLogin>
        </Container>

        <button className="font-nomral rounded-lg border border-zinc-200 p-10 text-white hover:bg-slate-200 hover:text-purple-500">
          Want some More ??
        </button>
        <Gradient />
      </div>
    </div>
  );
}
