import { Link } from 'react-router-dom'
import './style.less'
import BuildPromoItems from '../../objects/buildPromoItems'
import { BuildPromoItem } from '../../types/common'
const BuildsRow = () => {
    return (
        <div className='buildRowWrapper'>
            {BuildPromoItems.map((build: BuildPromoItem, key: number) => {
                return (
                    <>
                        <Link to={build.link} className="buildLink" key={key}><img src={build.icon} className='buildIcon' /><span>{build.name}</span></Link>
                        {key < BuildPromoItems.length - 1 &&
                            <div className='verticalSeparator' key={`sep_${key}`}></div>
                        }
                    </>


                )
            })}
        </div>
    )
}
export default BuildsRow
