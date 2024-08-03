import Image from "next/image";
import Link from "next/link";
import React from "react";

function LinkToPortfolio() {
    return (
        <Link
            href="https://michelchristophe.ovh/"
            title="voir mon portfolio"
            className="text-white flex items-center gap-3 hover:text-wheat transition-all duration-300"
        >
            <Image
                src="/images/moi.jpg"
                alt="photo de michel christophe"
                width={25}
                height={30}
            />
            Portfolio
        </Link>
    );
}

export default LinkToPortfolio;
