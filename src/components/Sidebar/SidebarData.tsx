import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineMoneyCollect,
} from 'react-icons/ai';
import { FaCog,FaRegCreditCard,FaRegListAlt,FaUtensils,FaHome, FaUserCircle,FaHistory} from 'react-icons/fa';
import { SidebarItem } from '../../models/SidebarItems';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <FaHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <FaUserCircle />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Restaurants',
        path: '/restaurants',
        icon: < FaUtensils/>
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: <FaRegListAlt/>
    },
    {
        title: 'Sales',
        path: '/sales',
        icon: <FaHistory/>
    },
    {
        title: 'Payment Method',
        path: '/Payment',
        icon: <FaRegCreditCard />
    },
    {
        title: 'Configurations',
        path: '/configurations',
        icon: <FaCog />
    },
];