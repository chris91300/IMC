import React from "react";
import Logo from "../logo/Logo";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-5">
            <Logo />
            <Link className="font-bloody text-lg text-red-600" href="/">
                portfolio
            </Link>
        </header>
    );
}
