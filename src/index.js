import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import './index.css'
import { ClerkProvider } from "@clerk/clerk-react";
import reportWebVitals from './components/Pages/reportWebVitals';
const clerk_key = "pk_test_cG9wdWxhci1iZWV0bGUtNTMuY2xlcmsuYWNjb3VudHMuZGV2JA";

console.log(clerk_key)
if(!clerk_key){
    throw new Error("Key Not Found")
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={clerk_key}>
        <App/>
        </ClerkProvider>
    </React.StrictMode>
)

reportWebVitals();