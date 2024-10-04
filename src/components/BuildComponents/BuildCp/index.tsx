import { cpEnum } from "../../../enums"
import GenericDisplayField from "../../GenericDisplayField"
import './style.less'

interface IBuildCpProps {
    cp?: {
        redCp: Array<cpEnum>,
        blueCp: Array<cpEnum>,
        greenCp: Array<cpEnum>
    }
    toggleCrossFunction: (id: string)=>void,
    buildId: string,
}
const BuildCp = (props: IBuildCpProps) => {
    return (
        <GenericDisplayField legendText="Champion points" legendIcon="/icons/buildPage/cpicon.png">
            <div className="cpSection">
                <div className="cpHeadingRow">
                    <img
                        src="/icons/buildPage/cpMag.png"
                        alt=""
                    />
                    <span>Warfare</span>
                </div>
                <div className="cpRow">
                    {
                        props.cp?.blueCp.map((star: cpEnum, index: number) => {
                            if (props.cp) {
                                return (
                                    <div className="cpItem" key={index} id={"cpBlue"+props.buildId+index} onClick={()=>props.toggleCrossFunction("cpBlue"+props.buildId+index)}>
                                        <img
                                            src="/icons/buildPage/cpStarBlue.png"
                                            alt=""
                                        /><span>{star}</span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="separator"></div>
                <div className="cpHeadingRow">
                    <img
                        src="/icons/buildPage/cpHp.png"
                        alt=""
                    />
                    <span>Fitness</span>
                </div>
                <div className="cpRow">
                    {
                        props.cp?.redCp.map((star: cpEnum, index: number) => {
                            if (props.cp) {
                                return (
                                    <div className="cpItem" key={index} id={"cpRed"+props.buildId+index} onClick={()=>props.toggleCrossFunction("cpRed"+props.buildId+index)}>
                                        <img
                                            src="/icons/buildPage/cpStarRed.png"
                                            alt=""
                                        /><span>{star}</span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="separator"></div>
                <div className="cpHeadingRow">
                    <img
                        src="/icons/buildPage/cpStam.png"
                        alt=""
                    />
                    <span>Craft</span>
                </div>
                <div className="cpRow">
                    {
                        props.cp?.greenCp.map((star: cpEnum, index: number) => {
                            if (props.cp) {
                                return (
                                    <div className="cpItem" key={index} id={"cpGreen"+props.buildId+index} onClick={()=>props.toggleCrossFunction("cpGreen"+props.buildId+index)}>
                                        <img
                                            src="/icons/buildPage/cpStarGreen.png"
                                            alt=""
                                        /><span>{star}</span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </GenericDisplayField >
    )
}
export default BuildCp