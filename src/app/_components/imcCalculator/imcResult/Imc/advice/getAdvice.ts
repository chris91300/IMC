import { weightStatus } from "@/app/types/types";
import config from "@/app/_config/config";


export default function getAdvice(weight: number, imcStatus: weightStatus) {
  
    switch(imcStatus){
        case 'dénutrition':
        case 'maigreur':
            return config.weightToGainText(weight);

        case 'surpoids':
        case 'obésité modérée':
        case 'obésité sévère':
        case 'obésité morbide':
            return config.weightToLooseText(weight);
        
        default:
            return "";
    }
}
