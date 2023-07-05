import { childrenProps } from "@/types"
import { BackContentType } from "./BackText.styled"

export default function BackText ({children}: childrenProps) {
    return(
        <BackContentType>{children}</BackContentType>
    )
}