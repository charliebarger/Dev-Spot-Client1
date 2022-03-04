import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize}
html {
    box-sizing: border-box;
    height:100%
}
*,
*:before,
*:after {
    box-sizing: inherit;
    font-family:inherit;
    text-decoration:none;
}
img{
    max-width:100%;
    max-height:100%;
}
body{
    font-family: "Roboto", sans-serif;
    padding:0;
    margin:0;
    min-height: 100vh;
    position:relative;
    height:100%;
}

button{
    cursor:pointer;
}
`;

export default GlobalStyles;
