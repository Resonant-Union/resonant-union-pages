import { useLocation, useParams } from 'react-router-dom';

export const useBasePath = () => {
    const location = useLocation();

    return location.pathname.split("/")[0]
};
