import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Kidol | ${title}`;
    }, [title])
}

export default useTitle;