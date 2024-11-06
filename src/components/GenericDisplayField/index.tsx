import { ReactElement } from "react"
import './style.less'

interface IGenericDisplayProps {
    legendText: string,
    legendIcon?: string,
    children: ReactElement,
    childrenClassName?: string
    parentClassName?: string
}

const GenericDisplayField = (props: IGenericDisplayProps)=>{
    return(
        <fieldset className={`genericDisplayField ${props.parentClassName? props.parentClassName : ""}`}>
            <legend>
                {props.legendIcon ?
                    <img src={props.legendIcon} alt="" className="textIcon"/> : ""
                }
                {props.legendText}&nbsp;
            </legend>
            <div className={`fieldsetContent ${props.childrenClassName? props.childrenClassName : ""}`}>
                {props.children}
            </div>
        </fieldset>
    )
}

export default GenericDisplayField