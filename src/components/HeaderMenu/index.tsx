import { Link } from 'react-router-dom'
import './style.less'
import BuildPromoItems from '../../objects/buildPromoItems'
import { BuildPromoItem } from '../../types/common'
const HeaderMenu = () => {
    return (
        <header>
            <Link to={"/"} className="headerLink">
                <img src={"/icons/logo/topesologo-text.png"} alt="" className='headerLogo' />
            </Link>
            <div className="dropdown">
                <span className="dropdownButton headerLink textLink">Builds</span>
                <div className='dropdownContent'>
                    {BuildPromoItems.map((build: BuildPromoItem, key: number) => {
                        return <Link to={build.link} className="headerLink textLink" key={key}><img src={build.icon} className="textIcon" /><span>{build.name}</span></Link>
                    })}
                </div>
            </div>
            <div className="dropdown">
                <span className="dropdownButton headerLink textLink">Tools</span>
                <div className='dropdownContent'>
                    <Link to={`/tools/penCalc`} className="headerLink textLink"><span>Penetration calculator</span></Link>
                </div>
            </div>
            <Link to={"/about"} className="headerLink textLink"><span>About</span></Link>
        </header>
    )
}
export default HeaderMenu
