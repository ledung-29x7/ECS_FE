import axios from "../axios";

export const login = (param) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: "/Authentication/login",
            method: "post",
            data: param,
            withCredentials: true
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const loginClient = (param) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: "/Client/login",
            method: "post",
            data: param,
            withCredentials: true
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const register = (param) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios.post("/Authentication/register", param, {
            withCredentials: true
        });
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const logout = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/Authentication/logout`,
                method: "post",
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
export const logoutClient = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: `/Client/logout`,
                method: "post",
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const changePassword = (data) => new Promise(async (resolve,reject) =>{
    try {
        const response = await axios({
            url: "/Authentication/change-password",
            method:"post",
            withCredentials:true,
            data: data,
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const ClientChangePassWord = (data) => new Promise(async (resolve,reject) =>{
    try {
        const response = await axios({
            url: "/Client/change-password",
            method:"post",
            withCredentials:true,
            data:data,
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
