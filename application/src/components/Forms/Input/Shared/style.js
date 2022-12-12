import styled from "styled-components";

export const ContainerInput = styled.div`
    box-sizing: border-box;
    background: var(--bg-input);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    background-image: none;
    border-radius: 5px;
    border: var(--border-input);
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    min-height: 52px;
    max-height: 85px;
    z-index: 0;

    &:focus-within label{
        height: auto;
        padding-top: 8px;
        font-size: 9px;
        color: var(--label-input-active);
        font-weight: bold;
        text-transform: uppercase;
    }
    & select{
        box-sizing: border-box;
        height: 100%;
        font-size: 16px;
        z-index: 1;
        outline: none;
        padding: 0 6px;
        margin: 0 2px;
        border: none;
        cursor: pointer;
        background-color: #fff;
        //color: var(--label-input);
    }
`;

export const InputLabel = styled.label`
    text-transform: ${props=>props.val === ""|| props.val === null || props.val === undefined? "auto":"uppercase"};
    color: ${props=>props.val === ""|| props.val === null || props.val === undefined? "var(--label-input)":"var(--label-input-active)"};
    box-sizing: border-box;
    height: ${props=>props.val === "" || props.val === null || props.val === undefined? "100%":"auto"};
    width: 100%;
    font-size: ${props=>props.val === "" || props.val === null || props.val === undefined? "13px":"9px"};
    padding-left: 9px;
    position: absolute;
    padding-top: ${props=>props.val === "" || props.val === null || props.val === undefined? "0":"8px"};
    font-weight: ${props=>props.val === "" || props.val === null || props.val === undefined? "auto":"bold"};
    display: flex;
    align-items: center;
    cursor: text;
    transition: all 0.15s ease-in-out;
`;