import styled from "styled-components";

export const Grafic = styled.div`
    padding: 25px;
    border-radius: 5px;
    background-color: var(--bg-card-default);;
    box-shadow: var(--box-shadow-cards-default);

    @media only screen and (max-width: 290px){
        padding: 25px 10px;
    }
`;