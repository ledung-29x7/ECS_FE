import axios from "../axios";
export const AddEmployee=(prop)=> new Promise(async(resolve,reject)=>{
    try {
        const response = await axios.post("/Authentication/register",prop,{
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
export const AddEmployeeProductCategory=(name)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/EmployeeProductCategory/add",
            method:"post",
            data:name,
            headers:{
                Authorization:`Bearer ${window.sessionStorage.getItem("token")}`,
                    "Content-Type": "application/json",            
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const GetAllEmployeeProductCategory=()=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/EmployeeProductCategory/all",
            method:"Get",
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})