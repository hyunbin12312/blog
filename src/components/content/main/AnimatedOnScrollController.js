// AnimatedOnScrollContainer.jsx
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

// 기존 FadeIn 애니메이션 키프레임 (필요한 경우 수정)
const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 기본 스타일은 초기 상태에서 숨겨진 상태로 설정
const StyledAnimatedContainer = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  /* "visible" 클래스가 적용되면 애니메이션 실행 */
  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${FadeIn} 1.5s forwards;
  }
`;

const AnimatedOnScrollContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          // 요소가 50% 이상 보이면 visible 상태로 전환
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target); // 한 번 트리거되면 더 이상 관찰하지 않음
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <StyledAnimatedContainer
      ref={containerRef}
      className={visible ? "visible" : ""}
    >
      {children}
    </StyledAnimatedContainer>
  );
};

export default AnimatedOnScrollContainer;
