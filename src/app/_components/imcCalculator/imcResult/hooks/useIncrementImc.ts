import { useEffect, SetStateAction, Dispatch } from "react";
import config from "@/app/_config/config";

const imcIncrement = config.imcIncrement;
//const totalNumberAfterComma = config.totalNumberAfterComma;
const timeBetweenEachImcIncrementation =
    config.timeBetweenEachImcIncrementation;

export default function useIncrementImc(
    currentImc: number,
    imc: number,
    setImc: (value: SetStateAction<number>) => void,
    setIncrementationIsOver: Dispatch<SetStateAction<boolean>>
) {
    useEffect(() => {
        const incrementImc = setTimeout(() => {
            if (currentImc < imc) {
                setImc((prevState) => prevState + imcIncrement);
            }
        }, timeBetweenEachImcIncrementation);

        if (currentImc >= imc) {
            setIncrementationIsOver(true);
            return clearTimeout(incrementImc);
        }
    }, [currentImc]);
}
