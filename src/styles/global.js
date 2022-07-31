import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;
        --grey-0: #f8f9fa;
        --grey-1: #868e96;
        --grey-2: #343b41;
        --grey-3: #212529;
        --grey-4: #121214;
        --success: #3fe864;
        --negative: #e83f5b;
        --white: #fff;
    }

    body {
        background: var(--grey-4);
        color: var(--grey-0);
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3 {
        font-weight: bold;

    }

    small {
        color: var(--grey-1);
    }

    a {
        text-decoration: none;
    }

    
`;
