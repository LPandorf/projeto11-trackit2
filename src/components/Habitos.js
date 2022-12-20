 import Navbar from "./childcomponents/Navbar";
import styled from "styled-components";
import NewNote from "./childcomponents/NewNote";
import { useContext, useState } from "react";
import { AddHabit } from "../Contexts";
import Footer from "./childcomponents/Footer";

export default function Habitos(){
    const Habit=useContext(AddHabit);
    const {addHabit, setAddHabit}= Habit;
    //const [addHabit, setAddHabit]= useState(false);


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
    return (
        <Wrapper>
            <Navbar data-test="header"/>
            <Side>
                <Title>Meus hábitos</Title>
                <Plus  onClick={()=>setAddHabit(true)} data-test="habit-create-btn">+</Plus>
            </Side>
            
            <NewHabit/>
            <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
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