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
            method: "put"
        })
        resolve(responsive)
    } catch (error) {
        reject(error)
    }
})

