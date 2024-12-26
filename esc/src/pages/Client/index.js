import { useState } from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import * as apis from '../../apis';

function Client() {
    const navigate = useNavigate();
    const [valueAdd, setValueAdd] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const handleChange = (e) => {
        setValueAdd({
            ...valueAdd,
            [e.target.name]: e.target.value, // Bỏ [] để tránh giá trị bị chuyển thành mảng
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra dữ liệu trước khi gửi
        const { name, email, phoneNumber, message } = valueAdd;
        if (!name || !email || !phoneNumber || !message) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const res = await apis.AddContact(valueAdd);
            if (res.status === 200) {
                navigate("/thank")
                window.location.reload();
            }
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Failed to add contact. Please try again.");
        }
    };

    return (
        <>
            <div className="d-flex py-6 px-4">
                <Link
                    style={{
                        padding: '10px 20px',
                        background: 'linear-gradient(0deg, #474FA9, #616CE6)',
                        height: '40px',
                        lineHeight: '20px',
                        borderRadius: '10px',
                        marginTop: '10px',
                        marginLeft: '10px',
                        cursor: 'pointer',
                    }}
                    to={'/loginClient'}
                    className="btn text-white"
                >
                    Login
                </Link>
            </div>
            <div
                style={{
                    background: `url(https://eshop.misa.vn/mshopkeeper/images/Home/bg-banner.png) no-repeat center`,
                    backgroundSize: 'cover',
                    height: '604px',
                    padding: '50px 0px',
                    position: 'relative',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div
                            style={{
                                position: 'relative',
                                minHeight: '1px',
                                paddingLeft: '15px',
                                paddingRight: '15px',
                                width: '100%',
                                paddingTop: '40px',
                            }}
                            className="col-md-24 banner-ctn"
                        >
                            <div className="col-12 col-lg-4" style={{ paddingTop: '10px' }}>
                                <div className="card mb-6">
                                    <h5
                                        className="card-header text-center"
                                        style={{ color: 'rgb(57, 91, 214)' }}
                                    >
                                        Sign up for consultation here!
                                    </h5>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="card-body pt-0 fv-plugins-bootstrap5 fv-plugins-framework"
                                        noValidate="novalidate"
                                    >
                                        <div className="d-flex flex-column">
                                            <label
                                                className="text-sm-start"
                                                htmlFor="name"
                                                style={{ color: 'rgb(57, 91, 214)' }}
                                            >
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="d-flex flex-column mt-3">
                                            <label
                                                className="text-sm-start"
                                                htmlFor="email"
                                                style={{ color: 'rgb(57, 91, 214)' }}
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div className="d-flex flex-column mt-3">
                                            <label
                                                className="text-sm-start"
                                                htmlFor="phoneNumber"
                                                style={{ color: 'rgb(57, 91, 214)' }}
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phoneNumber"
                                                onChange={handleChange}
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <label
                                                className="text-sm-start"
                                                htmlFor="message"
                                                style={{ color: 'rgb(57, 91, 214)' }}
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                rows="3"
                                                onChange={handleChange}
                                                placeholder="Enter your message"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary mt-4 w-100"
                                            style={{
                                                backgroundColor: 'rgb(57, 91, 214)',
                                                color: 'white',
                                            }}
                                        >
                                            Sign up for consultation
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="banner-img">
                                <img
                                    style={{
                                        position: 'absolute',
                                        top: '-40%',
                                        width: '80%',
                                        right: '-6%',
                                        zIndex: '2',
                                        margin: 'auto',
                                        display: 'block',
                                        maxWidth: '100%',
                                        height: 'auto',
                                    }}
                                    src="https://eshop.misa.vn/mshopkeeper/images/Home/img-banner.png"
                                    alt="MISA Eshop"
                                    data-ll-status="loaded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Client;
