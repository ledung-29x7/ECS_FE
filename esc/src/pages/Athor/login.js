import { use } from "react";
import * as apis from "../../apis";
import * as actions from "../../store/actions"
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { Link,useNavigate,useLocation } from 'react-router-dom';

function Login() {
   const {} =useSelector(state=>state.app)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formData,setFormData]=useState({
    Email:"",
    Password:""
   })
    return (
        <>
            <div className="authentication-wrapper authentication-cover">
                {/* Logo */}
                <a
                    href="index.html"
                    className="auth-cover-brand d-flex align-items-center gap-3"
                >
                    <span className="app-brand-logo demo">
                        <span style={{ color: "var(--bs-primary)" }}>
                            <svg
                                width={30}
                                height={24}
                                viewBox="0 0 250 196"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
                                    fill="currentColor"
                                />
                                <path
                                    opacity="0.077704"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
                                    fill="black"
                                />
                                <path
                                    opacity="0.077704"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
                                    fill="black"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
                                    fill="currentColor"
                                />
                                <path
                                    opacity="0.077704"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
                                    fill="black"
                                />
                                <path
                                    opacity="0.077704"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
                                    fill="black"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                                    fill="white"
                                    fillOpacity="0.15"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                                    fill="white"
                                    fillOpacity="0.3"
                                />
                            </svg>
                        </span>
                    </span>
                    <span className="app-brand-text demo text-heading fw-semibold">
                        Materio
                    </span>
                </a>
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
                            <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
                            <p className="mb-5">
                                Please sign-in to your account and start the adventure
                            </p>
                            <form
                                id="formAuthentication"
                                className="mb-5"
                                action="https://demos.themeselection.com/materio-aspnet-core-mvc-admin-template/html/vertical-menu-template/index.html"
                                method="GET"
                            >
                                <div className="form-floating form-floating-outline mb-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder="Enter your email or username"
                                        autofocus=""
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
                                <a href="auth-register-cover.html">
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
            {/* / Content */}
        </>

    )
}
export default Login