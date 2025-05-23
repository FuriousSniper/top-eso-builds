import { GenericSetBonusEnum } from "../../enums";
import { SetType } from "../../types/common";

const sets: SetType[] = [
    {
        name: "Jerall Mountains Warchief",
        id: 0,
        origin: "PVP",
        bonuses: [
            {
                index: 1,
                description: GenericSetBonusEnum.wdsd
            },
            {
                index: 2,
                description: "Dealing damage applies a stack of Malady to your enemy, reducing healing received by 1% for 5 seconds, up to 35 stacks. You can apply a stack once every 0.5 seconds. Applying Malady gives you a stack of Contagion, reducing healing received by 1% for 5 seconds, up to 15 stacks. You can only gain a stack once every 1 second."
            }
        ]
    },
    {
        id: 1,
        name: "Serpent's Disdain",
        origin: "Crafted",
        bonuses: [{
            index: 2,
            description: GenericSetBonusEnum.maxStam
        },
        {
            index: 3,
            description: GenericSetBonusEnum.maxHp
        },
        {
            index: 4,
            description: GenericSetBonusEnum.maxMag
        },
        {
            index: 5,
            description: "Increase the duration of Status Effects you apply by 16 seconds."
        }
        ]
    },
    {
        id: 2,
        name: "Wretched Vitality",
        origin: "Crafted",
        bonuses: [{
            index: 2,
            description: GenericSetBonusEnum.magRec
        },
        {
            index: 3,
            description: GenericSetBonusEnum.stamRec
        },
        {
            index: 4,
            description: GenericSetBonusEnum.wdsd
        },
        {
            index: 5,
            description: "While in combat, applying a Major Buff or Debuff to a target grants you 260 Magicka and Stamina Recovery for 15 seconds. While in combat, applying a Minor Buff or Debuff to a target grants you 130 Magicka and Stamina Recovery for 15 seconds."
        }
        ]
    },
    {
        id: 3,
        name: "The Saint and the Seducer",
        origin: "Mythic",
        bonuses: [{
            index: 1,
            description: "While in combat, you gain one of five random Major buffs which changes every 10 seconds. Enemies within 12 meters of you gain one of five random Minor debuffs depending on which buff you have. The available effects are: Major Berserk and Minor Maim Major Resolve and Minor Breach Major Force and Minor Brittle Major Evasion and Minor Vulnerability Major Courage and Minor Cowardice"
        }]
    },
    {
        id: 4,
        name: "Armor of the Trainee",
        origin: "Overland",
        bonuses: [{
            index: 1,
            description: "Adds 1454 Maximum Health"
        },
        {
            index: 2,
            description: "Adds 1454 Maximum Magicka"
        },
        {
            index: 3,
            description: "Adds 1454 Maximum Stamina"
        }]
    },
    {
        id: 5,
        name: "Roksa the Warped",
        origin: "Monster Set",
        bonuses: [
            {
                index: 1,
                description: "Adds 70 Stamina Recovery, Adds 70 Magicka Recovery, Adds 70 Health Recovery"
            },
            {
                index: 2,
                description: "Each second you are in combat, gain a stack of Darklight, up to 30 stacks max. Each stack of Darklight increases your Stamina Recovery, Magicka Recovery, and Health Recovery by 8. Each second you are out of combat, lose a stack of Darklight."
            }
        ]
    },
    {
        id: 6,
        name: "Crafty Alfiq",
        origin: "Overland",
        bonuses: [
            {
                index: 2,
                description: GenericSetBonusEnum.maxMag
            },
            {
                index: 3,
                description: GenericSetBonusEnum.maxMag
            },
            {
                index: 4,
                description: GenericSetBonusEnum.maxMag
            },
            {
                index: 5,
                description: "Adds 2550 Maximum Magicka"
            },
        ]
    },
    {
        id: 7,
        name: "Death Dealer's Fete",
        origin: "Mythic",
        bonuses: [
            {
                index: 1,
                description: "Gain a persistent stack of Escalating Fete every 2 seconds you are in combat, up to 30 stacks max. Each stack of Escalating Fete increases your Maximum Stamina, Health, and Magicka by 88. You lose a stack of Escalating Fete every 4 seconds you are out of combat."
            }
        ]
    },
    {
        id: 8,
        name: "Order's Wrath",
        origin: "Crafted",
        bonuses: [
            {
                index: 2,
                description: "Adds 657 Critical Chance"
            },
            {
                index: 3,
                description: "Adds 129 Weapon and Spell Damage"
            },
            {
                index: 4,
                description: "Adds 657 Critical Chance"
            },
            {
                index: 5,
                description: "Adds 943 Critical Chance, Increases your Critical Damage and Critical Healing by 8%."
            }
        ]
    },
    {
        id: 9,
        name: "Rallying Cry",
        origin: "PVP",
        bonuses: [
            {
                index: 2,
                description: "Adds 657 Critical Chance"
            },
            {
                index: 3,
                description: "Adds 1096 Maximum Magicka"
            },
            {
                index: 4,
                description: "Adds 657 Critical Chance"
            },
            {
                index: 5,
                description: "While Battle Spirit is active, when your healing critically strikes you and up to 11 other group members within 12 meters to gain 300 Weapon and Spell Damage, and 1650 Critical Resistance for 20 seconds. Each group member affected reduces the Weapon and Spell Damage by 15 and Critical Resistance by 83. This effect can occur once every 15 seconds."
            }
        ]
    },
    {
        id: 10,
        name: "Balorgh",
        origin: "Monster Set",
        bonuses: [
            {
                index: 1,
                description: "Adds 129 Weapon and Spell Damage"
            },
            {
                index: 2,
                description: "When you use an Ultimate ability, you gain Weapon and Spell Damage equal to the amount of total Ultimate consumed, and Physical and Spell Penetration equal to 23 times the amount for 12 seconds."
            }
        ]
    },
    {
        id: 11,
        name: "Perfected Slivers of the Null Arca",
        origin: "Trial",
        bonuses: [
            {
                index: 2,
                description:"Adds 657 Critical Chance"
            }, 
            {
                index: 3,
                description:"Gain Minor Slayer at all times, increasing your damage done to Dungeon, Trial, and Arena Monsters by 5%."
            },
            {
                index: 4,
                description:"Adds 657 Critical Chance"
            },
            {
                index: 5,
                description:"Adds 129 Weapon and Spell Damage, Dealing Critical Damage gives you a stack of Sliver for 10 seconds, up to once every 0.5 seconds. Upon gaining your third stack, they merge into a crystal that launches at the last enemy you damaged, dealing 1799 Physical Damage. This effect scales off the higher of your Weapon or Spell Damage, and you cannot gain Sliver for 5 seconds after the crystal is launched."
            },
        ]
    }
]

export default sets