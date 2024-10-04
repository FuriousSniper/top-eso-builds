import { GenericSkill } from "../../types/common"

const arcanistSkills: Array<GenericSkill> = [
    {
        name: "Evolving Runemend",
        id: 186189,
        costDetermined: true,
        castTime: 0,
        target: "Cone",
        radius: 28,
        cost: {
            resourceName: "Magicka",
            amount: 4590,
        },
        description: '<p class="skillDescription">Craft a series of adaptive Apocryphal runes, then propel them at yourself or an ally in front of you. The runes heal for 2116 Health three times, an additional 2379 Health over 6 seconds, and generate Crux.</p><p class="skillDescription">Each active Crux reduces the cost of this ability by 3%.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Heals for an additional amount over time.</p>',
        icon: "/icons/skills/arcanist/evolving_runemend.png",
    },
    {
        name: "Cephaliarch's Flail",
        id: 183006,
        castTime: 0.3,
        target: "Area",
        targetAreaX: 15,
        targetAreaY: 5,
        radius: 15,
        cost: {
            resourceName: "Stamina",
            amount: 2984,
        },
        description: '<p class="skillDescription">Infuse your arm with abyssal magic to form tentacles that lash out at your foes dealing 3535 Physical Damage, healing yourself for 1825, and generating Crux. Enemies are immobilized for 3 seconds and marked with Abyssal Ink for 20 seconds.</p><p class="skillDescription">If an enemy is hit, you for heal for 1825 Health, once per cast.</p><p class="skillDescription">You deal 5% increased damage to enemies drenched in Abyssal Ink.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Generates Crux. Heals you if an enemy is damaged.</p>',
        icon: "/icons/skills/arcanist/flail.png",
    },
    {
        name: "Runeguard of Still Waters",
        id: 183401,
        castTime: 0,
        target: "Area",
        radius: 10,
        duration: 20,
        cost: {
            resourceName: "Magicka",
            amount: 3510,
        },
        description: '<p class="skillDescription">Cast forth a complex rune granting you and your group members Minor Resolve for 20 seconds, increasing your Armor by 2974 . After 1 second, the spellweave immobilizes enemies within 7 meters for 3 seconds.</p><p class="skillDescription">You gain Minor Protection for 20 seconds, reducing your damage taken by 5%.</p><p class="skillDescription">The first time you are damaged while below 50% Health, the Minor Protection is consumed to heal you for 6000 Health, scaling off your Max Health.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Immobilizes nearby enemies.</p>',
        icon: "/icons/skills/arcanist/runeguard.png",
    },
    {
        name: "Impervious Runeward",
        id: 183241,
        castTime: 0,
        target: "Self",
        duration: 6,
        cost: {
            resourceName: "Magicka",
            amount: 4320,
        },
        description: '<p class="skillDescription">Like the rune knights of old, summon a shield that absorbs 12395 damage for 1 second, and then 6197 damage for 5 seconds if the first shield persists. Both shields scale off your Max Health.</p><p class="skillDescription">The first time you take direct damage, the shield retaliates and deals 1788 Magic Damage to the attacker, scaling off your Armor.</p><p class="skillDescription">Consume Crux to heal yourself for 2000 Health, scaling off your Max Health, per Crux spent.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Drastically increases the size of the damage shield for the first second..</p>',
        icon: "/icons/skills/arcanist/impervious.png",
    },
    {
        name: "Cruxweaver Armor",
        id: 185908,
        castTime: 0,
        target: "Self",
        duration: 30,
        cost: {
            resourceName: "Magicka",
            amount: 2700,
        },
        description: '<p class="skillDescription">Forge defiant runic armor around you, granting Major Resolve for 30 seconds, increasing your Armor by 5948.</p><p class="skillDescription">While the armor persists, taking damage applies Minor Breach, reducing the Armor of your attacker by 2974 for 6 seconds. Blows against your armor also generate Crux, up to once every 5 seconds.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Increases the duration and when damaged, creates a Crux.</p>',
        icon: "/icons/skills/arcanist/cruxweaver.png",
    },
    {
        name: "Sanctum of the Abyssal Sea",
        id: 185908,
        castTime: 0,
        target: "Self",
        duration: 10,
        cost: {
            resourceName: "Ultimate",
            amount: 200,
        },
        description: '<p class="skillDescription">Gather the true strength of Apocrypha as protective tentacles rise from the Abyssal Sea around you. The tentacles form a damage shield that absorbs 60% of all damage for 10 seconds, up to a max of 47122 damage, scaling off your Max Health.</p><p class="skillDescription">When the shield collapses you lash out, dealing all of the damage absorbed as Magic Damage to enemies within 5 meters over 10 seconds.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>Damage shield gains an increase in strength.</p>',
        icon: "/icons/skills/arcanist/giber.png",
    },
    {
        name: "Recuperative Treatise",
        id: 183047,
        castTime: 0,
        target: "Self",
        duration: 30,
        cost: {
            resourceName: "Magicka",
            amount: 4455,
        },
        description: '<p class="skillDescription">Etch a series of runes onto your weapon that pulse with power once every 5 seconds. Each pulse enhances your class abilities, and striking an enemy with one deals an additional 2116 Magic Damage, restores 600 Magicka and Stamina, and generates Crux if you have none.</p><p class="skillDescription">While slotted on either ability bar, gain Major Brutality and Major Sorcery, increasing your Weapon and Spell Damage by 20%.</p><p class="skillDescription newEffect"><span class="newEffectBanner">NEW EFFECT</span>When dealing damage, restore Magicka and Stamina.</p>',
        icon: "/icons/skills/arcanist/recuperative.png",
    },
]

export default arcanistSkills;