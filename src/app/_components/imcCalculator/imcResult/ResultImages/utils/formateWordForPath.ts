import { pipe, replace } from "ramda";

const replaceSpaceByUnderscore = replace(/ /g, "_");

const removeAccent = replace(/[éè]/g, "e");

const formateWordForPath = pipe(replaceSpaceByUnderscore, removeAccent);

export default formateWordForPath;
