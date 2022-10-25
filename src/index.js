import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider 
    domain='unidex.us.auth0.com' 
    clientId='8jmzR3wURogT7sZ4zDlVK22RErQ2kXya' 
    redirectUri={ window.location.origin } 
    >
    < React.StrictMode>
        <App  />
    </React.StrictMode>
    </Auth0Provider >
);
