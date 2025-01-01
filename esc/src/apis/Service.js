import axios from "../axios";
export const GetAllService=()=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:"/service",
            method:"get"
        })
        resolve(response);
    } catch (error) {
        reject(error);
    }
})
export const AddService=(name)=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:"/service",
            method:"post",
            data:name,
            withCredentials:true,
            headers:{
                Authorization:`Bearer ${window.localStorage.getItem("token")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const DeleteService=(id)=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/service/${id}`,
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
export const PutService=(id,name)=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/service/${id}`,
            method:"put",
            data:name,
            // headers:{
            //     Authorization:`Bearer ${window.localStorage.getItem("token")}`
            // }
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const GetServiceById=(id)=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/service/${id}`,
            method:"get",
            headers:{
                Authorization:`Bearer ${window.localStorage.getItem("token")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})