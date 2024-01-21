'use client'

import React, { useState} from 'react'
import ImcForm from './imcForm/ImcForm';
import ImcResult from './imcResult/ImcResult';
import calculImc from './utils/calculImc';
import H2 from '../globals/headers/h2/H2';


export default function ImcCalculator() {

  const [ imc, setImc ] = useState(0);
  const [ getResult, setGetResult ] = useState(false)

  const calculateIMC = (tall: string, weight:string)=>{
    const tallAsNumber = parseFloat(tall);
    const weightAsNumber = parseFloat(weight)
    const imcCalculated = calculImc(tallAsNumber, weightAsNumber)
    setImc(imcCalculated)
    setGetResult(true);
  }


  return (
    <section className='mt-20'>
        <H2>
            Calculer votre IMC
        </H2>
        <ImcForm
          submit={calculateIMC}
        />
        { getResult && <ImcResult imc={imc} /> }
    </section>
  )
}
