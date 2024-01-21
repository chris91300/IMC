'use client'

import React from 'react'
import { imcResultPropsType } from './imcResult';
import H2 from '../../globals/headers/h2/H2';
import Container from '../../globals/container/Container';
import useAnimations from './hooks/useAnimations';
import ResultImages from './ResultImages/ResultImages';
import Imc from './Imc/Imc';
import config from '@/app/config/config';


export default function ImcResult(props: imcResultPropsType) {
    const { imc } = props;
    const {
      imcAnimated,
      animationForImages,
      imcAnimation
    } = useAnimations(config.imcStarter, imc)
    
    
 
  return (
    <div>
        <H2>RÉSULTAT</H2>
        <Container className="flex justify-around items-center bg-black">
          <ResultImages animationForImages={ animationForImages } />
          <Imc imcAnimated={ imcAnimated } imcAnimation={ imcAnimation }/>
        </Container>
    </div>
  )
}
