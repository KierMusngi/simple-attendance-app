// assets
import {
    IconBrandChrome,
    IconDashboard,
    IconDeviceCctv,
    IconUser,
    IconClipboardCheck,
    IconMoodHappy,
    IconUsers,
    IconUserPlus
} from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconDashboard, IconDeviceCctv, IconUser, IconClipboardCheck, IconMoodHappy, IconUsers, IconUserPlus };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const menu = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'menu-dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
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
                    url: '/users',
                    icon: icons.IconUserPlus,
                    breadcrumbs: false
                },
                {
                    id: 'employees',
                    title: 'Employees',
                    type: 'item',
                    url: '/employees',
                    icon: icons.IconUsers,
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'daily-time-records',
            title: 'Daily Time Records',
            type: 'item',
            url: '/daily-time-records',
            icon: icons.IconClipboardCheck,
            breadcrumbs: false
        },
        {
            id: 'enroll',
            title: 'Face Enrollment',
            type: 'item',
            url: '/face-enroll',
            icon: icons.IconMoodHappy,
            breadcrumbs: false
        },
        {
            id: 'cam',
            title: 'Face Recognition',
            type: 'item',
            url: '/face-recognition',
            icon: icons.IconDeviceCctv,
            breadcrumbs: false
        }
    ]
};

export default menu;
