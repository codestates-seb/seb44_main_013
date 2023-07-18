/* 2023-07-17 새로고침 막기 훅 - 김다함 */
import { useEffect } from 'react';

export default function usePreventRefresh() {
  const preventRefresh = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", preventRefresh);

    return () => {
      window.removeEventListener("beforeunload", preventRefresh);
    };
  }, []);
};