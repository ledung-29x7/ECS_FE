import axios from "../axios";

export const GetAllProductByClient =  (idClient) => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:`/Product/client/${idClient}`,
            method: "get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const AddProduct = (prop) => new Promise(async (resolve,reject) => {
    try {
        const response = await axios({
            url: "/Product",
            method: "post",
            data: prop,

        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const UpdateProduct = (id,prop) => new Promise(async (resolve,reject) => {
    try {
        const response = await axios({
            url: `/Product/${id}`,
            method: "put",
            data: prop,

        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const DeleteProduct = (id) => new Promise(async (resolve,reject) => {
    try {
        const response = await axios({
            url: `/Product/${id}`,
            method: "delete",
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const GetProductById = (id) =>new Promise(async (resolve,reject) => {
    try {
        const response = await axios({
            url: `/Product/${id}`,
            method: "get",
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const GetAllProductCategory = () => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:"/ProductCategory",
            method: "get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const AddProductCategory = (prop) => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:"/ProductCategory",
            method: "post",
            data: prop
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const UpdateProductCategory = (id,prop) => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:`/ProductCategory/${id}`,
            method: "put",
            data: prop
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const DeleteProductCategory = (id) => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:`/ProductCategory/${id}`,
            method: "delete"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})