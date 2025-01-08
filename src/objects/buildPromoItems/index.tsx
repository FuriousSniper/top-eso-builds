import { BuildPromoItem } from "../../types/common";

const BuildPromoItems: BuildPromoItem[] = [
    {
        name: "Arcanist",
        icon: "/icons/classes/arcanist.png",
        promoImage: "/promo/arcanist_promo.webp",
        promoImageText: "Arcanist and Jerall. Name a better duo.",
        link: "/build/arcanist"
    },
    {
        name: "Burst Sorc",
        icon: "/icons/classes/sorc.png",
        promoImage: "/promo/sorc_promo.webp",
        promoImageText: "Hitting 4 skills in 1 GCD. Big boomers.",
        link: "/build/burstSorc"
    },
    {
        name: "Warden",
        icon: "/icons/classes/warden.png",
        promoImage: "/promo/warden_promo.webp",
        promoImageText: "Crits, AOE, tankiness. The power of ice. Chill, bozo.",
        link: "/build/warden"
    }
    ,
    {
        name: "Nightblade",
        icon: "/icons/classes/nb.png",
        promoImage: "/promo/nb_promo.webp",
        promoImageText: "Big burst, big crits, big moblity. Big.",
        link: "/build/nightblade"
    }
]

export default BuildPromoItems