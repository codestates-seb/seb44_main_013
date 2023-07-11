import { MypageProfileContainer, NameEdit } from './MypageProfile.styled';
import userImg from '../../assets/userImg.jpg';
import { BsFillPencilFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { useState, useRef, useEffect } from 'react';
import { UserData } from '@/mocks/data';
import styled from 'styled-components';

interface MypageProfileProps {
  userData: UserData | null;
}

const WeatherIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export default function MypageProfile({ userData }: MypageProfileProps) {
  const API_KEY = '76e0dc6fc7f77e50fa77bdb26076dbb1';
  const [weatherData, setWeatherData] = useState<{
    city: string;
    weather: string;
    icon: string;
  }>({ city: '', weather: '', icon: '' });

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem('name');
    return storedName !== null ? storedName : 'HOHO';
  });

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameBlur = () => {
    if (name.trim() !== '') {
      localStorage.setItem('name', name);
    }
    setIsEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      fetch(url)
        .then((response) =>
          response.json().then((data) => {
            setWeatherData({
              city: data.name,
              weather: `${parseFloat(data.main.temp).toFixed(1)}°C`,
              icon: data.weather[0].icon,
            });
          })
        )
        .catch(() => {
          alert("Can't find you. No weather for you.");
        });
    });
  }, []);

  return (
    <MypageProfileContainer>
      <img src={userImg} alt="userImage" />
      <div>
        {isEdit ? (
          <NameEdit
            type="text"
            value={name}
            ref={inputRef}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
        ) : (
          <>
            <h1 onClick={handleEditToggle}>{name}</h1>
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
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="Weather icon"
          />
        )}
      </div>
    </MypageProfileContainer>
  );
}
