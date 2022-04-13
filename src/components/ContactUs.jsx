import styled from "@emotion/styled";
import { largeMobile, mobile } from "../responsive";
import {MailOutlined, Phone, Room} from '@mui/icons-material';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 5rem 0;
  color: #44337A;
`;

const Wrapper = styled.div`
  display: flex;
  margin:20px;
  ${mobile({flexDirection:"column"})};
  ${largeMobile({flexDirection:"column"})};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:1;
  margin-top: 10px;
`;

const Heading = styled.h1`
    color:#AF006B;
    ${mobile({fontSize:"1.8rem"})};
`;

const Desc =styled.p`
    color:#AF006B;
    font-size: 1.5rem;
    ${mobile({fontSize:"1.2rem"})};
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    background-color: #272D38;
    border-radius: 10px;
    box-shadow: 5px 5px 8px #000;
    ${mobile({fontSize:"0.8rem"})};
`;

const ContactItem = styled.div`
    color:#0BC5EA;
    display: flex;
    margin-bottom: 14px;
`;


const ContactUs = () => {
  return (
    <Container id="contact-us">
      <Title>CONTACT US</Title>

      <Wrapper>

        <Content>

          <Heading>GET IN TOUCH</Heading>

          <Desc>Hey we are looking forward to start a project with you!</Desc>

          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, illum quam voluptates ullam </Desc>

        </Content>

        <ContactContainer>

            <Heading style={{color:"#0BC5EA"}}>Contact</Heading>

            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path, South Tobinchester 98336
            </ContactItem>

            <ContactItem>
                <Phone style={{marginRight: "10px"}}/> +1 234 56 78
            </ContactItem>

            <ContactItem>
                <MailOutlined style={{marginRight: "10px"}}/> contact@nick.dev
            </ContactItem>
          
        </ContactContainer>

      </Wrapper>
  
    </Container>
  )
}

export default ContactUs