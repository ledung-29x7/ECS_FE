import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { publicRoutes } from '~/routes';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as actions from "../../store/actions"

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    var role = window.sessionStorage.getItem("role")
    const {checklogin} = useSelector(state => state.app)
    const dispatch = useDispatch();

    useEffect(() => {
            checkLoggedIn();
          }, [checklogin]);
        
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
    return (
        <>
            { checklogin && role === "Admin" ? (
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        <Sidebar routes={publicRoutes} />
                        <div class="layout-page">
                            <Header />
                            <div className="">
                                <div className="">{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="misc-wrapper">
                    <h1 className="mb-2 mx-2" style={{ fontSize: '6rem', lineHeight: '6rem' }}>
                        401
                    </h1>
                    <h4 className="mb-2">You are not authorized! 🔐</h4>
                    <p className="mb-10 mx-2">You don’t have permission to access this page. Go Home!</p>
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
                                src="../../assets/img/illustrations/401.png"
                                alt="misc-error"
                                className="misc-model img-fluid z-1"
                                width={780}
                            />
                            <div>
                                <Link
                                    to="/login"
                                    className="btn btn-primary text-center my-6 waves-effect waves-light"
                                >
                                    Back to login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
