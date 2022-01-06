import styled from "styled-components";
import Bassano from "../image/bassano.jpg";
import {mobile, tablet} from "../responsive";


const Container = styled.div`
    display: flex;
    height: 100vh;

    ${mobile({flexDirection: "column", marginBottom:"50px"})};
    ${tablet({flexDirection: "column", marginBottom:"50px"})};

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mobile({flexDirection:"column", alignItems:"start" })};
    ${tablet({flexDirection: "column", alignItems:"start"})};
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-between;

    ${mobile({padding:"10px", alignItems:"start",height:"50vh", top:0 })};
    ${tablet({padding:"10px", alignItems:"start",height:"50vh", top:0})};
`;

const Text = styled.span`
    font-weight: bold;
    font-size: ${props=>props.name === "name" ? "60px" : "30px"};

    ${mobile({fontSize:"40px" })};
    ${tablet({fontSize:"40px" })};
`;

const JobTitleWrapper = styled.div`
    height: 50px;
    overflow: hidden;

    ${mobile({display: "flex", flexDirection: "column" })};
    ${tablet({display: "flex", flexDirection: "column" })};
`;

const TitleWrapper = styled.div`
    height: 100%;
    animation: move 15s ease-in-out infinite alternate;

    @keyframes move {
        33%{
            transform: translateY(-0px);
        }
        33%{
            transform: translateY(-50px);
        }
        33%{
            transform: translateY(-100px);
        }
    }
`;

const TitleItem = styled.div`
    height: 50px;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-item: center;
    paddaing: 10px 0px;

    ${mobile({ margin: "5px 0", fontSize:"25px"})};
    ${tablet({ margin: "5px 0", fontSize:"25px"})};
`;

const SelfDescription = styled.p`
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 2px;
    color: #777777;

    ${mobile({ display: "none"})};
    ${tablet({display: "none"})};
`;

const Right = styled.div`
    flex: 1;

    ${mobile({display: "flex", alignItems:"center", justifyContent:"center"})};
    ${tablet({display: "flex", alignItems:"center", justifyContent:"center"})};
`;

const ImgContainer = styled.div`
    width:100%;
    height: 100%;

    ${mobile({width:"100vw", height:"100vw"})};
    ${tablet({width:"30vw",height:"30vw"})};
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    clip-path: polygon(100% 0%, 100% 54%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    ${mobile({borderRadius:"50%", clipPath:"none", justifyContent:"center" })};
    ${tablet({borderRadius:"50%", clipPath:"none", justifyContent:"center" })};
`;

const Introduction = () => {
    return (
        <Container>
            <Left>
                <Wrapper>
                    <Text name="title">Hello, My Name is </Text>
                    <Text name="name">HOWARD(ZIHAO), GUAN</Text>
                    <JobTitleWrapper>
                        <TitleWrapper>
                            <TitleItem>React Developer</TitleItem>
                            <TitleItem>NodeJS Backend Developer</TitleItem>
                            <TitleItem>Full Stack Developer</TitleItem>
                        </TitleWrapper>
                    </JobTitleWrapper>
                    <SelfDescription>
                        Highly-motivated computer science graduated student, experienced with interact to people, and capable on time
                        management and multitasking. Familiar with Java/Javescript object-oriented programming expecially with React and Redux 
                        JavaScript Framework, PHP and HTML web programming language, swift IOS app programming language, MySQL rational database 
                        structure and MongooDB database structure. Familiar with NodeJS and Express website backend framework. Experienced to 
                        build full stack web application. Also, Familiar with Adobe XD and Balsamiq Mockup 3 prototype tools.
                    </SelfDescription>
                </Wrapper>
            </Left>
            <Right>
                <ImgContainer>
                    <Image  src={Bassano} />
                </ImgContainer>
            </Right>
        </Container>
    )
}

export default Introduction
