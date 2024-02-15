import { useEffect, useRef } from "react";

export default function useScrollIntoView() {
    const mainContainer = useRef({} as HTMLDivElement);
    useEffect(() => {
        mainContainer!.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    return mainContainer;
}
