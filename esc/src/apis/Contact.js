import axios from '../axios';
export const AddContact = (name) => new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/Contact',
                method: 'POST',
                data: name,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
export const GetAllContact = ()=> new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/Contact",
            method:"Get",
            headers: {
                Authorization:`Bearer ${window.localStorage.getItem("tokent")}`
            },
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
