import styled from "styled-components";
import { Link } from "react-router-dom";
//import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
//import 'react-circular-progressbar/dist/styles.css';
/* import { useContext } from "react";
import { easeQuadInOut } from "d3-ease";
import { Porcentagem } from "../Contexts";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
 */
export default function Footer(){
    //const {porcentagem}=useContext(Porcentagem);
    
    return(
        <Wrapper>
            <Link to={`/habitos`}>
                <Titulo>Hábitos</Titulo>
            </Link>
            {/* <BarraCircular>
                <Link to={`/hoje`}>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={porcentagem}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                    >
                        {value=>{
                            return(
                                <CircularProgressbar
                                    value={value} 
                                    maxValue={100} 
                                    text="Hoje"
                                    background
                                    backgroundPadding={7}
                                    styles={
                                        buildStyles({
                                            backgroundColor: "#52b6ff",
                                            textColor: "#ffffff",
                                            pathColor: "#ffffff",
                                            trailColor: "#52b6ff"
                                        })
                                    }
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </Link>
            </BarraCircular> */}
            <Link to={`/historico`}>
                <Titulo>Histórico</Titulo>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    padding-left: 18px;
    padding-right: 18px;
`

const Titulo = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`
/* const BarraCircular= styled.div`
    width: 100px;
    height: 100px;
    margin-bottom:60px;
` */