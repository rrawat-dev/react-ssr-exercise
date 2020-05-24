import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {

    }

    body {
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 16px;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .App {
        margin: 0 auto;
        max-width: 1200px;
        background-color: #f6f6ef;
        min-height: 100vh;
    }
`;

export default GlobalStyle;