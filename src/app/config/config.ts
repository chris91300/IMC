
type configType = {
    readonly tallRegex: RegExp,
    readonly tallDefaultValue: string,
    readonly tallErrorText: string,
    readonly weightRegex: RegExp,
    readonly weightDefaultValue: string,
    readonly weightErrorText: string,
    readonly imcRepresentations: string[],
    readonly imcStarter: number,
    readonly imcIncrement: number,
    readonly totalNumberAfterComma: number,
    readonly timeBetweenEachImcIncrementation: number
}
const config: configType = {
    imcRepresentations: [
        "obésité morbide",
        "obésité sévère",
        "obésité modérée",
        "surpoids",
        "poids normal",
        "maigreur",
        "dénutrition"  
    ],
    totalNumberAfterComma: 1,
    imcStarter: 10.0,
    imcIncrement: 0.1,
    timeBetweenEachImcIncrementation: 20,
    tallRegex: /^(0|1|2)(\.[0-9]{1,2})?$/,
    tallDefaultValue: '0.01',
    tallErrorText: "une taille valide (ex: 1,70)",
    weightRegex: /^[0-9]{1,3}(\.[0-9]{1})?$/,
    weightDefaultValue: '0.1',
    weightErrorText:"un poids valide svp (ex: 75,2)",

}


export default config;