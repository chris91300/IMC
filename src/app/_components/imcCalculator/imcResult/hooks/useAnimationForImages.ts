import { useEffect, SetStateAction, Dispatch } from 'react'
import { animationForImagesType } from '../imcResult';
import { imcStatusType } from '../imcResult';
import getWeightStatus from '../../utils/getWeightStatus';



export default function useAnimationForImages(
  imcAnimated: number,
  setAnimationForImages: Dispatch<SetStateAction<animationForImagesType>>,
  setImcAnimation: Dispatch<SetStateAction<string>>,
  setImcStatus:Dispatch<SetStateAction<imcStatusType>>
  ) {

  useEffect(()=>{
    const step = getWeightStatus(imcAnimated);

    switch(step!.status){

      case 'maigreur':
        setAnimationForImages( (prevState)  => ({...prevState, "dénutrition": 'animate-hide'}))
        setImcAnimation('animate-denutritionToMaigreur');
        setImcStatus({
          text: 'maigreur',
          color: "text-maigreur"
        });
        break;

      case 'poids normal':
        setAnimationForImages( (prevState)  => ({...prevState, "maigreur": 'animate-hide'}))
        setImcAnimation('animate-maigreurToPoidsNormal');
        setImcStatus({
          text: 'poids normal',
          color: "text-poidsNormal"
        });
        break;

      case 'surpoids':
        setAnimationForImages( (prevState)  => ({...prevState, "poids normal": 'animate-hide'}))
        setImcAnimation('animate-poidsNormalToSurpoids');
        setImcStatus({
          text: 'surpoids',
          color: "text-surpoids"
        });
        break;

      case 'obésité modérée':
        setAnimationForImages( (prevState)  => ({...prevState, "surpoids": 'animate-hide'}))
        setImcAnimation('animate-surpoidsToObesiteModeree');
        setImcStatus({
          text: 'obésité modérée',
          color: "text-obesite-moderee"
        });
        break;

      case 'obésité sévère':
        setAnimationForImages( (prevState)  => ({...prevState, "obésité modérée": 'animate-hide'}))
        setImcAnimation('animate-obesiteModereeToObesiteSevere');
        setImcStatus({
          text: 'obésité sévère',
          color: "text-obesite-severe"
        });
        break;

      case 'obésité morbide':
        setAnimationForImages( prevState  => ({...prevState, "obésité sévère": 'animate-hide'}))
        setImcAnimation('animate-obesiteSevereToObesiteMorbide');
        setImcStatus({
          text: 'obésité morbide',
          color: "text-obesite-morbide"
        });
        break;

      default:
        // Do nothing because is the default state
    }
  }, [imcAnimated]);
}
/*
export default function useAnimationForImages(
    imcAnimated: number,
    setAnimationForImages: Dispatch<SetStateAction<animationForImagesType>>,
    setImcAnimation: Dispatch<SetStateAction<string>>,
    setImcStatus:Dispatch<SetStateAction<imcStatusType>>
    ) {
  
    useEffect(()=>{
        if(imcAnimated > 39.9){
          setAnimationForImages( prevState  => ({...prevState, "obésité sévère": 'animate-hide'}))
          setImcAnimation('animate-obesiteSevereToObesiteMorbide');
          setImcStatus({
            text: 'obésité morbide',
            color: "text-obesite-morbide"
          });
        }else if(imcAnimated > 34.9){
          setAnimationForImages( (prevState)  => ({...prevState, "obésité modérée": 'animate-hide'}))
          setImcAnimation('animate-obesiteModereeToObesiteSevere');
          setImcStatus({
            text: 'obésité sévère',
            color: "text-obesite-severe"
          });
        }else if(imcAnimated > 29.9){
          setAnimationForImages( (prevState)  => ({...prevState, "surpoids": 'animate-hide'}))
          setImcAnimation('animate-surpoidsToObesiteModeree');
          setImcStatus({
            text: 'obésité modérée',
            color: "text-obesite-moderee"
          });
        }else if(imcAnimated > 24.9){
          setAnimationForImages( (prevState)  => ({...prevState, "poids normal": 'animate-hide'}))
          setImcAnimation('animate-poidsNormalToSurpoids');
          setImcStatus({
            text: 'surpoids',
            color: "text-surpoids"
          });
        }else if(imcAnimated > 18.4){
          setAnimationForImages( (prevState)  => ({...prevState, "maigreur": 'animate-hide'}))
          setImcAnimation('animate-maigreurToPoidsNormal');
          setImcStatus({
            text: 'poids normal',
            color: "text-poidsNormal"
          });
        }else if(imcAnimated > 16.4){
          setAnimationForImages( (prevState)  => ({...prevState, "dénutrition": 'animate-hide'}))
          setImcAnimation('animate-denutritionToMaigreur');
          setImcStatus({
            text: 'maigreur',
            color: "text-maigreur"
          });
        }
      }, [imcAnimated]);
}*/
