import { cpEnum, GlyphEnum, TraitEnum } from "../enums";
import { food, misc, munduses, race } from "../objects/misc";
import sets from "../objects/sets";
import magesGuildSkills from "../objects/skills/magesGuild";
import scribingSkills from "../objects/skills/scribingSkills";
import sorcSkills from "../objects/skills/sorc";
import { BuildType } from "../types/common";

const sorc: BuildType = {
    name: "Sorc BG/Cyro",
    id: "soloSorc1",
    skills: {
        normalFront: [sorcSkills[3], magesGuildSkills[1], sorcSkills[1], scribingSkills[2], sorcSkills[9]],
        ultFront: sorcSkills[6],
        normalBack: [sorcSkills[4], sorcSkills[2], sorcSkills[0], sorcSkills[7], sorcSkills[8]],
        ultBack: sorcSkills[5],
    },
    gear: [
        {
            set: sets[5],
            slot: "Head",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[5],
            slot: "Shoulders",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[4],
            slot: "Chest",
            trait: TraitEnum.reinforced,
            enchant: GlyphEnum.multi,
            weight: "Heavy"
        },
        {
            set: sets[6],
            slot: "Hands",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Light"
        },
        {
            set: sets[2],
            slot: "Waist",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[2],
            slot: "Legs",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[2],
            slot: "Feet",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[6],
            slot: "Necklace",
            trait: TraitEnum.arcane,
            enchant: GlyphEnum.multi,
        },
        {
            set: sets[6],
            slot: "Ring",
            trait: TraitEnum.arcane,
            enchant: GlyphEnum.multi,
        },
        {
            set: sets[7],
            slot: "Ring",
            trait: TraitEnum.arcane,
            enchant: GlyphEnum.magrec,
        },
        {
            set: sets[6],
            slot: "Main-hand weapon",
            trait: TraitEnum.sharp,
            enchant: GlyphEnum.shock,
            weapon:"Lightning Staff"
        },
        {
            set: null,
            slot: "Off-hand weapon",
            trait: null,
            enchant: null,
            weapon: null
        },
        {
            set: sets[2],
            slot: "Off-hand weapon",
            trait: TraitEnum.defending,
            enchant: GlyphEnum.wd,
            weapon:"Ice Staff"
        },
        {
            set: null,
            slot: "Off-hand weapon",
            trait: null,
            enchant: null,
            weapon: null
        },

    ],
    cp: {
        redCp: [cpEnum.bastion, cpEnum.pain, cpEnum.survival, cpEnum.sustained],
        blueCp: [cpEnum.deadlyAim, cpEnum.fON, cpEnum.arcane, cpEnum.mAA],
        greenCp: [cpEnum.steed, cpEnum.treasure, cpEnum.rationer, cpEnum.gifted]
    },
    stats: {
        attributes: {
            hp: 0,
            mag: 64,
            stam: 0
        },
        regens: {
            normal: {
                hp: 727,
                mag: 1037,
                stam: 987
            },
            buffed: {
                hp: 1162,
                mag: 2225,
                stam: 2270
            }
        },
        maxStats: {
            normal: {
                hp: 27432,
                mag: 49221,
                stam: 22937
            },
            buffed: {
                hp: 30283,
                mag: 52679,
                stam: 25999
            }
        }
    },
    misc: {
        curse: misc[0],
        food: food[1],
        race: race[1],
        mundus: munduses[3]
    },
    details: [
        {
            title: "General informations",
            htmlText: "<p>This build can work in both cyro and BGs. It has good sustain, mobility and very good burst. It doesn't provide any cross healing, but sometimes negate can turn the of battle!</p>"
        },
        {
            title: "Skills description",
            htmlText: "<p>Crystal Weapon - stamina spammable. Also allows user to combine it with Shocking soul for one-time burst.</p><p>Inner light - max magicka buff</p><p>Hardened ward - primary shield and heal</p><p>Shocking soul - magicka spammable. Scripts - Shock damage, Class mastery, Breach</p><p>Streak - mobility, stun</p><p>Overload - damage ult</p><br /><p>Dark conversion - resource return, heal</p><p>Bound Armor - free buffs for slotting</p><p>Haunting curse - strong burst damage skill</p><p>Hurricane - armor buff. Used also to proc Wretched</p><p>Crit surge - damage and h ealing buff</p><p>Negate - Good ult for group play or close quaters fights. You can swap this for meteor, atronach or something else if you want</p>"
        },
        {
            title: "Rotation",
            htmlText: "<p>Haunting Curse -> Crystal weapon -> Shocking soul</p><br/> With overload enabled you can create a very strong burst combo. Otherwise just cast Crystal weapon or Shocking soul, whichever resource you need less."
        },
        {
            title: "Potions",
            htmlText: "<p>Primary potions - 3stat potions. Ingredients: Columbine, Mountain flower, Lady Smock</p><p>Secondary potion - Essence of detection with immovable effect. Ingredients: Columbine, Corn Flower, Wormwood</p>"
        },
        {
            title: "Race",
            htmlText: "<p>High elf, Breton are the best for magicka builds.</p>"
        }
    ],
    lastUpdated: "U43"
}

export default sorc;