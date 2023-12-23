import React from 'react'
import useNumber from '../useNumber/useNumber'
import useNumberWithRegex from '../useNumberWithRegex/useNumberWithRegex'
import { not } from 'ramda';

export default function useWeight(defaultValue: number, regex: RegExp) {
   
    const {
        number,
        setNumberFormatted,
        error
    } = useNumberWithRegex(defaultValue, regex);


    return {
        weight: number,
        setWeight: setNumberFormatted,
        weightIsValid: not(error)
    }
}
