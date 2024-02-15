import config from "@/app/_config/config";
import React from "react";
import { adviceType } from "./advice";
import getAdvice from "./getAdvice";

export default function Advice({ weight, imcStatus }: adviceType) {
    const advice = getAdvice(weight, imcStatus);

    return <p className="dark:text-wheat">{advice}</p>;
}
