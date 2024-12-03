import * as _ from "lodash";
import { CharacterCritType, CharacterPenType } from "../types/common";

export const replaceSpecialStrings = (html: string) => {
    let resultHtml = html
    resultHtml = resultHtml.replace(/(Health)/ig, "<span class='colorHealth'>$1</span>");
    resultHtml = resultHtml.replace(/(Stamina)/ig, "<span class='colorStamina'>$1</span>");
    resultHtml = resultHtml.replace(/(Magicka)/ig, "<span class='colorMagicka'>$1</span>");

    resultHtml = resultHtml.replace(/(Magic Damage)/ig, "<span class='colorMagicka'>$1</span>");
    resultHtml = resultHtml.replace(/(Physical Damage)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Disease Damage)/ig, "<span class='colorStamina'>$1</span>");
    resultHtml = resultHtml.replace(/(Poison Damage)/ig, "<span class='colorStamina'>$1</span>");
    resultHtml = resultHtml.replace(/(Bleed Damage)/ig, "<span class='colorHealth'>$1</span>");
    resultHtml = resultHtml.replace(/(Crux)/ig, "<span class='colorArcanist'>$1</span>");


    resultHtml = resultHtml.replace(/(\d+)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Minor)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Major)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Heroism)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Courage)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Defile)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Fortitude)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Endurance)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Intellect)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Force)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Lifesteal)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Expedition)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Berserk)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Resolve)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Savagery)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Prophecy)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Evasion)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Vitality)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Vulnerability)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Brittle)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Cowardice)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Maim)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Brutality)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Sorcery)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Protection)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Breach)/ig, "<span class='specialText'>$1</span>");

    resultHtml = resultHtml.replace(/(Runebreak)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Hemorrhaging)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Haunting Curse)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Overcharged)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Sundered)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Burning)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Concussion)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Chilled)/ig, "<span class='specialText'>$1</span>");

    resultHtml = resultHtml.replace(/(Malady)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Contagion)/ig, "<span class='specialText'>$1</span>");
    resultHtml = resultHtml.replace(/(Darklight)/ig, "<span class='specialText'>$1</span>");
    return resultHtml
}

export const setToLS = (key: string, value: string) => localStorage.setItem(key, value);

export const getFromLS = (key: string): string | null => {
    return localStorage.getItem(key)
}

export const initCrossedItems = () => {
    setToLS("crossedObjects", JSON.stringify({}))
}

export const checkCrossedExistence = (): boolean => {
    return !_.isNull(getFromLS("crossedObjects"))
}

export const checkBuildExistence = (key: string): boolean => {
    const buildArray = JSON.parse(getFromLS("crossedObjects")!)
    return !_.isUndefined(buildArray[key])
}

export const updateBuildCrossedArray = (newArray: string[], key: string): void => {
    const buildArray = JSON.parse(getFromLS("crossedObjects")!)
    buildArray[key] = newArray
    setToLS("crossedObjects", JSON.stringify(buildArray))
}

export const initBuildCrossedArray = (key: string) => {
    const buildArray = JSON.parse(getFromLS("crossedObjects")!)
    buildArray[key] = []
    setToLS("crossedObjects", JSON.stringify(buildArray))
}

export const boundsMinMax = (n: number, min: number, max: number): number => {
    if (n <= min) {
        return min
    }
    if (n >= max) {
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

export const parseBoolToString = (stringValue: string | null | undefined) => {
    if (_.isNull(stringValue) || _.isUndefined(stringValue)) {
        return false
    }
    return (/true/).test(stringValue);
}

export const copyLink = () => {
    navigator.clipboard.writeText(String(window.location))
}

export const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const encodeToUrl = (obj: CharacterCritType[] | CharacterPenType[]) => {
    return encodeURI(JSON.stringify(obj))
}

export const decodeFromUrl = (html: string | null | undefined) => {
    if (!html) {
        return false
    }

    const decoded = decodeURI(html)
    try {
        return JSON.parse(decoded)
    }
    catch {
        return false
    }
}

export const isPenChar = (obj: CharacterPenType | CharacterCritType): obj is CharacterPenType => {
    return (obj as CharacterPenType).penSupport !== undefined;
}

export const isCritChar = (obj: CharacterPenType | CharacterCritType): obj is CharacterCritType => {
    return (obj as CharacterCritType).critSupport !== undefined;
}

export const getPenCharsFromUrl = (charString: string | null)=>{
    if(!charString){
        return Array<CharacterPenType>()
    }

    const decoded = decodeFromUrl(charString)
    if(decoded===false){
        return Array<CharacterPenType>()
    }

    const objArray = Array<CharacterPenType>()
    for(let i=0;i<decoded.length;i++){
        if(isPenChar(decoded[i])){
            objArray.push(decoded[i])
        }
    }
    return objArray
}

export const getCritCharsFromUrl = (charString: string | null)=>{
    if(!charString){
        return Array<CharacterCritType>()
    }

    const decoded = decodeFromUrl(charString)
    if(decoded===false){
        return Array<CharacterCritType>()
    }

    const objArray = Array<CharacterCritType>()
    for(let i=0;i<decoded.length;i++){
        if(isCritChar(decoded[i])){
            objArray.push(decoded[i])
        }
    }
    return objArray
}