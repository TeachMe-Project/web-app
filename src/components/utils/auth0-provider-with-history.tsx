import {AppState, Auth0Provider} from "@auth0/auth0-react";
import React, {PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

export const Auth0ProviderWithHistory = ({
                                             children,
                                         }: PropsWithChildren<any>): JSX.Element | null => {
    const navigate = useNavigate();
    const domain = "learningsl.us.auth0.com";
    const clientId = "JzBbJacKTm5apFvzjOsPdFzrOKjW2iZQ";
    const audience = "learning"
    const scope = "openid profile email";

    const onRedirectCallback = (appState?: AppState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && audience)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            audience={audience}
            scope={scope}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            useRefreshTokens
            cacheLocation='localstorage'
        >
            {children}
        </Auth0Provider>
    );
};