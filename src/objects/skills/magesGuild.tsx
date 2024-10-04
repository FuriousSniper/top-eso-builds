import { GenericSkill } from "../../types/common"

const magesGuildSkills: Array<GenericSkill> = [
    {
        name: "Structured Entropy",
        id: 40452,
        castTime: 0,
        target: "Enemy",
        range: 28,
        duration: 20,
        cost: {
            resourceName: "Magicka",
            amount: 2700 ,
        },
        description: '<p class="skillDescription">Bind an enemy with chaotic magic, dealing 8459 Magic Damage over 20 seconds, and healing you for 794 every 2 seconds.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Adds a heal over time when the damage over time is active.</p>',
        icon: "/icons/skills/mages/structured.png",
    },
    {
        name: "Inner Light",
        id: 40478,
        castTime: 0,
        target: "Area",
        radius: 8,
        duration: 5,
        cost: {
            resourceName: "Magicka",
            amount: 5130 ,
        },
        description: '<p class="skillDescription">Summon a mote of magelight, revealing stealthed and invisible enemies around you for 5 seconds. Exposed enemies cannot return to stealth or invisibility for 4 seconds.</p><p class="skillDescription">While slotted you gain Major Savagery and Prophecy, increasing your Weapon and Spell Critical rating by 2629 and your Max Magicka is increased by 5%.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Also increases your Max Magicka while slotted.</p>',
        icon: "/icons/skills/mages/innerlight.png",
    },
]
export default magesGuildSkills