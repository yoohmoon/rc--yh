import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    // 전역 스타일 goes here!
    *{
        box-sizing: border-box;
    }
    
    button{
        background-color: unset;
        border: none;
        cursor: pointer;

    }
`;
export default GlobalStyle;
