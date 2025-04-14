import styled from "styled-components";

export const CustomerInfoContainer = styled.div`
  width: 950px;
  height: 450px;
  display: flex;
  align-items: center;
  text-align: left;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.13);
  border-radius: 15px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: column; /* 자식들을 세로로 정렬 */
  background-color: white;
`;

export const Asterisk = styled.span`
  font-weight: normal;
  color: red;
`;

export const PTag1 = styled.p`
  font-weight: bold;
  padding: 0px 0px 0px 0px;
  margin: 25px 0px 0px 0px;
`;

export const PTag = styled.p`
  font-weight: bold;
  bold: 15px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
`;

export const TextBox = styled.input`
  width: 880px;
  height: 40px;
  padding-left: 10px;
  margin: 10px 0px 10px 0px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  font-size: 16px;
  background-color: #f5f5f5;

  /* 클릭했을 때 효과 제거*/
  &:focus {
    outline: none;
    box-shadow: none;
    border: 1px solid #f5f5f5;
  }
`;

export const PhoneContainer = styled.div`
  width: 880px; /* 혹은 원하는 너비 */
  display: flex;
  margin: 10px 0px 10px 0px;
  gap: 10px; /* 각 input 사이에 간격 */
  align-items: center;
`;

export const TextBoxPhone = styled.input`
  flex: 1; /* 부모의 가용 공간을 동일하게 분할 */
  height: 20px;
  padding: 10px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  font-size: 16px;
  background-color: #f5f5f5;

  &:focus {
    outline: none;
    box-shadow: none;
    border: 1px solid #f5f5f5;
  }
`;

export const PostButton = styled.div`
  width: 950px;
  height: 60px;
  margin-top: 15px;
  background-color: #4b89dc;
  display: flex;
  justify-content: center; /* 좌우 정렬 */
  align-items: center; /* 수직 정렬 */
  border-radius: 0px 0px 15px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const PostButtonPTag = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
