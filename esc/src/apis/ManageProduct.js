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

export const GetAllProduct = () => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:"/Product",
            method: "get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const GetProductStatus = () => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:"/ProductStatus",
            method: "get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const ActiveProduct = (id) => new Promise(async (resolve, reject) =>{
    try {
        const response = await axios({
            url:`/Product/active/${id}`,
            method: "put"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const AddProduct = (prop) => new Promise(async (resolve,reject) => {
    try {
        const response = await axios.post("/Product",prop, {
            withCredentials:true,
            headers: {
                "Content-Type": "multipart/form-data",
            }
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