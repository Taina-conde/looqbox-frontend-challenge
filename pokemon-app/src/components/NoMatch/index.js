import { useLocation } from 'react-router-dom';
const NoMatch = () => {
    let location = useLocation();
    return(
        <div>
            <span>404</span>
            <span>The page you are looking for <strong>{location.pathname}</strong> does not exist</span>
        </div>
    )
}
export default NoMatch;