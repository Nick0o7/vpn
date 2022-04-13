import styled from "@emotion/styled";
import eye from "../assets/eye.png";
import { largeMobile, mobile } from "../responsive";

const Container = styled.div`
    margin-top: 3rem;
`;

const Title = styled.h1`
    text-align: center;
    color:#0BC5EA;
`;

const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    ${mobile({flexDirection:"column",flexWrap:"nowrap"})}
    ${largeMobile({flexDirection:"column",flexWrap:"nowrap"})}
`

const Card = styled.div`
    display: flex;
    min-width: 40%;
    min-height:250px;
    flex:1;
    margin:10px;
    align-items: center;
    background-color: #272D38;
    color:#A0AEC0;
    border-radius: 8px;
    box-shadow: 5px 5px 8px #000;
`;


const ImageContainer = styled.div`
    max-width:150px;
`

const Image = styled.img`
    width: 100%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding:5px;
`;

const Heading = styled.h3`

`;

const Detail = styled.span`

`;

const Features = () => {
  return (
    <Container>
        <Title id="features">FEATURES</Title>
        <Wrapper>
            <Card>
                <ImageContainer>
                    <Image src={eye}/>
                </ImageContainer>
                
                <Info>
                    <Heading>Protect Your Data</Heading>
                    <Detail>Guard sensitive information like bank accounts, credit cards, and passwords safe from prying eyes.</Detail>
                </Info>
            </Card>

            <Card>
            <ImageContainer>
                    <Image src={eye}/>
                </ImageContainer>

                <Info>
                    <Heading>Protect Your Data</Heading>
                    <Detail>Guard sensitive information like bank accounts, credit cards, and passwords safe from prying eyes.</Detail>
                </Info>
            </Card>

            <Card>
            <ImageContainer>
                    <Image src={eye}/>
                </ImageContainer>

                <Info>
                    <Heading>Protect Your Data</Heading>
                    <Detail>Guard sensitive information like bank accounts, credit cards, and passwords safe from prying eyes.</Detail>
                </Info>
            </Card>

            <Card>
            <ImageContainer>
                    <Image src={eye}/>
                </ImageContainer>

                <Info>
                    <Heading>Protect Your Data</Heading>
                    <Detail>Guard sensitive information like bank accounts, credit cards, and passwords safe from prying eyes.</Detail>
                </Info>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Features