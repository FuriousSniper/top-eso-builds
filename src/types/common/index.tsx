import { cpEnum, GlyphEnum, TraitEnum } from '../../enums/index.tsx';

export type GenericDisplayType = {
    name: string,
    description?: string;
    icon?: string
}

export type GenericSkill = {
    name: string,
    icon: string,
    id: number,
    castTime: number,
    target: "Self" | "Enemy" | "Area" | "Cone" | "Ground"
    targetAreaX?: number,
    targetAreaY?: number,
    radius?: number,
    range?: number,
    duration?: number,
    cost?: CostType,
    costDetermined?: boolean,
    description: string,
    newEffect?: string
}

export interface ScribingSkill extends GenericSkill {
    scribingEffect1: string,
    scribingEffect2: string,
    scribingEffect3: string,
}

export type CostType = {
    resourceName?: "Magicka" | "Health" | "Stamina" | "Ultimate"
    amount?: number,
    perSecond?: number,
}

export type ConcreteSetItemType = {
    set: SetType | null,
    weight?: "Heavy" | "Medium" | "Light" | null,
    weapon?: "Sword" | "Mace" | "Axe" | "Greatsword" | "Maul" | "Battle Axe" | "Inferno Staff" | "Lightning Staff" | "Ice Staff" | "Restoration Staff" | "Shield" | "Bow" | null,
    slot: "Head" | "Chest" | "Shoulders" | "Hands" | "Waist" | "Legs" | "Feet" | "Necklace" | "Ring" | "Main-hand weapon" | "Off-hand weapon",
    trait: TraitEnum | null,
    enchant: GlyphEnum | null,
}

export type SetType = {
    id: number,
    name: string,
    origin: "Overland" | "PVP" | "Trial" | "Crafted" | "Mythic" | "Monster Set"
    bonuses: Array<SetBonusType>
}

export type SetBonusType = {
    index: number,
    perfected?: boolean
    description: string
}

export type RatingType = {
    stars: number,
    name: string,
    description: string
}

export type ExplainedSkill = {
    skill: GenericSkill,
    explanationHtml: string
}

export type BuildType = {
    name: string,
    id: string,
    buildIcon?: string,
    skills: {
        normalFront: Array<ExplainedSkill>,
        ultFront: ExplainedSkill,
        normalBack?: Array<ExplainedSkill>,
        ultBack?: ExplainedSkill,
    }
    gear: Array<ConcreteSetItemType>,
    cp: {
        redCp: Array<cpEnum>,
        blueCp: Array<cpEnum>,
        greenCp: Array<cpEnum>
    }
    stats: {
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
    misc: {
        curse: GenericDisplayType | null,
        food: GenericDisplayType,
        race: GenericDisplayType,
        mundus: GenericDisplayType
    },
    generalInfo: string,
    details?: DetailsType[]
    ratings?: Array<RatingType>
    requiredDlc?: Array<GenericDisplayType>
    lastUpdated: string
}

export type StatsType = {
    hp: number,
    mag: number,
    stam: number
}

export type DetailsType = {
    title: string,
    icon?: string,
    htmlText: string
}

export type BuildPromoItem = {
    name: string,
    icon: string,
    promoImage: string,
    promoImageText: string
    link: string
}

export type CharacterPenType = {
    class: string,
    penSelf: number,
    penSupport: number,
    name: string,
    necroPassive: boolean,
    nbPassive: boolean,
    arcanistPassive: number,
    velothi: boolean,
    piercing: boolean,
    weaponMace: number,
    weaponSharpened: number,
    lightArmor: number,
    forceOfNature: number,
    woodElfRace: boolean,
    loverMundus: boolean,
    otherSetLines: number,
    otherSources: number,
}

export type CharacterCritType = {
    class: string,
    name: string,
    critSelf: number,
    critBase: number,
    critSupport: number,
    nbPassive: boolean,
    templarPassive: boolean,
    wardenPassive: number,
    mediumArmor: number,
    weaponAxe: number,
    harpooner: boolean,
    backstabber: boolean,
    fFinesse: boolean,
    khajiitRace: boolean,
    orderWrath: boolean,
    minorForce: boolean,
    shadowMundus: boolean,
    otherSources: number,
}