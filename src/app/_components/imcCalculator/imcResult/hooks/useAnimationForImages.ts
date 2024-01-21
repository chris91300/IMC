import { useEffect, SetStateAction, Dispatch } from 'react'
import { animationForImagesType } from '../imcResultType';

/**
 * IMC REPRESENTATION
 * 
 * dénutrition      =>  < 16.4
 * maigreur         =>  16.5 à 18.4
 * poids normal     =>  18.5 à 24.9
 * surpoids         =>  25 à 29.9
 * obésité modérée  =>  30 à 34.9
 * obésité sévère   =>  35  à 39.9
 * obésité morbide  =>  > 40
 */

export default function useAnimationForImages(
    imcAnimated: number,
    setAnimationForImages: Dispatch<SetStateAction<animationForImagesType>>,
    setImcAnimation: Dispatch<SetStateAction<string>>
    ) {
  
    useEffect(()=>{
        if(imcAnimated > 39.9){
          setAnimationForImages( prevState  => ({...prevState, "obésité sévère": 'animate-hide'}))
          setImcAnimation('animate-obesiteSevereToObesiteMorbide');
        }else if(imcAnimated > 34.9){
          setAnimationForImages( (prevState)  => ({...prevState, "obésité modérée": 'animate-hide'}))
          setImcAnimation('animate-obesiteModereeToObesiteSevere');
        }else if(imcAnimated > 29.9){
          setAnimationForImages( (prevState)  => ({...prevState, "surpoids": 'animate-hide'}))
          setImcAnimation('animate-surpoidsToObesiteModeree');
        }else if(imcAnimated > 24.9){
          setAnimationForImages( (prevState)  => ({...prevState, "poids normal": 'animate-hide'}))
          setImcAnimation('animate-poidsNormalToSurpoids');
        }else if(imcAnimated > 18.4){
          setAnimationForImages( (prevState)  => ({...prevState, "maigreur": 'animate-hide'}))
          setImcAnimation('animate-maigreurToPoidsNormal');
        }else if(imcAnimated > 16.4){
          setAnimationForImages( (prevState)  => ({...prevState, "dénutrition": 'animate-hide'}))
          setImcAnimation('animate-denutritionToMaigreur');
        }
      }, [imcAnimated]);
}
