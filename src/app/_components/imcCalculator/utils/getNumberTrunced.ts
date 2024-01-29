import config from "@/app/_config/config";

// réécrire getNumberTrunc en getNumbertrunced
// puis continuer. tout est ok
export default function getNumberTrunced(num: number, totalDecimal: number) {
  
    const numToString = num.toString();
    const [integer, decimal] = numToString.split("."); 
    const numberTruncedToString = integer +"."+ decimal.slice(0,totalDecimal);
    const numberTrunced = Math.abs(parseFloat(numberTruncedToString));

    return numberTrunced;
}
