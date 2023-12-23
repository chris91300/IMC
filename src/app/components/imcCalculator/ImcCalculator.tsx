'use client'

import React, { useState} from 'react'
import useTall from './hooks/useTall/useTall';
import useWeight from './hooks/useWeight/useWeight';
import ImcForm from './imcForm/ImcForm';
import ImcResult from './imcResult/ImcResult';

export default function ImcCalculator() {

  const { tall, setTall, tallIsValid } = useTall(165, /\d{1,3}/)
  const { weight, setWeight, weightIsValid } = useWeight(60, /\d{1,3}/)
  const [ getResult, setGetResult ] = useState(false)
  const submitForm = ()=>{
    if(tallIsValid && weightIsValid){
      setGetResult(true);
    }
  }


  return (
    <section className='mt-20'>
        <h2>
            Calculer votre IMC
        </h2>
        <ImcForm
          tall={tall}
          setTall={setTall}
          tallIsValid={tallIsValid}
          weight={weight}
          setWeight={setWeight}
          weightIsValid={weightIsValid}
          submit={submitForm}
        />
        { getResult && <ImcResult tall={tall} weight={weight} /> }
    </section>
  )
}
