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
import Customer from '~/pages/Customer';
import CallHistory from '~/pages/Call/callHistory';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.employee, component:Employee},
    { path: config.routes.service, component: ServiceManage},
    { path: config.routes.detailEmployee, component: DetailEmployee},
    { path: config.routes.department, component: Department},
    { path: config.routes.order, component: Order},
    { path: config.routes.orderDetail, component: OrderDetail},
    { path: config.routes.product, component: Product},
    { path: config.routes.productCategory, component: ProductCategory},
    { path: config.routes.customer, component: Customer},
    { path: config.routes.callhistory, component: CallHistory}
];

// Private routes
export const privateRoutes = [];
