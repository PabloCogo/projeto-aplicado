import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`

:root{
    --bg-login: #141d2b;
    --color-title: #fff;

    //CARDS LOGIN && REGISTRO DE USUÁRIO
    --width-card: 500px;
    --min-height-card-sign-in: 305px;
    --min-height-card-sign-up: 450px;

    --height-card-redirect-sign-up: 100px;

    --bg-card: #1a2332;
    --color-title-card: #fff;

    //CARDS
    --bg-card-default: #050e1f;
    --box-shadow-cards-default: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    --icon-default: #0094ff;

    --color-primary: #fff;
    --color-secondary: #a1a5aa;

    //INPUTS
    --bg-input: #111927;
    --color-icon-input: #fff;
    --color-icon-input-focus: #0094ff;
    --border-input: .1px solid #0e141e;
    --label-input: #a4b1cd;
    --label-input-active: #0094ff;
    --color-input-text: #fff;

    --color-input-text-white: #000;

    //BUTTONS
    --color-button-primary:rgba(164,177,205,.4);
    --color-button-primary-hover:#141d2b;
    --bg-button-primary: rgba(164,177,205,.05);
    --bg-button-primary-hover: #0094ff;

    --color-button-secondary: #fff;
    --color-button-secondary-hover: #0094ff;
    --color-buton-icon-link: #fff;
    --bg-buton-icon-link-selected: #64738a;
    --color-button-icon-link-selected: #141d2b;

    --bg-system: #1a2332;
    --bg-header: #050e1f;
    --bg-sidebar: #050e1f;
    --bg-fotter: #111927;

    --bg-title-sidebar: #000;
    --color-title-sidebar: #0094ff;

    --color-subtitle-menu: #0094ff;
    --color-text-menu: #a1a5aa;
    --bg-text-menu-selected: #0094ff;
    --color-text-menu-selected: #000;

    --border-input-focus: #0094ff;

    //INPUT-TOGGLE
    --bg-toggle: #ccc;
    --bg-toggle-selected: #0094ff;
    --border-toggle: #ccc;
    --border-toggle-selected: #0094ff;
    --bg-ball-toggle: #fff;
    --color-label-toggle: #a4b1cd;

    //SCROLBAR
    --scrollbar-track: #a5aaad;
    --scrollbar-thumb: #0171b0;
    --scrollbar-thumb-hover: #0094ff;

    //TOAST
    --bg-msg-error: #f2dede;
    --bg-msg-success: #daffda;
    --color-msg-error: #a94442;
    --color-msg-success: green;
    --border-msg-error: #ebccd1;
    --border-msg-success: green;

}
*{
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
}
html{
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    height: 100%;
}
body{
    box-sizing: border-box;
    overflow-x: hidden;
    height: 100%;
}
table{
    border-collapse: collapse;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
}
#root{
    height: 100%;
}
button{
    border: none;
    outline: none;
    align-items: center;
    cursor: pointer;
    background: transparent;
}
input{
    width: 100%;
    box-sizing:border-box;
    border: none;
    outline:none;
    background: transparent;
}
[type="radio"]{
    width: auto;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}

::-webkit-scrollbar{
    width: 5px;
    height: 6px;
}

::-webkit-scrollbar-track{
    box-shadow: inset 0 0 5px var(--scrollbar-track);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb{
    background: var(--scrollbar-thumb);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover{
    background: var(--scrollbar-thumb-hover);//#888;
}
`;

export const Container = styled.div`
    overflow-x: hidden;
    display: grid;
    height: 100%;
    min-height: 100vh;
    grid-template-columns: 0fr repeat(3, 1fr);
    grid-template-rows: 0fr 3fr;
    grid-template-areas:
        "title nav nav nav"
        "sidebar main main main";

    &.sidebarClose{
        grid-template-columns: 1fr;
        grid-template-areas: "nav" "main";
    }

    @media only screen and (max-width: 1055px) {
        transition: grid-template-areas 2s;
        grid-template-columns:0fr 1fr;
        grid-template-rows: 0fr 3fr;
        grid-template-areas: 'title nav' 'sidebar main';
    }
    @media only screen and (max-width: 589px) {
        grid-template-rows: 0fr 0fr 3fr !important;
        grid-template-columns:1fr !important;
        grid-template-areas: "title" "nav" "main" !important;

        &.sidebarClose{
            grid-template-columns: 1fr !important;
        }
    }
`;