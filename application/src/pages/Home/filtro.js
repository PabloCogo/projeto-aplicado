import React, { useEffect, useState } from 'react'
import { ButtonSM } from '../../components/Forms/Button/ButtonSolid/style'
import { InputTextNoLabelWhite } from '../../components/Forms/Input/InputText/inputText'
import Select, { ContainerInput } from '../../components/Forms/Select/select'
import { Row } from '../../components/Forms/Shared/style'
import { handleChangeValuesNoMask } from '../../helpers/changeValues'

const FiltroHome = ({values,setValues}) => {
    const [valuesOptions,setValuesOptions] = useState(["Meu endereço","Selecionar endereço"])
    const [valuesList, setValuesList] = useState(["myAddress","selectAddress"]);

    useEffect(()=>{
        if(values?.FilterChoseAddress !== "selectAddress"){
            setValues(prev=>({
                ...prev,
                chose:''
            }))
        }
    },[values?.FilterChoseAddress])
    
    useEffect(()=>{
        if(values?.FilterAddress !== "city" && values?.FilterAddress){
            setValuesOptions(["Meu endereço"]);
            setValuesList(["myAddress"]);
            setValues((prev)=>({
                ...prev,
                FilterChoseAddress: "myAddress"
            }))
            setValues(prev=>({
                ...prev,
                chose:''
            }))
        }else{
            setValuesOptions(["Meu endereço","Selecionar endereço"]);
            setValuesList(["myAddress","selectAddress"]);
        }
    },[values?.FilterAddress])

    return (
        <>
        <Row gtc={4} colgap={"8px"}>
            <Select 
                name={"FilterAddress"} 
                values={values} 
                setValues={setValues} 
                valuesList={["city","district","cep"]} 
                valuesOptions={["Por cidade","Por bairro","Por cep"]}
            />
            <Select 
                name={"FilterChoseAddress"} 
                values={values} 
                setValues={setValues} 
                valuesList={valuesList} 
                valuesOptions={valuesOptions}
            />
            <ContainerInput style={values?.FilterChoseAddress === "selectAddress" ? {display:"block"}:{display:"none"}}>
                <InputTextNoLabelWhite
                    id="chose" 
                    name="chose" 
                    autoFocus 
                    type="text"
                    onChange={(e)=>handleChangeValuesNoMask(e,setValues)}
                    value={values?.chose ?? ""}
                    placeholder={"Selecione..."}
                />
            </ContainerInput>
            <ButtonSM style={{height: "auto",margin:"3px 0 -1px",padding: "10px"}} type="submit">Filtrar</ButtonSM>
        </Row>
        {/* <div style={{float:"right", width: "33.3%", marginTop:"15px"}}>
            
        </div> */}
        </>
    )
}

export default FiltroHome