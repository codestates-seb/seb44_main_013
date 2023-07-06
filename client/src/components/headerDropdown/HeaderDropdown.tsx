import { Link } from 'react-router-dom';
import {VscBell} from 'react-icons/vsc';
import { HDropSection, HDropWrapper, ModalLink } from './HeaderDropdown.styled';

export default function HeaderDropwdown () {
    return(
        <HDropWrapper>
            <HDropSection>
                <ModalLink><div className="mr-1"><VscBell size="10"/></div>Alarm</ModalLink>
                <Link to="/members"><ModalLink>My Page</ModalLink></Link>
                <Link to="/"><ModalLink>New Portfolio</ModalLink></Link>
                <Link to="/"><ModalLink>Log Out</ModalLink></Link>
            </HDropSection>

        </HDropWrapper>
    )
}

