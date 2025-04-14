import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;

  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${({ bgOpacity }) => `rgba(0, 0, 0, ${bgOpacity})`};
  transition: background-color 0.3s ease;
`;

export const LogoImage = styled.div`
  width: 300px;
  height: 70px;
  margin: 0px 400px 0px 0px;

  background-image: url("/DOCTORBIZ_LOGO.png");
  background-size: cover; /* 이미지가 컨테이너를 꽉 채우도록 */
  background-position: center; /* 중앙 정렬 */
  background-repeat: no-repeat; /* 반복하지 않도록 */
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding-left: 100px;

  font-size: 18px;
  font-weight: bold;
`;

export const HeaderLi = styled.li`
  margin: 0 15px;
  color: ${({ active }) => (active ? "black" : "white")};

  &:hover {
    cursor: pointer;
    color: black;
  }
`;
