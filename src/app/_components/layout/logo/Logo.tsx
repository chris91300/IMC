
import React from "react";
import { CgArrowLongUpC } from "react-icons/cg";
import Container from "../../globals/container/Container";
// il faut modifier les couleur
export default function Logo() {
    
    //vert = #5CDA32
    //jaune = #FFDE28
    //rouge = #E93350
    return (
            <Container>
                <p className="flex bg-gradient-to-r from-[#5CDA32] via-[#FFDE28] to-[#E93350] bg-clip-text text-4xl font-bold text-transparent tracking-tighter">
                    IMC
                </p>
            </Container>
    );
}
