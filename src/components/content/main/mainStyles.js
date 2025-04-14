import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const BackgroundContainer = styled.div`
  position: fixed; /* 또는 relative */
  top: 0;
  left: 0;
  margin-top: 100px;
  width: 100%;
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL}/MainContainer_image2.jpg);
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const MainContent1 = styled.div`
  width: 100%;
  height: 800px;
  text-align: center;
  align-items: center;
  background-color: white;
`;

export const MainContent2 = styled.div`
  margin: auto;
  width: 100%;
  height: 250px;
  text-align: center;
`;

export const MainContent3 = styled.div`
  width: 100%;
  height: 200px;

  text-align: center;
  background-color: white;
`;

export const MainContent4 = styled.div`
  width: 100%;
  height: 500px;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: white;
`;

export const MainContent5 = styled.div`
  width: 100%;
  height: 1200px;
  background-color: white;
  text-align: center;
`;

export const MainContent6 = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
`;

export const MainPTag = styled.p`
  margin: 0px;
  font-size: 25px;
`;

export const MainSpanTag = styled.span`
  text-align: center;
  align-item: center;
`;

export const FadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedLetter = styled.span`
  display: inline-block;
  opacity: 0; /* 초기 상태는 투명 */
  animation: ${FadeInOut} 3s forwards;
  animation-delay: ${({ delay }) => delay}s;

  font-size: 70px;
  font-weight: bold;
  margin: 0px;
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedContainer = styled.div`
  animation: ${FadeIn} 1.5s forwards;
`;

export const HoverText = styled.span`
  display: inline-block; /* transform 효과를 적용하기 위해 block-level 속성으로 변경 */
  position: relative; /* ::after의 absolute 위치 기준 */
  cursor: pointer;
  transition: color 0.3s ease;

  font-size: 30px;
  font-weight: bold;

  /* 가상의 밑줄을 만들어줍니다 */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0; /* 텍스트 바로 밑에 위치 */
    transform: translateX(-50%) scaleX(0); /* 초기 상태는 가운데에서 0 길이 */
    transform-origin: center; /* transform의 기준점을 가운데로 */
    width: 100%;
    height: 2px; /* 밑줄 두께 */
    background-color: currentColor; /* 부모 텍스트 색상을 따름 */
    transition: transform 0.3s ease; /* 애니메이션 효과 */
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1); /* 호버 시 전체 너비로 확장 */
  }
`;

export const HoverTextWithImageWrapper = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;

  &:hover img {
    opacity: 1;
    transform: translate(-50%, -10px); /* 중앙에서 약간 위로 이동 */
  }

  /* 가상의 밑줄을 만들어줍니다 */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0; /* 텍스트 바로 밑에 위치 */
    transform: translateX(-50%) scaleX(0); /* 초기 상태는 가운데에서 0 길이 */
    transform-origin: center; /* transform의 기준점을 가운데로 */
    width: 100%;
    height: 2px; /* 밑줄 두께 */
    background-color: currentColor; /* 부모 텍스트 색상을 따름 */
    transition: transform 0.3s ease; /* 애니메이션 효과 */
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1); /* 호버 시 전체 너비로 확장 */
  }
`;

export const FloatingImage = styled.img`
  position: absolute;
  top: 0px; /* 텍스트 바로 아래쪽 */
  left: -400px; /* 중앙 정렬 */
  transform: translate(-20%, 0px); /* 초기 상태는 약간 아래에 위치 */
  opacity: 0; /* 기본 상태에서는 숨김 */
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;

  width: 400px;
  height: 260px;
`;

export const HoverTextWithImageWrapper2 = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;

  /* hover 시, 이미지에 효과를 주기 위한 설정 */
  &:hover img {
    opacity: 1;
    transform: translate(
      0,
      -50%
    ); /* 최종 위치: 부모의 기준으로 x축 이동 0, y축 중앙 정렬 */
  }

  /* 가상의 밑줄을 만들어줍니다 */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0; /* 텍스트 바로 밑에 위치 */
    transform: translateX(-50%) scaleX(0); /* 초기 상태는 가운데에서 0 길이 */
    transform-origin: center; /* transform의 기준점을 가운데로 */
    width: 100%;
    height: 2px; /* 밑줄 두께 */
    background-color: currentColor; /* 부모 텍스트 색상을 따름 */
    transition: transform 0.3s ease; /* 애니메이션 효과 */
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1); /* 호버 시 전체 너비로 확장 */
  }
`;

export const FloatingImage2 = styled.img`
  position: absolute;
  top: -70%; /* 세로 위치: 부모 요소의 중앙 */
  right: -750px; /* 부모 요소의 왼쪽 경계에 위치 */
  transform: translateX(-100%) translateY(-50%);
  opacity: 0; /* 초기 상태에서는 숨김 */
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;

  width: 400px;
  height: 260px;
`;

export const HoverTextWithImageWrapper3 = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;

  &:hover img {
    opacity: 1;
    transform: translate(-50%, -10px); /* 중앙에서 약간 위로 이동 */
  }

  /* 가상의 밑줄을 만들어줍니다 */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0; /* 텍스트 바로 밑에 위치 */
    transform: translateX(-50%) scaleX(0); /* 초기 상태는 가운데에서 0 길이 */
    transform-origin: center; /* transform의 기준점을 가운데로 */
    width: 100%;
    height: 2px; /* 밑줄 두께 */
    background-color: currentColor; /* 부모 텍스트 색상을 따름 */
    transition: transform 0.3s ease; /* 애니메이션 효과 */
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1); /* 호버 시 전체 너비로 확장 */
  }
`;

export const FloatingImage3 = styled.img`
  position: absolute;
  top: 300px; /* 텍스트 바로 아래쪽 */
  right: -300px; /* 중앙 정렬 */
  transform: translate(-40%, 0px); /* 초기 상태는 약간 아래에 위치 */
  opacity: 0; /* 기본 상태에서는 숨김 */
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;

  width: 400px;
  height: 260px;
`;
