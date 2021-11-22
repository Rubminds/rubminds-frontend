import { useCallback, useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState(null);

  const handler = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};
