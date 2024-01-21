import { toString } from "ramda";

const imcWithTenth = (imc: number) => Number.isInteger(imc) ? toString(imc)+',0' : toString(imc);

export default imcWithTenth;