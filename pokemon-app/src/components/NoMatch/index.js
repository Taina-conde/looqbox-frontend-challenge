import { useLocation } from 'react-router-dom';
import BackToHome from '../BackToHome';
const NoMatch = () => {
    let location = useLocation();
    return(
        <div>
            <div>404</div>
            <div>The page you are looking for <strong>{location.pathname}</strong> does not exist</div>
            <BackToHome/>
        </div>
    )
}
export default NoMatch;