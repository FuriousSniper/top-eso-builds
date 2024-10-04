import { GenericSkill } from "../../types/common"

const vampireSkills: Array<GenericSkill> = [
    {
        name: "Blood for Blood",
        id: 186189,
        castTime: 0,
        target: "Enemy",
        range: 7,
        cost: {
            resourceName: "Health",
            amount: 2020,
        },
        description: '<p class="skillDescription">Rend an enemy, dealing 4234 Magic Damage and applying the Hemorrhaging status effect.</p><p class="skillDescription">Deals up to 75% more damage based on your missing Health.</p><p class="skillDescription">After you cast this ability, you cannot be healed by allies for 3 seconds.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Will always be a Critical Strike if you cast it while under half Health.</p>',
        icon: "/icons/skills/vampire/bfb.png",
    }
]

export default vampireSkills;