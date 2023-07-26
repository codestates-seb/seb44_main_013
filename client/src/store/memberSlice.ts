import { createSlice } from '@reduxjs/toolkit';
// import circleNoImg from '@/assets/circleNoImg.png';

export interface Member {
  name: string;
  memberId: number;
  imgUrl: string;
}

const getId = Number(window.localStorage.getItem('memberId'));

// const tempPic = userImg === '' ? circleNoImg : userImg;

const initialState: Member = {
  name: '',
  memberId: getId,
  imgUrl: '',
};

export const MemberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    controlMember: (state, action) => {
      const { name, memberId, imgUrl } = action.payload;
      state.name = name;
      (state.memberId = memberId), (state.imgUrl = imgUrl);
    },
  },
});

export const { controlMember } = MemberSlice.actions;
export default MemberSlice.reducer;
