import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Login from '~/pages/Athor/login';
import Register from '~/pages/Athor/register';
import Employee from '~/pages/Employee';
import ServiceManage from '~/pages/Service_manage';
import ProductServiceManage from '~/pages/Service_manage/product_Service';
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
import ClientLayout from '~/layouts/DefaultLayout/ClientLayout';
import ProductAdmin from '~/pages/Product/productAdmin';
import EmployeeLayout from '~/layouts/DefaultLayout/EmployeeLayout';
import RegisterClient from '~/pages/Admin/registerClient';
import AddOrder from '~/pages/Order/addOrder';
import Contact from '~/pages/Contact';
import Thank from '~/pages/Contact/Thanks';
import Category from '~/pages/Category';
import ProductAdminWithClient from '~/pages/Product/productAdminWithClient';

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
        layout: null 
    },
    { 
        path: config.routes.register, 
        component: Register, 
        layout: null 
    },
    { 
        path: config.routes.employee, 
        component: Employee ,
        role: "admin",
        profession: "manageEmployee",
        name: "Employee"
    },
    { 
        path: config.routes.service, 
        component: ServiceManage,
        role: "admin",
        profession: "manageService",
        name: "Service"
    },
    { 
        path: config.routes.productService, 
        component: ProductServiceManage,
        role: "admin",
        profession: "manageService",
        name: "Product Service"
    },
    { 
        path: config.routes.registerClient, 
        component: RegisterClient,
        role: "admin",
        profession: "manageClient",
        name: "Client"
    },
    { 
        path: config.routes.detailEmployee, 
        component: DetailEmployee,
        role: 'admin',
        profession: "manageEmployee",
        name: "Detail Employee"
    },
    { 
        path: config.routes.department, 
        component: Department, 
        role: 'admin', 
        profession: "User",
        name: "Department"
    },
    { 
        path: config.routes.order, 
        component: Order,
        role: "employee",
        profession: "manageEmployee",
        name: "Order",
        layout: EmployeeLayout
    },
    { 
        path: config.routes.orderDetail, 
        component: OrderDetail,
        
    },
    { 
        path: config.routes.product, 
        component: Product ,
        role: "client",
        layout: ClientLayout,
        profession: null,
        name: "Products"
    },
    { 
        path: config.routes.addProduct, 
        component: AddProducts,
        layout: ClientLayout,
    },
    { 
        path: config.routes.productCategory, 
        component: ProductCategory,
        role: "client",
        layout: ClientLayout,
        name: "Product Service"
    },
    { 
        path: config.routes.callhistory, 
        component: CallHistory,
        role: "employee",
        profession: "manageEmployee",
        name: "History Call",
        layout: EmployeeLayout
    },
    { 
        path: config.routes.role, 
        component: Role,
        role: "admin",
        profession: "User",
        name: "Role"
    },
    { 
        path: config.routes.client, 
        component: Client, 
        layout: null,
    },
    {
        path: config.routes.productAdmin,
        component: ProductAdmin,
        role: 'admin',
        profession: "manageClient",
        name: "Product"
    },
    {
        path:config.routes.addOrder,
        component:AddOrder,
        layout:EmployeeLayout
    },
    {
        path:config.routes.contact,
        component:Contact,
        role:'admin',
        name:"Contact"
    },
    {
        path:config.routes.category,
        component:Category,
        role:"admin",
        name:"Category"
    },
    {
        path:config.routes.thank,
        component:Thank,
        layout: null,

    },
    {
        path:config.routes.productAdminWithClient,
        component: ProductAdminWithClient,
        role:"admin",
        name: "Product of Client",
        performance: "manageClient"
    }
];

// Private routes
export const privateRoutes = [];
