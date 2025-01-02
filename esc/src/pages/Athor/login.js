import { use } from "react";
import * as apis from "../../apis";
import * as actions from "../../store/actions"
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { toast } from "react-toastify";


function Login() {
    const roles = ["Client", "Admin", "Employee"]
   const {checklogin} =useSelector(state=>state.app)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [role,setRole] = useState("Client");
   const [formData,setFormData]=useState({
    email: "",
    password: ""
   })
   const handleChange =(e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
   }
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
       setShowPassword((prevState) => !prevState);
   };
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
                   
                    window.localStorage.setItem("token",res.data.token);
                    window.localStorage.setItem("name",res.data.userName)
                    window.localStorage.setItem('employeeID',res.data.employeeID);
                    window.localStorage.setItem('role',res.data.role)
                    dispatch(actions.checkLogin(true))
                    switch (res.data.role) {
                        
                        case "Admin":
                            
                            return(navigate("/admin"))
                        case "Service":
                            return(navigate("/worklist"))
                        case "Logistic": 
                            return (navigate("/logistic-order"))
                        default:
                            return(navigate("/client"))
                    }
                }
            })
            .catch(res => {
                if(res.status === 401){
                    toast.error("account or password is incorrect")
                }
            })
            } catch (error) {
                toast.error(error)
            }
        }
        Login()
   } 

   const handleSubmitClient =(e) =>{
    e.preventDefault();
    const Login = async() =>{
        try {
            await apis.loginClient(formData)
        .then(res =>{
            if(res.status === 200){
                toast.success("loginClient success")
                
                window.localStorage.setItem('idClient',res.data.userId);
                window.localStorage.setItem('userName',res.data.userName);
                window.localStorage.setItem("token",res.data.token)
                dispatch(actions.checkLogin(true))
                navigate("/product")
            }
        })
        .catch(res => {
            if(res.status === 401){
                toast.error("account or password is incorrect")
            }
        })
        } catch (error) {
            toast.error("loginClient error")
        }
    }
    Login()
}    
    const handleChangeRole = (e) => {
        setRole( e.target.value)
    }
   const handleLogout = () => {
           
           const FetchData = async () => {
             try {
               await apis.logout().then((res) => {
                   if (res.status === 200) {
                     deleteCookie("token");
                   checkLoggedIn();
                   dispatch(actions.checkLogin(false));
                   
                 }
               });
             } catch (error) {
                deleteCookie("token");
                window.location.reload()
               console.error(error);
             }
           };
           FetchData();
         };
         console.log(role)
    return (
        <>
            {checklogin ? (
               <div className="misc-wrapper">
               <h4 className="mb-2 mx-2">Under Maintenance! 🚧</h4>
               <p className="mb-10 mx-2">
                 Sorry for the inconvenience but we're performing some maintenance at the
                 moment
               </p>
               <div className="d-flex justify-content-center mt-5">
                 <img
                   src="../../assets/img/illustrations/tree-3.png"
                   alt="misc-tree"
                   className="img-fluid misc-object d-none d-lg-inline-block"
                 />
                 <img
                   src="../../assets/img/illustrations/tree.png"
                   alt="misc-tree"
                   className="img-fluid misc-object-right d-none d-lg-inline-block"
                 />
                 <img
                   src="../../assets/img/illustrations/misc-mask-light.png"
                   alt="misc-error"
                   className="scaleX-n1-rtl misc-bg d-none d-lg-inline-block"
                   height={172}
                   data-app-light-img="illustrations/misc-mask-light.png"
                   data-app-dark-img="illustrations/misc-mask-dark.png"
                 />
                 <div className="d-flex flex-column align-items-center">
                   <img
                     src="../../assets/img/illustrations/misc-under-maintenance.png"
                     alt="misc-error"
                     className="img-fluid z-1"
                     width={780}
                   />
                   <div>
                     <div
                       
                       onClick={handleLogout}
                       className="btn btn-primary text-center my-12 waves-effect waves-light"
                     >
                       Logout
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
            ) : (
                <>
                    {role === "Client" ?(
                                    <div className="authentication-wrapper authentication-cover">
                                    {/* Logo */}
                                    
                                    {/* /Logo */}
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
                                                <div className="d-flex mb-5 justify-content-between">
                                                    <h4 className=" d-flex align-items-center justify-content-center h-100 ">Welcome to ECS!</h4>
                                                    <div className=" ">
                                                        <label className="">Login With</label>
                                                        <select
                                                            id="select2Basic"
                                                            className="form-select mt-1 py-1"
                                                            name="productId"
                                                            value={role}
                                                            onChange={handleChangeRole}
                                                        >
                                                            
                                                            {roles?.map((res, key) => (
                                                                <option key={key} value={res}>
                                                                    {res}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <form
                                                    id="formAuthentication"
                                                    onSubmit={handleSubmitClient}
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
                                                                        type={showPassword ? "text" : "password"}
                                                                        id="password"
                                                                        className="form-control"
                                                                        name="password"
                                                                        placeholder="············"
                                                                        aria-describedby="password"
                                                                        onChange={handleChange}
                                                                    />
                                                                    <label htmlFor="password">Password</label>
                                                                </div>
                                                                <span 
                                                                 onClick={togglePasswordVisibility}
                                                                className="input-group-text cursor-pointer">
                                                                    <i   className={`ri-${showPassword ? "eye-line" : "eye-off-line"} ri-20px`} />
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
                                                    <a href="#" onClick={()=> navigate("/client")}>
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
                    ) :(
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
                                                <div className="d-flex mb-5 justify-content-between">
                                                    <h4 className="">Welcome to ECS!</h4>
                                                    <div className=" ">
                                                        <label className="">Login With</label>
                                                        <select
                                                            id="select2Basic"
                                                            className="form-select mt-1 py-1"
                                                            name="productId"
                                                            value={role}
                                                            onChange={handleChangeRole}
                                                        >
                                                            
                                                            {roles?.map((res, key) => (
                                                                <option key={key} value={res}>
                                                                    {res}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
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
                                                                             type={showPassword ? "text" : "password"}
                                                                            id="password"
                                                                            className="form-control"
                                                                            name="password"
                                                                            placeholder="············"
                                                                            aria-describedby="password"
                                                                            onChange={handleChange}
                                                                        />
                                                                        <label htmlFor="password">Password</label>
                                                                    </div>
                                                                    <span 
                                                                        onClick={togglePasswordVisibility}
                                                                        className="input-group-text cursor-pointer">
                                                                        <i className={`ri-${showPassword ? "eye-line" : "eye-off-line"} ri-20px`}/>
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
                </>
            )}
            {/* / Content */}
        </>

    )
}
export default Login