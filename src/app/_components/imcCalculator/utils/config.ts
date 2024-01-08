function config(){
    const tallRegex = /^(0|1|2)(\.[0-9]{1,2})?$/;
    const tallDefaultValue = '0.01'
    const tallErrorText = "une taille valide (ex: 1,70)";
    const weightRegex = /^[0-9]{1,3}(\.[0-9]{1})?$/;
    const weightDefaultValue = '0.1'
    const weightErrorText = "un poids valide svp (ex: 75,2)";

    return {
        tallRegex,
        tallDefaultValue,
        tallErrorText,
        weightRegex,
        weightDefaultValue,
        weightErrorText
    }
}

export default Object.freeze(config())