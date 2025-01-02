import { register } from "~/apis";
import RegisterClient from "~/pages/Admin/registerClient";
import WorkList from "~/pages/Call/workList";
import Category from "~/pages/Category";

const routes = {
    home: '/admin',
    profile: '/profile/:nickname',
    upload: '/upload',
    search: '/search',
    login: '/login',
    register: '/register',
    employee: '/employee',
    detailEmployee: '/employee/:employeeId',
    service: '/service',
    department: '/department',
    order: '/order',
    orderDetail: '/order/:id',
    product: '/product',
    addProduct: '/addProduct',
    productCategory: '/productCategory',
    customer: "/customer",
    callhistory: "/callhistory",
    role:"/role",
    client: "/client",
    loginClient: "/loginClient",
    productAdmin: "/product-admin",
    registerClient:"/registerClient",
    addOrder:"/addOrder",
    contact:"/contact",
    thank:"/thank",
    category:"/category",
    productService : "/productService",
    productAdminWithClient: "/product-admin-with-client",
    WorkList: "/worklist",
    logisticOrder: "/logistic-order",
    infomationEmployee: "/information-employee"
};
export default routes;
