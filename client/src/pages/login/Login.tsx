import LoginGoogleForm from "@/components/login/LoginGoogleForm"
import { LoginSection, LoginWrapper, TitleSection, ContentSection, MiddleLine, MiddleWrapper, WriteSection, HorizonLine } from "./Login.styled"
import BackText from "@/commons/atoms/backText/BackText"

export default function Login() {
    return(
        <LoginWrapper>
            <BackText>Portfolly</BackText>
            <LoginSection>
                <TitleSection>
                    Discover artworks <br/> that tell stories, <br/> not just simple pictures.
                </TitleSection>
                <ContentSection>
                    Experience the artistry and ingenuity of diverse portfolios, <br/>
                    curated for web, app, and design enthusiasts.
                </ContentSection>
                <LoginGoogleForm>Log in with Google</LoginGoogleForm>
                <MiddleWrapper>
                    <MiddleLine/>&nbsp; or &nbsp;<MiddleLine/>
                </MiddleWrapper>
                <LoginGoogleForm>Sign up with Google</LoginGoogleForm>
            </LoginSection>

            <HorizonLine/>

            <LoginSection>
                <WriteSection/>
            </LoginSection>
        </LoginWrapper>
    )
}