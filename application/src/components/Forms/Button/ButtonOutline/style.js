import styled from "styled-components";

export const ButtonOutline = styled.button`//rever cores
    box-sizing: border-box;
    height: 46px;
    padding: 10px 25px;
    color: var(--color-button-secondary);
    border: 1px solid var(--color-button-secondary);
    border: 1px solid;
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
    transition: background-color .09s;
    &:hover,
    &:focus{
        color: var(--color-button-secondary-hover);
        background-color: var(--bg-button-secondary-hover); 
    }
`;

export const ButtonOutlineSM = styled.button`
    box-sizing: border-box;
    height: 35px;
    width: 100%;
    padding: 0 20px;
    background-color: var(--bg-button-secondary-SM);
    color: var(--color-button-secondary);
    border: 1px solid var(--color-button-secondary);
    border-radius: 7px;
    text-align: center;
    transition: background-color .09s;

    &:hover,
    &:focus{
        color: var(--color-button-secondary-hover);
        background-color: var(--bg-button-secondary-hover);
    }
`;