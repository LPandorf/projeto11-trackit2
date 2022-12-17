import styled from "styled-components";
import img from "../../assets/logo.png";

export default function Logo(){
    return(
        <Wrapper>
            <Imagem src={img}></Imagem>
        </Wrapper>
    );
}

const Wrapper=styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Imagem=styled.img`
    width: 200px;
    height: auto;
`;