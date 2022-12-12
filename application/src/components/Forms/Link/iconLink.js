import styled from "styled-components";
export const IconLink = styled.a`
    background-color: transparent;
    border-radius: 15%;
    padding: 5px;
    display: flex;
    align-items: center;
    transition: 0.1s;
    color: var(--color-buton-icon-link) !important;
    cursor: pointer;

    &:hover,
    &:focus {
        color: var(--color-button-icon-link-selected) !important;
        background: var(--bg-buton-icon-link-selected) !important;
    }
`;