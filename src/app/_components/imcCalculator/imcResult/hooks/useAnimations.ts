import { useState } from "react";
import { animationForImagesType } from '../imcResult'
import useIncrementImc from "./useIncrementImc";
import useAnimationForImages from "./useAnimationForImages";
import { imcStatusType } from "../imcResult";
import getNumberTrunced from "../../utils/getNumberTrunced";
import config from "@/app/_config/config";


const defaultAnimationForImages: animationForImagesType = {      
  "obésité morbide": '',
  "obésité sévère": '',
  "obésité modérée": '',
  "surpoids": '',
  "poids normal": '',
  "maigreur": '',
  "dénutrition": ''

}

  

export default function useAnimations(imcStarter: number, userIMC: number) {
  
  const defaultImcStatus: imcStatusType = {
    text: "dénutrition",
    color: "text-denutrition"
  }
    const imcRounded = getNumberTrunced(userIMC, config.totalNumberAfterComma);
    const [ imcAnimated, setImcAnimated ] = useState(imcStarter);
    const [ animationForImages, setAnimationForImages ] = useState(defaultAnimationForImages);
    const [ imcAnimation, setImcAnimation ] = useState('');
    const [ imcStatus, setImcStatus ] = useState(defaultImcStatus)
    const [ incrementationIsOver, setIncrementationIsOver ] = useState(false);
  
    useIncrementImc(imcAnimated, imcRounded, setImcAnimated, setIncrementationIsOver);
    useAnimationForImages(imcAnimated, setAnimationForImages, setImcAnimation, setImcStatus);

    return {
      imcAnimated,
      animationForImages,
      imcAnimation,
      imcStatus,
      incrementationIsOver
    }
}
