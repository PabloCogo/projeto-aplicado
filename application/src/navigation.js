import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Toast from "./components/Forms/Toast/toast";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Consumes from "./pages/Consumes";
import InexistentPage from "./pages/Errors";
import Home from "./pages/Home";
import CreateAccount from "./pages/Users/CreateAccount";
import EmployeeAccount from "./pages/Users/EmployeeAccount";
import Login from "./pages/Users/Login";
import { Container } from "./style";

const Navigation = () => {
    const [msgError, setMsgError] = useState("");
    const [msgSucess, setMsgSucess] = useState("");
    const portServer = 3001;
    const urlBase = window.location.href.split(":")[1];
    const urlServer = "http:" + urlBase + ":" + portServer;

    const [user, setUser] = useState("");
    const [valLogin, setLogin] = useState("");
    const [existsRoutes, setExistsRoutes] = useState();

    const [stateSidebar, setStateSidebar] = useState(false);

    axios.defaults.withCredentials = true;
    const login = async (e) => {
        e.preventDefault();
        await axios.post(urlServer + "/user/login", {
            email: valLogin?.email,
            password: valLogin?.password,
        })
            .then((response) => {
                if (response.data.loggedIn === true) {
                    setTimeout(() => {
                        setLogin((prevValue) => ({
                            ...prevValue,
                            email: "",
                            password: "",
                        }));
                        setMsgError("");
                        setExistsRoutes(true);
                        setUser(prev=>({
                            ...prev,
                            user: response.data.user,
                            address: response.data.address,
                            enrollment: response.data.enrollment
                        }));
                        setMsgSucess("Bem vindo: "+response.data.user.userName)
                    }, 300);
                }
            })
            .catch((err) => {
                setMsgError(err.response.data);
                setExistsRoutes(false);
            });
    };

    const logout = async (e) =>{
        await axios.get(urlServer+"/user/logout").then((response)=>{
            if (!response.data.loggedIn){
                setExistsRoutes(false);
            }
        });
    }

    useEffect(() => {
        setExistsRoutes();
        axios.get(urlServer + "/user/login").then((response) => {
            if (response.data.loggedIn === true) {
                setExistsRoutes(true);
                setUser(prev=>({
                    ...prev,
                    user: response.data.user,
                    address: response.data.address,
                    enrollment: response.data.enrollment
                }));
            } else {
                setExistsRoutes(false);
            }
        });
    }, []);

    return (
        <Suspense>
            {existsRoutes === false
                ? 
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Login
                                        Submit={login}
                                        login={valLogin}
                                        setLogin={setLogin}
                                    />
                                    <Toast state={true} msg={msgSucess} setMsg={setMsgSucess}/>
                                    <Toast state={false} msg={msgError} setMsg={setMsgError}/>
                                </>
                            }
                        />
                        <Route
                            path="/user/register"
                            element={
                                <>
                                    <CreateAccount 
                                        urlServer={urlServer} 
                                        setMsgError={setMsgError}
                                        setMsgSucess={setMsgSucess}
                                    />
                                    <Toast state={true} msg={msgSucess} setMsg={setMsgSucess}/>
                                    <Toast state={false} msg={msgError} setMsg={setMsgError}/>
                                </>
                            }
                        />
                        <Route path="*" element={<InexistentPage/>}/>
                    </Routes>
                : existsRoutes ?
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Container>
                                        <Navbar 
                                            logout={logout}
                                            stateSidebar={stateSidebar}
                                            setStateSidebar={setStateSidebar}
                                        />
                                        <Home 
                                            urlServer={urlServer} 
                                            user={user} 
                                            setMsgError={setMsgError} 
                                        />
                                        <Sidebar user={user} stateSidebar={stateSidebar}/>
                                    </Container>
                                    <Toast state={true} msg={msgSucess} setMsg={setMsgSucess}/>
                                    <Toast state={false} msg={msgError} setMsg={setMsgError}/>
                                </>
                            }
                        />
                        {!user.enrollment.isClient ?
                        <Route
                            path="/consumes"
                            element={
                                <>
                                    <Container>
                                        <Navbar 
                                            logout={logout}
                                            stateSidebar={stateSidebar}
                                            setStateSidebar={setStateSidebar}
                                        />
                                        <Consumes 
                                            urlServer={urlServer} 
                                            setMsgError={setMsgError}
                                            setMsgSucess={setMsgSucess}
                                        />
                                        <Sidebar user={user} stateSidebar={stateSidebar}/>
                                    </Container>
                                    <Toast state={true} msg={msgSucess} setMsg={setMsgSucess}/>
                                    <Toast state={false} msg={msgError} setMsg={setMsgError}/>
                                </>
                            }
                        />
                        :null}
                        {user.enrollment.isAdmin ?
                        <Route
                            path="employee/register"
                            element={
                                <>
                                    <Container>
                                        <Navbar 
                                            logout={logout}
                                            stateSidebar={stateSidebar}
                                            setStateSidebar={setStateSidebar}
                                        />
                                        <EmployeeAccount
                                            urlServer={urlServer} 
                                            setMsgError={setMsgError}
                                            setMsgSucess={setMsgSucess}
                                        />
                                        <Sidebar user={user} stateSidebar={stateSidebar}/>
                                    </Container>
                                    <Toast state={true} msg={msgSucess} setMsg={setMsgSucess}/>
                                    <Toast state={false} msg={msgError} setMsg={setMsgError}/>
                                </>
                            }
                        />
                        :null}
                        <Route path="*" element={<InexistentPage/>}/>
                    </Routes>
                    :null
            }
        </Suspense>
    );
};
export default Navigation;
