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
export const GetAvailableEmployees = async (data) => {
    try {
        const response = await axios.post('/Employee/available', data);
        return response.data;
    } catch (error) {
        console.error('Error fetching required employees:', error.response?.data || error.message);
        throw error;
    }
};

export const AddEmployeeService = (prop) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/EmployeeService",
                method: "post",
                data: prop,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const WorkList = (employeeId) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: `/Employee/${employeeId}/worklist`,  
            method: "get",
        });
        resolve(response);
    } catch (error) {
        reject(error);
    }
});



export const AddEmployeeProductCategory=(name)=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/EmployeeProductCategory/add",
            method:"post",
            data:name,
            headers:{
                Authorization:`Bearer ${window.sessionStorage.getItem("token")}`,
                    "Content-Type": "application/json",            
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const GetAllEmployeeProductCategory=()=>new Promise(async(resolve,reject)=>{
    try {
        const response = await axios({
            url:"/EmployeeProductCategory/all",
            method:"Get",
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const GetAllEmployee=(param)=>new Promise(async(resolve,reject)=>{
    try {
       const responsive =await axios({
        url:"/Employee/GetAll",
        method:"get",
        params:param    
       })
       resolve(responsive)
    } catch (error) {
        reject(error)
    }
})