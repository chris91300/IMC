'use client'

import React, { useRef } from 'react'
import { imcFormPropsType } from './imcForm';
import InputNumber from '../../globals/input/InputNumber'
import { test } from 'ramda';
import config from '../../../_config/config';// modifier dnas packagejson avec @
import ImageForm from './imageForm/ImageForm';


export default function ImcForm(props: imcFormPropsType) {
  const {
    submit } = props;


  const inputTall = useRef<HTMLInputElement>({} as HTMLInputElement)
  const inputWeight = useRef<HTMLInputElement>({} as HTMLInputElement)
  const tallRegex = config.tallRegex;
  const weightRegex = config.weightRegex;
  const tallErrorText = config.tallErrorText;
  const weightErrorText = config.weightErrorText;
  const tallHaveGoodFormat = test(tallRegex);
  const weightHaveGoodFormat = test(weightRegex); 

  const submitForm = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const tallValue = inputTall.current.value;
    const weightValue = inputWeight.current.value;
    if(tallHaveGoodFormat(tallValue) && weightHaveGoodFormat(weightValue)){
      submit(tallValue, weightValue);
    }
  }

  return (
    <form
      className='flex flex-col items-center gap-5 mb-20'
      onSubmit={ submitForm }
    >
      <p>
          Merci de renseigner votre poids et votre taille :
      </p>
        <div className='flex'>
            <div>
                <ImageForm />
                
                <InputNumber
                  label="Votre poids en kg"
                  name="weight"
                  step={0.01}
                  min={0.01}
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
                <button className='px-6 py-2 border-2 border-black rounded-full hover:font-bold hover:border-3' type="submit">calculer</button>
              </div>
            </div>
        </div>
        
    </form>
  )
}
