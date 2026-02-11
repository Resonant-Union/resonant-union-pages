import { useState } from "react"
import { useEffect } from "react"

export const Reel = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://sharefol.io/api/player/85b7cd5d-4055-47e0-8d6e-a4f2ca44be89";
        document.getElementById('85b7cd5d-4055-47e0-8d6e-a4f2ca44be89').appendChild(script);

    }, []);

    return <div className="w-full py-5 px-5 md:px-20">
        <div id="85b7cd5d-4055-47e0-8d6e-a4f2ca44be89">
        </div>
    </div>
}
