
import { MypageItemProps } from "@/types";
import { ImgInfoSection, ImgSection, SMportItemWrapper } from "./MypageItem.styled";


//07.05 혜진 마이페이지 내 포폴 관리 아이템
export default function MypageItem ( {title, name, src}: MypageItemProps ) {
    return (
        <SMportItemWrapper>
            <ImgSection src={ src }/> 
            <ImgInfoSection title={title} name={name}/>
        </SMportItemWrapper>
    )
}