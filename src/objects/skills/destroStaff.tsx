import { GenericSkill } from "../../types/common"

const destroSkills: Array<GenericSkill> = [
    {
        name: "Elemental Susceptibility",
        id: 39089,
        castTime: 0,
        target: "Enemy",
        range: 35,
        duration: 30,
        cost: {
            resourceName: "Magicka",
            amount: 0,
        },
        description: '<p class="skillDescription">Send the elements to sap an enemy\'s defenses and afflict them with Major Breach for 30 seconds, reducing their Physical and Spell Resistance by 5948.</p><p class="skillDescription">Every 7.5 seconds the enemy is afflicted with the Burning, Chilled, and Concussion status effect.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Applies each elemental status effect periodically while active and increases the range.</p>',
        icon: "/icons/skills/destro/elesus.png",
    },
]
export default destroSkills