
export default function matchRegex(regex: RegExp){
    return (value: string) => regex.test(value);
}