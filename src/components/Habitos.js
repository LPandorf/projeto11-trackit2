import Navbar from "./childcomponents/Navbar";
import styled from "styled-components";
import NewNote from "./childcomponents/NewNote";
import { useContext, useState } from "react";
import { AddHabit } from "../Contexts";

export default function Habitos(){
    //const [addHabit, setAddHabit]= useContext(AddHabit);
    //const [addHabit, setAddHabit]= useState(false);

/* 
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
    } */
    return (
        <Wrapper>
            <Navbar/>
            <Side>
                <Title>Meus hábitos</Title>
                <Plus /* onClick={()=>setAddHabit(true)} */>+</Plus>
            </Side>
            <NewNote/>
            {/* <NewHabit/> */}
            <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
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
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-right: 20px;
    margin-left: 20px;
`;
