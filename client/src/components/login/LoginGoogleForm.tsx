import { GoogleWrapper, TextSection } from "./LoginGoogleForm.styled"
import { childrenProps } from "@/types"
import GoogleLogo from "@/commons/atoms/logo/GoogleLogo"


export default function LoginGoogleForm ({children}: childrenProps){
    return(
        <GoogleWrapper>
            <GoogleLogo/>
            <TextSection>{children}</TextSection>
        </GoogleWrapper>
    )
}