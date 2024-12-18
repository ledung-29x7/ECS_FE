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
import Order from '~/pages/Order';
import OrderDetail from '~/pages/Order/detail';
import Product from '~/pages/Product';
import ProductCategory from '~/pages/Product/ProductCategory';
import CallHistory from '~/pages/Call/callHistory';
import AddProducts from '~/pages/Product/addProduct';

import Role from '~/pages/Role';
import Client from '~/pages/Client';
import LoginClient from '~/pages/Athor/loginClient';
import RegisterClient from '~/pages/Admin/registerClient';
import ClientLayout from '~/layouts/DefaultLayout/ClientLayout';

// Public routes
export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.loginClient,
        component: LoginClient,
        layout: null,
    },
    {
        path: config.routes.register,
        component: Register,
        layout: null,
    },
    {
        path: config.routes.employee,
        component: Employee,
        role: 'admin',
        profession: 'manageEmployee',
        name: 'Employee',
    },
    {
        path: config.routes.service,
        component: ServiceManage,
        role: 'admin',
        profession: 'manageService',
        name: 'Service',
    },
    {
        path: config.routes.detailEmployee,
        component: DetailEmployee,
        role: 'admin',
        profession: 'manageEmployee',
        name: 'Detail Employee',
    },
    {
        path: config.routes.department,
        component: Department,
        role: 'admin',
        profession: 'manageEmployee',
        name: 'Department',
    },
    {
        path: config.routes.order,
        component: Order,
        role: 'admin',
        profession: 'manageEmployee',
        name: 'Order',
    },
    {
        path: config.routes.orderDetail,
        component: OrderDetail,
    },
    {
        path: config.routes.product,
        component: Product,
        role: 'client',
        layout: ClientLayout,
        profession: null,
        name: 'Products',
    },
    {
        path: config.routes.addProduct,
        component: AddProducts,
        layout: ClientLayout,
    },
    {
        path: config.routes.productCategory,
        component: ProductCategory,
        role: 'client',
        layout: ClientLayout,
        name: 'Product Service',
    },
    {
        path: config.routes.callhistory,
        component: CallHistory,
        role: 'admin',
        profession: 'manageEmployee',
        name: 'History Call',
    },
    {
        path: config.routes.role,
        component: Role,
        role: 'admin',
        profession: 'User',
        name: 'Role',
    },
    {
        path: config.routes.client,
        component: Client,
        layout: null,
    },
    { 
        path: config.routes.registerClient,
        component: RegisterClient ,
        role:"admin",
        profession:"manageClient",
        name:'Register Client'
    },
];

// Private routes
export const privateRoutes = [];
