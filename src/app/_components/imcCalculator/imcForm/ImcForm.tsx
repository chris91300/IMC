'use client'

import React, { useRef, useState } from 'react'
import { imcFormPropsType } from './imcForm';
import InputNumber from '../../globals/input/InputNumber'
import Image from 'next/image';
import { test } from 'ramda';
import config from '../utils/config'


export default function ImcForm(props: imcFormPropsType) {
  const {
    submit } = props;

  /*const [ tall, setTall ] = useState(config.tallDefaultValue)
  const [ weight, setWeight ] = useState(config.weightDefaultValue)*/

  const inputTall = useRef<HTMLInputElement>({} as HTMLInputElement)

  const inputWeight = useRef<HTMLInputElement>({} as HTMLInputElement)
  const tallRegex = config.tallRegex; // /^(0|1|2)(\.[0-9]{1,2})?$/;
  const weightRegex = config.weightRegex; // /^[0-9]{1,3}(\.[0-9]{1})?$/;
  const tallErrorText = config.tallErrorText; // "une taille valide (ex: 1,70)";
  const weightErrorText = config.weightErrorText; // "un poids valide svp (ex: 75,2)"; 
  const tallHaveGoodFormat = test(tallRegex);
  const weightHaveGoodFormat = test(weightRegex); 

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const tallValue = inputTall.current.value;
    const weightValue = inputWeight.current.value;
    if(tallHaveGoodFormat(tallValue) && weightHaveGoodFormat(weightValue)){
      submit(tallValue, weightValue);
    }
  }

  return (
    <form>
      <p>
          Merci de renseigner votre poids et votre taille :
      </p>
        <div className='flex'>
            <div>
                <div className="w-40 h-80 relative">
                  <Image
                    src="/images/imc_ref.jpg"
                    alt="dessin représentant le corps d'une personne"
                    layout='fill'
                  />
                </div>
                
                  <InputNumber
                    label="Votre poids en kg"
                    name="weight"
                    step={0.1}
                    min={0.1}
                    max={250}
                    pattern={weightRegex}
                    defaultValue={config.weightDefaultValue}
                    errorText={weightErrorText}
                    ref={inputWeight}
                  />
                  
                
            </div>
            <div className='flex flex-col'>
              <InputNumber
                label="Votre taille en cm"
                name="tall"
                defaultValue={config.tallDefaultValue}
                step={0.01}
                min={0.01}
                max={2.99}
                pattern={tallRegex}
                errorText={tallErrorText}
                ref={inputTall}
              />
              <div className='flex justify-center items-center grow'>
                <button className='px-6 py-2 border-2 border-black rounded-full hover:font-bold hover:border-3' type="submit" onClick={submitForm}>calculer</button>
              </div>
            </div>
        </div>
        
    </form>
  )
}
