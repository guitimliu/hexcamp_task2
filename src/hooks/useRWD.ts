// refer to: https://ithelp.ithome.com.tw/articles/10225184

import { useState, useEffect } from 'react';

const useRWD = () => {
  const [ device, setDevice ] = useState<'sm' | 'md'>('sm');

  const handleRWD = () => {
    if (window.innerWidth < 768) {
      setDevice('sm');
    } else {
      setDevice('md');
    }
  }

  useEffect(() => {
    handleRWD()
    return (() => {
      window.addEventListener('resize', handleRWD);
    });
  }, []);

  return device;
}

export default useRWD;