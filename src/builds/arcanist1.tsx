import { cpEnum, GlyphEnum, TraitEnum } from "../enums";
import { food, misc, munduses, race } from "../objects/misc";
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
        normalFront: [scribingSkills[1], magesGuildSkills[0], arcanistSkills[1], vampireSkills[0], scribingSkills[0]],
        ultFront: dualWieldSkills[0],
        normalBack: [arcanistSkills[0], arcanistSkills[3], arcanistSkills[2], destroSkills[0], arcanistSkills[4]],
        ultBack: arcanistSkills[5],
    },
    gear: [
        {
            set: sets[0],
            slot: "Head",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[0],
            slot: "Shoulders",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[2],
            slot: "Chest",
            trait: TraitEnum.reinforced,
            enchant: GlyphEnum.multi,
            weight: "Heavy"
        },
        {
            set: sets[1],
            slot: "Hands",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[4],
            slot: "Waist",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Light"
        },
        {
            set: sets[1],
            slot: "Legs",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[1],
            slot: "Feet",
            trait: TraitEnum.impen,
            enchant: GlyphEnum.multi,
            weight: "Medium"
        },
        {
            set: sets[3],
            slot: "Necklace",
            trait: TraitEnum.infused,
            enchant: GlyphEnum.multi,
        },
        {
            set: sets[2],
            slot: "Ring",
            trait: TraitEnum.infused,
            enchant: GlyphEnum.multi,
        },
        {
            set: sets[2],
            slot: "Ring",
            trait: TraitEnum.infused,
            enchant: GlyphEnum.multi,
        },
        {
            set: sets[1],
            slot: "Main-hand weapon",
            trait: TraitEnum.nirn,
            enchant: GlyphEnum.multi,
            weapon:"Mace"
        },
        {
            set: sets[1],
            slot: "Off-hand weapon",
            trait: TraitEnum.charged,
            enchant: GlyphEnum.multi,
            weapon:"Mace"
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
            weapon:null
        },

    ],
    cp: {
        redCp: [cpEnum.bastion, cpEnum.pain, cpEnum.survival, cpEnum.sustained],
        blueCp: [cpEnum.deadlyAim, cpEnum.fON, cpEnum.focused, cpEnum.mAA],
        greenCp: [cpEnum.steed, cpEnum.treasure, cpEnum.rationer, cpEnum.gifted]
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
    details: [
        {
            title: "General informations",
            htmlText: "<p>This build can work in any situation. Great sustain allows it to survive heavy pressure from multiple enemies in both Cyrodiil and in Battlegrounds. Its strength in smallscale battles is that it can debuff an enemy to the point where they can no longer heal making them easy to kill.</p>"
        },
        {
            title: "Skills description",
            htmlText: "<p>Sundering Burst - Strong aoe debuff with oblivion damage and a source of buff. Can be a flex spot if needed, but it is not adviceable to change it. Scripts - Physical Damage, Anchorite Cruelty, Intellect and Endurance</p><p>Structured Entropy - Source of healing and a DOT which helps keeping up with Jerall stacks. Healing helps offseting spammable cost.</p><p>Flail - AOE damage, immobilise, debuf and source of Crux. Use sparringly, because of its hefty stamina cost.</p><p>Blood For Blood - Spammable</p><p>Dazing soul - Stun and source of Defile and another oblivion DOT. Scripts - Stun, Anchorite Cruelty, Defile</p><p>Thrive in Chaos - Strong AOE ult which applies a big pressure, heals and increases damage done. Can be changed for something else, but this feels best.</p><br/><p>Evolving Runemend - Spammable heal. Generates crux. Can be used to heal a teammate.</p><p>Impervious Runeward - Huge shield and heal. Use when taking damage and need healing.</p><p>Runeguard - burst heal, buff and aoe immobilise. Sustain of this build allows to spam this and Runeward interchangibly. This skill is very annoying for enemies because often they need to stop and roll or use another skill to remove immobilise.</p><p>Ele sus - debuff.</p><p>Cruxweaver armor - armor buff</p>"
        },
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
    ]
}

export default arcanist1;