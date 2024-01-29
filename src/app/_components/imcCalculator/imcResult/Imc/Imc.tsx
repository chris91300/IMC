
import React from 'react'
import Ten from './Ten';
import Unit from './Unit';
import Comma from './Comma';
import Tenth from './Tenth';
import getImcSplitted from './utils/getImcSplitted';
import { imcStatusType } from '../imcResult';
import Advice from './advice/Advice';
import ImcStatus from './imcStatus/ImcStatus';


type ImcProps = {
    imcAnimated: number,
    imcAnimation: string,
    imcStatus: imcStatusType,
    incrementationIsOver: boolean,
    weightToAchieve: number
}

export default function Imc({ imcAnimated, imcAnimation, imcStatus, incrementationIsOver, weightToAchieve }: ImcProps) {
  const [ten, unit, comma, tenth] = getImcSplitted(imcAnimated);

  return (
    <div className='flex flex-col items-center gap-4'>
      <p className='text-wheat'>Votre IMC est de :</p>
      <p className={`flex items-center justify-center w-20 h-20 border border-denutrition rounded-full shadow-full text-denutrition shadow-denutrition ${imcAnimation}`}>
          <Ten ten={ten} />
          <Unit unit={unit} />
          <Comma />
          <Tenth tenth={tenth} />
      </p>
      <ImcStatus incrementationIsOver={ incrementationIsOver } imcStatus={ imcStatus } />
      { incrementationIsOver ? <Advice weight={weightToAchieve} imcStatus={imcStatus.text} />: null }
    </div>
  )
}
