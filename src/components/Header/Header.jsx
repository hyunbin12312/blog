import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { HeaderContainer, HeaderLi, HeaderUl, LogoImage } from "./HeaderStyles";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navi = useNavigate();

  // Header에 존재하는 메뉴를 눌렀을 때의 실행함수
  const goTo = (path) => {
    navi(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 현재 선택된 메뉴의 경로를 상태로 관리
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  // Header 배경의 투명도
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    // 화면이 최상단에 위치해있다면 투명도를 0으로, 스크롤을 내리면 0.4로
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgOpacity(0.4);
      } else {
        setBgOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer bgOpacity={bgOpacity}>
        <LogoImage onClick={() => goTo("/")} />
        <HeaderUl>
          <HeaderLi
            active={activeMenu === "/page1"}
            onClick={() => goTo("/page1")}
          >
            회사소개
          </HeaderLi>
          <HeaderLi
            active={activeMenu === "/page2"}
            onClick={() => goTo("/page2")}
          >
            작업방식
          </HeaderLi>
          <HeaderLi
            active={activeMenu === "/page3"}
            onClick={() => goTo("/page3")}
          >
            상담하기
          </HeaderLi>
        </HeaderUl>
      </HeaderContainer>
    </>
  );
};

export default Header;
