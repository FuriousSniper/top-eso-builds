import React, { useState, useRef } from 'react';
import { GenericSkill, SetType } from '../../types/common';
import './style.less'
import SkillPopover from './SkillPopover';
import SetPopover from './SetPopover';

interface CommonProps {
    children: React.ReactNode;
    className?: string
}

type DisplayTypeProps =
    | {
        displaySkill?: GenericSkill;
        displaySet?: never;
    }
    | {
        displaySkill?: never;
        displaySet?: SetType;
    };

type Props = CommonProps & DisplayTypeProps

const GenericPopover = ((props: Props) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const tooltipRef = useRef<HTMLDivElement>(document.createElement('div'));

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
        const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let tooltipX = clientX;
        let tooltipY = clientY;

        // Check if tooltip exceeds the right side of the viewport
        if (tooltipX + tooltipWidth + 20 > viewportWidth) {
            tooltipX = clientX - tooltipWidth - 10;
        }

        //left viewport
        if (tooltipX < 0) {
            tooltipX = 0;
        }

        // Check if tooltip exceeds the bottom of the viewport
        if (tooltipY + tooltipHeight + 20 > viewportHeight) {
            tooltipY = viewportHeight - tooltipHeight - 10;
        }
        /*
                //top viewport
                if (tooltipY - tooltipHeight < 0) {
                    tooltipY = viewportHeight
                }
        */
        setTooltipPosition({ x: tooltipX, y: tooltipY });
    };

    const handleMouseEnter = () => {
        setTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false);
    };


    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={props.className}
        >
            {isTooltipVisible && (
                <div
                    ref={tooltipRef}
                    className={`genericTooltip`}
                    style={{
                        top: tooltipPosition.y,
                        left: tooltipPosition.x,
                        zIndex: '2147483647'
                    }}
                >
                    <SkillPopover skill={props.displaySkill} />
                    <SetPopover set={props.displaySet} />
                </div>
            )}
            {props.children}
        </div>
    );
})

export default GenericPopover;