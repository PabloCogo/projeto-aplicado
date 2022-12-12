import React from 'react'
import { IconLink } from '../Forms/Link/iconLink';
import { Bars, Group, NavbarContainer } from './style';
import { Menu, Logout } from "@mui/icons-material";

const Navbar = ({logout,stateSidebar,setStateSidebar}) => {
    return (
        <NavbarContainer>
            <Bars onClick={() => setStateSidebar(!stateSidebar)}>
                <IconLink role="button" title="Abrir menu">
                    <Menu/>
                </IconLink>
            </Bars>
            <div></div>
            <Group>
                <IconLink role="button" onClick={()=>logout()}  title="Sair">
                    <Logout />
                </IconLink>
            </Group>
        </NavbarContainer>
    )
}

export default Navbar