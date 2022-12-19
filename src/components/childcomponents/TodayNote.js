import styled from "styled-components";


export default function TodayNote(){

    return(
        <Wrapper>
            <Left>
                <Title>Ler sla oq</Title>
                <Text>
                    Sequência atual: 3 dias<br/>
                    Seu recorde: 5 dias
                </Text>
            </Left>
            <Right>
                <ion-icon name="checkmark"></ion-icon>
            </Right>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 340px;
    height: 70px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
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
    background: #EBEBEB;
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