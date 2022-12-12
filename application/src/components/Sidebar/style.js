import styled from "styled-components";

export const SidebarTitle = styled.div`
    box-sizing: border-box;
    position: relative;
    grid-area: title;
    background: var(--bg-title-sidebar);
    border-right: 1px solid rgba(0 0 0 / 12%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-title-sidebar);
    white-space: nowrap;
    min-width: 212px;
    min-height: 60px;
    height: 100%;
    transition: margin-left .6s;

    h1{
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    svg{
        display: none;
        color: var(--color-text-menu);
        padding: 5px;
        border-radius: 20px;
        cursor: pointer;
    }
    &.sidebarClose{
       display: none;
    }
    &.sidebar-responsive{
        margin-left: 0 !important;
    }
    svg:hover{
        color: var(--color-text-menu-selected);
        background: var(--bg-text-menu-selected);
    }
    @media (max-width: 1055px){
        margin-left: -400px;
        padding-left: 0;
        border-right:0;

        svg{
            display: inline;
        }
    }
    @media (max-width: 589px){
        margin-left: 0px;
        justify-content: center;
    }
`;
export const SidebarContainer = styled.aside`
    background: var(--bg-sidebar);
    grid-area: sidebar;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
    transition: margin-left .6s,left .6s, border-color .1s;
    width: 212px;
    display: inline;
    border-right: 1px solid rgba(0 0 0 / 12%);

    &.sidebarClose{
        z-index: 9999;
        left: -400px;
        top:50px;
        bottom: 0;
        height: auto !important;
        /* height: calc(100vh - 100px); */
        position: absolute;
    }
    &.sidebarClose.sidebar-responsive{
        left: 0 !important;
    }
    @media (max-width: 1055px){
        box-sizing: border-box;
        position: absolute;
        height: calc(100vh - 60px);
        z-index: 9999;
        margin-left: -400px;
        top:60px;
    }
    &.sidebar-responsive{
        margin-left: 0 !important;
    }
    @media (max-width: 589px){
        height: calc(100vh - 120px);
        top: 120px;
    }
`;

export const SidebarMenu = styled.div`
    h2 {
        color: var(--color-subtitle-menu);
        font-size: 16px;
        margin-top: 15px;
        margin-bottom: 5px;
        padding: 0 10px;
        font-weight: 700;
    }
    a {
        padding: 10px;
        border-radius: 3px;
        margin-bottom: 5px;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--color-text-menu);
        font-weight: 700;
    }
    a:focus,
    a:hover,
    a.active_menu_link{
        background: var(--bg-text-menu-selected);
        color: var(--color-text-menu-selected);
    }
    a>svg{
        margin-right: 5px;
        font-size: 20px;
    }
`;