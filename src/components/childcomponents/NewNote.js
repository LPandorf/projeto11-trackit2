import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { InfoLogin, AddHabit, NovaRequisicao } from "../../Contexts";
import RenderizarBotao from "./grandchildcomponents/RenderButton";

export default function NewNote(){
    let array = [
        {day:"D", number:0},
        {day:"S", number:1},
        {day:"T", number:2},
        {day:"Q", number:3},
        {day:"Q", number:4},
        {day:"S", number:5},
        {day:"S", number:6}
    ];
    const {infoLogin}=useContext(InfoLogin);
    const {addHabit,setAddHabit}=useContext(AddHabit);
    const {novaRequisicao,setNovaRequisicao}=useContext(NovaRequisicao);

    const [inserirHabito,setInserirHabito]=useState("");
    const [desabilitado,setDesabilitado]=useState(false);
    const [selecionado,setSelecionado]=useState([]);

    const {token}=infoLogin;

    function postarNovaNota(e){
        if(selecionado.length>0 && inserirHabito!==""){
            setDesabilitado(true);
            e.preventDefault();
            const promisse=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
                name:inserirHabito,
                days:selecionado,
            },{
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });
            promisse.then(()=>{
                setAddHabit(false);
                setNovaRequisicao(!novaRequisicao);
            });
            promisse.catch((warning)=>{
                alert("Erro! Tente novamente.");
                setDesabilitado(false);
            });
        }else{
            alert("É necessário que todos os cammpos estejam preenchidos");
        }
    }

    if(addHabit===true){
        return (
            <Wrapper data-test="habit-create-container">
                <Nota>
                    <Habito 
                        disabled={desabilitado}
                        type="text"
                        placeholder="nome do hábito"
                        onChange={(e)=>setInserirHabito(e.target.value)}
                        data-test="habit-name-input"
                    />
                    <DiasDaSemana>
                        {array.map(elem=>{
                            if(!selecionado.includes(elem.number)){
                                return (
                                    <Dia 
                                        disabled={desabilitado}
                                        color={"#DBDBDB"}
                                        background={"white"}
                                        onClick={()=>{
                                            setSelecionado([...selecionado,elem.number])}
                                        }
                                        data-test="habit-day" 
                                    >
                                        {elem.day}
                                    </Dia>
                                );
                            }else{
                                return (
                                    <Dia 
                                        disabled={desabilitado}
                                        background={"#DBDBDB"}
                                        color={"white"}
                                        onClick={()=>{
                                            setSelecionado(selecionado.filter((day)=> day!== elem.number))}
                                        }
                                        data-test="habit-day" 
                                    >
                                        {elem.day}
                                    </Dia>
                                );
                            }
                        })}
                    </DiasDaSemana>
                    <Botoes>
                        <Cancelar onClick={()=> setAddHabit(false)} data-test="habit-create-cancel-btn">
                            Cancelar
                        </Cancelar>
                        <Salvar onClick={(e)=>postarNovaNota(e)} data-test="habit-create-save-btn">
                            <RenderizarBotao state={desabilitado} text="Salvar"/>
                        </Salvar>
                    </Botoes>
                </Nota>
            </Wrapper>
        );
    }else{
        return (
            <>
            </>
        );
    }
}

const Wrapper=styled.div`
    margin-top: 10px;
`;

const Dia=styled.div`
    width: 30px;
    height: 30px;
    background: ${(props)=>props.background};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${(props)=>props.color};
    padding: 2px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Nota=styled.div`
    width: 340px;
    height: 155px;
    background: #FFFFFF;
    border-radius: 5px;
    padding:18px;
    margin-bottom: 15px;
`

const Cancelar= styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    margin-right: 10px;
`
const Salvar= styled.div`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Botoes= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
`

const DiasDaSemana= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    margin-right: 5px;
`

const Habito= styled.input`
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color:gray;
    font-weight: 400;
    font-size: 19.976px;
    padding: 15px;
    font-family: "Lexend Deca";
`

    /*
    return (
        <Wrapper data-test="habit-create-container">
            <Habit
                /* disabled={desabilitado} 
                type="text"
                placeholder="nome do hábito"
                /* onChange={(e) => setInserirHabito(e.target.value)} 
            />
            <End>
                <Cancelar>Cancelar</Cancelar>
                <Salvar>Salvar</Salvar>
            </End>
        </Wrapper>
    );
} 

const Wrapper=styled.div`
    width: 340px;
    height: 120px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Habit= styled.input`
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 340px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color:gray;
    font-weight: 400;
    font-size: 19.976px;
    padding: 15px;
    font-family: "Lexend Deca";
`;

const End=styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`;

const Cancelar=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #52B6FF;
    text-align: center;
    margin-right: 20px;
`;

const Salvar=styled.div`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;*/