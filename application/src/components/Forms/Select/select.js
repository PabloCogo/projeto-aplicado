import React from 'react'
import { handleChangeValuesNoMask } from '../../../helpers/changeValues';
import styled from "styled-components";

export const ContainerInput = styled.div`
    box-sizing: border-box;
    background: #fff;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    background-image: none;
    border-radius: 5px;
    border: .1px solid var(--border-input);
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    z-index: 0;
    margin-top: 4px;

    &:focus-within{
        border-color: var(--border-input-focus);
        box-shadow: 0 0 3px var(--border-input-focus);
    }
    &:focus-within label{
        height: auto;
        padding-top: 3px;
        font-size: 11px;
        color: var(--label-input-active);
    }
    & select{
        box-sizing: border-box;
        height: 100%;
        font-size: 16px;
        z-index: 1;
        outline: none;
        padding: 10px;
        margin: 0 2px;
        border: none;
        cursor: pointer;
        background-color: #fff;
        color: #000;
    }
`;
const Select = ({name, label, values, valuesList, valuesOptions, setValues, valueNoList}) => {
    if(values === null || values === undefined || values === ''){
        if(document.getElementById(name)){
            if(document.getElementById(name).selectedIndex !== 0){
                document.getElementById(name).selectedIndex = 0;
                document.getElementById(name).setAttribute('style','color: #000')
            }
        }
    }
    return (
        <div>
            {label != undefined
                ?<label htmlFor={name} style={{color:"#fff",width:"100%"}}>{label}</label>
                :null
            }
            <ContainerInput>
                <select onChange={(e)=>handleChangeValuesNoMask(e, setValues) + (e.target.style.color = "var(--text-input)")} id={name} name={name}>
                    {typeof valuesList !== "undefined" && valuesList.length > 0 ?
                        valuesList.map((element, index) => {
                            return(
                                <option value={element} key={element}>{
                                    valuesOptions[index]
                                }</option>
                            )
                    })
                    :<option>{valueNoList}</option>}
                </select>
            </ContainerInput>
        </div>
  )
}

export default Select