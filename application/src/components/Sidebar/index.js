import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarContainer, SidebarMenu, SidebarTitle } from './style'
import { Home, Description, GroupAdd } from "@mui/icons-material";

const Sidebar = ({user, stateSidebar}) => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <>
            <SidebarTitle className = {(stateSidebar ? "sidebar-responsive " : "")}>
                <h1>Economic water</h1>
            </SidebarTitle>
            <SidebarContainer className = {(stateSidebar ? "sidebar-responsive " : "")}>
                <SidebarMenu>
                    <Link to={"/"} className = {pathname === "/" ? "active_menu_link" : ""}><Home/><p>Home</p></Link>
                    {!user.enrollment.isClient ? <Link to={"/consumes"} className = {pathname === "/consumes" ? "active_menu_link" : ""}><Description/><p>Consumo</p></Link>:null}
                    {user.enrollment.isAdmin ? <Link to={"/employee/register"} className = {pathname === "/employee/register" ? "active_menu_link" : ""}><GroupAdd/><p>Funcionarios</p></Link>:null}
                </SidebarMenu>
            </SidebarContainer>
        </>
    )
}

export default Sidebar