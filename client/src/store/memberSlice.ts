import { createSlice } from '@reduxjs/toolkit';
// import circleNoImg from '@/assets/circleNoImg.png';

export interface Member {
  name: string;
  memberId: number;
  imgUrl: string;
}

const getId = Number(window.localStorage.getItem('memberId'));
const getImage = window.localStorage.getItem('ImageUrl');
const getname = window.localStorage.getItem('name');

// const tempPic = userImg === '' ? circleNoImg : userImg;

const initialState: Member = {
  name: getname || '',
  memberId: getId,
  imgUrl: getImage || '',
};

export const MemberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    controlMember: (state, action) => {
      const { name, memberId, imgUrl } = action.payload;
      state.name = name;
      state.memberId = memberId;
      state.imgUrl = imgUrl;
    },
  },
});

export const { controlMember } = MemberSlice.actions;
export default MemberSlice.reducer;
