import styled from "@emotion/styled";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import { largeMobile, mobile } from "../responsive";


const Container = styled.div``;

const Title = styled.h1`
    text-align: center;
    color:#26DF82;
    margin: 3rem 2rem 0;
`;

const Desc = styled.h3`
    text-align: center;
    color:#26DF82;
`;

const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    ${mobile({flexDirection:"column", flexWrap:"nowrap"})};
    ${largeMobile({flexDirection:"column", flexWrap:"nowrap"})};
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 20%;
    min-height:150px;
    flex:1;
    margin:10px;
    background-color: #272D38;
    color:#A0AEC0;
    border-radius: 8px;
    box-shadow: 5px 5px 8px #000;
`;


const IconContainer = styled.div``;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding:5px;
`;

const Detail = styled.span``;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top:1rem;
`;

const Image = styled.img`
    width: 50px;
    border-radius:50%;
`;

const User = styled.div`
    display: flex;
    justify-content: center;
`;

const Name = styled.p``;

const Testimonials = () => {
  return (
      <Container id="testimonials">
        <Title>TESTIMONIALS</Title>
        <Desc>What our customers are saying...</Desc>
        <Wrapper>
            <Card>
                <IconContainer>
                    <FormatQuoteIcon/>
                </IconContainer>
                
                <Info>
                    <Detail>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quaerat. Recusandae amet ea magni quam minus voluptates, eaque quisquam omnis sint natus, quo error dolores dolore numquam, voluptatum odit eligendi..</Detail>
                </Info>

                <ImageContainer>
                    <Image src={user1}/>
                </ImageContainer>

                <User>
                    <Name>Sean Parker</Name>
                </User>
            </Card>

            <Card>
                <IconContainer>
                    <FormatQuoteIcon/>
                </IconContainer>

                <Info>
                    <Detail>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quaerat. Recusandae amet ea magni quam minus voluptates, eaque quisquam omnis sint natus, quo error dolores dolore numquam, voluptatum odit eligendi..</Detail>
                </Info>

                <ImageContainer>
                    <Image src={user2}/>
                </ImageContainer>

                <User>
                    <Name>Mike Smith</Name>
                </User>
            </Card>

            <Card>
                <IconContainer>
                    <FormatQuoteIcon/>
                </IconContainer>

                <Info>
                    <Detail>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quaerat. Recusandae amet ea magni quam minus voluptates, eaque quisquam omnis sint natus, quo error dolores dolore numquam, voluptatum odit eligendi..</Detail>
                </Info>

                <ImageContainer>
                    <Image src={user3}/>
                </ImageContainer>

                <User>
                    <Name>Mabel Joe</Name>
                </User>
            </Card>
        </Wrapper>
      </Container>
  )
}

export default Testimonials