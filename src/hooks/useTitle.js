import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} -Trainer Review`
    },[title])
}

export default useTitle;