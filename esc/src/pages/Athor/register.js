import { useEffect, useState } from "react"
import * as apis from "../../apis"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [dataRegister, SetDataRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    })
    const [errors, setErrors] = useState([]);

    function validate(data) {
        let errors = {};
        if (!data.firstName.trim() || 20 > data.firstName.length > 3) {
            errors.firstName = 'username is required';
            toast.error('username is required');
        }

        if (!data.phoneNumber.trim() || 10 >= data.phoneNumber.length > 6) {
            errors.phoneNumber = 'phoneNumber is required';
            toast.error('phoneNumber is required');
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
            toast.error('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email address is invalid';
            toast.error('Email address is invalid');
        }
        if (!data.password) {
            errors.password = 'Password is required';
            toast.error('Password is required');
        } else if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
            toast.error('Password must be at least 6 characters long');
        }
        return errors;
    }

    const handleChange = (e) => {
        SetDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(dataRegister);
        if (Object.keys(validationErrors).length === 0) {
            const FetApi = async () => {
                await apis.register(dataRegister)
                    .then((res) => {
                        console.log(res.data);
                        window.location.href = '/login';
                        toast.success('Sign up successful!');
                    })
                    .catch((error) => {
                        console.error('Registration error: ', error);
                        toast.error('An error occurred during sign up. Please try again.');
                    });
            }
            FetApi()
        } else {
            setErrors(validationErrors);
            toast.error('Please fill in the required fields correctly.');
        }
    }

    return (
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
                {/* /Left Text */}
                <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center justify-content-center p-12 pb-2">
                    <div>
                        <img
                            src="../../assets/img/illustrations/auth-cover-register-illustration-light.png"
                            className="authentication-image-model d-none d-lg-block"
                            alt="auth-model"
                            data-app-light-img="illustrations/auth-cover-register-illustration-light.png"
                            data-app-dark-img="illustrations/auth-cover-register-illustration-dark.html"
                        />
                    </div>
                    <img
                        src="../../assets/img/illustrations/tree-2.png"
                        alt="tree"
                        className="authentication-image-tree z-n1"
                    />
                    <img
                        src="../../assets/img/illustrations/auth-cover-mask-light.png"
                        className="scaleX-n1-rtl authentication-image d-none d-lg-block w-75"
                        height={362}
                        alt="triangle-bg"
                        data-app-light-img="illustrations/auth-cover-mask-light.png"
                        data-app-dark-img="illustrations/auth-cover-mask-dark.html"
                    />
                </div>
                {/* /Left Text */}
                {/* Register */}
                <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg position-relative py-sm-5 px-12 py-4">
                    <div className="w-px-400 mx-auto pt-5 pt-lg-0">
                        <h4 className="mb-1">Adventure starts here 🚀</h4>
                        <p className="mb-5">Make your app management easy and fun!</p>
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
                                    id="firstName"
                                    name="firstName"
                                    onChange={handleChange}
                                    placeholder="Enter your First Name"
                                    autofocus=""
                                />
                                <label htmlFor="firstName">Firt Name</label>
                            </div>
                            <div className="form-floating form-floating-outline mb-5">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    onChange={handleChange}
                                    placeholder="Enter your First Name"
                                    autofocus=""
                                />
                                <label htmlFor="lastName">Last Name</label>
                            </div>

                            <div className="form-floating form-floating-outline mb-5">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="mb-5 form-password-toggle">
                                <div className="input-group input-group-merge">
                                    <div className="form-floating form-floating-outline">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            onChange={handleChange}
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
                            <div className="form-floating form-floating-outline mb-5">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    onChange={handleChange}
                                    name="phoneNumber"
                                    placeholder="Enter your Phone Number"
                                />
                                <label htmlFor="phoneNumber">Phone Number</label>
                            </div>
                            <div className="mb-5 py-2">
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="terms-conditions"
                                        name="terms"
                                    />
                                    <label className="form-check-label" htmlFor="terms-conditions">
                                        I agree to
                                        <a href="javascript:void(0);">privacy policy &amp; terms</a>
                                    </label>
                                </div>
                            </div>
                            <button onClick={handleSubmit} className="btn btn-primary d-grid w-100">Sign up</button>
                        </form>
                        <p className="text-center mb-5">
                            <span>Already have an account?</span>
                            <a href="auth-login-cover.html">
                                <span>Sign in instead</span>
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
                {/* /Register */}
            </div>
        </div>

    )
}
export default Register