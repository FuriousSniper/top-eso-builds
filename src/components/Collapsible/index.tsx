import React, { ReactNode, useEffect, useRef, useState } from "react";
import './style.less'

interface CollapsibleProps {
    open?: boolean;
    children: ReactNode
}

const Collapsible = (props: CollapsibleProps) => {
    const [isOpen, setIsOpen] = useState(props.open);
    const [height, setHeight] = useState(0)
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            const rect = ref.current?.getBoundingClientRect()
            if (rect) {
                setHeight(rect.height);
            }
        }
        else {
            setHeight(0);
        }
    }, [isOpen]);
    const handleFilterOpening = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsibleFragment">
            <div className="separator separatorButton" onClick={handleFilterOpening}>
                <span>&nbsp;{isOpen ? "Close" : "Show"}&nbsp;</span>
            </div>
            <div style={{ height: height }} className="collapseElement">
                <div ref={ref}>{isOpen && <div className="collapsibleChildren">{props.children}</div>}</div>
            </div>
        </div>
    );
};

export default Collapsible;