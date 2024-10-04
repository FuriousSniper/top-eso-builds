import { GenericSkill } from "../../types/common"

const dualWieldSkills: Array<GenericSkill> = [
    {
        name: "Thrive in Chaos",
        id: 85179,
        castTime: 0.5,
        target: "Cone",
        radius: 15,
        duration: 8,
        cost: {
            resourceName: "Ultimate",
            amount: 150,
        },
        description: '<p class="skillDescription">Slash enemies in front of you, causing them to bleed for 12700 Bleed Damage over 8 seconds and healing you for 50% of the damage done.</p><p class="skillDescription">Each enemy hit increases your damage done by 6% for 15 seconds. This effect can stack up to 6 times.</p><p class="skillDescription">Each tick applies the Hemorrhaging status effect.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Converts into a conal attack. Each enemy hit increases your damage done.</p>',
        icon: "/icons/skills/dual-wield/thrive.png",
    },
]
export default dualWieldSkills