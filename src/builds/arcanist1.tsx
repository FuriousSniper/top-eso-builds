import { TraitEnum } from "../enums";
import { armorGlyphs, cpBlue, cpGreen, cpRed, food, jewelryGlyphs, misc, munduses, race, weaponGlyphs } from "../objects/misc";
import sets from "../objects/sets";
import arcanistSkills from "../objects/skills/arcanist";
import destroSkills from "../objects/skills/destroStaff";
import dualWieldSkills from "../objects/skills/dualWield";
import magesGuildSkills from "../objects/skills/magesGuild";
import scribingSkills from "../objects/skills/scribingSkills";
import vampireSkills from "../objects/skills/vampire";
import { BuildType } from "../types/common";

const arcanist1: BuildType = {
    name: "Arcanist BG/Cyro",
    id: "soloArc1",
    buildIcon: "/icons/classes/arcanist.png",
    skills: {
        normalFront: [
            { skill: scribingSkills[1], explanationHtml: "<p>Strong aoe debuff with oblivion damage and a source of buff. Can be a flex spot if needed, but it is not adviceable to change it.<br/>Scripts - Physical Damage, Anchorite Cruelty, Intellect and Endurance</p>" },
            { skill: magesGuildSkills[0], explanationHtml: "<p>Source of healing and a DOT which helps keeping up with Jerall stacks. Healing helps offseting spammable cost.</p>" },
            { skill: arcanistSkills[1], explanationHtml: "<p>AOE damage, immobilise, debuf and source of Crux. Use sparringly, because of its hefty stamina cost.</p>" },
            { skill: vampireSkills[0], explanationHtml: "<p>Spammable</p>" },
            { skill: scribingSkills[0], explanationHtml: "<p>Stun and source of Defile and another oblivion DOT.<br/>Scripts - Stun, Anchorite Cruelty, Defile</p>" }
        ],
        ultFront: { skill: dualWieldSkills[0], explanationHtml: "<p>Strong AOE ult which applies big pressure, heals and increases damage done. Can be changed for something else, but this feels best.</p>" },
        normalBack: [
            { skill: arcanistSkills[0], explanationHtml: "<p>Spammable heal. Generates crux. Can be used to heal a teammate.</p>" },
            { skill: arcanistSkills[3], explanationHtml: "<p>Huge shield and heal. Use when taking damage and need healing.</p>" }, 
            { skill: arcanistSkills[2], explanationHtml: "<p>Burst heal, buff and aoe immobilise. Sustain of this build allows to spam this and Runeward interchangibly. This skill is very annoying for enemies because often they need to stop and roll or use another skill to remove immobilise.</p>" },
            { skill: destroSkills[0], explanationHtml: "<p>Debuff.</p>" },
            { skill: arcanistSkills[4], explanationHtml: "<p>Armor buff</p>" }
        ],
        ultBack: { skill: arcanistSkills[5], explanationHtml: "<p>Defensive ult</p>" },
    },
    gear: [
        {
            set: sets[0],
            slot: "Head",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
            weight: "Medium",
            id:"0"
        },
        {
            set: sets[0],
            slot: "Shoulders",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
            weight: "Medium",
            id:"1"
        },
        {
            set: sets[2],
            slot: "Chest",
            trait: TraitEnum.reinforced,
            enchant: armorGlyphs[0],
            weight: "Heavy",
            id:"2"
        },
        {
            set: sets[1],
            slot: "Hands",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
            weight: "Medium",
            id:"3"
        },
        {
            set: sets[4],
            slot: "Waist",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
            weight: "Light",
            id:"4"
        },
        {
            set: sets[1],
            slot: "Legs",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
            weight: "Medium",
            id:"5"
        },
        {
            set: sets[1],
            slot: "Feet",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
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
            set: sets[2],
            slot: "Ring",
            trait: TraitEnum.infused,
            enchant: jewelryGlyphs[3],
            id:"8"
        },
        {
            set: sets[2],
            slot: "Ring",
            trait: TraitEnum.infused,
            enchant: jewelryGlyphs[3],
            id:"9"
        },
        {
            set: sets[1],
            slot: "Main-hand weapon",
            trait: TraitEnum.nirn,
            enchant: weaponGlyphs[0],
            weapon: "Mace",
            id:"10"
        },
        {
            set: sets[1],
            slot: "Off-hand weapon",
            trait: TraitEnum.charged,
            enchant: weaponGlyphs[1],
            weapon: "Mace",
            id:"11"
        },
        {
            set: sets[2],
            slot: "Off-hand weapon",
            trait: TraitEnum.defending,
            enchant: weaponGlyphs[4],
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
        redCp: [cpRed[0], cpRed[1], cpRed[2], cpRed[3]],
        blueCp: [cpBlue[0], cpBlue[1], cpBlue[2], cpBlue[3]],
        greenCp: [cpGreen[0], cpGreen[1], cpGreen[2], cpGreen[3]]
    },
    stats: {
        attributes: {
            hp: 64,
            mag: 0,
            stam: 0
        },
        regens: {
            normal: {
                hp: 129,
                mag: 1214,
                stam: 1415
            },
            buffed: {
                hp: 343,
                mag: 3175,
                stam: 2954
            }
        },
        maxStats: {
            normal: {
                hp: 36805,
                mag: 16840,
                stam: 17589
            },
            buffed: {
                hp: 36805,
                mag: 16840,
                stam: 17589
            }
        }
    },
    misc: {
        curse: misc[0],
        food: food[0],
        race: race[0],
        mundus: munduses[1]
    },
    generalInfo: "<p>This build can work in any situation. Great sustain allows it to survive heavy pressure from multiple enemies in both Cyrodiil and in Battlegrounds. Its strength in smallscale battles is that it can debuff an enemy to the point where they can no longer heal making them easy to kill.</p>",
    details: [
        {
            title: "Rotation",
            htmlText: "<p>Ele drain -> Structured Entropy -> Dazing Soul -> Cephaliarch's Flail -> Sundering Burst -> Blood for blood spam.</p><p>The idea here is to apply all skills that have debuf component and when you are at full health and have all buffs up, use spammable.</p>"
        },
        {
            title: "Potions",
            htmlText: "<p>Primary potions - Spell power. Ingredients: Lady Smock, Corn Flower, Water Hyacinth</p><p>Secondary potion - Essence of detection. Ingredients: Lady Smock, Corn Flower, Wormwood</p>"
        },
        {
            title: "Advanced combat mechanics",
            htmlText: "<p>Some offensive skills in this build, namely Flail and Sundering Burst are capable of ignoring dodge. Using them in right time can effectively rollcatch enemies and deal damage even when they should be immune. This is especially useful for applying additional pressure. Make sure to use these skills (whichever you need - Sundered burst for applying DOT or Flail as a damaging skill) right after immobilising your enemy. That way you don't lose any global cooldowns while applying pressure to your opponent.</p>"
        },
        {
            title: "Race",
            htmlText: "<p>There is no clear favorite race. Orc has useful healing, damage and extra mobility bonuses. Imperial offers better sustain and therefore ability to use more offensive sets or glyphs. Use whichever you like most.</p>"
        }
    ],
    lastUpdated: "U44"
}

export default arcanist1;