import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const DevelopersPage = Loadable(lazy(() => import('views/developers')));
const EmployeesPage = Loadable(lazy(() => import('views/employees')));
const UsersPage = Loadable(lazy(() => import('views/users')));
const DailyTimeRecordsPage = Loadable(lazy(() => import('views/daily-time-records')));
const CreateEmployeePage = Loadable(lazy(() => import('views/employees/create')));
const CreateUserPage = Loadable(lazy(() => import('views/users/create')));
const UserProfilePage = Loadable(lazy(() => import('views/users/profile')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/developers',
            element: <DevelopersPage />
        },
        {
            path: '/employees',
            element: <EmployeesPage />
        },
        {
            path: '/employees/create',
            element: <CreateEmployeePage />
        },
        {
            path: '/users',
            element: <UsersPage />
        },
        {
            path: '/users/create',
            element: <CreateUserPage />
        },
        {
            path: '/users/profile',
            element: <UserProfilePage />
        },
        {
            path: '/daily-time-records',
            element: <DailyTimeRecordsPage />
        }
    ]
};

export default MainRoutes;
