import {useNavigate,useLocation } from 'react-router-dom';
import * as apis from "../../../apis"
import * as actions from "../../../store/actions"
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";

function HeaderClient () {
    const currentUser = true;

    //handleMenuChange logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;

            default:
                break;
        }
    };
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const {checklogin} = useSelector(state => state.app)
    const [isChecking, setIsChecking] = useState(false);
    const [search,setSearch] = useState("")
    const username = window.sessionStorage.getItem("userName")
    
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
          setIsChecking(true);
        } else {
          // Hiển thị form đăng nhập hoặc các nút chức năng đăng nhập
          setIsChecking(false);
        }
      }

    
      // handle Logout
      const handleLogout = () => {
        
        const FetchData = async () => {
          try {
            await apis.logout().then((res) => {
              if (res.status === 200) {
                deleteCookie("token");
                checkLoggedIn();
                dispatch(actions.checkLogin(false));
                navigate("/login")
              }
            });
          } catch (error) {
            console.error(error);
          }
        };
        FetchData();
      };
    
  

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@phutam54',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    
    return (
        <header className="">
            <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
            >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
                        <i className="ri-menu-fill ri-24px" />
                    </a>
                </div>
                <div
                    className="navbar-nav-right d-flex align-items-center"
                    id="navbar-collapse"
                >
                    {/* Search */}
                    <div className="navbar-nav align-items-center">
                        
                    </div>
                    {/* /Search */}
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        {/* Language */}
                        <li className="nav-item dropdown-language dropdown">
                            <a
                                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                            >
                                <i className="ri-translate-2 ri-22px" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end py-2">
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                        data-language="en"
                                        data-text-direction="ltr"
                                    >
                                        <span className="align-middle">English</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                        data-language="fr"
                                        data-text-direction="ltr"
                                    >
                                        <span className="align-middle">French</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                        data-language="ar"
                                        data-text-direction="rtl"
                                    >
                                        <span className="align-middle">Arabic</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                        data-language="de"
                                        data-text-direction="ltr"
                                    >
                                        <span className="align-middle">German</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/*/ Language */}
                        {/* Style Switcher */}
                        <li className="nav-item dropdown-style-switcher dropdown">
                            <a
                                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                            >
                                <i className="ri-22px" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                        data-theme="light"
                                    >
                                        <span className="align-middle">
                                            <i className="ri-sun-line ri-22px me-3" />
                                            Light
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                        data-theme="dark"
                                    >
                                        <span className="align-middle">
                                            <i className="ri-moon-clear-line ri-22px me-3" />
                                            Dark
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                        data-theme="system"
                                    >
                                        <span className="align-middle">
                                            <i className="ri-computer-line ri-22px me-3" />
                                            System
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* / Style Switcher*/}
                        {/* Quick links  */}
                        <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown">
                            <a
                                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <i className="ri-star-smile-line ri-22px" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end py-0">
                                <div className="dropdown-menu-header border-bottom py-50">
                                    <div className="dropdown-header d-flex align-items-center py-2">
                                        <h6 className="mb-0 me-auto">Shortcuts</h6>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add shortcuts"
                                        >
                                            <i className="ri-layout-grid-line ri-24px text-heading" />
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown-shortcuts-list scrollable-container">
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                <i className="ri-calendar-line ri-26px text-heading" />
                                            </span>
                                            <a href="app-calendar.html" className="stretched-link">
                                                Calendar
                                            </a>
                                            <small>Appointments</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                <i className="ri-file-text-line ri-26px text-heading" />
                                            </span>
                                            <a href="app-invoice-list.html" className="stretched-link">
                                                Invoice App
                                            </a>
                                            <small>Manage Accounts</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                <i className="ri-user-line ri-26px text-heading" />
                                            </span>
                                            <a href="app-user-list.html" className="stretched-link">
                                                User App
                                            </a>
                                            <small>Manage Users</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                <i className="ri-computer-line ri-26px text-heading" />
                                            </span>
                                            <a href="app-access-roles.html" className="stretched-link">
                                                Role Management
                                            </a>
                                            <small>Permission</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                <i className="ri-pie-chart-2-line ri-26px text-heading" />
                                            </span>
                                            <a href="index.html" className="stretched-link">
                                                Dashboard
                                            </a>
                                            <small>Analytics</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                <i className="ri-settings-4-line ri-26px text-heading" />
                                            </span>
                                            <a
                                                href="pages-account-settings-account.html"
                                                className="stretched-link"
                                            >
                                                Setting
                                            </a>
                                            <small>Account Settings</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                <i className="ri-question-line ri-26px text-heading" />
                                            </span>
                                            <a href="pages-faq.html" className="stretched-link">
                                                FAQs
                                            </a>
                                            <small className="text-muted mb-0">FAQs &amp; Articles</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                                                <i className="ri-tv-2-line ri-26px text-heading" />
                                            </span>
                                            <a href="modal-examples.html" className="stretched-link">
                                                Modals
                                            </a>
                                            <small>Useful Popups</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* Quick links */}
                        {/* Notification */}
                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-4 me-xl-1">
                            <a
                                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <i className="ri-notification-2-line ri-22px" />
                                <span className="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end py-0">
                                <li className="dropdown-menu-header border-bottom">
                                    <div className="dropdown-header d-flex align-items-center py-3">
                                        <h6 className="mb-0 me-auto">Notification</h6>
                                        <div className="d-flex align-items-center">
                                            <span className="badge rounded-pill bg-label-primary me-2">
                                                8 New
                                            </span>
                                            <a
                                                href="javascript:void(0)"
                                                className="btn btn-text-secondary rounded-pill btn-icon dropdown-notifications-all"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Mark all as read"
                                            >
                                                <i className="ri-mail-open-line ri-20px text-body" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-notifications-list scrollable-container">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img
                                                            src="../../assets/img/avatars/1.png"
                                                            alt=""
                                                            className="w-px-40 h-auto rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="small mb-1">Congratulation Lettie 🎉</h6>
                                                    <small className="mb-1 d-block text-body">
                                                        Won the monthly best seller gold badge
                                                    </small>
                                                    <small className="text-muted">1h ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-danger">
                                                            CF
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Charles Franklin</h6>
                                                    <small className="mb-1 d-block text-body">
                                                        Accepted your connection
                                                    </small>
                                                    <small className="text-muted">12hr ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img
                                                            src="../../assets/img/avatars/2.png"
                                                            alt=""
                                                            className="w-px-40 h-auto rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">New Message ✉️</h6>
                                                    <small className="mb-1 d-block text-body">
                                                        You have new message from Natalie
                                                    </small>
                                                    <small className="text-muted">1h ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-success">
                                                            <i className="ri-shopping-cart-2-line" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Whoo! You have new order 🛒</h6>
                                                    <small className="mb-1 d-block text-body">
                                                        ACME Inc. made new order $1,154
                                                    </small>
                                                    <small className="text-muted">1 day ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img
                                                            src="../../assets/img/avatars/9.png"
                                                            alt=""
                                                            className="w-px-40 h-auto rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">
                                                        Application has been approved 🚀
                                                    </h6>
                                                    <small className="mb-1 d-block text-body">
                                                        Your ABC project application has been approved.
                                                    </small>
                                                    <small className="text-muted">2 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-success">
                                                            <i className="ri-pie-chart-2-line" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Monthly report is generated</h6>
                                                    <small className="mb-1 d-block text-body">
                                                        July monthly financial report is generated
                                                    </small>
                                                    <small className="text-muted">3 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img
                                                            src="../../assets/img/avatars/5.png"
                                                            alt=""
                                                            className="w-px-40 h-auto rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Send connection request</h6>
                                                    <small className="mb-1 d-block text-body">
                                                        Peter sent you connection request
                                                    </small>
                                                    <small className="text-muted">4 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img
                                                            src="../../assets/img/avatars/6.png"
                                                            alt=""
                                                            className="w-px-40 h-auto rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">New message from Jane</h6>
                                                    <small className="mb-1 d-block text-body">
                                                        Your have new message from Jane
                                                    </small>
                                                    <small className="text-muted">5 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-warning">
                                                            <i className="ri-error-warning-line" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">CPU is running high</h6>
                                                    <small className="mb-1 d-block text-body">
                                                        CPU Utilization Percent is currently at 88.63%,
                                                    </small>
                                                    <small className="text-muted">5 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-read"
                                                    >
                                                        <span className="badge badge-dot" />
                                                    </a>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="dropdown-notifications-archive"
                                                    >
                                                        <span className="ri-close-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="border-top">
                                    <div className="d-grid p-4">
                                        <a
                                            className="btn btn-primary btn-sm d-flex"
                                            href="javascript:void(0);"
                                        >
                                            <small className="align-middle">View all notifications</small>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        {/*/ Notification */}
                        {/* User */}
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a
                                className="nav-link dropdown-toggle hide-arrow p-0"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                            >
                                <div className="avatar avatar-online">
                                    <img
                                        src="../../assets/img/avatars/1.png"
                                        alt=""
                                        className="w-px-40 h-auto rounded-circle"
                                    />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="pages-account-settings-account.html"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                                <div className="avatar avatar-online">
                                                    <img
                                                        src="../../assets/img/avatars/1.png"
                                                        alt=""
                                                        className="w-px-40 h-auto rounded-circle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0 small">{username}</h6>
                                                <small className="text-muted">Admin</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" 
                                        href="#"
                                        onClick={()=> navigate("")}
                                    >
                                        <i className="ri-user-3-line ri-22px me-2" />
                                        <span className="align-middle">My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                    >
                                        <i className="ri-settings-4-line ri-22px me-2" />
                                        <span className="align-middle">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="pages-account-settings-billing.html"
                                    >
                                        <span className="d-flex align-items-center align-middle">
                                            <i className="flex-shrink-0 ri-file-text-line ri-22px me-2" />
                                            <span className="flex-grow-1 align-middle">Billing</span>
                                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger h-px-20 d-flex align-items-center justify-content-center">
                                                4
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="pages-pricing.html">
                                        <i className="ri-money-dollar-circle-line ri-22px me-2" />
                                        <span className="align-middle">Pricing</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="pages-faq.html">
                                        <i className="ri-question-line ri-22px me-2" />
                                        <span className="align-middle">FAQ</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="d-grid px-4 pt-2 pb-1">
                                        <a
                                            className="btn btn-danger d-flex"
                                            href="#"
                                            onClick={handleLogout}
                                            
                                        >
                                            <small className="align-middle">Logout</small>
                                            <i className="ri-logout-box-r-line ms-2 ri-16px" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        {/*/ User */}
                    </ul>
                </div>
                {/* Search Small Screens */}
                <div className="navbar-search-wrapper search-input-wrapper d-none">
                    <input
                        type="text"
                        className="form-control search-input container-xxl border-0"
                        placeholder="Search..."
                        aria-label="Search..."
                    />
                    <i className="ri-close-fill search-toggler cursor-pointer" />
                </div>
            </nav>

        </header>
    );
}