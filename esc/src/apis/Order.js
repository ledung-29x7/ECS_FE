import axios from "../axios";
export const GetAllOrder=()=>new Promise(async(resoleve,reject)=>{
    try {
        const response=await axios({
            url:"/Order",
            method:'get'
        })
        resoleve(response)
    } catch (error) {
        reject(error)
    }
})
export const AddOrderWithDetails=(name)=>new Promise(async(resolve,reject)=>{
    try {
        const response= await axios({
            url:"Order/AddOrderWithDetails",
            method:"post",
            data:name
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const AddOrder=(name)=> new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:"/Order",
            method:"post",
            data:name
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const GetOrderById=(id)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:`/Order/${id}`,
            method:"get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const DeleteOrder=(id)=>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/Order/${id}`,
            method:"delete"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})