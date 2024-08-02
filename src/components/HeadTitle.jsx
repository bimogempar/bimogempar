import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeadTitle = ({ title, children }) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title + ' | bimogempar';
    }, [location, title]);

    return children;
}

export default HeadTitle;