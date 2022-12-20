import styled from "styled-components";



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

    return (
        <Wrapper data-test="habit-create-container">
            <Habit
                /* disabled={desabilitado} */
                type="text"
                placeholder="nome do hábito"
                /* onChange={(e) => setInserirHabito(e.target.value)} */
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
`;