'use client'

import React from 'react'
import { imcResultPropsType } from './imcResult';
import H2 from '../../globals/headers/h2/H2';
import Container from '../../globals/container/Container';
import useAnimations from './hooks/useAnimations';
import ResultImages from './ResultImages/ResultImages';
import Imc from './Imc/Imc';
import config from '@/app/_config/config';
import useScrollIntoView from './hooks/useScrollIntoView';
import calculateTheDifferenceForNormalWeight from './Imc/utils/calculateTheDifferenceForNormalWeight';


export default function ImcResult(props: imcResultPropsType) {
    const { user} = props;
    const mainContainer = useScrollIntoView();
    const {
      imcAnimated,
      animationForImages,
      imcAnimation,
      imcStatus,
      incrementationIsOver
    } = useAnimations(config.imcStarter, user.imc)
    
    const weightToAchieve = calculateTheDifferenceForNormalWeight(user);
    
 
  return (
    <div ref={mainContainer}>
        <H2>RÉSULTAT</H2>
        <Container className="flex justify-around items-center bg-black w-full sm:w-6/12 m-auto">
          <ResultImages animationForImages={ animationForImages } />
          <Imc
            imcAnimated={ imcAnimated }
            imcAnimation={ imcAnimation }
            imcStatus={imcStatus}
            incrementationIsOver={incrementationIsOver}
            weightToAchieve={weightToAchieve}
          />
        </Container>
    </div>
  )
}
