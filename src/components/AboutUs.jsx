import styled from "@emotion/styled";
import { largeMobile, mobile } from "../responsive";
import about from "../assets/about.jpg"

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 5rem 0;
  color: #ead203;
`;

const Wrapper = styled.div`
  display: flex;
  margin:20px;
  ${mobile({flexDirection:"column"})}
  ${largeMobile({flexDirection:"column"})}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:1;
  margin-top: 10px;
`;

const Desc =styled.p`
  color:#fc7545;
  font-size: 1.5rem;
  ${mobile({fontSize:"1.2rem"})};
`;

const Button = styled.button`
    width:120px;
    height: 40px;
    border-radius: 30px;
    color:#fc7545;
    background-color: transparent;
    border:1px solid #fc7545;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover{
        border:1px solid #fec10f;
        color:#fec10f
    }
`;

const ImageContainer = styled.div`
  flex:1;
  margin-top: 40px;
`;

const Image = styled.img`
  width: 100%;
`;

const AboutUs = () => {
  return (
    <Container id="about-us">
      <Title>ABOUT US</Title>

      <Wrapper>

        <Content>

          <Desc>Explore the Internet the way it was intended - Freely and Safely.</Desc>

          <Desc>Our apps enable access to your favourite sites, apps and various global contents. All while keeping you secure.</Desc>

          <Button>View Products</Button>

        </Content>

        <ImageContainer>
          <Image src={about}/>
        </ImageContainer>

      </Wrapper>
  
    </Container>
  );
};

export default AboutUs;
