import { userType } from "@/app/types/types"

export type imcResultPropsType = {
    user: userType
}

export type imcStatusType = {
    text: weightStatus,
    color: string
}

export type animationForImagesType = {
    [data: string]: string,
    "obésité morbide": string,
    "obésité sévère": string,
    "obésité modérée": string,
    "surpoids": string,
    "poids normal": string,
    "maigreur": string,
    "dénutrition": string
  
  }