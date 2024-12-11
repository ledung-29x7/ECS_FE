import axios from "../axios"
export const addClient = (name)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/Client/register",
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