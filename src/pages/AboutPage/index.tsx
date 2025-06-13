import FooterMenu from "../../components/FooterMenu"
import HeaderMenu from "../../components/HeaderMenu"
import './style.less'
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AboutPage = () => {
    useTitle(`About Top ESO Builds`)
    
    return (
        <div className="content">
            <HeaderMenu />
            <div className="main">
                <div className="customTextSection">
                    Welcome to yet another page dedicated to ESO builds. I tried to take a new approach in showcasing a build, partially inspired by addon Superstar.
                    It allows user to see entire build on a singular, well designed page. Take a look yourself!
                </div>
                <div className="customTextSection">
                    The build page also allows you to mark completed items so it makes it easier to create a build in game! Click on an item and mark it as complete. Click it again to remove the mark. Toggle visibility of marks to see all build components.
                </div>
                <div className="customTextSection">
                    Majority of classes don&apos;t have builds posted here. That&apos;s because i want to only post stuff that has been tested and reviewed by me or other trusted people.
                </div>
                <div className="customTextSection promoWrapper">
                    <span>There are also some other pages you may want to visit:</span>
                    <div className="promoItem">
                        <div className="logoWrapper"><Link to={"https://esoguessr.netlify.app/"} target="_blank"><img className="promoLogo" src="/promo/esoguessr_text_logo_white.png" /></Link></div>
                        <div className="promoText">ESOGuessr is a small game inspired by GeoGuesser and frequent guild events where someone posts an image of a place and others need to find where that place was. There are no rewards unfortunately, but at least you can challenge yourself.</div>
                    </div>
                    <div className="separator"></div>
                    <div className="promoItem">
                        <div className="logoWrapper"><Link to={"https://crowncratessimulator.netlify.app/"} target="_blank" className="logoWrapper"><img className="promoLogo" src="/promo/crate.png" /></Link></div>
                        <div className="promoText">(Almost) everyone likes crown crates. Everyone wants these colorful new mounts that somehow everyone has but you. With this simulator you can&apos;t get any in game mounts, but at least you can pretend you open crown crates and get a radiant apex mount. For free!</div>
                    </div>
                    <div className="separator"></div>
                    <div className="promoItem">
                        <div className="logoWrapper"><Link to={"https://runes-needed.netlify.app/"} target="_blank" className="logoWrapper"><img className="promoLogo" src="/promo/runesneeded.png" /></Link></div>
                        <div className="promoText">No one likes losing runes (souls for OG players) when dying. In order to avoid that, one way is to carry and use as little as possible. This calculator allows user to calculate how much runes do they need to use in order to meet specified target. Option to save and also dynamically delete runes from inventory is supported (but it needs to be inputted manually ;( ). This is a port of chrome extension for which this project was meant, but a web page is a bit more accessible.</div>
                    </div>
                </div>
            </div>
            <FooterMenu />
        </div>
    )
}
export default AboutPage