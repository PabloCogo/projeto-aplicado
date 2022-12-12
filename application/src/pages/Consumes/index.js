import axios from "axios";
import React, { useState } from "react";
import Fotter from "../../components/Forms/Fotter/fotter";
import {
    InputText,
    InputTextWhite,
} from "../../components/Forms/Input/InputText/inputText";
import {
    ContainerInput,
    InputLabel,
} from "../../components/Forms/Input/Shared/style";
import { Row } from "../../components/Forms/Shared/style";
import { handleChangeValuesMaskered } from "../../helpers/changeValues";
import { cepMask, qtdeMask, resetMask, resetQtdeMask } from "../../helpers/masks";
import getParamsByCep from "../../services/getAddressByCep";
import { Main } from "../Home";

const Consumes = ({urlServer,setMsgError, setMsgSucess}) => {
    const [values, setValues] = useState([]);
    const [valuesMask, setValuesMask] = useState([]);


    const submitFormConsumes = async e =>{
        e.preventDefault();

        var cepParams = null;
        await getParamsByCep(valuesMask).then(res=>{
            cepParams = res;
            axios.post(urlServer+"/consume/check",{
                consumeLt: values?.consume
            }).then(response=>{
                if(response.data){
                    axios.post(urlServer+"/address/register",{
                        cityName: cepParams?.city,
                        districtName: cepParams?.district,
                        cep: values?.cep,
                    }).then(response2=>{
                        if(response2.status == 200){
                            axios.post(urlServer+"/consume/register",{
                                consumeLt: values?.consume,
                                cepId: response2.data
                            }).then(()=>{
                                setMsgSucess("Consumo cadastrado com sucesso.")
                            }).catch(err2=>{
                                setMsgError(err2.response.data);
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
    const resetFormConsumes = () =>{
        setValues([]);
        setValuesMask([])
    }

    return (
        <Main>
            <form method="POST" onSubmit={(e)=>submitFormConsumes(e)} onReset={()=>resetFormConsumes()}>
                <Row gtc={2} colgap={"20px"}>
                    <ContainerInput>
                        <InputLabel htmlFor="consume" val={values?.consume ?? ""}>Consumo(L)</InputLabel>
                        <InputText
                            id="consume"
                            name="consume"
                            type="text"
                            onChange={(e) =>
                                handleChangeValuesMaskered(
                                    e,
                                    setValuesMask,
                                    setValues,
                                    qtdeMask,
                                    resetQtdeMask
                                )
                            }
                            value={valuesMask?.consume ?? ""}
                            placeholder="Ex: para 1M³ é 1000L"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <InputLabel htmlFor="cep" val={values?.cep ?? ""}>CEP</InputLabel>
                        <InputText
                            id="cep"
                            name="cep"
                            type="text"
                            onChange={(e) =>
                                handleChangeValuesMaskered(
                                    e,
                                    setValuesMask,
                                    setValues,
                                    cepMask,
                                    resetMask
                                )
                            }
                            value={valuesMask?.cep ?? ""}
                        />
                    </ContainerInput>
                </Row>
                <Fotter/>
            </form>
        </Main>
    );
};

export default Consumes;
