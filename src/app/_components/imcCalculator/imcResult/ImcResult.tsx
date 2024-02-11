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
import Button from '../../globals/button/Button';


export default function ImcResult(props: imcResultPropsType) {
    const { user, restart } = props;
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
        <H2>VOTRE IMC EST DE :</H2>
        <Container className="flex justify-around items-center w-full sm:w-6/12 max-w-md m-auto p-1">
          <ResultImages animationForImages={ animationForImages } />
          <Container className="flex flex-col items-center">
            <Imc
              imcAnimated={ imcAnimated }
              imcAnimation={ imcAnimation }
              imcStatus={imcStatus}
              incrementationIsOver={incrementationIsOver}
              weightToAchieve={weightToAchieve}
            />
            {incrementationIsOver && <Button title='recalculer un nouvel imc' onClick={ restart }>
              recommencer
            </Button>}
          </Container>
        </Container>
    </div>
  )
}
