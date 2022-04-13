import styled from "@emotion/styled"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import hero from "../assets/hero-img.jpg";
import { largeMobile, mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding:10px 20px;
    ${mobile({flexDirection:"column"})};
    ${largeMobile({flexDirection:"column"})};
`;

const Left = styled.div`
    flex:1;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    margin:1rem;
`;

const Title = styled.h1`
    font-weight: 800;
    color:#9F7AEA;
    font-size: 3rem;
`;

const Desc = styled.span`
    font-size: 1.5rem;
    color:#A0AEC0;
`;

const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:120px;
    height: 40px;
    border-radius: 30px;
    color:#A0AEC0;
    background-color: transparent;
    border:1px solid #A0AEC0;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover{
        border:1px solid #fec10f;
        color:#fec10f
    }
`;

const ItemDetail = styled.span`
    font-size: 1.2rem;
    color:#A0AEC0;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    max-width:180px;
    color:#A0AEC0;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    flex:1;
`;

const HeroContainer = styled.div``;

const HeroImage = styled.img`
    width:100%;
`;

const Jumbotron = () => {
  return (
    <Container>
        <Left>
            <InfoContainer>
                <Item>
                    <Title>VPN PRO</Title>     
                </Item>
                <Item>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate amet. Delectus aperiam, alias tempore ullam aspernatur omnis, excepturi hic corporis aliquam, veritatis repudiandae tempora minus molestias sed eaque voluptatibus.</Desc>
                </Item>
                <Item>
                    <Button>Get Details <ArrowRightAltOutlinedIcon/></Button>
                </Item>
                <Item>
                    <ItemDetail>Compaitable With:</ItemDetail>
                </Item>
                <Item>
                    <Icons>
                        <DesktopWindowsOutlinedIcon/>
                        <PhoneIphoneOutlinedIcon/>
                        <PhoneAndroidOutlinedIcon/>
                    </Icons>
                </Item>
            </InfoContainer>
        </Left>
        <Right>
            <HeroContainer>
                <HeroImage src={hero}/>
            </HeroContainer>
        </Right>
    </Container>
  )
}

export default Jumbotron