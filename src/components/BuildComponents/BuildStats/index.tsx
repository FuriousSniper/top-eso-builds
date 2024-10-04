import { StatsType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import './style.less'

interface IBuildStats {
    stats?: {
        attributes: StatsType
        regens: {
            normal: StatsType
            buffed: StatsType
        },
        maxStats: {
            normal: StatsType
            buffed: StatsType
        }
    }
    buffed: boolean
}

const BuildStats = (props: IBuildStats) => {
    return (
        <GenericDisplayField legendText="Stats" legendIcon="/icons/buildPage/attribs.png">
            <div className="attribs">
                <div className="attribColumn barsColumn">
                    <div className="attribBox attribHealth">
                        <span
                            className="attribText"
                            title="The amount of health you have depends on your character's level. Each time you level up, your maximum health attribute increases. You can additionally choose to increase your maximum health by allocating attribute points to it.">
                            Health
                        </span>
                        <span className="attribNumber">{props.stats?.attributes.hp}</span>
                    </div>
                    <div className="attribBox attribMagicka">
                        <span className="attribText" title="The amount of magicka you have depends on your character's level. Each time you level up, your maximum magicka attribute will increase. You can choose additionally increase your maximum magicka using attribute points">
                            Magicka
                        </span>
                        <span className="attribNumber">{props.stats?.attributes.mag}</span>
                    </div>
                    <div className="attribBox attribStamina">
                        <span className="attribText" title="The amount of stamina you have depends on your character's level. Each time you level up, your maximum stamina will increase. You can choose to further increase your maximum stamina using attribute points.">
                            Stamina
                        </span>
                        <span className="attribNumber">{props.stats?.attributes.stam}</span>
                    </div>
                    <span className="statText">Attributes</span>
                </div>
                <div className="attribColumn statColumn">
                    <span>{!props.buffed ? props.stats?.maxStats.normal.hp : props.stats?.maxStats.buffed.hp}</span>
                    <span>{!props.buffed ? props.stats?.maxStats.normal.mag : props.stats?.maxStats.buffed.mag}</span>
                    <span>{!props.buffed ? props.stats?.maxStats.normal.stam : props.stats?.maxStats.buffed.stam}</span>
                    <span className="statText">Maximum{props.buffed ? " Buffed" : ""}</span>
                </div>
                <div className="verticalSeparator"></div>
                <div className="attribColumn statColumn">
                    <span
                        title="Health recovery refers to how quickly your health regenerates. This increases as your character levels. Increasing the health stat does not increase health recovery.">
                        {!props.buffed ? props.stats?.regens.normal.hp : props.stats?.regens.buffed.hp}
                    </span>
                    <span>{!props.buffed ? props.stats?.regens.normal.mag : props.stats?.regens.buffed.mag}</span>
                    <span>{!props.buffed ? props.stats?.regens.normal.stam : props.stats?.regens.buffed.stam}</span>
                    <span className="statText">Regens{props.buffed ? " Buffed" : ""}</span>
                </div>
            </div>
        </GenericDisplayField>
    )
}

export default BuildStats