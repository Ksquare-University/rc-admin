import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import "./Sidebar.css"


const Nav = styled.div`
    display: flex;
    height: 6vh;
    width: 100px;
    background-color: #ff4219;
    box-shadow: 5px 5px 10px #30040239;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 260px;
    height: 100vh;
    background-color: #ff4219;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 500ms;
    position: absolute;
    z-index: 1;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    font-size: 1.5rem;
    margin-left: 2.2rem;
`;

const SidebarWrap = styled.div`
`;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineClose className="CloseIcon" />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;