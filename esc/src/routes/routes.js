import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Login from '~/pages/Athor/login';
import Register from '~/pages/Athor/register';
import Employee from '~/pages/Employee';
import ServiceManage from '~/pages/Service_manage';
import DetailEmployee from '~/pages/Employee/detail';
import Department from '~/pages/Department';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.employee, component:Employee},
    { path: config.routes.service, component: ServiceManage},
    { path: config.routes.detailEmployee, component: DetailEmployee},
    { path: config.routes.department, component: Department}
];

// Private routes
export const privateRoutes = [];
