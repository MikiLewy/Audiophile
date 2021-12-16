import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}
body{
    font-family: 'Heebo', sans-serif;
    overflow-x: hidden;
}
button{
    font-family: 'Heebo', sans-serif;
}

`;
