import styled from "styled-components";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import {mobile, tablet} from "../responsive";

const Container = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
`;

const SideBar = styled.div`
    width: 20px;
    height: 100%;
    background-color: #90afa2 ;
    position: absolute;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;

    ${mobile({flexDirection:"column", height:"100%", padding:"0px 30px"})};
    ${tablet({flexDirection:"column", height:"100%", padding:"0px 30px"})};
`;

const Left = styled.div`
    flex: 1;

`;

const Title = styled.h1`
    font-size: 60px;
    width: 80%;

    ${mobile({fontSize:"30px"})};
    ${tablet({fontSize:"30px"})};
`;

const Info = styled.div`
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0px;

    ${mobile({margin:"20px 0px"})};
    ${tablet({margin:"20px 0px"})};
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Desc = styled.p`
    font-weight: normal;
    font-size: 30px;

    ${mobile({display:"none"})};
    ${tablet({display:"none"})};
`;

const Form = styled.form`
    margin-top: 20px;

    ${mobile({marginTop:"0px"})};
    ${tablet({marginTop:"0px"})};
`;

const Input = styled.input`
    width: 50%;
    height: 50px;
    border: none;
    border-bottom: 1px solid grey;
    margin: 10px 0px;
    font-size: 14px;
    padding-left: 10px;
`;

const Text = styled.textarea`
    width: 100%;
    margin: 10px 0px;
    font-size: 14px;
    padding-left: 10px;

    ${mobile({width:"100%", paddingLeft:"0px"})};
    ${tablet({width:"100%", paddingLeft:"0px"})};
`;


const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: #90afa2;
    color: white;
    cursor: pointer;
    box-shadow: 0 7px #999;

    &:hover {
        background-color: #738678;
    }

    &:active{
        background-color: #3e8e41;
        box-shadow: 0 4px #666;
        tansform: tanslateY(-4px);
    }
`;

const Contact = () => {
    //use refHook to reach all data in the form
    const formRef = useRef();

    const [done, setDone] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        subject:'',
        email:'',
        message:''
    });

    const clear = () => {
        setUserInfo({name:'', subject:'', email:'', message:''});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_yhc3dcc', 'template_aios74t', formRef.current, 'user_N9vamgYKYWtfHrloV5JNN')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                clear();
            }, (error) => {
                console.log(error.text);
        });
    };

    return (
        <Container>
            <SideBar></SideBar>
            <Wrapper>
                <Left>
                    <Title>Please Feel Free to Email Me If You Have Any Question</Title>
                    <Info>
                        <InfoItem>
                            <PhoneIphoneIcon />
                            +1 403-399-8733
                        </InfoItem>
                        <InfoItem>
                            <EmailIcon />
                            GZHLJH@GMAIL.COM
                        </InfoItem>
                        <InfoItem>
                            <HomeIcon />
                            Panatella Gate Calgary Alberta
                        </InfoItem>
                    </Info>
                </Left>
                <Right>
                    <Desc><b>Open for any front-end, back-end, and fullstack developer job opportunities. </b>
                        Plesase feel free to email me and call me about any Projects.
                    </Desc>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input type="text" placeholder="Name" name="user_name" value={userInfo.name} onChange={(e)=> setUserInfo({...userInfo, name: e.target.value})}/>
                        <Input type="text" placeholder="Subject" name="user_subject" value={userInfo.subject} onChange={(e)=> setUserInfo({...userInfo, subject: e.target.value})} />
                        <Input type="text" placeholder="Email" name="user_email" value={userInfo.email} onChange={(e)=> setUserInfo({...userInfo, email: e.target.value})}/>
                        <Text rows="10" placeholder="Message" name="message" value={userInfo.message} onChange={(e)=> setUserInfo({...userInfo, message: e.target.value})} />
                        <Button>SUBMIT</Button>
                        {done && "Message sent...Thank you for reaching me~!"}
                    </Form>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Contact
