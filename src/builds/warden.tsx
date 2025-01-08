import { TraitEnum } from "../enums";
import { armorGlyphs, cpBlue, cpGreen, cpRed, food, jewelryGlyphs, misc, munduses, race, weaponGlyphs } from "../objects/misc";
import sets from "../objects/sets";
import allianceSkills from "../objects/skills/alliance";
import fightersGuildSkills from "../objects/skills/fightersGuild";
import scribingSkills from "../objects/skills/scribingSkills";
import vampireSkills from "../objects/skills/vampire";
import wardenSkills from "../objects/skills/warden";
import { BuildType } from "../types/common";

const warden: BuildType = {
    name: "Warden BG/Cyro",
    id: "warden1",
    buildIcon: "/icons/classes/warden.png",
    skills: {
        normalFront: [
            { skill: wardenSkills[2], explanationHtml: "<p>Heal over time and burst heal. Can be casted on other players and heal them.</p>" },
            { skill: wardenSkills[4], explanationHtml: "<p>Burst damage skill. Provides pen debuffs on targets.</p>" },
            { skill: scribingSkills[3], explanationHtml: "<p>Burst damage skill. Provides automatic, delayed CC and snare. Very annoying to deal with, allows to make burst bombs combo.<br/>Scripts: Flame damage, Class mastery, Intellect and Endurance.</p>" },
            { skill: vampireSkills[0], explanationHtml: "<p>Main spammable. Health cost helps with sustain.</p>" },
            { skill: wardenSkills[6], explanationHtml: "<p>Mobility, damage buff.</p>" }
        ],
        ultFront: { skill: fightersGuildSkills[0], explanationHtml: "<p>AOE burst ult. Allows to do a quick burst and costs less than backbar ult.</p>" },
        normalBack: [
            { skill: allianceSkills[0], explanationHtml: "<p>Primary heal over time</p>" },
            { skill: scribingSkills[4], explanationHtml: "<p>Burst heal. Can target friendly players.</p>" },
            { skill: wardenSkills[5], explanationHtml: "<p>Source of major sorcery and free 1 effect purge.</p>" },
            { skill: wardenSkills[3], explanationHtml: "<p>Crit buff, minor healing on light attacks.</p>" },
            { skill: wardenSkills[0], explanationHtml: "<p>Armor buff.</p>" }
        ],
        ultBack: {skill: wardenSkills[1], explanationHtml: "<p>Extremely good damage, AOE ult. Provides major protection for others and weapon damage buff.</p>" },
    },
    gear: [
        {
            set: sets[10],
            slot: "Head",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[1],
            weight: "Medium",
            id:"0"
        },
        {
            set: sets[10],
            slot: "Shoulders",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[1],
            weight: "Medium",
            id:"1"
        },
        {
            set: sets[4],
            slot: "Chest",
            trait: TraitEnum.reinforced,
            enchant: armorGlyphs[0],
            weight: "Heavy",
            id:"2"
        },
        {
            set: sets[8],
            slot: "Hands",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[1],
            weight: "Medium",
            id:"3"
        },
        {
            set: sets[9],
            slot: "Waist",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[1],
            weight: "Light",
            id:"4"
        },
        {
            set: sets[8],
            slot: "Legs",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[1],
            weight: "Medium",
            id:"5"
        },
        {
            set: sets[8],
            slot: "Feet",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[1],
            weight: "Medium",
            id:"6"
        },
        {
            set: sets[3],
            slot: "Necklace",
            trait: TraitEnum.infused,
            enchant: jewelryGlyphs[0],
            id:"7"
        },
        {
            set: sets[9],
            slot: "Ring",
            trait: TraitEnum.infused,
            enchant: jewelryGlyphs[3],
            id:"8"
        },
        {
            set: sets[9],
            slot: "Ring",
            trait: TraitEnum.infused,
            enchant: jewelryGlyphs[3],
            id:"9"
        },
        {
            set: sets[8],
            slot: "Main-hand weapon",
            trait: TraitEnum.nirn,
            enchant: weaponGlyphs[1],
            weapon: "Mace",
            id:"10"
        },
        {
            set: sets[8],
            slot: "Off-hand weapon",
            trait: TraitEnum.sharp,
            enchant: weaponGlyphs[2],
            weapon: "Mace",
            id:"11"
        },
        {
            set: sets[9],
            slot: "Off-hand weapon",
            trait: TraitEnum.defending,
            enchant: weaponGlyphs[3],
            weapon: "Ice Staff",
            id:"12"
        },
        {
            set: null,
            slot: "Off-hand weapon",
            trait: null,
            enchant: null,
            weapon: null,
            id:"13"
        },

    ],
    cp: {
        redCp: [cpRed[0], cpRed[1], cpRed[2], cpRed[4]],
        blueCp: [cpBlue[0], cpBlue[1], cpBlue[3], cpBlue[5]],
        greenCp: [cpGreen[0], cpGreen[1], cpGreen[2], cpGreen[3]]
    },
    stats: {
        attributes: {
            hp: 0,
            mag: 64,
            stam: 0
        },
        regens: {
            normal: {
                hp: 64,
                mag: 1099,
                stam: 1115
            },
            buffed: {
                hp: 83,
                mag: 1505,
                stam: 1507
            }
        },
        maxStats: {
            normal: {
                hp: 25445,
                mag: 25848,
                stam: 14977
            },
            buffed: {
                hp: 27801,
                mag: 25848,
                stam: 14977
            }
        }
    },
    misc: {
        curse: misc[0],
        food: food[0],
        race: race[0],
        mundus: munduses[4]
    },
    generalInfo: "<p>This particular magwarden has high burst potential and works well even in outnumbered situations due to having a lot of AOE skills and great single target pressure. Cross healing provides additional group utility.</p>",
    details: [
        {
            title: "Primary principle",
            htmlText: "<p>The build is designed to have LESS than 30k hp. Thanks to that, we can utilise the passive piercing cold, which increases our damage done by 8%. This build used to have more heavy pieces, but after testing, medium armor provides enough tankiness and damage to take it over heavy armor. Glyphs should be a personal choice. User should only fit enough multi-effect glyphs not to exceed 30k hp with buffs up (minor toughness). Version presented here has less than optimal HP, because in group play this warden can swap Rallying Cry to Powerful assault, which has additional 1206 hp bonus. If you don't use that set, try to get to around 29500 hp using attributes.<p>"
        },
        
        {
            title: "Rotation",
            htmlText: "<p>Standard: Deep fissure -> Contingency -> Arterial Burst.<br/>With Northern Storm: Deep fissure -> Northern storm -> Contingency -> Arterial Burst.</p>"
        },
        {
            title: "Potions",
            htmlText: "<p>Primary potions - 3stat potions. Ingredients: Columbine, Mountain flower, Lady Smock</p><p>Secondary potion - Essence of detection with immovable effect. Ingredients: Columbine, Corn Flower, Wormwood</p>"
        },
        {
            title: "Race",
            htmlText: "<p>Orc, Imperial are solid and well-rounded choces.</p>"
        }
    ],
    lastUpdated: "U44"
}

export default warden;