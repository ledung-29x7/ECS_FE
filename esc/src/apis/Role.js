import axios from "../axios";
export const GetAllRole =()=> new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:"/Role",
            method:"get"
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
export const AddRole=(name)=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:"/Role",
            method:"post",
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
export const GetRoleById=(id)=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/Role/${id}`,
            method:"get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const PutRole=(id,name)=>new Promise(async(resolve,reject)=>{
    try {
        const response= await axios({
            url:`/Role/${id}`,
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
export const DeleteRole= (id)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:`/Role/${id}`,
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