import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/main.scss';
import {BrowserRouter} from "react-router-dom";
import {Auth0ProviderWithHistory} from "./components/utils/auth0-provider-with-history";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Auth0ProviderWithHistory>
            <App/>
        </Auth0ProviderWithHistory>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
