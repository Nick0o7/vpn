import logo from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import styled from "@emotion/styled";
import { largeMobile, mobile } from "../responsive";

const Container = styled.div`
    background-color: #000;
    position: sticky;
    top:0;
    left:0;
    right: 0;
    z-index: 3;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

const Left = styled.div`
    flex:1;
`;

const Image = styled.img`
    width:40px;
`;

const Center = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    ${mobile({display:"none"})};
    ${largeMobile({display:"none"})};
`;

const MenuItem = styled.div`
    margin:10px;
`;

const Right = styled.div`
    display:flex;
    flex:1;
    justify-content: flex-end;
    ${mobile({display:"none"})};
    ${largeMobile({display:"none"})};
`;

const Button = styled.button`
    width: 80px;
    height: 30px;
    margin-left: 10px;
    background-color: #fec10f;
    border:none;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        color:#fff;
    }
`;

const Header = () => {

  return (
    <>
    <Container>
        <Wrapper>
            <Left>
                <Link className="menu-items" to="/">
                    <Image src={logo}/>
                </Link>
            </Left>

            <Center>
            <MenuItem>
                    <Link smooth to="#features" className="menu-items">
                        FEATURES
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link smooth to="#gallery" className="menu-items">
                        GALLERY
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link smooth to="#testimonials" className="menu-items">
                        TESTIMONIALS
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link smooth to="#about-us" className="menu-items">
                        ABOUT US
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link smooth to="#contact-us" className="menu-items">
                        CONTACT US
                    </Link>
                </MenuItem> 
            </Center>

            <Right>
                <MenuItem>
                    <Button>LOGIN</Button>
                </MenuItem>
                <MenuItem>
                    <Button>REGISTER</Button>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
    </>
  )
}

export default Header