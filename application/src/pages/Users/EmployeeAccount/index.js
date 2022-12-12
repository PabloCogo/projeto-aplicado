import axios from 'axios'
import React, { useState } from 'react'
import { ContainerToggle, Toggle, ToggleInfo } from '../../../components/Forms/Button/Toggle/css-toggle'
import Fotter from '../../../components/Forms/Fotter/fotter'
import InputPassword from '../../../components/Forms/Input/InputPassword/inputPassword'
import { InputText } from '../../../components/Forms/Input/InputText/inputText'
import { ContainerInput, InputLabel } from '../../../components/Forms/Input/Shared/style'
import { Row } from '../../../components/Forms/Shared/style'
import { handleChangeValuesMask, handleChangeValuesMaskered, handleChangeValuesNoMask } from '../../../helpers/changeValues'
import { cepMask, resetMask, text } from '../../../helpers/masks'
import getParamsByCep from '../../../services/getAddressByCep'
import { Main } from '../../Home'

const EmployeeAccount = ({urlServer, setMsgError, setMsgSucess}) => {
    const [values,setValues] = useState([]);
    const [valuesMask, setValuesMask] = useState([]);
    const [statusAdmin,setStatusAdmin] = useState(false);

    const submitForm = async(e) =>{
        e.preventDefault();
        
        if(statusAdmin === undefined || statusAdmin === null || statusAdmin === ''){
            throw new Error("Verifique o campo administrador: não pode ser nulo.")
        }

        var cepParams = null;
        await getParamsByCep(valuesMask).then(res=>{
            cepParams = res;
            console.log(cepParams);
            axios.post(urlServer+"/employee/check",{
                username: values?.name,
                email: values?.email,
                password: values?.password,
                cep: values?.cep,
                isAdmin: statusAdmin,
            }).then(response=>{
                if(response.data){
                    axios.post(urlServer+"/address/register",{
                        cityName: cepParams?.city,
                        districtName: cepParams?.district,
                        cep: values?.cep,
                    }).then(response2=>{
                        console.log(response2);
                        if(response2.status == 200){
                            axios.post(urlServer+"/employee/register",{
                                username:values?.name,
                                email:values?.email,
                                password:values?.password,
                                confirmPassword: values?.checkPassword,
                                cep: values?.cep,
                                cepId: response2.data,
                                isAdmin: statusAdmin
                            }).then(response3=>{
                                console.log(response);
                                if(response3.status === 200){
                                    setMsgSucess("Usuário cadastrado com sucesso.");
                                }
                            }).catch(err=>{
                                console.log(err.response.data);
                                setMsgError(err.response.data);
                            })
                        }
                    }).catch(err2=>{
                        setMsgError(err2.response.data);
                    })
                }
            }).catch(err3=>{
                setMsgError(err3.response.data);
            })
        }).catch(e => {
            setMsgError(e.message);
        })
    }

    const resetForm = () =>{
        setValues([]);
        setValuesMask([])
    }

    const createPassword = (e)=>{
        if(e.target.value !== undefined && e.target.value!==null&&e.target.value.trim()!==''&& text(e.target.value.trim())){
            if(e.target.value[0] !== undefined && e.target.value[0]!==null&&e.target.value[0]!==''){
                setValues((prevValue) => ({
                    ...prevValue,
                    password: e.target.value[0].toUpperCase()+new Date().getFullYear(),
                }));
            }
        }else{
            setValues((prevValue) => ({
                ...prevValue,
                password: '',
            }));
        }
    }

    return (
        <Main>
            <form method="POST" onSubmit={(e)=>submitForm(e)} onReset={()=>resetForm()}>
                <Row gtc={2} colgap={"20px"}>
                <ContainerInput>
                    <InputLabel htmlFor="name" val={values?.name ?? ""}>Nome</InputLabel>
                    <InputText
                        id="name" 
                        name="name" 
                        autoFocus 
                        type="text"
                        onChange={(e)=>handleChangeValuesMask(e, setValues, text) + createPassword(e)}
                        value={values?.name ?? ""}
                    />
                </ContainerInput>
                <ContainerInput>
                    <InputLabel htmlFor="email" val={values?.email ?? ""}>Email</InputLabel>
                    <InputText
                        id="email" 
                        name="email" 
                        type="email"
                        onChange={(e)=>handleChangeValuesNoMask(e,setValues)}
                        value={values?.email ?? ""}
                    />
                </ContainerInput>
                </Row>
                <Row gtc={3} colgap={"20px"} style={{marginTop:"20px"}}>
                    <ContainerInput>
                        <InputLabel htmlFor="cep" val={values?.cep ?? ""}>Cep</InputLabel>
                        <InputText
                            id="cep" 
                            name="cep" 
                            type="text"
                            onChange={(e)=>handleChangeValuesMaskered(e,setValuesMask,setValues,cepMask,resetMask)}
                            value={valuesMask?.cep ?? ""}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <InputLabel htmlFor="password" val={values?.password??""}>Senha</InputLabel>
                        <InputPassword inputId="password" value={values} setValue={setValues} passwordVisibility={true}/>
                    </ContainerInput>
                    <div>
                        <label htmlFor="ToggleCod" style={{color:"var(--color-label-toggle)"}}>Administrador</label>
                        <ContainerToggle style={{height:"auto",marginTop:"3px"}}>
                            <Toggle id="ToggleCod" type="checkbox" defaultChecked={statusAdmin} onChange={()=>setStatusAdmin(!statusAdmin)}/>
                        </ContainerToggle>
                    </div>
                </Row>
                <Fotter/>
            </form>
        </Main>
    )
}

export default EmployeeAccount