import { resolveTo } from "@remix-run/router";
import axios from "../axios";

export const GetAllCallHistory = () => new Promise(async (resolve,reject)=>{
    try {
        const responsive = await axios({
            url:"/CallHistory",
            method: "get"
        })
        resolve(responsive)
    } catch (error) {
        reject(error)
    }

})
export const GetAllCallStatus = ()=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/CallStatus",
            method:"get"
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const GetAllEmployee=()=>new Promise(async(resolve,reject)=>{
    try {
       const responsive =await axios({
        url:"/Employee/GetAll",
        method:"get"
       })
       resolve(responsive)
    } catch (error) {
        reject(error)
    }
})
export const GetCallHistoryById = (id)=> new Promise(async (resolve,reject)=>{
    try {
        const responsive = await axios({
            url:`/CallHistory/${id}`,
            method: "get"
        })
        resolve(responsive)
    } catch (error) {
        reject(error)
    }

})

export const AddCallHistory = (prop) => new Promise(async (resolve,reject)=>{
    try {
        const responsive = await axios({
            url:"/CallHistory",
            method: "post",
            data: prop
        })
        resolve(responsive)
    } catch (error) {
        reject(error)
    }
})

export const UpdateCallHistory = (id,prop) => new Promise(async (resolve,reject)=>{
    try {
        const responsive = await axios({
            url:`/CallHistory/${id}`,
            method: "put",
            data: prop
        })
        resolve(responsive)
    } catch (error) {
        reject(error)
    }
})

export const DeleteCallHistory = (id) => new Promise(async (resolve,reject)=>{
    try {
        const responsive = await axios({
            url:`/CallHistory/${id}`,
            method: "delete"
        })
        resolve(responsive)
    } catch (error) {
        reject(error)
    }
})

