import styled from "styled-components";
import Navbar from "./childcomponents/Navbar";
import Footer from "./childcomponents/Footer";

export default function Historico(){
    return (
        <>
            <Navbar/>
            <Corpo>
                <Titulo>Histórico</Titulo>
                <Texto>Em breve você poderá ver o histórico dos seus hábitos aqui!</Texto>
            </Corpo>
            <Footer/>
        </>
    );
}

const Corpo = styled.div`
    margin-top: 70px;
    margin-left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #E5E5E5;
    padding: 20px;
`

const Titulo = styled.div`
    color:#126BA5;
    width: 100px;
    height: 29px;
    left: 17px;
    top: 98px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    margin-bottom: 20px;
`
const Texto= styled.div`
    width: 338px;
    height: 74px;
    left: 15px;
    top: 144px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`