import { TraitEnum } from "../enums";
import { armorGlyphs, cpBlue, cpGreen, cpRed, food, jewelryGlyphs, misc, munduses, race, weaponGlyphs } from "../objects/misc";
import sets from "../objects/sets";
import allianceSkills from "../objects/skills/alliance";
import destroSkills from "../objects/skills/destroStaff";
import nbSkills from "../objects/skills/nb";
import { BuildType } from "../types/common";

const nb1: BuildType = {
    name: "Nightblade",
    id: "nb1",
    buildIcon: "/icons/classes/nb.png",
    skills: {
        normalFront: [
            {
                skill: nbSkills[3],
                explanationHtml: "<p>Source of buffs and undodgeable, aoe attack</p>"
            },
            {
                skill: nbSkills[9],
                explanationHtml: "<p>Range burst damage skill. Requires 5 stacks to proc. Hits people for insane damage</p>"
            },
            {
                skill: nbSkills[4],
                explanationHtml: "<p>Anti-snare</p>"
            },
            {
                skill: nbSkills[8],
                explanationHtml: "<p>Spammable. Sets target off balance, which allows to stn target off-cooldown by hitting an enemy with medium attack</p>"
            },
            {
                skill: nbSkills[5],
                explanationHtml: "<p>Cloak - source of buffs, allows to escape, etc.</p>"
            }
        ],
        ultFront: {
            skill: nbSkills[7],
            explanationHtml: "<p>Primary ult. Deals huge damage, stuns if cast over 120 ult.</p>"
        },
        normalBack: [
            {
                skill: allianceSkills[0],
                explanationHtml: "<p>Primary HOT heal</p>"
            },
            {
                skill: nbSkills[1],
                explanationHtml: "<p>Primary burst heal. Allows for crosshealing</p>"
            },
            {
                skill: nbSkills[6],
                explanationHtml: "<p>Sustain, mobility buffs, minor aoe healing</p>"
            },
            { 
                skill: destroSkills[0], 
                explanationHtml: "<p>Debuff.</p>" 
            },
            {
                skill: nbSkills[2],
                explanationHtml: "<p>Sustain tool. Can be used to replenish resoures for free when combined with vigor</p>"
            }
        ],
        ultBack: {
            skill: nbSkills[0],
            explanationHtml: "<p>Ult for aoe burst. Stuns and is difficult to avoid. Grants synergy for allies.</p>"
        }
    },
    gear: [
        {
            set: sets[10],
            slot: "Head",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
            weight: "Medium",
            id:"0"
        },
        {
            set: sets[10],
            slot: "Shoulders",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
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
            set: sets[11],
            slot: "Hands",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
            weight: "Medium",
            id:"3"
        },
        {
            set: sets[9],
            slot: "Waist",
            trait: TraitEnum.impen,
            enchant: armorGlyphs[0],
            weight: "Light",
            id:"4"
        },
        {
            set: sets[11],
            slot: "Legs",
            trait: TraitEnum.reinforced,
            enchant: armorGlyphs[0],
            weight: "Medium",
            id:"5"
        },
        {
            set: sets[11],
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
            set: sets[11],
            slot: "Main-hand weapon",
            trait: TraitEnum.nirn,
            enchant: weaponGlyphs[1],
            weapon: "Mace",
            id:"10"
        },
        {
            set: sets[11],
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
            mag: 0,
            stam: 0
        },
        regens: {
            normal: {
                hp: 0,
                mag: 0,
                stam: 0
            },
            buffed: {
                hp: 0,
                mag: 0,
                stam: 0
            }
        },
        maxStats: {
            normal: {
                hp: 0,
                mag: 0,
                stam: 0
            },
            buffed: {
                hp: 0,
                mag: 0,
                stam: 0
            }
        }
    },
    misc: {
        curse: misc[0],
        food: food[0],
        race: race[0],
        mundus: munduses[3]
    },
    generalInfo: "This build allows user to deal absolutely huge damage in short time. It's very mobile, so kiting around environment is raher easy. Thanks to siphoning attacks it can have infinite resources, if managed correctly. The downsite is that it is very squishy. If you stay in wrong place for too long or miss GCD due to some lag or other error, ou will die very quickly. The build overall is very fun to play due to 1-shot potential, but it will be very difficult for ineperienced user.",
    lastUpdated: "U44",
    details:[
        {
            title: "Rotation",
            htmlText: "<p>Normal, suspecting target: <br/>Path -> Ele sus -> Cloak -> Heavy attack -> Power Extraction -> spam Concealed until Merciless has 4 stacks -> on 4 stacks medium attack to stun target -> merciless resolve.<br/>If you have incap ready, use it before firing merciless</p><p>Unsuspecting target: Cloak -> heavy attack -> spam concealed / incap</p>"
        },
        {
            title: "Potions",
            htmlText: "<p>Primary potions - 3stat potions. Ingredients: Columbine, Mountain flower, Lady Smock</p><p>Secondary potion - Essence of detection with immovable effect. Ingredients: Columbine, Corn Flower, Wormwood</p>"
        },
        {
            title: "Tips & tricks",
            htmlText: "<p>1.Incap is not your only stun. You can set target off balance by attacking them with Concealed from sides and then do a medium attack (very short heavy attack)</p><p>2. Power drain ignores roll dodge. If you suspect the target will do a roll, you can use this instead of any other skill and still deal damage.</p><p>3. If no one is dealing damage to you, you can restore resources for free. Cast vigor and you can use siphoning atacks 2-3 times while being healed by vigor. Perpetuum mobile!</p><p>4. When doing a main combo, you can use a potion with immovable effect and this will prevent your enemies from stunning/immobilising you during attacks</p>"
        },
        {
            title: "Race",
            htmlText: "Any damage race works well. Orc offers addtional damage, healing an mobility, Breton and Imperial have very good sustain. Khajiit offers balance of sustain and damage. Wood elf has good stamina sustain and mobility."
        }
    ]
}

export default nb1