import { ExploreIcon } from "~/components/Icons";
import axios from "../axios";
export const GetAllOrder=(params)=>new Promise(async(resoleve,reject)=>{
    try {
        const response=await axios({
            url:"/Order",
            method:'get',
            params:params
        })
        resoleve(response)
    } catch (error) {
        reject(error)
    }
})
export const GetOrderByEmloyeeId=(idEmloyee)=>new Promise(async(resoleve,reject)=>{
    try {
        const response=await axios({
            url:`/Order/employee/${idEmloyee}`,
            method:'get',
            withCredentials: true
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

export const GetOrderDetail = () => new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:"/OrderDetail",
            method:"Get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const GetOrderDetailById = (id) => new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/Order/getorderdetailbyorderid/${id}`,
            method:"Get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const UpdateOrderStatus = (idStatus,idOrder) =>new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/Order/orderstatus/${idOrder}`,
            method:"Put",
            params: idStatus
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const GetOrderStatus = () => new Promise(async(resolve,reject)=>{
    try {
        const response=await axios({
            url:`/OrderStatus`,
            method:"Get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})