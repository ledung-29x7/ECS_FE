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
            headers:{
                Authorization:`Bearer ${window.sessionStorage.getItem("tokent")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})