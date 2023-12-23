import { useState } from 'react'
import { useNumberReturn } from './useNumberType';


export default function useNumber(defaultValue: number): useNumberReturn {
  const [ number, setNumber ] = useState(defaultValue);
  const [ error, setError ] = useState(false);


  return {
    number,
    setNumber,
    error,
    setError
  };
}
