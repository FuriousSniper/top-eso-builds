import { GenericDisplayType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import './style.less'

interface IBuildStats {
    misc?: {
        curse: GenericDisplayType | null,
        food: GenericDisplayType,
        race: GenericDisplayType,
        mundus: GenericDisplayType
    }
    toggleCrossFunction: (id: string)=>void,
    buildId: string,
}

const BuildMisc = (props: IBuildStats) => {
    return (
        <GenericDisplayField legendText="Misc" legendIcon="/icons/buildPage/misc.png">
            <div className="miscItems">
                <div className="miscRow">
                    <div className="miscItem">
                        <span className="miscType">Curse</span>
                    </div>
                    <div className="miscItem clickable" id={"curse"+props.buildId} onClick={()=>props.toggleCrossFunction("curse"+props.buildId)}>
                        {!props.misc?.curse &&
                            <div>N/A</div>
                        }
                        {
                            props.misc?.curse &&
                            <>
                                <img
                                    src={props.misc.curse?.icon}
                                    alt=""
                                /><span>{props.misc.curse?.name}</span>
                            </>
                        }
                    </div>
                </div>
                <div className="miscRow">
                    <div className="miscItem" >
                        <span className="miscType">Food</span>
                    </div>
                    <div className="miscItem clickable" id={"food"+props.buildId} onClick={()=>props.toggleCrossFunction("food"+props.buildId)}>
                        <img
                            src={props.misc?.food.icon}
                            alt=""
                        /><span>{props.misc?.food.name}</span>
                    </div>
                </div>
                <div className="miscRow">
                    <div className="miscItem">
                        <span className="miscType">Race</span>
                    </div>
                    <div className="miscItem clickable" id={"race"+props.buildId} onClick={()=>props.toggleCrossFunction("race"+props.buildId)}>
                        <img
                            src={props.misc?.race.icon}
                            alt=""
                        /><span>{props.misc?.race.name}</span>
                    </div>
                </div>
                <div className="miscRow">
                    <div className="miscItem">
                        <span className="miscType">Mundus</span>
                    </div>
                    <div className="miscItem clickable" id={"mundus"+props.buildId} onClick={()=>props.toggleCrossFunction("mundus"+props.buildId)}>
                        <img
                            src={props.misc?.mundus.icon}
                            alt=""
                        /><span>{props.misc?.mundus.name}</span>
                    </div>
                </div>
            </div>
        </GenericDisplayField >
    )
}

export default BuildMisc