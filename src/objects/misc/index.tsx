import { GenericDisplayType } from "../../types/common";

export const misc: GenericDisplayType[] =[
    {
        name: "Vampire Stage 3",
        description: "<p>Undeath II: (While you are at Vampire Stage 3 or higher)</p><p>Reduces your damage taken by up to 15% based on your missing Health.</p>",
        icon: "/icons/skills/vampire/vampire.png",
    }
]
export const munduses: GenericDisplayType[] = [
    {
        name: "Serpent",
        description: "<p>Increases Stamina recovery by 310</p>",
        icon: "/icons/misc/mundus/serpent.png",
    },
    {
        name: "Apprentice",
        description: "<p>Increases Spell Damage by 238</p>",
        icon: "/icons/misc/mundus/apprentice.png",
    },
    {
        name: "Warrior",
        description: "<p>Increases Weapon Damage by 238</p>",
        icon: "/icons/misc/mundus/warrior.png",
    },
    {
        name: "Mage",
        description: "<p>Increases Maximum Magicka by 2023</p>",
        icon: "/icons/misc/mundus/mage.png",
    },
]
export const food: GenericDisplayType[] = [
    {
        name: "Orzorga's Smoked Bear Haunch",
        description: "<p>Increase Max Health by 4312, Health Recovery by 406 and Stamina and Magicka Recovery by 369.</p>",
        icon: "/icons/misc/food/orzorga.png",
    },
    {
        name: "Bewitched Sugar Skulls",
        description: "<p>Increase Max Health by 4620, Max Stamina and Max Magicka by 4250, and Health Recovery by 462 for 2 hours. These effects are scaled based on your level.</p>",
        icon: "/icons/misc/food/bew.png",
    },
]
export const race: GenericDisplayType[] = [
    {
        name: "Orc",
        description: "<p>Increases your Max Stamina by 1000.</p><p>Increases your Max Health by 1000. When you deal damage, you heal for 2125 Health. This can occur once every 4 seconds.</p><p>3 	Increases your Weapon and Spell Damage by 258. Reduces the cost of Sprint by 12% and increases the Movement Speed bonus of Sprint by 10%</p>",
        icon: "/icons/misc/race/orc.png",
    },
    {
        name: "High Elf",
        description: "<p>When you activate an ability, you restore 625 Magicka or Stamina, based on whichever is lowest. This effect can occur once every 6 seconds. When you are using an ability with a channel or cast time, you take 5% less damage.</p><p>Increases your Max Magicka by 2000.</p><p>Increases your Weapon and Spell Damage by 258.</p>",
        icon: "/icons/misc/race/highelf.png",
    }
]

export const cpBlue:GenericDisplayType[] = [
    {
        name: "Deadly Aim",
        description: "<p>Increases your damage done with single target attacks by 3% per stage.</p>",
        icon: "/icons/buildPage/cpStarBlue.png",
    },
    {
        name: "Master-at-Arms",
        description: "<p>Increases your damage done with direct damage attacks by 3% per stage.</p>",
        icon: "/icons/buildPage/cpStarBlue.png",
    },
    {
        name: "Force of Nature",
        description: "<p>Increases your Offensive Penetration by 660 for every status effect your target has.</p>",
        icon: "/icons/buildPage/cpStarBlue.png",
    },
    {
        name: "Focused Mending",
        description: "<p>Increases your Healing Done with single target heals by 2% per stage.</p>",
        icon: "/icons/buildPage/cpStarBlue.png",
    },
    {
        name: "Arcane Supremacy",
        description: "<p>Increases Max Magicka by 26 per stage.</p>",
        icon: "/icons/buildPage/cpStarBlue.png",
    },
]
export const cpRed:GenericDisplayType[] = [
    {
        name: "Pain's refugee",
        description: "<p>educes your damage taken by 1% per negative effect active on you, up to a maximum of 20%</p>",
        icon: "/icons/buildPage/cpStarRed.png",
    },
    {
        name: "Survival Instincts",
        description: "<p>While afflicted with a Status Effect, your core combat skills cost 5% less per stage.</p>",
        icon: "/icons/buildPage/cpStarRed.png",
    },
    {
        name: "Sustained by Suffering",
        description: "<p>Increases your Health, Magicka, and Stamina Recovery by 30 per stage while under the effects of a negative effect.</p>",
        icon: "/icons/buildPage/cpStarRed.png",
    },
    {
        name: "Bastion",
        description: "<p>Increases the effectiveness of your damage shields and damage against shielded enemies by 3% per stage.</p>",
        icon: "/icons/buildPage/cpStarRed.png",
    },
    {
        name: "Celerity",
        description: "<p>Increases your Movement Speed by 2% per stage.</p>",
        icon: "/icons/buildPage/cpStarRed.png",
    },
]
export const cpGreen:GenericDisplayType[] = [
    {
        name: "Gifted Rider",
        description: "<p>Increases your Mount Speed by 2% per stage.</p>",
        icon: "/icons/buildPage/cpStarGreen.png",
    },
    {
        name: "Rationer",
        description: "<p>Adds 10 minutes to the duration of any eaten food or drink per stage.</p>",
        icon: "/icons/buildPage/cpStarGreen.png",
    },
    {
        name: "War Mount",
        description: "<p>Improves your mastery with mounts, removing all mount Stamina costs outside of combat.</p>",
        icon: "/icons/buildPage/cpStarGreen.png",
    },
    {
        name: "Steed's Blessing",
        description: "<p>Increase your out of combat Movement Speed by .4% per stage.</p>",
        icon: "/icons/buildPage/cpStarGreen.png",
    },
]

export const classArray = ["Nightblade", "Arcanist" , "Dragonknight" , "Necromancer" , "Sorcerer" , "Templar" , "Warden"]
