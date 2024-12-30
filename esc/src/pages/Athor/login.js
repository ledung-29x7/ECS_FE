import { use } from "react";
import * as apis from "../../apis";
import * as actions from "../../store/actions"
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { toast } from "react-toastify";


function Login() {
   const {checklogin} =useSelector(state=>state.app)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formData,setFormData]=useState({
    email: "",
    password: ""
   })
   const handleChange =(e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
   }

   useEffect(() => {
           checkLoggedIn();
         }, [checklogin]);
             // hủy Cookie
      function deleteCookie(name) {
        document.cookie =
          name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
         // Hàm để lấy giá trị của một cookie
         function getCookie(name) {
           const cookies = document.cookie.split("; ");
           console.log(cookies)
           for (let cookie of cookies) {
               const [key, value] = cookie.split("=");
               if (key === name) {
                   return decodeURIComponent(value);
               }
           }
           return undefined;
       }
       
         // check xem người dùng đã đăng nhập chưa
         function checkLoggedIn() {
           var token = getCookie("token");
           if (token) {
             // Gọi các API hoặc thực hiện các hành động khác khi người dùng đã đăng nhập
             dispatch(actions.checkLogin(true))
           } else {
             // Hiển thị form đăng nhập hoặc các nút chức năng đăng nhập
             dispatch(actions.checkLogin(false))
           }
         }
   const handleSubmit =(e) =>{
        e.preventDefault();
        const Login = async() =>{
            try {
                await apis.login(formData)
            .then(res =>{
                if(res.status === 200){
                    toast.success("login success")
                    console.log(res)
                    window.sessionStorage.setItem("token",res.data.token);
                    window.sessionStorage.getItem("name",res.data?.userName)
                    window.sessionStorage.setItem('employeeID',res.data.employeeID);
                    window.sessionStorage.setItem('role',res.data.role)
                    dispatch(actions.checkLogin(true))
                    switch (res.data.role) {
                        
                        case "Admin":
                            console.log(res.data.role)
                            return(navigate("/admin"))
                        case "Service":
                            return(navigate("/callhistory"))
                        default:
                            return(navigate("/client"))
                    }
                }
            })
            } catch (error) {
                toast.error(error)
            }
        }
        Login()
   }    

   const handleLogout = () => {
           
           const FetchData = async () => {
             try {
               await apis.logout().then((res) => {
                   deleteCookie("token");
                 if (res.status === 200) {
                   checkLoggedIn();
                   dispatch(actions.checkLogin(false));
                   
                 }
               });
             } catch (error) {
               console.error(error);
             }
           };
           FetchData();
         };
   console.log(checklogin)
    return (
        <>
            {checklogin ? (
                <div >
                    <button onClick={()=> handleLogout}>Go to page</button>
                </div>
            ) : (
                            <div className="authentication-wrapper authentication-cover">

                            <div className="authentication-inner row m-0">
                                {/* /Left Section */}
                                <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center justify-content-center p-12 pb-2">
                                    <div>
                                        <img
                                            src="../../assets/img/illustrations/auth-cover-login-illustration-light.png"
                                            className="authentication-image-model d-none d-lg-block"
                                            alt="auth-model"
                                            data-app-light-img="illustrations/auth-cover-login-illustration-light.png"
                                            data-app-dark-img="illustrations/auth-cover-login-illustration-dark.html"
                                        />
                                    </div>
                                    <img
                                        src="../../assets/img/illustrations/tree.png"
                                        alt="tree"
                                        className="authentication-image-tree z-n1"
                                    />
                                    <img
                                        src="../../assets/img/illustrations/auth-cover-mask-light.png"
                                        className="scaleX-n1-rtl authentication-image d-none d-lg-block w-75"
                                        alt="triangle-bg"
                                        height={362}
                                        data-app-light-img="illustrations/auth-cover-mask-light.png"
                                        data-app-dark-img="illustrations/auth-cover-mask-dark.html"
                                    />
                                </div>
                                {/* /Left Section */}
                                {/* Login */}
                                <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg position-relative py-sm-5 px-12 py-4">
                                    <div className="w-px-400 mx-auto pt-5 pt-lg-0">
                                        <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
                                        <p className="mb-5">
                                            Please sign-in to your account and start the adventure
                                        </p>
                                        <form
                                            id="formAuthentication"
                                            onSubmit={handleSubmit}
                                            className="mb-5"
                                            action="https://demos.themeselection.com/materio-aspnet-core-mvc-admin-template/html/vertical-menu-template/index.html"
                                            method="GET"
                                        >
                                            <div className="form-floating form-floating-outline mb-5">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter your email or username"
                                                    autofocus=""
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="email">Email or Username</label>
                                            </div>
                                            <div className="mb-5">
                                                <div className="form-password-toggle">
                                                    <div className="input-group input-group-merge">
                                                        <div className="form-floating form-floating-outline">
                                                            <input
                                                                type="password"
                                                                id="password"
                                                                className="form-control"
                                                                name="password"
                                                                placeholder="············"
                                                                aria-describedby="password"
                                                                onChange={handleChange}
                                                            />
                                                            <label htmlFor="password">Password</label>
                                                        </div>
                                                        <span className="input-group-text cursor-pointer">
                                                            <i className="ri-eye-off-line ri-20px" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-5 d-flex justify-content-between flex-wrap py-2">
                                                <div className="form-check mb-0">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="remember-me"
                                                    />
                                                    <label className="form-check-label me-2" htmlFor="remember-me">
                                                        Remember Me
                                                    </label>
                                                </div>
                                                <a
                                                    href="auth-forgot-password-cover.html"
                                                    className="float-end mb-1"
                                                >
                                                    <span>Forgot Password?</span>
                                                </a>
                                            </div>
                                            <button className="btn btn-primary d-grid w-100">Login</button>
                                        </form>
                                        <p className="text-center">
                                            <span>New on our platform?</span>
                                            <a href="#" onClick={()=> navigate("/register")}>
                                                <span>Create an account</span>
                                            </a>
                                        </p>
                                        <div className="divider my-5">
                                            <div className="divider-text">or</div>
                                        </div>
                                        <div className="d-flex justify-content-center gap-2">
                                            <a
                                                href="javascript:;"
                                                className="btn btn-icon btn-lg rounded-pill btn-text-facebook"
                                            >
                                                <i className="tf-icons ri-facebook-fill ri-24px" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-icon btn-lg rounded-pill btn-text-twitter"
                                            >
                                                <i className="tf-icons ri-twitter-fill ri-24px" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-icon btn-lg rounded-pill btn-text-github"
                                            >
                                                <i className="tf-icons ri-github-fill ri-24px" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="btn btn-icon btn-lg rounded-pill btn-text-google-plus"
                                            >
                                                <i className="tf-icons ri-google-fill ri-24px" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* /Login */}
                            </div>
                        </div>
            )}
            {/* / Content */}
        </>

    )
}
export default Login