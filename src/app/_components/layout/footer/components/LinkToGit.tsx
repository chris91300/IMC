import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

function LinkToGit() {
    return (
        <Link
            href="https://github.com/chris91300/imc"
            title="aller sur la page github du repository"
            className="text-white flex items-center gap-3 group"
        >
            <FaGithub size={25} />
            <p className="group-hover:text-wheat transition-all duration-300">
                voir le code sur github
            </p>
        </Link>
    );
}

export default LinkToGit;
