import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BgLogin } from "../../../components/Backgrounds/backgroundLogin";
import { CardBody, CardHeader, CardRedirect } from "../../../components/Cards/card-users";
import { ButtonOutline } from "../../../components/Forms/Button/ButtonOutline/style";
import { Button } from "../../../components/Forms/Button/ButtonSolid/style";
import InputPassword from "../../../components/Forms/Input/InputPassword/inputPassword";
import { InputText } from "../../../components/Forms/Input/InputText/inputText";
import { ContainerInput, InputLabel } from "../../../components/Forms/Input/Shared/style";
import { Row } from "../../../components/Forms/Shared/style";
import { handleChangeValuesMask, handleChangeValuesMaskered, handleChangeValuesNoMask } from "../../../helpers/changeValues";
import { cepMask, resetMask, text } from "../../../helpers/masks";
import getParamsByCep from "../../../services/getAddressByCep";
import { CardSignUp, GroupCreateAccount } from "./style";

export const SignUpDetail = styled.div`
    height: 100%;
    background: var(--bg-card);
    width: 40%;
    min-width: 405px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 40px;
    text-align: right;

    h2{
        text-transform: uppercase;
        font-size: 50px;
        color: #fff;
    }
    p{
        color: #0094ff;
    }
    @media(max-width: 1000px) {
        display: none;
    }
`;

const CreateAccount = ({urlServer, setMsgError, setMsgSucess}) => {
    const [values, setValues] = useState([]);
    const [valuesMask, setValuesMask] = useState([]);
    const navigate = useNavigate();

    const submitForm = async(e) =>{
        e.preventDefault();

        var cepParams = null;
        await getParamsByCep(valuesMask).then(res=>{
            cepParams = res;
            axios.post(urlServer+"/client/check",{
                username: values?.name,
                email: values?.email,
                password: values?.password,
                confirmPassword: values?.checkPassword,
            }).then(response=>{
                if(response.data){
                    axios.post(urlServer+"/address/register",{
                        cityName: cepParams?.city,
                        districtName: cepParams?.district,
                        cep: values?.cep,
                    }).then(response2=>{
                        if(response2.status === 200){
                            axios.post(urlServer+"/client/register",{
                                username:values?.name,
                                email:values?.email,
                                password:values?.password,
                                confirmPassword: values?.checkPassword,
                                cepId: response2.data
                            }).then(response3=>{
                                console.log(response);
                                if(response3.status === 200){
                                    setMsgSucess("Usuário cadastrado, efetue o login");
                                    navigate("/");
                                }
                            }).catch(err=>{
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

    return (
        <GroupCreateAccount>
            <BgLogin />
            <SignUpDetail>
                <h2>Seja bem vindo!!</h2>
                <p>Veja todos os registros de gastos de água do seu estado.</p>
            </SignUpDetail>
            <div style={{zIndex:"1",maxWidth:"100%"}}>
                <CardSignUp method="POST" onSubmit={(e)=>submitForm(e)}>
                    <CardHeader>
                        <h2>Registrar-se</h2>
                    </CardHeader>
                    <CardBody>
                        <Row
                            gtc={1}
                            rowgap={"20px"}
                            style={{ marginBottom: "30px" }}
                        >
                            <ContainerInput>
                                <InputLabel htmlFor="name" val={values?.name ?? ""}>Nome</InputLabel>
                                <InputText
                                    id="name" 
                                    name="name" 
                                    autoFocus 
                                    type="text"
                                    onChange={(e)=>handleChangeValuesMask(e, setValues, text)}
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
                                <InputPassword inputId="password" value={values} setValue={setValues}/>
                            </ContainerInput>
                            <ContainerInput>
                                <InputLabel htmlFor="checkPassword" val={values?.checkPassword??""}>Confirmar senha</InputLabel>
                                <InputPassword inputId="checkPassword" value={values} setValue={setValues}/>
                            </ContainerInput>
                        </Row>
                    </CardBody>
                    <Button style={{marginBottom: "20px"}} >Continuar</Button>
                </CardSignUp>
                <CardRedirect>
                    <p>Ja possui uma conta?</p>
                    <Link to={"/"} onClick={()=>setValues([]) + setValuesMask([])}>
                        <ButtonOutline>Entrar</ButtonOutline>
                    </Link>
                </CardRedirect>
            </div>
        </GroupCreateAccount>
    );
};

export default CreateAccount;
