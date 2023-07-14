import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { MypageIntroWrap, MypageIntroContainer, IntroduceTitle } from "./MypageIntroduce.styled";

export default function MypageIntroduce () {
  const [isEdit, setIsEdit] = useState(false)
  const [job, setJob] = useState("What is your job?")
  const [career, setCareer] = useState("Career 1")
  const [awards, setAwards] = useState("Awards 1")

  const hanldeEditState = () => {
    setIsEdit(!isEdit);
  }

  const handleJobEdit = (e: any) => {
    setJob(e.target.value);
  }

  const handleCareerEdit = (e: any) => {
    setCareer(e.target.value);
  }

  const handleAwardsEdit = (e: any) => {
    setAwards(e.target.value);
  }

  return (
    <MypageIntroWrap>
      <MypageIntroContainer>
        <IntroduceTitle>Job</IntroduceTitle>
        {isEdit ?
            <input type="text" value={job} onChange={handleJobEdit}></input> :
            <p className="introContent">{job}</p>
        }
      </MypageIntroContainer>
      <hr />
      <MypageIntroContainer>
        <IntroduceTitle>Career</IntroduceTitle>
        <ul>
          {isEdit ?
            <input type="text" value={career} onChange={handleCareerEdit}></input> :
            <li className="introContent">{career}</li>
        }
        </ul>
      </MypageIntroContainer>
      <hr />
      <MypageIntroContainer>
        <IntroduceTitle>Awards</IntroduceTitle>
        <ul>
          {isEdit ?
            <input type="text" value={awards} onChange={handleAwardsEdit}></input> :
            <li className="introContent">{awards}</li>
        }
        </ul>
      </MypageIntroContainer>
      {isEdit ? 
        <MdDone className="editBtn" onClick={hanldeEditState} size={24} /> :
        <BsFillPencilFill className="editBtn" onClick={hanldeEditState} />
      }
    </MypageIntroWrap>
  );
};

