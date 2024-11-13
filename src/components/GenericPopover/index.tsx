import React, { useState, useRef } from 'react';
import { GenericDisplayType, GenericSkill, SetType } from '../../types/common';
import './style.less'
import SkillPopover from './SkillPopover';
import SetPopover from './SetPopover';
import ItemPopover from './ItemPopover';

interface CommonProps {
    children: React.ReactNode;
    className?: string
}

type DisplayTypeProps =
    | {
        displaySkill?: GenericSkill;
        displaySet?: never;
        displayItem?: never;
    }
    | {
        displaySkill?: never;
        displaySet?: SetType;
        displayItem?: never;
    }
    | {
        displaySkill?: never;
        displaySet?: never;
        displayItem?: GenericDisplayType;
    };

type Props = CommonProps & DisplayTypeProps

const GenericPopover = ((props: Props) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const tooltipRef = useRef<HTMLDivElement>(document.createElement('div'));

    const handleMouseMove = (event: React.MouseEvent) => {
        const { pageX, pageY } = event;
        if(!tooltipRef.current){
            return
        }

        const boundingRect = tooltipRef.current?.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const viewportWidth = window.innerWidth

        let tooltipX = pageX;
        let tooltipY = pageY;

        // Check if tooltip exceeds the right side of the viewport
        if (boundingRect.right > viewportWidth) {
            tooltipX -= Math.abs(boundingRect?.right-viewportWidth)+20
        }

        // Check if tooltip exceeds the bottom of the viewport
        if (boundingRect.bottom > viewportHeight) {
            tooltipY -= Math.abs(boundingRect?.bottom-viewportHeight)+20
        }

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
                    <ItemPopover item={props.displayItem} />
                </div>
            )}
            {props.children}
        </div>
    );
})

export default GenericPopover;