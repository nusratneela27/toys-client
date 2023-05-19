import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Kidol`;
    }, [title])
}

export default useTitle;