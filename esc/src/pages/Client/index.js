import { Link, NavLink } from 'react-router-dom';

function Client() {
    return (
        <>
            <div className="d-flex py-6 px-4">
                <Link
                    style={{
                        padding: "10px 20px",
                        background: "linear-gradient(0deg, #474FA9, #616CE6)",
                        height: "40px", 
                        lineHeight: "20px",
                        borderRadius: "10px",
                        marginTop: "10px" ,
                        marginLeft: "10px",
                        cursor: "pointer"
                    }}
                to ={"/loginClient"}
                className="btn text-white "
                >
                    Dùng thử miễn phí
                </Link >
            </div >
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
                        <div>
                            <h1 className="text-white title text-capital text-bold">
                                Nền tảng
                                <br />
                                Quản lý bán hàng
                                <br />
                                đa kênh
                            </h1>
                            <div className="d-flex">
                                <Link
                                    style={{
                                        background: 'linear-gradient(0deg, #2c79eb, #a1d6ff)',
                                        boxShadow: '0 7px 3px rgb(0 6 77 / 13%)',
                                        marginRight: '15px',
                                        zIndex: '3',
                                    }}
                                    to={'/loginClient'}
                                    className="btn btn- text-white text-bold"
                                >
                                    Dùng thử miễn phí
                                </Link>
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
