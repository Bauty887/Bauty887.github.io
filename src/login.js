import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './styles.css';
import './w3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()} className="w3-right w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><FontAwesomeIcon icon={faDragon} /> Ingresar</button>
};

const LogoutButton = () => {
    const { logout } = useAuth0();

    return <button onClick={() => logout({ returnTo: window.location.origin })} className="w3-right w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><FontAwesomeIcon icon={faBackward} />Deslogearse</button>
};

const Info = () => {

    const { user } = useAuth0();

    return ( 
        <div>
            <img src={ user.picture } alt={ user.name } />
            <h2>{ user.name }</h2>
            <p>Email: { user.email } </p>
        </div>
    )
}


export const Profile = () => {
    const {isAuthenticated } = useAuth0();

    if (isAuthenticated) {

    return (
        <div>
            <Info />
            <LogoutButton />
        </div>
    )
        
    }
    
    else{
        return(
            <LoginButton />
        )
    }
};