import { DetailsType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import './style.less'

interface BuildDetailsProps {
    details: DetailsType[] | undefined
}
const BuildDetails = (props: BuildDetailsProps) => {
    return (
        <>
            {props.details?.map((detail: DetailsType, key: number) => {
                return (
                    <GenericDisplayField legendText={detail.title} legendIcon={detail.icon} key={key}>
                        <div className="detailsContent" dangerouslySetInnerHTML={{ __html: detail.htmlText }}></div>
                    </GenericDisplayField>
                )
            })}
        </>
    )
}
export default BuildDetails