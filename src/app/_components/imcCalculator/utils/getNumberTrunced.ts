export default function getNumberTrunced(num: number, totalDecimal: number) {
    const numToString = num.toString();
    const [integer, decimal = "000"] = numToString.split(".");
    const numberTruncedToString =
        integer + "." + decimal.slice(0, totalDecimal);
    const numberTrunced = Math.abs(parseFloat(numberTruncedToString));

    return numberTrunced;
}
