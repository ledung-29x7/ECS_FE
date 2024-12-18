import { register } from "~/apis";
import RegisterClient from "~/pages/Admin/registerClient";

const routes = {
    home: '/admin',
    following: '/following',
    profile: '/:nickname',
    upload: '/upload',
    search: '/search',
    live: '/live',
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
    productCategory: '/category',
    customer: "/customer",
    callhistory: "/callhistory",
    role:"/role",
    client: "/client",
    loginClient: "/loginClient",
    registerClient:"/registerClient"
};

export default routes;
