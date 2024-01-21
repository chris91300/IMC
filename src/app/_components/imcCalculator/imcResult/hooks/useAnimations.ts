import { useState } from "react";
import { animationForImagesType } from '../imcResultType'
import useIncrementImc from "./useIncrementImc";
import useAnimationForImages from "./useAnimationForImages";


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
  
    const [ imcAnimated, setImcAnimated ] = useState(imcStarter);
    const [ animationForImages, setAnimationForImages ] = useState(defaultAnimationForImages as animationForImagesType);
    const [ imcAnimation, setImcAnimation ] = useState('');
  
    useIncrementImc(imcAnimated, userIMC, setImcAnimated);
    useAnimationForImages(imcAnimated, setAnimationForImages, setImcAnimation);

    return {
      imcAnimated,
      animationForImages,
      imcAnimation
    }
}
