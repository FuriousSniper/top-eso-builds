import * as _ from "lodash";

export const replaceSpecialStrings = (html: string)=>{
    let resultHtml = html
    resultHtml=resultHtml.replace(/(Health)/ig, "<span class='colorHealth'>$1</span>");
    resultHtml=resultHtml.replace(/(Stamina)/ig, "<span class='colorStamina'>$1</span>");
    resultHtml=resultHtml.replace(/(Magicka)/ig, "<span class='colorMagicka'>$1</span>");

    resultHtml=resultHtml.replace(/(Magic Damage)/ig, "<span class='colorMagicka'>$1</span>");
    resultHtml=resultHtml.replace(/(Physical Damage)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Disease Damage)/ig, "<span class='colorStamina'>$1</span>");
    resultHtml=resultHtml.replace(/(Poison Damage)/ig, "<span class='colorStamina'>$1</span>");
    resultHtml=resultHtml.replace(/(Bleed Damage)/ig, "<span class='colorHealth'>$1</span>");
    resultHtml=resultHtml.replace(/(Crux)/ig, "<span class='colorArcanist'>$1</span>");


    resultHtml=resultHtml.replace(/(\d+)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Minor)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Major)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Heroism)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Courage)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Defile)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Fortitude)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Endurance)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Intellect)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Force)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Lifesteal)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Expedition)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Berserk)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Resolve)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Savagery)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Prophecy)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Evasion)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Vitality)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Maim)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Brutality)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Sorcery)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Protection)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Breach)/ig, "<span class='specialText'>$1</span>");

    resultHtml=resultHtml.replace(/(Runebreak)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Hemorrhaging)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Haunting Curse)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Overcharged)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Sundered)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Burning)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Concussion)/ig, "<span class='specialText'>$1</span>");
    resultHtml=resultHtml.replace(/(Chilled)/ig, "<span class='specialText'>$1</span>");
    return resultHtml
}

export const setToLS = (key: string, value: string) => localStorage.setItem(key, value);

export const getFromLS = (key: string): string | null => {
    return localStorage.getItem(key)
}

export const initCrossedItems = () => {
    setToLS("crossedObjects",JSON.stringify({}))
}

export const checkCrossedExistence = (): boolean => {
    return !_.isNull(getFromLS("crossedObjects"))
}

export const checkBuildExistence = (key: string): boolean =>{
    const buildArray = JSON.parse(getFromLS("crossedObjects")!)
    return !_.isUndefined(buildArray[key])
}

export const updateBuildCrossedArray = (newArray: string[],key: string): void=>{
    const buildArray = JSON.parse(getFromLS("crossedObjects")!)
    buildArray[key]=newArray
    setToLS("crossedObjects",JSON.stringify(buildArray))
}

export const initBuildCrossedArray = (key: string) =>{
    const buildArray = JSON.parse(getFromLS("crossedObjects")!)
    buildArray[key]=[]
    setToLS("crossedObjects",JSON.stringify(buildArray))
}

export const boundsMinMax = (n: number, min: number,max: number): number => {
    if(n<=min){
        return min
    }
    if(n>=max){
        return max
    }

    return n;
}

export const determineIcon = (className: string) => {
    const prefix = "/icons/classes/"
    const suffix = ".png"
    let classIconName = ""

    if (className === "Arcanist") {
        classIconName = "arcanist"
    }
    if (className === "Dragonknight") {
        classIconName = "dk"
    }
    if (className === "Necromancer") {
        classIconName = "necro"
    }
    if (className === "Sorcerer") {
        classIconName = "sorc"
    }
    if (className === "Templar") {
        classIconName = "templar"
    }
    if (className === "Warden") {
        classIconName = "warden"
    }
    if (className === "Nightblade") {
        classIconName = "nb"
    }

    return prefix + classIconName + suffix
}