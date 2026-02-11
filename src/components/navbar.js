import { pages } from "../utils/pages"
import { Link } from "react-router-dom";
import React from "react";
import { JrpgGradientButton } from "./jrpgbox";

import { useMediaQuery } from "react-responsive";
import { useBasePath } from "../utils/navigation";

const NavbarDesktop = () => {

    const basePath = useBasePath();

    return <div className="w-full text-white">
        <div className="flex flex-row items-center justify-end mx-16 py-6 gap-4 text-lg font-pixelify">
            {pages.map((page, index) => {
                return <a href={basePath + "/" + page.path}><JrpgGradientButton>{page.label}</JrpgGradientButton></a>
            })}
            <img className="w-12 h-12" src="/RU.png" alt="RU logo" />
        </div>
    </div >
}

const NavbarMobile = () => {
    const basePath = useBasePath();

    const isNotTablet = useMediaQuery({ query: '(max-width: 500px)' })

    return <div className="w-full text-white">
        <div className={`grid ${isNotTablet ? "grid-cols-2" : "grid-cols-4"} text-center items-center justify-center px-3 py-4 gap-2 font-pixelify text-sm`}>
            {pages.map((page, index) => {
                return <a href={basePath + "/" + page.path}><JrpgGradientButton>{page.label}</JrpgGradientButton></a>
            })}
        </div>
    </div>
}

export default function Navbar() {

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    return <div>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</div>

}
