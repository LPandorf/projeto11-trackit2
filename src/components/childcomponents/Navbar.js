import styled from "styled-components";
import { useContext } from "react";
import { InfoLogin } from "../../Contexts";
//import mage from "../../assets/annabeth.png";

export default function Navbar() {
    const infoLogin=useContext(InfoLogin);
    const {image}=infoLogin; 
    console.log(image);
    return (
        <Wrapper data-test="header">
            <Name>TrackIt</Name>
            <Foto src={image} alt={"profile.picture"} />
            {/* <Foto src={mage} alt={"profile.picture"} /> */}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
`;

const Name = styled.div`
    margin-left: 10px;
`;

const Foto = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 10px;
`;