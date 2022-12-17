import axios from "axios";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./childcomponents/Logo";
import RenderButton from "./childcomponents/grandchildcomponents/RenderButton";

export default function Cadastro(){
    const [infoCadastro,setInfoCadastro] =useState({
        email: "", 
        password: "",
        name: "", 
        image: ""
    });
    const {email, password, name, image} = infoCadastro;
    const [desabilitado,setDesabilitado]=useState(false);
    const navigate=useNavigate();

    function OnSubmit(e){
        setDesabilitado(true);
        e.preventDefault();
        const promisse=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{
            email:email,
            name:name,
            image:image,
            password:password
        });
        promisse.then(()=>{navigate('/')});
        promisse.catch((warning)=>{
            alert("Erro! Tente novamente.");
            setDesabilitado(false);
        });
    }

    return(
        <Wrapper>
            <Logo/>
            <Cadastrar onSubmit={OnSubmit}>
                <Input 
                    disabled={desabilitado}
                    type="email"
                    value={email}
                    placeholder="email"
                    required
                    onChange={(e)=>setInfoCadastro({...infoCadastro,email:e.target.value})}
                />
                <Input 
                    disabled={desabilitado}
                    type="password"
                    value={password}
                    placeholder="senha"
                    required
                    onChange={(e)=>setInfoCadastro({...infoCadastro,password: e.target.value})}
                />
                <Input 
                    disabled={desabilitado}
                    type="name"
                    value={name}
                    placeholder="nome"
                    required
                    onChange={(e)=>setInfoCadastro({...infoCadastro,name: e.target.value})}
                />
                <Input 
                    disabled={desabilitado}
                    type="url"
                    value={image}
                    placeholder="foto"
                    required
                    onChange={(e)=>setInfoCadastro({...infoCadastro,image: e.target.value})}
                />
                <button 
                    disabled={desabilitado}
                    type="submit"
                >
                    <RenderButton state={desabilitado} text="Cadastrar"/>
                </button>
                <Link to={`/`}>
                    <Cadastrado>Já tem uma conta? Faça login!</Cadastrado>
                </Link>
            </Cadastrar>
        </Wrapper>
    );
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

const Cadastrar=styled.div`
    margin-top: 32px;
`;

const Cadastrado=styled.div`
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