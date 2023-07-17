/* 2023-07-17 모달 커스텀훅 - 김다함 */
import { useCallback, useState } from 'react';

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);

  }, [])

  return [isModalOpen, openModal] as const;
}