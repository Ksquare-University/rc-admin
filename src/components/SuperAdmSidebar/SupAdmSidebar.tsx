import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SupAdmSidebarData } from './SupAdmData';
import SupAdmSubmenu from './SupAdmMenu';


const Nav = styled.div`
    display: flex;
    justify-content: flex-star;
    align-items: center;
    height: 4rem;
    width:100px;
    background-color: rgb(255, 60, 21);
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 260px;
    height: 100vh;
    background-color: rgb(255, 60, 21);
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 500ms;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

const SidebarWrap = styled.div`
`;

const SupAdmSidebar: FC = () => {
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
                        <AiOutlineClose />
                    </NavIcon>
                    {SupAdmSidebarData.map((item, index) => {
                        return <SupAdmSubmenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default SupAdmSidebar;