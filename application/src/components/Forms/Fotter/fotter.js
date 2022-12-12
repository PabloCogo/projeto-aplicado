import React from 'react'
import styled from 'styled-components'
import { ButtonOutlineSM } from '../Button/ButtonOutline/style';
import { ButtonSM } from '../Button/ButtonSolid/style';

const FotterContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: 60px;
    background: var(--bg-fotter);
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 10px 35px;
`;


const Fotter = () => {
    return (
        <FotterContainer>
            <div style={{display:"flex", width:"33.3%",position: "absolute", paddingRight:"35px"}}>
                <ButtonOutlineSM style={{marginRight:"8px"}} type='reset'>Limpar</ButtonOutlineSM>
                <ButtonSM type='submit'>Salvar</ButtonSM>
            </div>
        </FotterContainer>
    )
}

export default Fotter