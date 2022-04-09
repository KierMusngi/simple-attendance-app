// assets
import { IconBrandChrome, IconDashboard, IconDeviceCctv, IconUser, IconClipboardCheck } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconDashboard, IconDeviceCctv, IconUser, IconClipboardCheck };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const menu = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'cam',
            title: 'Face Recognition',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconDeviceCctv,
            breadcrumbs: false
        },
        {
            id: 'menu-dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'people',
            title: 'People',
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'employees',
                    title: 'Employees',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'daily-time-records',
            title: 'Daily Time Records',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconClipboardCheck,
            breadcrumbs: false
        }
    ]
};

export default menu;
