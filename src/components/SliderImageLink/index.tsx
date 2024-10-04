import { Link } from "react-router-dom"
import { BuildPromoItem } from "../../types/common"
import './style.less'

interface SliderImageLinkProps {
    build: BuildPromoItem
}
const SliderImageLink = (props: SliderImageLinkProps) => {
    return (
        <Link className="banner-item" to={props.build.link}>
            <div className="banner-item-text">
                {props.build.promoImageText}
            </div>
            <img src={props.build.promoImage} className="banner-img" />
        </Link>
    )
}
export default SliderImageLink