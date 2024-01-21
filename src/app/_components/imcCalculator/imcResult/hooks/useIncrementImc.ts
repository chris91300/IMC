import { useEffect, SetStateAction } from "react";
import config from "@/app/config/config";

const imcIncrement = config.imcIncrement;
const totalNumberAfterComma = config.totalNumberAfterComma;
const timeBetweenEachImcIncrementation = config.timeBetweenEachImcIncrementation;

export default function useIncrementImc(
    currentImc: number,
    imc: number,
    setImc: (value: SetStateAction<number>) => void
  ){
    useEffect(()=>{
        const incrementImc = setTimeout(()=>{
          setImc(prevState => (Number((prevState + imcIncrement).toFixed(totalNumberAfterComma)))
          )       
        }, timeBetweenEachImcIncrementation);
        
        if(currentImc >= imc){
          return clearTimeout(incrementImc)
        }
        
      }, [currentImc]);
}

