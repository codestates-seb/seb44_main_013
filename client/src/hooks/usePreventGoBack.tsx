/* 2023-07-17 뒤로가기 막기 훅 - 김다함 */
import { useEffect } from 'react';

export default function usePreventGoBack() {
  const preventGoBack = () => {
    history.pushState(null, "", location.href);
  };

  useEffect(() => {
    window.addEventListener("popstate", preventGoBack);

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);
};