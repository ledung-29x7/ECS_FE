import { useEffect, useState } from "react"
import * as apis from "../../apis"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate()
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
                        navigate("/login")
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
                                    placeholder="Enter your first name"
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
                                    placeholder="Enter your phone number"
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
                            <a href="#" onClick={()=> navigate("/login")}>
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