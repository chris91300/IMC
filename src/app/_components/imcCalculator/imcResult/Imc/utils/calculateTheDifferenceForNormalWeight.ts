
import { userType } from "@/app/types/types";
import getNumberTrunced from "../../../utils/getNumberTrunced";
import { gt, lt, multiply, pipe, subtract } from "ramda";
import numberFixedBy2 from "./numberFixedBy2";
import numberTruncedToHundredths from "./numberTruncedToHundredths";



export default function calculateTheDifferenceForNormalWeight(user: userType) {
    
    const { tall, weight, imc } = user;
    const imcTrunced = numberTruncedToHundredths(imc);
    const needToGainWeight = lt(imcTrunced, 18.5);
    const needToLooseWeight = gt(imcTrunced, 24.99);
    
    let diffWeight = 0;

    if( needToGainWeight || needToLooseWeight ){

        const squaredTall = (tall * tall);
        const subtractByUserWeight = subtract(weight);
        const multiplyBySquaredTall = multiply(squaredTall);
        const imcToAchieve = needToGainWeight ? 18.5 : 24.99;
        const calculateDiffWeight = pipe(
                                        multiplyBySquaredTall,
                                        subtractByUserWeight,
                                        Math.abs,
                                        numberFixedBy2,
                                        numberTruncedToHundredths
                                    );
        diffWeight = calculateDiffWeight(imcToAchieve);
    }
    
    return diffWeight
}
