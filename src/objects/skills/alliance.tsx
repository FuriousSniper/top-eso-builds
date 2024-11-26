import { GenericSkill } from "../../types/common"

const allianceSkills: Array<GenericSkill> = [
    {
        name: "Resolving Vigor",
        id: 61507,
        castTime: 0,
        target: "Self",
        duration: 5,
        cost: {
            resourceName: "Stamina",
            amount: 2984,
        },
        description: '<p class="skillDescription">Let loose a battle cry, instilling yourself with resolve and healing for 9834 Health over 5 seconds.</p><p class="skillDescription">After casting you gain Minor Resolve, increasing your Physical and Spell Resistance by 2974, for 20 seconds.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>The heal over time now happens faster over a shorter duration, heals for more, increases your Armor, but now only targets yourself.</p>',
        icon: "/icons/skills/alliance/vigor.png",
    },
]
export default allianceSkills