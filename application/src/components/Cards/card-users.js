import styled from "styled-components";

export const Card = styled.form`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: var(--bg-card);
    max-height: max-content;
    overflow-y: hidden;
    min-width: min-content;
    width: var(--width-card);
    max-width: 100%;
    border-radius: 4px;
`;

export const CardHeader = styled.div`
    h2{
        color: var(--color-title-card);
        display: flex;
        justify-content: start;
        margin-bottom: 20px;
        padding-bottom: 15px;
        text-transform: uppercase;
        border-bottom: 1px solid var(--color-title-card);
        padding-right: 30px;
    }
`;

export const CardBody = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardRedirect = styled.div`
    box-sizing: border-box;
    height: var(--height-card-redirect-sign-up);
    min-width: min-content;
    width: var(--width-card);
    max-width: 100%;
    background: var(--bg-card);
    margin-top: 24px;
    z-index: 1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 18px 30px;
    justify-content: space-evenly;
    z-index: 1;

    &>p{
        text-transform: uppercase;
        color: var(--color-title-card);
        font-size: 16px;
    }
    @media(max-width: 450px){
        padding: 18px;
    } 
    @media(max-width: 280px){
        flex-direction: column;
        padding: 0px 25px;
        text-align: center;
    } 
`;