
import { map } from "ramda";
import getAnimatedImagesBuilder from "./getAnimatedImagesBuilder";
import config from "../../../../../_config/config";
import { animationForImagesType } from '../../imcResult'

const weightStatus = config.weightStatus;

export default function getAnimatedImages(animations: animationForImagesType){
    const buildImages = getAnimatedImagesBuilder(animations);
    const images = map(buildImages, weightStatus);
    return images;
}
