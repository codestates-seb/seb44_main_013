import userImg from '../../../assets/userImg.jpg';
import { ImgContainer, UserImage } from './UserImg.styled';

export default function UserImg() {
  return (
    <ImgContainer>
      <UserImage src={userImg} alt="userimage"></UserImage>
    </ImgContainer>
  );
}
