import styled from "styled-components";
import { Porcentagem, NovaRequisicao, HabitosHoje, InfoLogin } from "../Contexts";
import Footer from "./childcomponents/Footer";
import Navbar from "./childcomponents/Navbar";
import TodayNote from "./childcomponents/TodayNote";
import { useContext, useEffect } from "react";
import axios from "axios";

export default function Hoje(){
    let i=0;
    let c=0;
    let porcento=0;

    const {infoLogin}=useContext(InfoLogin);
    const {habitosHoje,setHabitosHoje}=useContext(HabitosHoje);
    const {novaRequisicao}=useContext(NovaRequisicao);
    const {porcentagem,setPorcentagem}=useContext(Porcentagem);

    const {token}=infoLogin;

    useEffect(()=>{
        const promisse=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {headers:
            {'Authorization': `Bearer ${token}`}
        });
        promisse.then((answer)=>{
            setHabitosHoje(answer.data);
        });
        promisse.catch((warning)=>{
            console.log(warning.response);
        });
    }, [novaRequisicao,setHabitosHoje,token]);

    function Concluido(){
        if(Porcentagem!==0){
            return (
                <>{porcentagem}% dos hábitos concluídos</>
            );
        }else{
            return(
                <>Nenhum hábito concluído ainda</>
            );
        }
    }

    const dayjs=require('dayjs');
    console.log(dayjs);
    let hoje= new Date((dayjs().format('dddd, MM/DD')));
    const opcao={
        month:'numeric',
        weekday:'long',
        day:'numeric',
    }
    let diaTraducao=(hoje.toLocaleDateString('pt-br',opcao));
    let remover=diaTraducao.replace('-feira','');
    let renderizarDia= remover[0].toUpperCase(); 
    //+remover.substr(1)  let renderizarDia=26

    
    for(let x=0;x<habitosHoje.length;x++){
        if(habitosHoje[x].done===true){
            i++;
            porcento=Math.round((i/(habitosHoje.length)*100));
        }else{
            c++;
        }if(c===habitosHoje.length){
            setPorcentagem(0);
        }
        setPorcentagem(porcento);
    }

    return (
        <Wrapper>
            <Navbar data-test="header"/>
            <Title>{renderizarDia}</Title>
            <Text>
                <Concluido/>
            </Text>
            <Today>
                <TodayNote/>
            </Today>
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
`;

const Today=styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
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
    color: #BABABA;
    margin-left: 20px;
`;