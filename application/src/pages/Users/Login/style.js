import styled from "styled-components";
import { BackgroundLoginContainer } from "../Shared/style";
import { Card } from "../../../components/Cards/card-users";

export const GroupLogin = styled(BackgroundLoginContainer)`
    flex-direction: column;
    justify-content: center;
`;

export const CardLogin = styled(Card)`
    padding: 18px 30px 15px;
    min-height: var(--min-height-card-sign-in);
    justify-content: space-between;
`;

export const HeaderLogin = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    text-align: center;

    & > h1 {
        text-transform: uppercase;
        color: var(--color-title);
        letter-spacing: 1px;
        font-weight: bold;
        z-index: 1;
    }
    @media (max-width: 460px) {
        h1 {
            padding: 0;
        }
    }
`;

export const FotterLogin = styled.div`
    margin-top: 24px;
    width: 500px;
    max-width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    letter-spacing: .5px;
    z-index: 1;
    &>a{
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }
    &>a:hover{
        color: #c9cbff;;
        border-bottom: 1px solid #c9cbff;;
        margin-bottom: -1px;
    }
    &>a:first-child{
        margin-left: 15px;
    }
    &>a:last-child{
        margin-right: 15px;
    }
    @media(max-width: 450px){
        margin-top: 10px;
        flex-direction: column;
        text-align: center;
        padding-bottom: 10px;

        &>a{
            margin: 0 !important;
        }
    } 
`;