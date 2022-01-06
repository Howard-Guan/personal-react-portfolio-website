import styled from "styled-components";
import {mobile, tablet} from "../responsive";

const Container = styled.div`
    width: 30%;
    height: 40vh;
    margin: 20px 10px;
    border: 2px solid lightgrey;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;

    ${mobile({width: "60vw", height:"70vw"})};
    ${tablet({width: "50vw", height:"55vw"})};
`;

const Browser = styled.div`
    height: 20px;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    position: sticky;
    z-index: 1;
`;

const Circle = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin: 5px;
    background-color: ${props=>props.color === "red"? "red": props.color === "yellow"? "#ffff00" : "#00ff00"};
`;

const ProjectLink = styled.a`

`;

const Image = styled.img`
    width: 100%;
    transition: all 5s ease;

    &:hover {
        transform: translateY(-100%);
    }
`;


const workDisplayItem = ({img, link}) => {
    return (
        <Container>
            <Browser>
                <Circle color="red"></Circle>
                <Circle color="yellow"></Circle>
                <Circle color="green"></Circle>
            </Browser>
            <ProjectLink href={link} target="_blank" rel="noreferrer">
                <Image src={img}/>
            </ProjectLink>
        </Container>
    )
}

export default workDisplayItem
