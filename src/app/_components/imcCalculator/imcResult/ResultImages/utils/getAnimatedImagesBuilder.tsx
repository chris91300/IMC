
import Image from 'next/image';
import formateWordForPath from './formateWordForPath'
import { animationForImagesType } from '../../imcResult';

export default function getAnimatedImagesBuilder(animations: animationForImagesType){

  return function imagesBuilder(imcDescription: string): React.ReactNode{
    const imcDescriptionForPath = formateWordForPath(imcDescription)
    const animation = animations[imcDescription];
    
    return(
      <Image          
        key={imcDescription}
        src={`/images/imc_result_${imcDescriptionForPath}.jpg`}
        alt={`image représentant un corps en situation de ${imcDescription}`}
        fill
        sizes='100%'
        className={`absolute top-0 left-0 ${animation}`}
      />
    )

}
}
