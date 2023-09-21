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

export default function useToggle({ portfolioId, buttonType, isToggled: isOn, color, count: cnt = 0 }: Toggle) {
  const [count, setCount] = useState<number>(cnt);
  const [isToggled, setIsToggled] = useState<boolean>(isOn);
  const [url] = useState<string>(`/${buttonType}/${portfolioId}`);
  const [buttonColor, setButtonColor] = useState<string | undefined>(isOn ? `${color}` : 'gray');

  const changeToggleClicks = () => call(url, 'GET');

  const onClick = useCallback(async () => {
    if (isToggled)
      await changeToggleClicks();
      setButtonColor('gray');
      buttonType === 'likes' && setCount(count - 1);
    if (!isToggled)
      await changeToggleClicks()
      setButtonColor(color);
      buttonType === 'likes' && setCount(count + 1);
    setIsToggled(!isToggled);
  }, [isToggled, count])

  return [buttonColor, onClick, count] as const;
}