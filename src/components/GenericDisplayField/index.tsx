import { ReactElement } from "react"
import './style.less'

interface IGenericDisplayProps {
    legendText: string,
    legendIcon?: string,
    children: ReactElement
}

const GenericDisplayField = (props: IGenericDisplayProps)=>{
    return(
        <fieldset className="genericDisplayField">
            <legend>
                {props.legendIcon ?
                    <img src={props.legendIcon} alt="" className="textIcon"/> : ""
                }
                {props.legendText}&nbsp;
            </legend>
            <div className="fieldsetContent">
                {props.children}
            </div>
        </fieldset>
    )
}

export default GenericDisplayField