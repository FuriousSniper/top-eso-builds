import { ReactElement } from "react"
import './style.less'

interface TextDisplayFieldProps{
    children: ReactElement,
    parentClassName?: string
}

const TextDisplayField = (props: TextDisplayFieldProps)=>{
    return(
        <div className={`textDisplayField ${props.parentClassName ? props.parentClassName : ""}`}>
            {props.children}
        </div>
    )
}
export default TextDisplayField