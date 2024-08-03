import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

function LinkToGit() {
    return (
        <Link
            href="https://github.com/chris91300/supermarket"
            title="aller sur la page github du repository"
            className="text-white flex items-center gap-3 hover:text-wheat transition-all duration-300"
        >
            <FaGithub size={25} />
            voir le code sur github
        </Link>
    );
}

export default LinkToGit;
