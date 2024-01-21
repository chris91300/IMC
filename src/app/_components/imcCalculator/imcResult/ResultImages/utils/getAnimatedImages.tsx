
import { map } from "ramda";
import getAnimatedImagesBuilder from "./getAnimatedImagesBuilder";
import config from "../../../../../config/config";
import { animationForImagesType } from '../../imcResultType'

const imcRepresentations = config.imcRepresentations;

export default function getAnimatedImages(animations: animationForImagesType){
    const buildImages = getAnimatedImagesBuilder(animations);
    const images = map(buildImages, imcRepresentations);
    return images;
}
