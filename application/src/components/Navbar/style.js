import styled from "styled-components";

export const NavbarContainer = styled.nav`
    background: var(--bg-header);
    min-height: 60px;
    grid-area: nav;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    overflow-y: hidden;
    overflow-x: hidden;
    border-bottom: 1px solid rgba(0 0 0 / 12%);
`;
export const Bars = styled.div`
    display: none;
    align-items: center;
    cursor: pointer;

    &.sidebarClose{
        display: flex;
    }
    &.bars-cell,
    &.bars-tablet{
        display: none;
    }
    @media only screen and (max-width: 1055px){
        display:  flex;
        &.bars-cell{
            display: none;
        }
        &.bars-tablet{
            display: flex;
        }
    }
    @media(max-width: 855px){
        &.bars-cell{
            display: flex;
        }
        &.bars-tablet{
            display: none;
        }
    }
`;
export const Group = styled.div`
    display: flex;
    align-items: center;
    a {
        margin-right: 15px;
    }
    @media(max-width: 589px){
        a{
            margin-right: 5px;
        }
    }
`;