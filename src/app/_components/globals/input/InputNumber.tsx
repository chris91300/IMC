'use client'

import React, { forwardRef, useState } from "react";
import { InputProps } from "./inputNumber";
import { test} from "ramda";

const InputNumber = forwardRef<HTMLInputElement, InputProps>( function InputNumber(props, ref){
    
    const {
        label,
        name,
        defaultValue,
        step = 1,
        min = 0,
        max = 300,
        pattern = /.*/,
        errorText,
    } = props as InputProps;

    const [ value, setValue ] = useState(defaultValue)
    const [ showError, setShowError ] = useState(false);

    const valueIsValid = test(pattern);
    const valueIsValidAndBetweenMinAndMax = (value: string) => {
        const numberValue = parseFloat(value);        
        return ( valueIsValid(value) && numberValue >= min && numberValue <= max )
    }

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;               
        setValue(value);
        if( valueIsValidAndBetweenMinAndMax(value) ){
            setShowError(false)
        }else{
            setShowError(true)
        }
    };



    return (
        <div className="flex flex-col justify-center p-2 w-40 dark:text-black">
            <label htmlFor={name} className='dark:text-white'>
                {label}
            </label>
            <input
                type="number"
                name={name}
                id={name}
                value={value}
                step={step}
                min={min}
                max={max}
                pattern={`${pattern}`}
                onChange={handleChange}
                ref={ref!}
            />
            {(showError) && (
                <p className="block text-sm text-red-500 bold">
                    { errorText }
                </p>
            )}
        </div>
    );
})

export default InputNumber;
