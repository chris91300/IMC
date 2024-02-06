'use client'

import React, { useState} from 'react'
import ImcForm from './imcForm/ImcForm';
import ImcResult from './imcResult/ImcResult';
import calculImc from './utils/calculImc';
import H2 from '../globals/headers/h2/H2';
import config from '@/app/_config/config';
import { userType } from '@/app/types/types';

//  LE RESTART FONCTIONNE. VOIR POUR FAIR EL'ANIMATION
export default function ImcCalculator() {

  const newUser: userType = {
    tall: Number(config.tallDefaultValue),
    weight: Number(config.weightDefaultValue),
    imc: 0
  }

  const [ user, setUser ] = useState(newUser);
  const [ getResult, setGetResult ] = useState(false);

  const calculateIMC = (tall: string, weight:string)=>{
    console.log("user click on submit")
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

  const restart = () => {
    setGetResult(false);
  }


  return (
    <section className='mt-20'>
        <H2>
            Calculer votre IMC
        </H2>
        <ImcForm
          blockSubmit={ getResult } 
          submit={calculateIMC}
        />
        { getResult && <ImcResult user={ user } restart={ restart }/> }
    </section>
  )
}
