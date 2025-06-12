import { Link } from 'react-router-dom'
import './style.less'
import BuildPromoItems from '../../objects/buildPromoItems'
import { BuildPromoItem } from '../../types/common'
import { useRef } from 'react'
const HeaderMenu = () => {
    const navRef = useRef<HTMLElement>(null)
    const hamburgerRef = useRef<HTMLDivElement>(null)

    const toggleMenu = () => {
        if (navRef === null || hamburgerRef === null) {
            return
        }

        navRef.current?.classList.toggle("active")
        hamburgerRef.current?.classList.toggle("opened")
    }
    return (
        <header>
            <div className="nav-container">
                <Link to={"/"} className="headerLink linkElement">
                    <img src={"/icons/logo/topesologo-text.png"} alt="" className='headerLogo' />
                </Link>
                <nav className="nav" ref={navRef}>
                    <div className="dropdown linkElement">
                        <span className="dropdownButton headerLink textLink">Builds</span>
                        <div className='dropdownContent'>
                            {BuildPromoItems.map((build: BuildPromoItem, key: number) => {
                                return <Link to={build.link} className="headerLink textLink" key={key}><img src={build.icon} className="textIcon" /><span>{build.name}</span></Link>
                            })}
                        </div>
                    </div>
                    <div className="dropdown linkElement">
                        <span className="dropdownButton headerLink textLink">Tools</span>
                        <div className='dropdownContent'>
                            <Link to={`/tools/penCalc`} className="headerLink textLink"><span>Penetration calculator</span></Link>
                            <Link to={`/tools/critCalc`} className="headerLink textLink"><span>Crit dmg calculator</span></Link>
                            <Link to={`/tools/subclassing`} className="headerLink textLink"><span>Subclassing simulator</span></Link>
                        </div>
                    </div>
                    <Link to={"/about"} className="headerLink textLink linkElement"><span>About</span></Link>
                </nav>
                <div className="iconMenu headerLink" onClick={toggleMenu} ref={hamburgerRef}></div>
            </div>

        </header>
    )
}
export default HeaderMenu
