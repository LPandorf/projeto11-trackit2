 import Navbar from "./childcomponents/Navbar";
import styled from "styled-components";
import NewNote from "./childcomponents/NewNote";
import { useContext, useEffect } from "react";
import { AddHabit, NovaRequisicao, ListaHabitos, InfoLogin } from "../Contexts";
import Footer from "./childcomponents/Footer";
import Note from "./childcomponents/Note";
import axios from "axios";

export default function Habitos(){
    const Habit=useContext(AddHabit);
    const {addHabit, setAddHabit}= Habit;
    const {setListaHabitos}=useContext(ListaHabitos);
    const {novaRequisicao}=useContext(NovaRequisicao);
    const {infoLogin}=useContext(InfoLogin);
    const {token}=infoLogin;

    useEffect(()=>{
        const promisse=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {headers:
            {'Authorization': `Bearer ${token}`}
        });
        promisse.then((answer)=>{
            setListaHabitos(answer.data);
        });
        promisse.catch((warning)=>{
            console.log(warning.response);
        });
    },[novaRequisicao,setListaHabitos,token]);

    function NewHabit(){
        if(addHabit===true){
            return(
                <NewNote/>
            );
        }else{
            return(
                <>
                </>
            );
        }
    } 
    function Mostrar(){
        if(setListaHabitos.length!==0){
            return(
                <Note/>
            );
        }else{
            return(
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            );
        }
    }
    return (
        <Wrapper>
            <Navbar data-test="header"/>
            <Side>
                <Title>Meus hábitos</Title>
                <Plus  onClick={()=>setAddHabit(true)} data-test="habit-create-btn">+</Plus>
            </Side>
            <NewHabit/>
            <Novos>
                <Mostrar/>
            </Novos>
            <Footer data-test="menu" />
        </Wrapper>
    );
}

const Wrapper=styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    margin-top: 70px;
    width: 100vw;
    margin-left: -8px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const Title=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
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
    margin-right: 20px;
`;

const Plus=styled.div`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: white;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
`;

const Side=styled.div`
    width: 90%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
`;


const Novos=styled.div`
    width: 100%;
    height: auto;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 100px;
    margin-top: 20px;
`;