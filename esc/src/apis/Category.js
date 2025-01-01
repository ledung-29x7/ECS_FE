import axios from "../axios";
export const GetAllCategory = ()=> new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/ProductCategory",
            method:"get",

        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const AddCategory = (name)=> new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/ProductCategory",
            method:"post",
            data:name,
            headers:{
                Authorization:`Bearer ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const GetCategoryById = (id) => new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:`/ProductCategory/${id}`,
            method:"get"
        })
        resolve(response)
    } catch (error) {
        console.log(error)
    }
})
export const PutCategory = (id,name)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:`/ProductCategory/${id}`,
            method:"put",
            data:name,
            headers:{
                Authorization:`Bearer ${window.localStorage.getItem("token")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const DeleteCategory = (id)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:`/ProductCategory/${id}`,
            method:"delete",
            headers:{
                Authorization:`Bearer ${window.localStorage.getItem("token")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})