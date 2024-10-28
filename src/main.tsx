import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
 import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import { components, formFields } from "./components/loginCustomization.tsx";
import { customTheme } from "./components/AuthStyle.tsx";
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
  {/*   <ThemeProvider theme={customTheme}>
      <Authenticator formFields={formFields} components={components}> */}
      <App /> 
{/*       </Authenticator>
    </ThemeProvider> */}
  </React.StrictMode>
);
