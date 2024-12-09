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
                url: `/Auth/logout`,
                method: "post",
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
                },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
