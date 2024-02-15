import config from "@/app/_config/config";
import { find, gte } from "ramda";
import { weightStatusStep } from "@/app/_types/types";

export default function getWeightStatus(imc: number) {
    const imcOverOrEqualStepLevel = (step: weightStatusStep) =>
        gte(imc, step.level);
    const step = find(imcOverOrEqualStepLevel, config.levelForWeightStatus);

    return step;
}
