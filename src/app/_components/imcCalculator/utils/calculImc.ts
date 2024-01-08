

export default function calculImc(tall: number, weight: number):number {
    const imc = weight / Math.pow(tall, 2);
    return parseFloat(imc.toFixed(2))
}
