import {
    AiFillCaretDown,
    AiFillCaretUp,
} from 'react-icons/ai';
import { FaCog,FaUserCircle,FaUtensils,FaHome,FaHistory} from 'react-icons/fa';
import { SidebarItem } from '../../models/SidebarItems';

export const SupAdmSidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <FaHome />,
    },
    {
        title: 'Clients',
        path: '/clients',
        icon: < FaUtensils/>
    },
    {
        title: 'Restaurants',
        path: '/restaurants/new',
        icon: < FaUtensils/>,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Owners',
                path: '/overview/owners',
                icon: < FaUserCircle/>
            },
        ]
    },
    {
        title: 'AddRoles',
        path: '/addroles',
        icon: <FaCog />
    },
];