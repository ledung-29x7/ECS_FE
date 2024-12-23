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