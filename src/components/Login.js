import axios from "axios";
import styled from "styled-components";
import { Link,Navigate} from "react-router-dom";
import { useState } from "react";
import Logo from "./childcomponents/Logo";
import RenderButton from "./childcomponents/grandchildcomponents/RenderButton";

export default function Login(){
    const [infoCadastro,setInfoCadastro] =useState({
        email: "", 
        password: "",
    });
    const {email, password} = infoCadastro;
    const [desabilitado,setDesabilitado]=useState(false);
    const [next,setNext] = useState(false);

    function OnSubmit(e){
        e.preventDefault();
        setDesabilitado(true);
        const body = {email, password};
        const promisse=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",body);
        promisse.then((answer)=>{
             localStorage.setItem("user", JSON.stringify({
                token: answer.data.token,
                image: answer.data.image,
                name: answer.data.name,
            }));  
            setNext(true);
        });
        promisse.catch(error=>{
            alert("Erro! Tente novamente.",error);
            setDesabilitado(false);
        });
    }

    if(next){
        return <Navigate to={"/hoje"}/>
    }else{
        return (
            <Wrapper onSubmit={OnSubmit}>
                <Logo/>
                <Logar >
                    <Input 
                        disabled={desabilitado}
                        type="email"
                        value={email}
                        placeholder="email"
                        required
                        onChange={(e)=>setInfoCadastro({...infoCadastro,email:e.target.value})}
                        data-test="email-input"
                    />
                    <Input 
                        disabled={desabilitado}
                        type="password"
                        value={password}
                        placeholder="senha"
                        required
                        onChange={(e)=>setInfoCadastro({...infoCadastro,password: e.target.value})}
                        data-test="password-input"
                    />
                    <button 
                        disabled={desabilitado}
                        type="submit"
                        data-test="login-btn"
                    >
                        <RenderButton state={desabilitado} text="Entrar"/>
                    </button>
                    <Link to={`/cadastro`}>
                        <Cadastrar data-test="signup-link">Não tem uma conta? Cadastre-se!</Cadastrar>
                    </Link>
                </Logar>
            </Wrapper>
        );
    }
}

const Wrapper=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button{
        color: white;
        background: #52B6FF;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border:none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
    }
`;

const Logar=styled.div`
    margin-top: 32px;
`;

const Cadastrar=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 30px;
`;

const Input=styled.input`
    width: 290px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: gray;
    margin-bottom: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

//deixei color igual a gray para facilitar a visualização, a correta é #DBDBDB