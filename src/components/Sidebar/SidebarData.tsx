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
    },
    {
        title: 'Clients',
        path: '/clients',
        icon: < FaUserCircle/>
    },
    {
        title: 'Restaurants',
        path: '/restaurants/new',
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
        title: 'Configurations',
        path: '/configurations',
        icon: <FaCog />
    },
];