import  { UserImages }  from '@/assets/userImage/UserImages';
import nonUser from '@/assets/userImage/nonUser.svg';

const userImages: Record<number, string> = {
    15: UserImages[2],
    23: UserImages[11],
    18: UserImages[5],
    5: UserImages[0],
    19: UserImages[7],
    25: UserImages[3],
    26: UserImages[1],
    21: UserImages[8],
    1: UserImages[10],

}

export default function useUserImageHandler( memberId: number ) {

    return userImages[memberId] || nonUser;
}