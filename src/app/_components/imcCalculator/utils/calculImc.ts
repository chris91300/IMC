import config from "@/app/_config/config";

export default function calculImc(tall: number, weight: number):number {
    const imc = weight / Math.pow(tall, 2);
    //const imcRounded = parseFloat(imc.toFixed(config.totalNumberAfterComma))
    return imc; // test ave juste imc
}
