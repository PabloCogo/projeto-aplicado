import React from 'react'
import { Link } from 'react-router-dom';
import { BgLogin } from '../../../components/Backgrounds/backgroundLogin';
import { CardBody, CardHeader, CardRedirect } from '../../../components/Cards/card-users';
import { ButtonOutline } from '../../../components/Forms/Button/ButtonOutline/style';
import { Button } from '../../../components/Forms/Button/ButtonSolid/style';
import InputPassword from '../../../components/Forms/Input/InputPassword/inputPassword';
import { InputText } from '../../../components/Forms/Input/InputText/inputText';
import { ContainerInput, InputLabel } from '../../../components/Forms/Input/Shared/style';
import { Row } from '../../../components/Forms/Shared/style';
import { handleChangeValuesNoMask } from '../../../helpers/changeValues';
import { CardLogin, FotterLogin, GroupLogin, HeaderLogin } from './style';

const Login = ({Submit, login, setLogin}) => {
    return (
        <GroupLogin>
            <BgLogin/>
            <HeaderLogin>
                <h1>Economic Water</h1>
            </HeaderLogin>
            <CardLogin method="POST" onSubmit={(e)=>Submit(e)}>
                <CardHeader>
                    <h2>Login</h2>
                </CardHeader>
                <CardBody>
                    <Row gtc={1} rowgap={"20px"} style={{ marginBottom: "30px" }}>
                        <ContainerInput>
                            <InputLabel htmlFor="email" val={login?.email ?? ""}>Email</InputLabel>
                            <InputText
                                id="email" 
                                name="email" 
                                autoFocus 
                                type="text"
                                onChange={(e)=>handleChangeValuesNoMask(e,setLogin)}
                                value={login?.email ?? ""}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <InputLabel htmlFor="password" val={login?.password??""}>Senha</InputLabel>
                            <InputPassword inputId="password" value={login} setValue={setLogin}/>
                        </ContainerInput>
                    </Row>
                    <Button style={{marginBottom: "20px"}} type="submit">Entrar</Button>
                </CardBody>
            </CardLogin>
            <CardRedirect>
                <p>Não tem uma conta?</p>
                <Link to={"/user/register"} onClick={()=>setLogin("")}>
                <ButtonOutline>Cadatre-se</ButtonOutline>
                </Link>
            </CardRedirect>
            <FotterLogin>
                <Link to={"/"}>&copy; Sobre nós</Link>
                <Link to={"#"}>Contato</Link>
                <Link to={"#"}>Politica de privacidade</Link>
            </FotterLogin>
        </GroupLogin>
    )
}

export default Login