import { not } from 'ramda';
import useNumberWithRegex from '../useNumberWithRegex/useNumberWithRegex'

export default function useTall(defaultValue: number, regex: RegExp) {

    const {
            number,
            setNumberFormatted,
            error
        } = useNumberWithRegex(defaultValue, regex)


    return {
        tall: number,
        setTall: setNumberFormatted,
        tallIsValid: not(error)
    }
}
