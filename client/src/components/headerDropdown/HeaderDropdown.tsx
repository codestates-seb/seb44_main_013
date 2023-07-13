import { Link } from 'react-router-dom';
import { VscBell } from 'react-icons/vsc';
import { HDropSection, HDropWrapper, ModalLink } from './HeaderDropdown.styled';

export default function HeaderDropwdown() {
  return (
    <HDropWrapper>
      <HDropSection>
        <ModalLink>
          <div className="mr-1">
            <VscBell size="10" />
          </div>
          Alarm
        </ModalLink>
        <ModalLink>
          <Link to="/members">My Page</Link>
        </ModalLink>
        <ModalLink>
          <Link to="/portfolio/edit">New Portfolio</Link>
        </ModalLink>
        <ModalLink>
          <Link to="/">Log Out</Link>
        </ModalLink>
      </HDropSection>
    </HDropWrapper>
  );
}
