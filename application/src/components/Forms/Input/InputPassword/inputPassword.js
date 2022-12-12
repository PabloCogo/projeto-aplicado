import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { handleChangeValuesNoMask } from "../../../../helpers/changeValues";
import { InputText } from "../InputText/inputText";

const ContainerInputPassword = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    z-index: 1;

    svg{
        font-size: 15px;
        padding-right: 13px;
        color: var(--color-icon-input);
        cursor: pointer;
    }

    &:focus-within svg{
        color: var(--color-icon-input-focus);
    }
`;

const InputPassword = ({inputId,value,setValue,passwordVisibility = false}) => {
    const alterPasswordVisibility = ()=>{
        if(passwordVisible){
            setPasswordVisible(false);
        }else{
            setPasswordVisible(true);
        }
    }

    const [passwordVisible,setPasswordVisible] = useState(passwordVisibility);
    return (
        <ContainerInputPassword>
            <InputText
                id={inputId} 
                name={inputId}
                type={passwordVisible?"text":"password"} 
                onChange={(e)=>handleChangeValuesNoMask(e,setValue)}
                value={value?.[inputId]??""}
            />
            <FontAwesomeIcon icon={passwordVisible?faEye:faEyeSlash} onClick={()=>alterPasswordVisibility()} />
        </ContainerInputPassword>
    );
};

export default InputPassword;
