import { useEffect } from "react"
import FooterMenu from "../../components/FooterMenu"
import HeaderMenu from "../../components/HeaderMenu"
import Slider from "react-slick";
import './style.less'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import BuildPromoItems from "../../objects/buildPromoItems";
import { BuildPromoItem } from "../../types/common";
import SliderImageLink from "../../components/SliderImageLink";
import BuildsRow from "../../components/BuildsRow";

const MainPage = () => {
    useEffect(() => {
        document.title = `Top ESO Builds`
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="content">
            <HeaderMenu />
            <div className="carousel-wrapper">
                <Slider {...settings} className="carousel-banner">
                    {BuildPromoItems.map((build: BuildPromoItem, key: number) => {
                        return <SliderImageLink build={build} key={key} />
                    })}
                </Slider>
            </div>
            <div className="main">
                <BuildsRow />
                <div className="textWrapper">
                    <p className="textSection">
                        Welcome to another page dedicated to ESO builds. I tried to take a new approach in showcasing a build, partially inspired by addon Superstar.
                        It allows user to see entire build on a singular, well designed page. Take a look yourself!
                    </p>
                    <p className="textSection">
                        Visit <Link to={"/about"}>About</Link> page to learn more about features and other stuff.
                    </p>
                </div>
                <div className="textWrapper">
                    <p className="textSection">
                        Introducing <Link to={"/tools/subclassing"}>Subclassing</Link>!<br />
                    </p>
                    <p className="textSection">
                        <img src="/promo/promo_build.webp" alt="" />
                    </p>
                    <p className="textSection">
                        Using a brand new, easy-to-use editor you can now select different combinations of skills to help you theory craft your dream build!<br/>Use the filters in sidebar to find skills, which apply different buffs and debuffs.<br/>P.S. Sharing, saving, and other features will be added soon
                    </p>
                </div>
            </div>
            <FooterMenu />
        </div>
    )
}
export default MainPage