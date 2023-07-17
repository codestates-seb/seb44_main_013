/* 2023-07-07 좋아요 버튼 커스텀훅 - 김다함 */
import { useCallback, useState } from 'react';

import { call } from '@/utils/apiService';

export interface Toggle {
  buttonType?: 'likes' | 'bookmarks';
  portfolioId: number;
  isToggled: boolean;
  color?: string;
  count?: number;
}

export default function useToggle({ portfolioId, buttonType, isToggled: isOn, color = 'purple', count: cnt = 0 }: Toggle) {
  const [count, setCount] = useState<number>(cnt);
  const [isToggled, setIsToggled] = useState<boolean>(isOn);
  const [url, ] = useState<string>(`/${buttonType}/${portfolioId}`);
  const [buttonColor, setButtonColor] = useState<string>(isOn ? `${color}` : 'gray');

  const setToggle = (method: 'POST' | 'DELETE') => call(url, `${method}`);

  const onClick = useCallback(() => {
    if (isToggled)
      setToggle('DELETE')
        .then((res) => {
          setButtonColor('gray');
          buttonType === 'likes' && setCount(res.likes);
        });
    else
      setToggle('POST')
        .then((res) => {
          setButtonColor(color);
          buttonType === 'likes' && setCount(res.likes);
        });
    setIsToggled(!isToggled);
  }, [isToggled])

  return [buttonColor, onClick, count] as const;
}