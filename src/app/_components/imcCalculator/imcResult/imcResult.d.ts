import { userType } from "@/app/_types/types";

export type imcResultPropsType = {
    user: userType;
    restart: () => void;
};

export type imcStatusType = {
    text: weightStatus;
    color: string;
};

export type animationForImagesType = {
    [data: string]: string;
    "obésité morbide": string;
    "obésité sévère": string;
    "obésité modérée": string;
    surpoids: string;
    "poids normal": string;
    maigreur: string;
    dénutrition: string;
};

export type imcProps = {
    imcAnimated: number;
    imcAnimation: string;
    imcStatus: imcStatusType;
    incrementationIsOver: boolean;
    weightToAchieve: number;
};
