import { SetBonusType, SetType } from "../../../types/common";
import { replaceSpecialStrings } from "../../../utils/utils"
import './style.less';

interface ISetPopover {
    set?: SetType
}

const SetPopover = (props: ISetPopover) => {
    return (
        <>
            {props.set &&
                <>
                    <div className="itemPopup">
                        <div className={`${props.set.origin==="Mythic" ? "colorMythic " : ""}itemName`}>{props.set.name}</div>
                        <div className="skillSeparator"></div>
                        <div className="itemOrigin">Origin: {props.set.origin}</div>
                        <div className="skillSeparator"></div>
                        <div className="bonuses">Set bonus</div>
                        <div className="setDescriptions">
                            {
                                props.set.bonuses.map((setBonus: SetBonusType, key: number) => {
                                    return (
                                        <p className="setDescr" key={key}>
                                           ({setBonus.index}{setBonus.perfected ? " Perfected" : ""} items) <span dangerouslySetInnerHTML={{__html: replaceSpecialStrings(setBonus.description)}}></span>
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            }
        </>

    )
}
export default SetPopover