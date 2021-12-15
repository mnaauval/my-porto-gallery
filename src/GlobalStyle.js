import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Varela Round', sans-serif;
    color: white;
    background-color: #10121b;
    font-size: 1.2rem;
}

`;

export default GlobalStyle;
