import React, { useContext, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import {
  CustomerInfoContainer,
  TextBox,
  PhoneContainer,
  TextBoxPhone,
  PostButton,
  PTag1,
  PTag,
  PostButtonPTag,
  Asterisk,
} from "./CustomerInfoInputStyles";

import { MainPTag } from "../content/main/mainStyles";

const CustomerInfoInput = () => {
  // 모달의 열림, 닫힘 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 사용자가 입력한 값들을 관리하는 상태의 초기값
  const [companyName, setCompanyName] = useState("");
  const [phonePart1, setPhonePart1] = useState("");
  const [phonePart2, setPhonePart2] = useState("");
  const [phonePart3, setPhonePart3] = useState("");
  const [industry, setIndustry] = useState("");
  const [blogAddress, setBlogAddress] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  // 값을 DB에 저장하기위한 함수 ( 제출하기 버튼을 누르면 실행 )
  const PostButtonClick = (e) => {
    e.preventDefault();
    // 전화번호 하나로 합치기 000-0000-0000 형식
    const phoneNumber = `${phonePart1}-${phonePart2}-${phonePart3}`;

    const data = {
      companyName,
      phoneNumber,
      industry,
      blogAddress,
      privacyAgreed,
    };

    if (!(privacyAgreed === false)) {
      axios
        .post("http://localhost/customerinfo", {
          companyName: companyName,
          phoneNumber: phoneNumber,
          industry: industry,
          blogAddress: blogAddress,
          privacyAgreed: privacyAgreed,
        })
        .then((response) => {
          alert("제출에 성공하였습니다.");
          window.location = "/";
        })
        .catch(() => {
          alert("정확한 값을 입력해주세요.");
        });
    } else {
      alert("개인정보 처리 방침에 동의하여주세요.");
    }
  };

  return (
    <>
      <CustomerInfoContainer>
        <div>
          <form>
            <PTag1>
              <Asterisk>*</Asterisk> 업체명(기관)명
            </PTag1>
            <TextBox
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <PTag>
              <Asterisk>*</Asterisk> 연락처
            </PTag>
            <PhoneContainer>
              <TextBoxPhone
                type="text"
                value={phonePart1}
                onChange={(e) => setPhonePart1(e.target.value)}
                maxLength={3}
                required
              />{" "}
              -
              <TextBoxPhone
                type="text"
                value={phonePart2}
                onChange={(e) => setPhonePart2(e.target.value)}
                maxLength={4}
                required
              />{" "}
              -
              <TextBoxPhone
                type="text"
                value={phonePart3}
                onChange={(e) => setPhonePart3(e.target.value)}
                maxLength={4}
                required
              />
            </PhoneContainer>
            <PTag>
              <Asterisk>*</Asterisk> 업종
            </PTag>
            <TextBox
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            />
            <PTag>
              <Asterisk>*</Asterisk> 블로그 주소
            </PTag>
            <TextBox
              type="text"
              value={blogAddress}
              onChange={(e) => setBlogAddress(e.target.value)}
              required
            />
          </form>
          <input
            type="checkbox"
            checked={privacyAgreed}
            onChange={(e) => setPrivacyAgreed(e.target.checked)}
          />
          {} 개인정보 처리 방침에 동의합니다. {}
          <button onClick={openModal}>자세히</button>
        </div>
        <PostButton onClick={PostButtonClick}>
          <PostButtonPTag>제 출 하 기</PostButtonPTag>
        </PostButton>
      </CustomerInfoContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>개인정보 처리 방침 내용</p>
      </Modal>
    </>
  );
};

export default CustomerInfoInput;
