import axios from '../axios';

export const GetAllProductByClient = (idClient, pram) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/Product/Clients/${idClient}`,
                method: 'get',
                params: pram,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const GetAllProduct = (param) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/Product/GetAll',
                method: 'get',
                params: param,
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
export const GetProduct = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/Product',
                method: 'get',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const GetProductStatus = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/ProductStatus',
                method: 'get',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const ActiveProduct = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/Product/active/${id}`,
                method: 'put',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const AddProduct = (prop) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post('/Product', prop, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const UpdateProduct = (id, prop) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/Product/${id}`,
                method: 'put',
                data: prop,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const DeleteProduct = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/Product/${id}`,
                method: 'delete',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const GetProductById = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/Product/${id}`,
                method: 'get',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const GetAllProductCategory = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/ProductCategory',
                method: 'get',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const AddProductCategory = (prop) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/ProductCategory',
                method: 'post',
                data: prop,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const UpdateProductCategory = (id, prop) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/ProductCategory/${id}`,
                method: 'put',
                data: prop,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const DeleteProductCategory = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/ProductCategory/${id}`,
                method: 'delete',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
