import axios from "../axios";
export const GetAllDepartment = ()=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/Department",
            method:"get"
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
export const GetDepartmentById = (id)=> new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/Department/${id}`,
            method:"get"
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
export const AddDepartment = (name)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/Department",
            method:"post",
            data:name,
            headers:{
                Authorization:`Bearer ${window.localStorage.getItem("tokent")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
export const PutDepartment=(name,id)=> new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:`/Department/${id}`,
            method:"put",
            data:name,
            headers:{
                Authorization:`Bearer ${window.localStorage.getItem("tokent")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
export const DeleteDepartment=(id)=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/Department/${id}`,
            method:"delete",
            withCredentials: true,
            headers:{
                Authorization:`Bearer ${window.localStorage.getItem("tokent")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})