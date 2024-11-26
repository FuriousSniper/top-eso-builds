import { GenericSkill } from "../../types/common"

const scribingSkills: Array<GenericSkill> = [
    {
        name: "Dazing soul",
        id: 2137,
        castTime: 0,
        target: "Enemy",
        range: 28,
        duration: 3,
        cost: {
            resourceName: "Magicka",
            amount: 3780,
        },
        description: '<p class="skillDescription">Launch a concentrated blast of soul magic at a target.</p><p class="skillDescription">Deals 2005 Magic Damage to an enemy and stuns for 3 seconds. Beneficial Signature and Affix scripts only apply to you.</p><p class="skillDescription">Consumes a Soul Gem to deal 1.5% of the enemy\'s Max Health as Oblivion Damage every 1 second for 5 seconds, up to a maximum of 1500 damage. Deals up to 100% more damage to enemies under 50% Health and can occur once every 5 seconds.</p><p class="skillDescription">Afflicts the enemy with Major Defile, which reduces healing received and damage shield strength by 12% for 10 seconds.</p>',
        icon: "/icons/skills/soul-magic/wieldsoul.png",
    },
    {
        name: "Sundering Burst",
        id: 2138,
        castTime: 0,
        target: "Enemy",
        range: 28,
        duration: 3,
        cost: {
            resourceName: "Stamina",
            amount: 3213,
        },
        description: '<p class="skillDescription">Unleash a powerful burst of soul magic around you.</p><p class="skillDescription">Deals 3341 Physical Damage to enemies. Beneficial Signature and Affix scripts only apply to you.</p><p class="skillDescription">Consumes a Soul Gem to deal 2.8% of the enemy\'s Max Health as Oblivion Damage every 2 seconds for 10 seconds, up to a maximum of 2800 damage. Deals up to 100% more damage to enemies under 50% Health, and can occur once every 10 seconds.</p><p class="skillDescription">Grants Minor Intellect and Minor Endurance for 20 seconds, increasing Magicka and Stamina Recovery by 15%.</p>',
        icon: "/icons/skills/soul-magic/soulburst.png",
    },
    {
        name: "Shocking soul",
        id: 2139,
        castTime: 0,
        target: "Enemy",
        range: 28,
        duration: 3,
        cost: {
            resourceName: "Magicka",
            amount: 2700,
        },
        description: '<p class="skillDescription">Launch a concentrated blast of soul magic at a target.</p><p class="skillDescription">Deals 4011 Magic Damage to an enemy. Beneficial Signature and Affix scripts only apply to you.</p><p class="skillDescription">Enchant your closest pet for 5 seconds to heal a nearby ally for 314 Health each time it deals damage, up to once a second. If you do not have a pet, you deal 709 Shock Damage to enemies within 8 meters of your target.</p><p class="skillDescription">Afflicts the enemy with Major Breach for 10 seconds, reducing Physical and Spell Resistance by 5948.</p>',
        icon: "/icons/skills/soul-magic/wieldsoul.png",
    },
    {
        name: "Fiery contingency",
        id: 2140,
        castTime: 0,
        target: "Area",
        radius: 8,
        duration: 22,
        cost: {
            resourceName: "Magicka",
            amount: 2948,
        },
        description: '<p class="skillDescription">Imbue yourself with the magical runes of Ulfsild for 22 seconds. These runes trigger when you cast an ability with a cost, causing a burst of magic around you.</p><p class="skillDescription">Deals 5812 Flame Damage to enemies. Beneficial Signature and Affix scripts only apply to you.</p><p class="skillDescription">Create an 8 meter area for 2 seconds under your target once every 8 seconds that snares enemies by 70%, and charms them for 3 seconds when it expires. If no enemies are charmed, you restore 1435 Magicka and Stamina.</p><p class="skillDescription">Grants Minor Intellect and Minor Endurance for 22 seconds, increasing Magicka and Stamina Recovery by 15%.</p>',
        icon: "/icons/skills/mages/cont.png",
    },
    {
        name: "Healing soul",
        id: 2141,
        castTime: 0,
        target: "Area",
        radius: 28,
        cost: {
            resourceName: "Magicka",
            amount: 4498,
        },
        description: '<p class="skillDescription">Launch a concentrated blast of soul magic at a target.</p><p class="skillDescription">Heals you or an ally for 10599 Health. Beneficial Signature and Affix scripts apply to you or an ally.</p><p class="skillDescription">Restores 600 Magicka and 600 Stamina.</p><p class="skillDescription">Grants Major Vitality for 10 seconds, increasing healing received and damage shield strength by 12%.</p>',
        icon: "/icons/skills/soul-magic/wieldsoul.png",
    },
]
export default scribingSkills
