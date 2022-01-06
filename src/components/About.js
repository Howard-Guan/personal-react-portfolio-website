import styled from "styled-components";
import River from "../image/river.jpg";
import {mobile, tablet} from "../responsive";

const Container = styled.div`
    height: 100vh;
    display: flex;

    ${mobile({width: "100vw", flexDirection:"column" })};
    ${tablet({width: "100vw", flexDirection:"column" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;

    ${mobile({display: "none"})};
    ${tablet({display: "none"})};
`;

const Wrapper = styled.div`
    top: 50px;
    left: 50px;
    border-radius: 20px;
    background-color: grey;
    position: absolute;
    width: 60%;
    height: 70vh;
`;

const ImageContainer = styled.div`
    width: 60%;
    height: 70vh;
    position: absolute;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${mobile({width:"100%", justifyContent:"space-around"})};
    ${tablet({width:"100%", justifyContent:"space-around"})};
`;


const Title = styled.h1`
    font-weight: bold;
    font-size: 50px;
`;


const Subtitle = styled.p`
    margin: 20px 0px;
    font-size: 30px;

    ${mobile({textAlign: "center", fontSize:"30px"})};
    ${tablet({textAlign: "center", fontSize:"30px"})};
`;


const Desc = styled.p`
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 2px;
    color: #990000;

    ${mobile({textAlign: "center", fontSize:"25px", fontWeight:"normal"})};
    ${tablet({textAlign: "center", fontSize:"25px", fontWeight:"normal"})};
`;


const About = () => {
    return (
        <Container>
            <Left>
                <Wrapper></Wrapper>
                <ImageContainer>
                    <Img src={River} />
                </ImageContainer>
            </Left>
            <Right>
                <Title>About Me</Title>
                <Subtitle>
                    I graduated with a bachelor's degree in computer science from University of Calgary 
                </Subtitle>
                <Desc>
                    Web Designer proficient in HTML, CSS, and JavaScript, NodeJS, Windows and Mac Operating
                    systems, git version control and github collaboration. Over the last couple years, I 
                    have focused on Web application creation either front-end and back-end development. More
                    experience at developing Full stack Web application with MERN style framework. Also, familiar
                    with nextJS framework and styled components design with react.

                </Desc>
            </Right>
        </Container>
    )
}

export default About
