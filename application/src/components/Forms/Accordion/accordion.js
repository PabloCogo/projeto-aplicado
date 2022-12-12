import React, { useState } from 'react'
import styled from 'styled-components'
import {KeyboardArrowDown, KeyboardArrowRight} from '@mui/icons-material';

const AccordionContainer = styled.div`
`;
const AccordionHeader = styled.div`
    box-sizing: border-box;
    background: var(--bg-card-default);
    color: ${props=>props.stateAccordion ? "var(--color-icon-input-focus)" : "#fff"};
    min-height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius: ${props=>props.stateAccordion ? "5px 5px 0 0" : "5px"};
    cursor: pointer;
    transition-delay: 2ms;
    box-shadow: var(--box-shadow-cards-default);
    -webkit-box-shadow: var(--box-shadow-cards-default);
`;
const AccordionBody = styled.div`
    box-sizing: border-box;
    background: #0e1627;
    padding: ${props=>props.stateAccordion ? "15px" : "0 15px"};
    height: ${props=>props.stateAccordion ? "auto" : "0"};
    overflow-y: ${props=>props.stateAccordion ? "auto" : "hidden"};;
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 2ms;
    border-radius: 0 0 5px 5px;
    border: ${props=>props.stateAccordion ? "1px solid var(--bg-card-default)" : "0"};
`;

const Accordion = ({title, accordionInner, accordionState = false}) => {
    const [accordionOpen, setAccordionOpen] = useState(accordionState);
    const abrirAccordion = () =>{
        setAccordionOpen(!accordionOpen)
    }
    return (
        <AccordionContainer>
            <AccordionHeader stateAccordion={accordionOpen} onClick={()=>abrirAccordion()}>
                <div>
                    {title}
                </div>
                {accordionOpen?<KeyboardArrowDown/>: <KeyboardArrowRight/>}
            </AccordionHeader>
            <AccordionBody stateAccordion={accordionOpen}>{accordionInner}</AccordionBody>
        </AccordionContainer>
    )
}

export default Accordion