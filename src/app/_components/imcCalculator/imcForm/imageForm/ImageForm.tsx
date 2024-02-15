import React from "react";
import Image from "next/image";
import imageForForm from "../../../../../../public/images/imc_ref.jpg";

export default function ImageForm() {
    return (
        <div className="w-40 h-80 relative">
            <Image
                src={imageForForm}
                alt="dessin représentant le corps d'une personne"
                fill
                sizes="100%"
            />
        </div>
    );
}
