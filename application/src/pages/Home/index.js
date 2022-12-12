import React, { useEffect, useState } from 'react'
import ChartDashboard from '../../components/Grafics'
import styled from "styled-components";
import { Cards } from '../../components/Cards/style';
import { Grafic } from '../../components/Cards/card-grafic';
import Card from '../../components/Cards/card-header';
import {AccountBalance} from "@mui/icons-material";
import Accordion from '../../components/Forms/Accordion/accordion';
import FiltroHome from './filtro';
import axios from 'axios';
import ChartDashboardMoreConsume from '../../components/Grafics/moreConsumes';


export const Main = styled.main`
    grid-area: main;
    overflow-y: auto;
    padding: 20px 35px;
    position: relative;
    background: var(--bg-system);
    
    @media only screen and (max-width: 1055px){
        padding: 10px 20px;
    }
    @media only screen and (max-width: 589px){
        padding: 15px 15px;
    }
`;
const Home = ({urlServer,user,setMsgError}) => {
    const [values,setValues] = useState((prev)=>({
        ...prev,
        FilterAddress: "city",
        FilterChoseAddress: "myAddress"
    }));
    const [valuesCards,setValuesCards] = useState([]);
    const [valuesCharts,setValuesCharts] = useState(null);
    const [chart,setChart] = useState(null);
    const [chart2,setChart2] = useState(null);

    useEffect(()=>{
        setChart(null);
        setTimeout(()=>{
            if(valuesCharts !== null){
                setChart(<ChartDashboard consume={valuesCharts.consume} month={valuesCharts.month}/>)
            }
        })
    },[valuesCharts])

    useEffect(()=>{
        const asyncFn = async () =>{
            await searchDatas();
        }
        asyncFn();
    },[])

    useEffect(()=>{
        const asyncFn = async () =>{
            await axios.get(urlServer + '/consume/top5/chart').then(response=>{
                if(response.data != ''){
                    setChart2((prev)=>({
                        ...prev,
                        cities: response.data.cities,
                        consumes: response.data.consumes
                    }))
                }
            })
        }
        asyncFn();
    },[]);

    const searchDatas = async() =>{
        if(user){
            if(values?.FilterChoseAddress === 'myAddress'){      
                switch(values?.FilterAddress){
                    case 'city':
                        await axios.get(urlServer + `/consume/city/${user.address.cityName}/year`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeYear: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/city/${user.address.cityName}/semester`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeSemester: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/city/${user.address.cityName}/month`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeMonth: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/city/${user.address.cityName}/year/chart`).then(response=>{
                            if(response.data != ''){
                                setValuesCharts(prev=>({
                                    ...prev,
                                    consume: response.data.consumes,
                                    month: response.data.month
                                }))
                            }
                        });
                        
                        break;
                    case 'district':
                        await axios.get(urlServer + `/consume/district/${user.address.districtName}/city/${user.address.cityName}/year`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeYear: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/district/${user.address.districtName}/city/${user.address.cityName}/semester`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeSemester: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/district/${user.address.districtName}/city/${user.address.cityName}/month`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeMonth: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/district/${user.address.districtName}/city/${user.address.cityName}/year/chart`).then(response=>{
                            console.log(response);
                            if(response.data != ''){
                                setValuesCharts(prev=>({
                                    ...prev,
                                    consume: response.data.consumes,
                                    month: response.data.month
                                }))
                            }
                        });
                        break;
                    case 'cep':
                        await axios.get(urlServer + `/consume/cep/${user.address.cep}/year`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeYear: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/cep/${user.address.cep}/semester`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeSemester: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/cep/${user.address.cep}/month`).then(response=>{
                            if(response.data != ''){
                                setValuesCards(prev=>({
                                    ...prev,
                                    consumeMonth: response.data.consume
                                }))
                            }
                        });
                        await axios.get(urlServer + `/consume/cep/${user.address.cep}/year/chart`).then(response=>{
                            if(response.data != ''){
                                setValuesCharts(prev=>({
                                    ...prev,
                                    consume: response.data.consumes,
                                    month: response.data.month
                                }))
                            }
                        });
                        break;
                }
            }else if(values?.FilterChoseAddress === 'selectAddress'){
                switch(values?.FilterAddress){
                    case 'city':
                        if(values?.chose === null || values?.chose === ''||values?.chose===undefined){
                            setMsgError("o campo de seleção não está preenchido.");
                        }else{
                            await axios.get(urlServer + `/consume/city/${values?.chose}/year`).then(response=>{
                                if(response.data != ''){
                                    setValuesCards(prev=>({
                                        ...prev,
                                        consumeYear: response.data.consume
                                    }))
                                }
                            }).catch(err=>{
                                setMsgError(err.response.data)
                            })
                            await axios.get(urlServer + `/consume/city/${values?.chose}/semester`).then(response=>{
                                if(response.data != ''){
                                    setValuesCards(prev=>({
                                        ...prev,
                                        consumeSemester: response.data.consume
                                    }))
                                }
                            }).catch(err=>{
                                setMsgError(err.response.data)
                            })
                            await axios.get(urlServer + `/consume/city/${values?.chose}/month`).then(response=>{
                                if(response.data != ''){
                                    setValuesCards(prev=>({
                                        ...prev,
                                        consumeMonth: response.data.consume
                                    }))
                                }
                            }).catch(err=>{
                                setMsgError(err.response.data)
                            })
                            await axios.get(urlServer + `/consume/city/${values?.chose}/year/chart`).then(response=>{
                                if(response.data != ''){
                                    setValuesCharts(prev=>({
                                        ...prev,
                                        consume: response.data.consumes,
                                        month: response.data.month
                                    }))
                                }
                            });
                        }
                        break;
                }
            }
        }
    }

    const submitFilter = (e) =>{
        e.preventDefault();
        searchDatas();
    }
    
    return (
        <Main>
            <Cards>
                <form method='POST' onSubmit={(e)=>submitFilter(e)}>
                    <Accordion 
                        title={"Filtrar"} 
                        accordionInner={
                            <FiltroHome 
                                values={values} 
                                setValues={setValues}
                            />
                        }
                        accordionState={false}
                    />
                </form>
            </Cards>
            <Cards gtc={3}>
                <Card
                    icon={<AccountBalance/>}
                    title={'Litros consumidos (este ano)'} 
                    data={valuesCards?.consumeYear ?? 0}
                    color={'var(--icon-default)'}
                />
                <Card
                    icon={<AccountBalance/>}
                    title={'Litros consumidos (este semestre)'} 
                    data={valuesCards?.consumeSemester ?? 0}
                    color={'var(--icon-default)'}
                />
                <Card
                    icon={<AccountBalance/>}
                    title={'Litros consumidos (este mês)'} 
                    data={valuesCards?.consumeMonth ?? 0}
                    color={'var(--icon-default)'}
                />
            </Cards>
            <Cards gtc={2}>
                <Grafic>
                    {chart ?? <p style={{color:"#fff"}}>Nenhum registro encontrado</p>}
                </Grafic>
                <Grafic>
                    {chart2 !== null
                        ?<ChartDashboardMoreConsume consume={chart2?.consumes} cities={chart2?.cities}/>
                        :<p style={{color:"#fff"}}>Nenhum registro encontrado</p>
                    }
                </Grafic>
            </Cards>
        </Main>
    )
}

export default Home