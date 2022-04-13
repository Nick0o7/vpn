import styled from "@emotion/styled";
import { useState } from "react";
import { slideData } from "../data";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { ArrowRightOutlined } from "@mui/icons-material";
import { largeMobile, mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    margin-top: 3rem;
    position: relative;
    overflow: hidden;
    ${mobile({height:"60vh"})};
    ${largeMobile({height:"60vh"})};
`;

const Title = styled.h1`
    text-align: center;
    color:#faf089;
    margin-top: 4rem;
`;

const SlideContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    transition: all 1.5s ease;
    transform: translateX(${props => props.current * -100}vw);
`;

const Arrow = styled.div`
    width: 50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: 0;
    bottom: 0;
    left: ${ props => props.direction === "left" && "10px"};
    right: ${ props => props.direction === "right" && "10px"};
    margin:auto;
    cursor: pointer;
    opacity:0.5;
    z-index:2;
`;

const Slide = styled.div`
    width: 100vw;
`;

const Image = styled.img`
    width: 100vw;
    height: 100%;
`;

const Gallery = () => {

    const [current, setCurrent] = useState(0);
    const length = slideData.length - 1;

    const handleClick = ( direction ) => {
        if( direction === "left"){
            setCurrent(current > 0 ? current - 1 : length)
        }
        else{
            setCurrent( current < length ? current + 1 : 0)
        }
    } 

    if(!Array.isArray(slideData) || slideData.length <= 0){
        return null;
    };

    return (
        <>
            <Title id="gallery">GALLERY</Title>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlinedIcon/>
                </Arrow>
                <SlideContainer current={current}>
                    {slideData.map((slide,index) => (
                        <Slide key={index}>
                            <Image src={slide.image}/>
                        </Slide>
                    ))}
                
                </SlideContainer>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined/>
                </Arrow>
            </Container>
        </>
    )
}

export default Gallery