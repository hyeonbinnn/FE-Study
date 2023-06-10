import { useState } from 'react';

const useAB = (initState) => {
  const [value, setValue] = useState(initState);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

export default useAB;
