import React from "react";
import {Edit, HelpOutlineOutlined} from '@mui/icons-material';
import { Link } from "react-router-dom";

import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70px;
    padding: 25px;
    border-radius: 5px;
    background-color: var(--bg-card-default);
    box-shadow: var(--box-shadow-cards-default);
    -webkit-box-shadow: var(--box-shadow-cards-default);
    position: relative;

    @media only screen and (max-width: 290px){
        padding: 25px 10px;
    }
`;
const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;

    svg{
        font-size: 40px;
    }
`;
const CardIcon = styled.div`
    svg{
        color: ${props=>props.color || 'var(--icon-default)'};
    }
`;
const CardInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2px;

    p{
        color:var(--color-secondary);
        font-size: 14px;
        font-weight: 700;
    }
    span{
        font-size: 25px;
        color: var(--color-primary);
        font-weight: 700;
    }
`;
const GroupInfo = styled.div`
    display: flex;
    color:var(--color-secondary);
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
`;
export const Info = styled.div`
    display: ${({info})=> info === undefined ? 'none': 'flex'};
    cursor: pointer;

    &:hover{
        color: var(--color-primary);
    }
`;
export const GroupCardInfo = styled.div`
    display: none;
    position: relative;
    &::after{
        display: block;
        content: '';
        top: 3px;
        left: -2.8px;
        width: 0; 
        height: 0; 
        border-bottom: 6px solid transparent;
        border-left: 6px solid #a5aaad;
    }
    ${Info}:hover &{
        display: flex;
    }
`;
export const CardInfo = styled.div`
    display: block;
    width: 140px;
    max-height: 50px;
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow-x: hidden;
    overflow-y: auto;
    top: 3px;
    background-color: #fff;
    border: 2px solid #a5aaad;
    z-index: 1;
    right: 24px;
    color: #000;
    font-size: 10px;
    border-radius: 3px;
    border-top-right-radius: 0;
    padding: 2px;
    
    @media only screen and (max-width: 855px){
        width: 300px;
    }
    @media only screen and (max-width: 480px){
        width: 140px;
    }
`;
export const EditInfo = styled.div`
    display: ${({edit})=> !edit ? 'none': 'flex'};
    margin-left: 5px;
    cursor: pointer;

    a{
        color:var(--color-secondary);
    }
    
    &>a:hover{
        color: #000;
    }
`;

const Card = ({icon, info, title, data, color, edit, linkEdit})=>{
    return(
    <CardContainer>
        <CardTitle>
            <CardIcon color={color}>{icon}</CardIcon>
        </CardTitle>
        <GroupInfo>
            <Info info={info} title="Info">
                <GroupCardInfo style={{position:'relative'}}>
                    <CardInfo>{info}</CardInfo>
                </GroupCardInfo>
                <HelpOutlineOutlined style={{fontSize: '22px'}}/>
            </Info>
            <EditInfo edit={edit}>
                <Link to={''+linkEdit+''} title="Editar">
                    <Edit style={{fontSize: '22px'}}/>
                </Link>
            </EditInfo>
        </GroupInfo>
        <CardInner>
            <p>{title}</p>{/* title */}
            <span>{data}</span>{/* data */}
        </CardInner>
    </CardContainer>
    )
};
export default Card;