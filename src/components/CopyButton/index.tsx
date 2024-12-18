import { useRef } from "react"
import { copyLink } from "../../utils/utils"

const CopyButton = () => {
    const copyButtonRef = useRef<HTMLButtonElement>(null)
     const copyButtonText = "Copy values"

    const copyLinkButtonAction = () => {
        copyLink()

        if (!copyButtonRef.current) {
            return
        }
        copyButtonRef.current!.innerText = "Link copied!"
        copyButtonRef.current!.disabled = true
        setTimeout(() => {
            copyButtonRef.current!.innerText = copyButtonText
            copyButtonRef.current!.disabled = false
        }, 2000)
    }

    return (
        <button onClick={copyLinkButtonAction} ref={copyButtonRef}>{copyButtonText}</button>
    )
}
export default CopyButton;