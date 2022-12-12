import styled from "styled-components";

export const ContainerToggle = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
export const Toggle = styled.input`
    position: relative;
    appearance: none;
    outline: none;
    width: 55px;
    height: 27px;
    background-color: var(--bg-toggle);
    border: 2px solid var(--border-toggle);//D9DADC
    border-radius: 50px;
    transition: all .3s;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        top: .4px;
        left: .4px;
        background: var(--bg-ball-toggle);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        box-shadow: 1px 0px 5px rgb(0 0 0 / 15%);
        transition: all .3s;
    }

    &:checked {
        background: var(--bg-toggle-selected);
        border-color: var(--border-toggle-selected);
    }

    &:checked::after {
        left: 28px;
    }
`;
export const ToggleInfo = styled.label`
    font-size: 13px;
    color: var(--color-label-toggle);
    margin-left: 5px;
    cursor: pointer;
`;