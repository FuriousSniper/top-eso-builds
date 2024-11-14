import React from 'react';
import { GenericDisplayType, GenericSkill, SetType } from '../../types/common';
import SkillPopover from './SkillPopover';
import SetPopover from './SetPopover';
import ItemPopover from './ItemPopover';
import * as Tooltip from "@radix-ui/react-tooltip";
import './style.less'

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
    return (
        <Tooltip.Provider disableHoverableContent>
            <Tooltip.Root delayDuration={200}>
                <Tooltip.Trigger asChild>
                    <div className={props.className}>
                        {props.children}
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Content className="TooltipContent genericTooltip">
                    <SkillPopover skill={props.displaySkill} />
                    <SetPopover set={props.displaySet} />
                    <ItemPopover item={props.displayItem} />
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
})

export default GenericPopover;