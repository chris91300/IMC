import { toString } from "ramda";

export default function imcWithTenth(imc: number) {
    return Number.isInteger(imc) ? imc.toFixed(1) : toString(imc);
}
