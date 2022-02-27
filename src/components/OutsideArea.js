import React, { useEffect, useRef } from 'react'

const useOutside = (ref,runFunction) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                runFunction();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref,runFunction]);
}

const OutsideArea = (props) => {
    const wrapperRef = useRef(null);
    useOutside(wrapperRef,props.runFunction);

    return <div ref={wrapperRef}>{props.children}</div>;
}
export default OutsideArea
