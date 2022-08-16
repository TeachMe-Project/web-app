import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import React, {ComponentType} from "react";
import Loader from "./Loader";
import UnAuth from "./unAuth";

interface ProtectedRouteProps {
    component: any;
    role: string
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({component, role, ...args}) => {

    const {user} = useAuth0();

    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <Loader/>,
    });

    if (user?.family_name === role) {
        return <Component {...args}/>;
    }
    return <UnAuth/>
};