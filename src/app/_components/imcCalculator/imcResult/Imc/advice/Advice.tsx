import config from '@/app/_config/config'
import React from 'react'
import { adviceType } from './advice';


export default function Advice({ weight,imcStatus}: adviceType){
    
    const needToGainWeight = (imcStatus === 'dénutrition' || imcStatus === 'maigreur');
    const advice = needToGainWeight ? config.weightToGainText(weight) : config.weightToLooseText(weight);

  return (
    <p className='text-wheat'>{advice}</p>
  )
}
