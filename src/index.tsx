import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";


const rootElement = document.getElementById("root");
// const root = rootElement && ReactDOMClient.createRoot(rootElement);

if (!rootElement) {
  throw new Error("No root element found");
}
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
