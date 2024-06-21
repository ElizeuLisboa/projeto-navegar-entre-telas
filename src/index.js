import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/globalStyle";
import Routes from "./routes";

// ReactDOM.render(
//   <>
//     <Routes /> 
//     <GlobalStyle />
//   </>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement)

root.render(
   <>
     <Routes /> 
     <GlobalStyle />
   </>,
//   document.getElementById("root")
)


// https://www.youtube.com/watch?v=tx1G-OZoipY
