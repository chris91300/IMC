import { pipe, test, toString } from "ramda";
import imcWithTenth from "./imcWithTenth";
import splitEachChar from "./splitEachChar";


const getImcSplitted = pipe(
    imcWithTenth,
    splitEachChar
)

export default getImcSplitted;