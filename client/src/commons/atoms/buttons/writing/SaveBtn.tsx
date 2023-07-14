import { Edittype } from "../Button.styled"

interface IProps {
    onClick: () => void;
}

export default function SaveBtn( {onClick}:IProps ){
    return <Edittype onClick={onClick}>Save</Edittype>
}