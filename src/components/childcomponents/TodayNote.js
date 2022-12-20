import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { InfoLogin, HabitosHoje, NovaRequisicao, Porcentagem } from "../../Contexts";

export default function TodayNote(){
    const {infoLogin}=useContext(InfoLogin);
    const {habitosHoje,setHabitosHoje}=useContext(HabitosHoje);
    const {novaRequisição,setNovaRequisicao}=useContext(NovaRequisicao);
    const {porcentagem,setPorcentagem}=useContext(Porcentagem);

    const {token}=infoLogin;

    function Completo(e,id){
        e.preventDefault();
        const promisse=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
            null, 
            {headers: {
                'Authorization': `Bearer ${token}`
            }}
        );
        promisse.then(()=>{
            setNovaRequisicao(!novaRequisição);
            setHabitosHoje(habitosHoje);
            setPorcentagem(porcentagem);
        });
        promisse.catch((warning)=>{
            alert("Erro! Tente novamente.");
        });
    }

    function Incompleto(e,id){
        e.preventDefault();
        const promisse=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
            null, 
            {headers: {
                'Authorization': `Bearer ${token}`
            }}
        );
        promisse.then(()=>{
            setNovaRequisicao(!novaRequisição);
            setHabitosHoje(habitosHoje);
            setPorcentagem(porcentagem);
        });
        promisse.catch((warning)=>{ 
            alert("Erro! Tente novamente in.");
        });
           
    }

    return(
        <Lista>
            {habitosHoje.map(elem=>{
                return (
                    <Wrapper key={elem.name} data-test="today-habit-container">
                        <Left>
                            <Title data-test="today-habit-name">
                                {elem.name}
                            </Title>
                            <Text 
                                data-test="today-habit-sequence"
                                fontColorSequencia={elem.done?"#8FC549":"#666666"}
                            >
                                Sequência atual: {elem.currentSequence} {elem.currentSequence>1? "dias":"dia"}
                            </Text>
                            <Text 
                                data-test="today-habit-record"
                                fontColorRecorde={elem.currentSequence===elem.highestSequence? "#8FC549":"#666666"}
                            >
                                Seu recorde: {elem.highestSequence} {elem.highestSequence>1? "dias":"dia"}
                            </Text>
                        </Left>
                        <Right
                            data-test="today-habit-check-btn"
                            /* disabled={desabilitado} */
                            onClick={(e)=>{elem.done? Incompleto(e, elem.id):Completo(e,elem.id)}}
                            background={elem.done? "#8FC549" : "#E7E7E7"}
                        >
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </Right>
                    </Wrapper>
                );
            })}
        </Lista>
        
    );
}

const Lista=styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 340px;
    height: 70px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Title = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`;

const Text = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`;

const Left= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Right = styled.div`
    width: 69px;
    height: 69px;
    background: ${(props)=>props.background};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    ion-icon{
        width: 60px;
        height: 60px;
        color: #FFFFFF;
    }
`;