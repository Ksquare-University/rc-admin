import { FaRegListAlt,FaUtensils,FaHome, FaUserCircle,FaHistory} from 'react-icons/fa';
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
        icon: <FaUserCircle />
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
];