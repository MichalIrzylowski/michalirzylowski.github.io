import { useState, useCallback } from "react";

export const useToggle = (initialState = false): [boolean, () => void] => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => {
        setState((prevState) => !prevState);
    }, [setState]);

    return [state, toggle];
};
