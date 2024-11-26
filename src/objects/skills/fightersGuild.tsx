import { GenericSkill } from "../../types/common"

const fightersGuildSkills: Array<GenericSkill> = [
    {
        name: "Dawnbreaker of Smiting",
        id: 40158,
        castTime: 0.4,
        target: "Cone",
        radius: 10,
        duration: 6,
        cost: {
            resourceName: "Ultimate",
            amount: 125 ,
        },
        description: '<p class="skillDescription">Arm yourself with Meridia\'s sacred sword and dispense her retribution, dealing 6560 Physical Damage to enemies in front of you, an additional 7869 Physical Damage over 6 seconds, and stunning them for 2 seconds.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Increases the damage and stuns enemies hit.</p>',        
        icon: "/icons/skills/fighters/dbos.png",
    },
]
export default fightersGuildSkills