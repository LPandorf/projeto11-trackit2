import styled from "styled-components";
import Navbar from "./childcomponents/Navbar";
import Footer from "./childcomponents/Footer";

export default function Historico(){
    return (
        <Body>
            <Navbar data-test="header"/>
            <Title>Histórico</Title>
            <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            <Footer data-test="menu" />
        </Body>
    );
}

const Body=styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    margin-top: 70px;
    width: 100vw;
    margin-left: -8px;
    padding-top: 30px;
`;

const Title=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-left: 20px;
`;

const Text=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-left: 20px;
    margin-top: 18px;
`;