import { PagenationBtn } from "./Pagenation.styled";
import { childrenProps } from "@/types";


export function Pagenation ( {children}:childrenProps ) {
    return(
        <PagenationBtn>{children}</PagenationBtn>
    )
}