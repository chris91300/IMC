
export type weightStatus =  "dénutrition" |
                            "maigreur" |
                            "poids normal" |
                            "surpoids" |
                            "obésité modérée" |
                            "obésité sévère" |
                            "obésité morbide"


export type weightStatusStep = {
    level: number,
    status: weightStatus
}


export type configType = {
    readonly tallRegex: RegExp,
    readonly tallDefaultValue: string,
    readonly tallErrorText: string,
    readonly weightRegex: RegExp,
    readonly weightDefaultValue: string,
    readonly weightErrorText: string,
    readonly weightStatus: weightStatus[],
    readonly levelForWeightStatus: weightStatusStep[],
    readonly imcStarter: number,
    readonly imcIncrement: number,
    readonly totalNumberAfterComma: number,
    readonly timeBetweenEachImcIncrementation: number,
    readonly weightToLooseText: (num: number) => string,
    readonly weightToGainText: (num: number) => string
}


export type userType = {
    tall: number,
    weight: number,
    imc: number
  }