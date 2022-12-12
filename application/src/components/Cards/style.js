import styled from "styled-components";

export const Cards = styled.div`
    display: grid;
    gap: 30px;
    margin: 20px 0;
    min-width: 100px;
    grid-template-columns:${props=> props.gtc === undefined? '1fr':'repeat('+props.gtc+', 1fr)'};

    @media only screen and (max-width: 855px){
        grid-template-columns: 1fr !important;
        gap: 10px;
        margin-top: 10px;
        margin-bottom: 0;
    }
`;