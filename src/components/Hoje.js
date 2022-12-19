import styled from "styled-components";
import Navbar from "./childcomponents/Navbar";
import TodayNote from "./childcomponents/TodayNote";

export default function Hoje(){
    return (
        <Wrapper>
            <Navbar/>
            <Title>Dia, 26/02</Title>
            <Text>Nenhum hábito concluído ainda</Text>
            <Today>
                <TodayNote/>
            </Today>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    margin-top: 70px;
    width: 100vw;
    margin-left: -8px;
    padding-top: 30px;
`;

const Today=styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`

const Title=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-left: 20px;
`

const Text=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    margin-left: 20px;
`