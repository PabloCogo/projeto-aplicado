import styled from "styled-components";

export const Button = styled.button`
    box-sizing: border-box;
    min-height: 50px;
    width: 100%;
    padding: 10px 25px;
    background-color: var(--bg-button-primary);
    color: var(--color-button-primary);
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color .09s;

    &:hover,
    &:focus {
        color: var(--color-button-primary-hover);
        background-color: var(--bg-button-primary-hover);
    } 
`;
export const ButtonSM = styled.button`
    box-sizing: border-box;
    height: 35px;
    width: 100%;
    padding: 0 20px;
    background-color: var(--bg-button-primary);
    color: var(--color-button-primary);;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .09s;

    &:hover,
    &:focus{
        color: var(--color-button-primary-hover);
        background: var(--bg-button-primary-hover);//#5bb67e;
    }
`;