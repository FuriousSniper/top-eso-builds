import './style.less'

interface GenericInputProps {
    type: "checkbox" | "number",
    name: string,
    title: string,
    id: string,
    min?: number,
    max?: number,
    value?: string | number | readonly string[] | undefined,
    checked?: boolean | undefined
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}

const GenericInput = (props: GenericInputProps) => {
    return (
        <div className="charRow">
            <label className="explanationLabel" htmlFor={props.id} title={props.title}>{props.name}</label>
            <input type={props.type} name={props.id} id={props.id} checked={props.checked} value={props.value} onChange={props.onChange} min={props.min} max={props.max} />
        </div>
    )
}

export default GenericInput