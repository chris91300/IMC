'use client'

import React, { useState} from 'react'
import ImcForm from './imcForm/ImcForm';
import ImcResult from './imcResult/ImcResult';
import calculImc from './utils/calculImc';
import H2 from '../globals/headers/h2/H2';
import config from '@/app/_config/config';
import { userType } from '@/app/types/types';


export default function ImcCalculator() {

  const newUser: userType = {
    tall: Number(config.tallDefaultValue),
    weight: Number(config.weightDefaultValue),
    imc: 0
  }

  const [ user, setUser ] = useState(newUser);
  const [ getResult, setGetResult ] = useState(false)
  const [ tall, setTall ] = useState(0);

  const calculateIMC = (tall: string, weight:string)=>{
    const tallAsNumber = parseFloat(tall);
    const weightAsNumber = parseFloat(weight)
    const imcCalculated = calculImc(tallAsNumber, weightAsNumber)
    setUser( {
      tall: tallAsNumber,
      weight: weightAsNumber,
      imc: imcCalculated
    } )
    
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
        { getResult && <ImcResult user={ user }/> }
    </section>
  )
}
