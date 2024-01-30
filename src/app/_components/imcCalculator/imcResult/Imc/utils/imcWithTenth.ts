import { toString } from "ramda";

//TODO: modif +,0 par tofixed(1)
const imcWithTenth = (imc: number) => Number.isInteger(imc) ? toString(imc)+',0' : toString(imc);

export default imcWithTenth;