

import React from "react";
import { InputProps } from "./inputNumber";

export default function InputNumber(props: InputProps) {
    const {
        label,
        name,
        defaultValue,
        step = 1,
        min = 0,
        max = 300,
        error,
        errorText,
        setValue,
    } = props;


    //   C'EST LE FORM QUI DOIS CONTROLER LA VALUE
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const stringValue = e.target.value;
        const number = parseInt(stringValue);        
        setValue(number);
        
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const stringValue = e.target.value;
        const number = parseInt(stringValue);
        setValue(number);
        
    };


    //  CREER HOOK POUR GÉRER ERROR STATE lors du handle change

    //  container classname : 
    //  label className : "mr-3 text-center text-[wheat]"
    //  intpu className : "w-2/3 mt-3 pl-3 text-black font-bold rounded-lg"

    return (
        <div className="flex flex-col justify-center p-2 w-40">
            <label htmlFor={name}>
                {label}
            </label>
            <input
                type="number"
                name={name}
                id={name}
                value={defaultValue}
                step={step}
                min={min}
                max={max}
                onChange={handleChange}
                onBlur={onBlur}
            />
            {error && (
                <p className="block text-sm text-red-500 bold">
                    { errorText }
                </p>
            )}
        </div>
    );
}
