import styled from "styled-components";
import WorkDisplayItem from "./WorkDisplayItem";
import {products} from "../data.js";
import {mobile, tablet} from "../responsive";

const Container = styled.div`
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${mobile({padding:"80px 10px"})};
    ${tablet({padding:"80px 10px"})};
`;

const Desc = styled.div`
    width: 50%;

    ${mobile({width:"100%"})};
    ${tablet({width:"100%"})};
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 50px;

    ${mobile({fontSize: "30px" })};
    ${tablet({fontSize: "30px" })};
`;

const DescWorkDisplay = styled.p`
    margin: 20px 0px;
    font-size: 30px;

    ${mobile({width: "100%", textAlign:"left", fontSize:"25px"})};
    ${tablet({width: "100%", textAlign:"left", fontSize:"25px"})};
`;

const List = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${mobile({alignItems:"center",justifyContent: "center"})};
    ${tablet({alignItems:"center",justifyContent: "center"})};
`;



const workDisplayList = () => {
    return (
        <Container>
            <Desc>
                <Title>My Display Creation.</Title>
                <DescWorkDisplay>
                    All my working projects display below. Please feel free to take a look
                    at them. Most of them are built in MERN style and full stack with working
                    api backend server.
                </DescWorkDisplay>
            </Desc>
            <List>
                {products.map((product)=>
                    <WorkDisplayItem img={product.img} key={product.id} link={product.link}/>
                )} 
            </List>
        </Container>
    )
}

export default workDisplayList
