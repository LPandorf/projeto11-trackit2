import Loading from "./Loading";

export default function RenderizarBotao(props){
    const {state, text} = props;
    
    if(state===true){
        return(
            <Loading/>
        );
    }
    if(state===false){
        return(
            <>
            {text}
            </>
        );
    }
}