import { configType } from "../_types/types";

const config: configType = {
    weightStatus: [
        "obésité morbide",
        "obésité sévère",
        "obésité modérée",
        "surpoids",
        "poids normal",
        "maigreur",
        "dénutrition",
    ],

    levelForWeightStatus: [
        { level: 40, status: "obésité morbide" },
        { level: 35, status: "obésité sévère" },
        { level: 30, status: "obésité modérée" },
        { level: 25, status: "surpoids" },
        { level: 18.5, status: "poids normal" },
        { level: 16.5, status: "maigreur" },
        { level: 0, status: "dénutrition" },
    ],

    totalNumberAfterComma: 1,

    imcStarter: 10.0,

    imcIncrement: 0.1,

    timeBetweenEachImcIncrementation: 20,

    tallRegex: /^(0|1|2)(\.[0-9]{1,2})?$/,

    tallDefaultValue: "0.01",

    tallErrorText: "une taille valide (ex: 1,70)",

    weightRegex: /^[0-9]{1,3}(\.[0-9]{1,2})?$/,

    weightDefaultValue: "0.01",

    weightErrorText: "un poids valide svp (ex: 75,2)",

    weightToLooseText: (weight) =>
        `Vous avez environs ${weight} kg à perdre pour avoir un poids normal.`,

    weightToGainText: (weight) =>
        `Vous avez environs ${weight}kg à prendre pour avoir un poids normal.`,
};

export default config;
