// 2023-07-05 프로필 기본 보기 & 수정(click to edit) 구현 - 박효정
//2023-07-10 회원이름 조회, 수정, 저장, 삭제 기능 구현 - 위정연
import { useState, useRef, useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import userImg from '../../assets/userImg.jpg';
import { BsFillPencilFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { User } from '@/mocks/data';

import { MypageProfileContainer, NameEdit } from './MypageProfile.styled';

const WeatherIcon = styled.img`
  width: 60px;
  height: 60px;
`;

const WEATHER_ICON_URL = 'http://openweathermap.org/img/wn/';

interface MypageProfileProps {
  user: User | null;
}

export default function MypageProfile({ user }: MypageProfileProps) {
  const API_KEY = '76e0dc6fc7f77e50fa77bdb26076dbb1';
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherData, setWeatherData] = useState<{
    city: string;
    weather: string;
    icon: string;
  }>({ city: '', weather: '', icon: '' });

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameBlur = async () => {
    if (!name.trim()) {
      setIsEdit(false);
      return;
    }

    if (!user) {
      setIsEdit(false);
      return;
    }

    try {
      await axios.patch(`/members/${user.id}`, { name });
      console.log('이름 변경 성공');
    } catch (error) {
      console.error('이름 변경 실패', error);
    }
    setIsEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const getWeatherByCoords = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      return {
        city: data.name,
        weather: `${Math.round(data.main.temp)}°C`,
        icon: data.weather[0].icon,
      };
    } catch (error) {
      console.error('날씨정보를 받아올 수 없습니다.', error);
      return {
        city: '',
        weather: '',
        icon: '',
      };
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const weather = await getWeatherByCoords(lat, lon);
      setWeatherData(weather);
    });
  }, []);

  return (
    <MypageProfileContainer>
      {user ? (
        <>
          <img src={userImg} alt="userImage" />
          <div>
            {isEdit ? (
              <NameEdit
                type="text"
                value={name}
                ref={inputRef}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                readOnly={!isEdit} // isEdit이 false일 때 편집 불가능하도록 설정
              />
            ) : (
              <>
                <h1 onClick={handleEditToggle}>{user.name}</h1>
                <BsFillPencilFill
                  size={20}
                  className="editBtn"
                  onClick={handleEditToggle}
                />
              </>
            )}
          </div>
          <div>
            <BiMap size={18} />
            <p>
              {weatherData.city} / {weatherData.weather}
            </p>
            {weatherData.icon && (
              <WeatherIcon
                src={`${WEATHER_ICON_URL}${weatherData.icon}@2x.png`}
                alt="Weather icon"
              />
            )}
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </MypageProfileContainer>
  );
}
