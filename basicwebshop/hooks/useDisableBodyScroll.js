import { useEffect } from "react";

export default function useDisableBodyScroll(active) {
    useEffect(() => {
        if (active) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [active]);
}
