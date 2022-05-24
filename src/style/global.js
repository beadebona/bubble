import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
  
:root{
    --primary: #143642;
    --primary-focus: #38413f;
    --secundary: #b76935;
    --secundary-focus: #935e38;
    --yellow: #ee9b00;
    --yellow-2: #e9d8a6;
    --neutral: #f7ede2;
}

h1, h2, h3, h4, h5, h6, p, span, label, input{
    font-family: 'Roboto';
    color: var(--primary);
}

h1, h2, h3, h4{
    font-weight: bold;
}
p{
    font-size: 14px;
}

h1{
    font-size: 2rem;
    margin: 1rem;
    
}

`
export default GlobalStyle