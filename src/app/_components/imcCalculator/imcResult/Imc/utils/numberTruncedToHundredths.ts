import getNumberTrunced from "../../../utils/getNumberTrunced";

export default function numberTruncedToHundredths(number: number){
    return getNumberTrunced(number, 2);
}