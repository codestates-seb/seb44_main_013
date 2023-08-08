import { FooterContainer, FooterText, GithubWrapper, GithubLists, GithubMemberList } from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>Copyright ⓒ 2023. Portfolly all rights reserved.</FooterText>
      <GithubWrapper>
        <GithubLists>
          <GithubMemberList>[FE]</GithubMemberList>
          <GithubMemberList><a href='https://github.com/HyoJeong-Park'>박효정</a></GithubMemberList>
          <GithubMemberList><a href='https://github.com/Kim-DaHam'>김다함</a></GithubMemberList>
          <GithubMemberList><a href='https://github.com/yeon0226'>위정연</a></GithubMemberList>
          <GithubMemberList><a href='https://github.com/Emma-Hyejin'>조혜진</a></GithubMemberList>
        </GithubLists>
        <GithubLists>
          <GithubMemberList>[BE]</GithubMemberList>
          <GithubMemberList><a href='https://github.com/sstar914'>김샛별</a></GithubMemberList>
          <GithubMemberList><a href='https://github.com/dlglwo123'>이희재</a></GithubMemberList>
          <GithubMemberList><a href='https://github.com/sftm0715'>정다희</a></GithubMemberList>
        </GithubLists>
      </GithubWrapper>
    </FooterContainer>
  );
}
