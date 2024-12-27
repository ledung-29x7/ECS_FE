import axios from "../axios";

// service
export const GetAllProductService= () => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:"/ProductService",
            method: "get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const GetProductServiceById = (id) =>new Promise(async (resolve,reject) => {
    try {
        const response = await axios({
            url: `/ProductService/Client/${id}`,
            method: "get",
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const GetProductServiceByIdProduct = (id) =>new Promise(async (resolve,reject) => {
    try {
        const response = await axios({
            url: `/ProductService/Product/${id}`,
            method: "get",
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const AddProductService = (prop) => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:"/ProductService",
            method: "post",
            data: prop
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const UpdateProductService = (id,prop) => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:`/ProductService/${id}`,
            method: "put",
            data: prop
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const DeleteProductService = (id) => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:`/ProductService/${id}`,
            method: "delete"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})