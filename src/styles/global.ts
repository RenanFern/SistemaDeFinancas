import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
    body{
        width: 100vw;
        height: 100vh;
        background-color: #E5E5E5
    }
      .overlayModal {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal {
        width: 100%;
        max-width: 576px;
        background: #fff;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
     .close {
        width: 40px;
        height: 40px;
        position: absolute;
        font-size:1.5rem;
        right: 10px;
        top: 10px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #A8A8B3;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

    }
`;
