import axios from "../axios";
export const AddEmployee = (name)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/Client/register",
            method:"post",
            data:name,
            headers:{
                Authorization:`Bearer ${window.sessionStorage.getItem("token")}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})