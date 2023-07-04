import {VscBell} from 'react-icons/vsc';
import { ModalLink } from './Dropdown.styled';

export default function Dropwdown () {
    return(
        <div className="shadow-md w-24 rounded-lg overflow-hidden">
            <ul className="divide-y divide-zinc-200">
                <ModalLink><div className="mr-1"><VscBell size="10"/></div>Alarm</ModalLink>
                <ModalLink>My Page</ModalLink>
                <ModalLink>New Portfolio</ModalLink>
                <ModalLink>Log Out</ModalLink>
            </ul>

        </div>
    )
}
