import { GenericDisplayType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import SingleMiscItem from "../SingleMiscItem"
import './style.less'

interface IBuildStats {
    misc?: {
        curse: GenericDisplayType | null,
        food: GenericDisplayType,
        race: GenericDisplayType,
        mundus: GenericDisplayType
    }
    toggleCrossFunction: (id: string) => void,
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
                    <SingleMiscItem misc={props.misc?.curse} toggleCrossFunction={props.toggleCrossFunction} id={"curse" + props.buildId} />
                </div>
                <div className="miscRow">
                    <div className="miscItem" >
                        <span className="miscType">Food</span>
                    </div>
                    <SingleMiscItem misc={props.misc?.food} toggleCrossFunction={props.toggleCrossFunction} id={"food" + props.buildId} />
                </div>
                <div className="miscRow">
                    <div className="miscItem">
                        <span className="miscType">Race</span>
                    </div>
                    <SingleMiscItem misc={props.misc?.race} toggleCrossFunction={props.toggleCrossFunction} id={"race" + props.buildId} />
                </div>
                <div className="miscRow">
                    <div className="miscItem">
                        <span className="miscType">Mundus</span>
                    </div>
                    <SingleMiscItem misc={props.misc?.mundus} toggleCrossFunction={props.toggleCrossFunction} id={"mundus" + props.buildId} />
                </div>
            </div>
        </GenericDisplayField >
    )
}

export default BuildMisc