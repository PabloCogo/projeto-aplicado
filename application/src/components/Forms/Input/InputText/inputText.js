import styled from "styled-components";

const InputTextBase = styled.input`
    box-sizing: border-box;
    height: auto;
    font-size: 16px;
    outline: none;

    &[type='date']{
        height: ${props=>props.val !== ""&& props.val !== null && props.val !== undefined? "auto":"100%"};
    }

    &[type='date']:focus{
        height: auto;
    }

    &::placeholder{
        color: transparent;
    }
    &:focus::placeholder{
        color: var(--placeholder-input);
    }
    &::-ms-reveal{
        display: none;
    }
    &::-ms-reveal::before{
        content: '/F0208';
    }
`;

export const InputText = styled(InputTextBase)`
    padding: 22px 9px 6px;
    color: var(--color-input-text);

    &[type='date']{
        padding: ${props=>props.val !== ""&& props.val !== null && props.val !== undefined? "19px 9px 6px":"0 9px"};
        color: ${props=>props.val !== ""&& props.val !== null && props.val !== undefined? "var(--color-input-text)":"transparent"};
    }
    &[type='date']:focus{
        color: var(--color-input-text);
        padding: 19px 9px 6px;
    }
`;

export const InputTextWhite = styled(InputTextBase)`
    padding: 22px 9px 6px;
    color: var(--color-input-text-white);

    &[type='date']{
        padding: ${props=>props.val !== ""&& props.val !== null && props.val !== undefined? "19px 9px 6px":"0 9px"};
        color: ${props=>props.val !== ""&& props.val !== null && props.val !== undefined? "var(--color-input-text-white)":"transparent"};
    }
    &[type='date']:focus{
        color: var(--color-input-text-white);
        padding: 19px 9px 6px;
    }
`;

export const InputTextNoLabelWhite = styled(InputTextBase)`
    padding: 10px;
    color: var(--color-input-text-white);

    &[type='date']{
        height: ${props=>props.val !== ""&& props.val !== null && props.val !== undefined? "auto":"100%"};
        color: ${props=>props.val !== ""&& props.val !== null && props.val !== undefined? "var(--color-input-text-white)":"transparent"};
    }
    &[type='date']:focus{
        color: var(--color-input-text-white);
    }
    &::placeholder{
        color: var(--color-input-text-white);
    }
    &:read-only{
        border: .1px dashed var(--border-input-focus);
    }
`;