import styled from "styled-components";

export const Row = styled.div`
    display: grid;
    column-gap: ${(props) => (props.gtc === undefined ? "30px" : props.colgap)};
    row-gap: ${(props) => (props.rowgap === undefined ? "20px" : props.rowgap)};
    grid-template-columns: ${(props) =>
        props.gtc === undefined ? "1fr" : "repeat(" + props.gtc + ", 1fr)"};

    @media (max-width: 589px) {
        grid-template-columns: 1fr !important;
    }
`;