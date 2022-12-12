import styled from "styled-components";
import { Card } from "../../../components/Cards/card-users";
import { BackgroundLoginContainer } from "../Shared/style";

export const GroupCreateAccount = styled(BackgroundLoginContainer)`
    justify-content: space-between;
    padding-right: 12.5%;
    box-sizing: border-box;

    @media(max-width: 1200px) {
        padding-right: 6%;
    }
    @media(max-width: 1100px) {
        padding-right: 4%;
    }
    @media(max-width: 1000px) {
        padding-right: 0;
        justify-content: center;
    }
`;

export const CreateAccountDetail = styled.div`
    height: 100%;
    background: var(--bg-card);
    width: 40%;
    min-width: 405px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 40px;
    text-align: right;

    h2{
        text-transform: uppercase;
        font-size: 50px;
        color: #fff;
    }
    p{
        color: #0094ff;
    }
    @media(max-width: 1000px) {
        display: none;
    }
`;


export const CardSignUp = styled(Card)`
    margin: 0 auto;
    padding: 25px 30px 15px;
    min-height: var(--min-height-card-sign-up);
    z-index: 1;
`;