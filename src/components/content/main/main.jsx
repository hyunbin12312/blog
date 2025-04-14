import {
  MainContainer,
  BackgroundContainer,
  MainContent1,
  MainContent2,
  MainContent3,
  MainContent4,
  MainContent5,
  MainPTag,
  MainSpanTag,
  AnimatedLetter,
  FadeInOut,
  FadeIn,
  AnimatedContainer,
  HoverText,
  HoverTextWithImageWrapper,
  FloatingImage,
  FloatingImage2,
  MainContent6,
} from "./mainStyles";
import CustomerInfoInput from "../../CustomerInfoInput/CustomerInfoInput";
import AnimatedOnScrollContainer from "./AnimatedOnScrollController";
import Header from "../../Header/Header";
import { HeaderContainer } from "../../Header/HeaderStyles";

const Main = () => {
  const AnimatedText = ({ text }) => {
    return (
      <div style={{ textAlign: "center" }}>
        {text.split("").map((char, index) => (
          <AnimatedLetter key={index} delay={index * 0.3}>
            {char}
          </AnimatedLetter>
        ))}
      </div>
    );
  };

  const AnimatedAll = ({ children }) => {
    return <AnimatedContainer>{children}</AnimatedContainer>;
  };

  const HoverTextWithImage = ({ text, imgSrc, imgAlt }) => {
    return (
      <HoverTextWithImageWrapper>
        {text}
        <FloatingImage src={imgSrc} alt={imgAlt} />
      </HoverTextWithImageWrapper>
    );
  };

  const HoverTextWithImage2 = ({ text, imgSrc, imgAlt }) => {
    return (
      <HoverTextWithImageWrapper>
        {text}
        <FloatingImage2 src={imgSrc} alt={imgAlt} />
      </HoverTextWithImageWrapper>
    );
  };

  return (
    <>
      <BackgroundContainer></BackgroundContainer>
      <MainContainer>
        <Header />

        <MainContent1>
          <MainPTag
            style={{
              paddingTop: "250px",
              color: "GrayText",
            }}
          >
            마케팅의 정석은?
          </MainPTag>
          <AnimatedText text="닥터비즈" />
          <MainPTag style={{ color: "GrayText" }}>
            ❝ 광고 말고, 진짜 마케팅.
          </MainPTag>
          <MainPTag style={{ color: "GrayText" }}>
            브랜드가 말하게 만드는 스토리텔링 블로그 ❞
          </MainPTag>
          <MainPTag style={{ margin: "100px 0px 0px 0px", fontWeight: "bold" }}>
            🟢
          </MainPTag>
        </MainContent1>

        <MainContent2 style={{ backgroundColor: "white" }}>
          <AnimatedOnScrollContainer>
            <MainPTag
              style={{
                marginBottom: "20px",
                marginRight: "400px",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "60px" }}>
                DOCTORBIZ
              </span>
              <span> 만의 장점</span>
            </MainPTag>
            <MainPTag style={{ marginLeft: "450px" }}>
              <span style={{ color: "red" }}>✔︎</span>{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                브랜드블로그 대행 전문
              </span>
            </MainPTag>
            <MainPTag style={{ marginLeft: "482px" }}>
              <span style={{ color: "red" }}>✔︎</span>{" "}
              <span style={{ fontWeight: "bold" }}>
                수년간의 실전 마케팅 경험
              </span>
            </MainPTag>
            <MainPTag style={{ marginLeft: "636px" }}>
              <span style={{ color: "red" }}>✔︎</span>{" "}
              <span style={{ fontWeight: "bold" }}>
                직접 분석하고 직접 쓰는 상위노출 콘텐츠
              </span>
            </MainPTag>
            <MainPTag style={{ paddingTop: "130px", color: "GrayText" }}>
              ❝ 단순한 홍보 글이 아닌, 소비자가 믿고 기억하는 브랜드를 만드는 게
              저희 닥터비즈의 철학입니다. ❞
            </MainPTag>
          </AnimatedOnScrollContainer>
        </MainContent2>

        <MainContent5>
          <MainPTag
            style={{
              paddingTop: "450px",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            제공하는 서비스
          </MainPTag>
          <MainPTag style={{ marginTop: "40px" }}>01.</MainPTag>
          <HoverTextWithImage
            text={"브랜드블로그 관리 대행"}
            imgSrc={process.env.PUBLIC_URL + "/photo1.jpg"}
            imgAlt={"Image 1"}
          />
          <MainPTag style={{ marginTop: "40px" }}>02.</MainPTag>
          <HoverTextWithImage2
            text={"스토리텔링 중심 콘텐츠 제작"}
            imgSrc={process.env.PUBLIC_URL + "/photo2.jpg"}
            imgAlt={"Image 2"}
          />
          <MainPTag style={{ marginTop: "40px" }}>03.</MainPTag>
          <HoverTextWithImage
            text={"네이버플레이스 최적화"}
            imgSrc={process.env.PUBLIC_URL + "/photo3.jpg"}
            imgAlt={"Image 3"}
          />
        </MainContent5>

        <MainContent6></MainContent6>

        <div style={{ height: "250px" }}></div>
        <MainContent3>
          <div style={{ height: "50px" }} />
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/ChatImage.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "45px",
              height: "45px",
              margin: "auto",
            }}
          >
            {/* 여기에 다른 콘텐츠 */}
          </div>
          <MainPTag
            style={{ fontSize: "40px", fontWeight: "bold", marginTop: "10px" }}
          >
            문의하기
          </MainPTag>
          <MainPTag
            style={{
              fontSize: "17px",
              color: "GrayText",
            }}
          >
            단순 양산형 업체와는 다릅니다. <br />
            브랜드를 '기억'에 남게 만들고 싶다면, <br />
            저희와 한 번 이야기해보세요.
          </MainPTag>
        </MainContent3>
        <MainContent4 style={{ paddingTop: "50px" }}>
          <CustomerInfoInput />
        </MainContent4>
      </MainContainer>
    </>
  );
};

export default Main;
