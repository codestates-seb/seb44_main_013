import tw from 'tailwind-styled-components';
import {VscBell} from 'react-icons/vsc';

const ModalLink = tw.li`
    py-1
    text-[8px]
    font-semibold
    flex
    flex-row
    items-center
    justify-center
    hover:bg-HOVER_COLOR
    hover:text-BASIC_WHITE
    cursor-pointer
`;


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

