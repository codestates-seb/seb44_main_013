import { FooterContainer, FooterGithub } from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <p>Copyright ⓒ  2023. Portfolly all rights reserved.</p>
      <div>
          <FooterGithub>
            <li>[FE]</li>
            <li><a href='https://github.com/Kim-DaHam'>김다함</a></li>
            <li><a href='https://github.com/HyoJeong-Park'>박효정</a></li>
            <li><a href='https://github.com/yeon0226'>위정연</a></li>
            <li><a href='https://github.com/Emma-Hyejin'>조혜진</a></li>
          </FooterGithub>
          <FooterGithub>
            <li>[BE]</li>
            <li><a href='https://github.com/sstar914'>김샛별</a></li>
            <li><a href='https://github.com/dlglwo123'>이희재</a></li>
            <li><a href='https://github.com/sftm0715'>정다희</a></li>
          </FooterGithub>
        </div>
    </FooterContainer>
  );
}
