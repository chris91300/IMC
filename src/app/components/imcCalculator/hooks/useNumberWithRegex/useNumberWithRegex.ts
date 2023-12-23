
import useNumber from '../useNumber/useNumber'
import validRegex from '../../utils/validRegex'


export default function useNumberWithRegex(defaultValue: number, regex: RegExp) {
    const { number, setNumber, error, setError } = useNumber(defaultValue)  
    const formatIsValid = validRegex(regex);
    const setNumberFormatted = (number: number) => {
        console.log("number = ",number)
        if(formatIsValid(number)){
            setError(false);
            setNumber(number);
            
        }else{
            setError(true);
        }
    }

    return {
        number,
        setNumberFormatted,
        error
    }
}
