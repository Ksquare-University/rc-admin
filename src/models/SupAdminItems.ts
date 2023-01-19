export interface SupAdminSidebarItem {
    title: string;
    path: string;
    icon: any;
    iconOpened?: any;
    iconClosed?: any;
    subnav?: SupAdminSidebarItem[];
}