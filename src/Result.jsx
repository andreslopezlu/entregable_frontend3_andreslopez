import {Card} from "./Card";
import {Error} from './Error';

function Result(props){
    if (props.result === ''){
        return <></>
    } else if (props.result === 'error'){
        return <><Error/></>
    } else if (props.result === 'ok'){
        return <><Card usuario={props.usuario} email={props.email} paciente={props.paciente} tipo={props.tipo}/></>
    }
}

export {Result}