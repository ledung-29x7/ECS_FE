import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function Sidebar() {
    useEffect(() => {
        const layoutMenu = document.querySelector('#layout-menu');

        if (layoutMenu) {
            const menuInstance = new window.Menu(layoutMenu, {
                orientation: 'vertical',
                accordion: true,
                animate: true,
                closeChildren: true,
            });

            // Ví dụ: Mở menu đầu tiên
            menuInstance.open(document.querySelector('.menu-item'));
        }
    }, []);
    return (
        <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
        >
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-logo demo me-1">
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
                    <span className="app-brand-text demo menu-text fw-semibold ms-2">
                        Materio
                    </span>
                </a>
                <a
                    href="javascript:void(0);"
                    className="layout-menu-toggle menu-link text-large ms-auto"
                >
                    <i className="menu-toggle-icon d-xl-block align-middle" />
                </a>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
                {/* Dashboards */}
                <li className="menu-item active open ">
                    <a href="" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-home-smile-line" />
                        <div data-i18n="Dashboards">Dashboards</div>
                        <div className="badge bg-danger rounded-pill ms-auto">5</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="dashboards-crm.html" className="menu-link">
                                <div data-i18n="CRM">CRM</div>
                            </a>
                        </li>
                        <li className="menu-item active">
                            <a href="/" className="menu-link">
                                <div data-i18n="Analytics">Analytics</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-ecommerce-dashboard.html" className="menu-link">
                                <div data-i18n="eCommerce">eCommerce</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-logistics-dashboard.html" className="menu-link">
                                <div data-i18n="Logistics">Logistics</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-academy-dashboard.html" className="menu-link">
                                <div data-i18n="Academy">Academy</div>
                            </a>
                        </li>
                    </ul>

                </li>
                {/* Layouts */}
                <li className="menu-item">
                    <a href="" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-layout-2-line" />
                        <div data-i18n="Layouts">Layouts</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="layouts-collapsed-menu.html" className="menu-link">
                                <div data-i18n="Collapsed menu">Collapsed menu</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-content-navbar.html" className="menu-link">
                                <div data-i18n="Content navbar">Content navbar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="layouts-content-navbar-with-sidebar.html"
                                className="menu-link"
                            >
                                <div data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="https://demos.themeselection.com/materio-aspnet-core-mvc-admin-template/html/horizontal-menu-template"
                                className="menu-link"
                                target="_blank"
                            >
                                <div data-i18n="Horizontal">Horizontal</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-without-menu.html" className="menu-link">
                                <div data-i18n="Without menu">Without menu</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-without-navbar.html" className="menu-link">
                                <div data-i18n="Without navbar">Without navbar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-fluid.html" className="menu-link">
                                <div data-i18n="Fluid">Fluid</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-container.html" className="menu-link">
                                <div data-i18n="Container">Container</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-blank.html" className="menu-link">
                                <div data-i18n="Blank">Blank</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* Front Pages */}
                <li className="menu-item">
                    <a href="" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-file-copy-line" />
                        <div data-i18n="Front Pages">Front Pages</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a
                                href="https://demos.themeselection.com/materio-aspnet-core-mvc-admin-template/html/front-pages/landing-page.html"
                                className="menu-link"
                                target="_blank"
                            >
                                <div data-i18n="Landing">Landing</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="https://demos.themeselection.com/materio-aspnet-core-mvc-admin-template/html/front-pages/pricing-page.html"
                                className="menu-link"
                                target="_blank"
                            >
                                <div data-i18n="Pricing">Pricing</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="https://demos.themeselection.com/materio-aspnet-core-mvc-admin-template/html/front-pages/payment-page.html"
                                className="menu-link"
                                target="_blank"
                            >
                                <div data-i18n="Payment">Payment</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="https://demos.themeselection.com/materio-aspnet-core-mvc-admin-template/html/front-pages/checkout-page.html"
                                className="menu-link"
                                target="_blank"
                            >
                                <div data-i18n="Checkout">Checkout</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="https://demos.themeselection.com/materio-aspnet-core-mvc-admin-template/html/front-pages/help-center-landing.html"
                                className="menu-link"
                                target="_blank"
                            >
                                <div data-i18n="Help Center">Help Center</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* Apps & Pages */}
                <li className="menu-header mt-7">
                    <span className="menu-header-text" data-i18n="Apps & Pages">
                        Apps &amp; Pages
                    </span>
                </li>
                <li className="menu-item">
                    <a href="app-email.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-mail-open-line" />
                        <div data-i18n="Email">Email</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="app-chat.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-wechat-line" />
                        <div data-i18n="Chat">Chat</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="app-calendar.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-calendar-line" />
                        <div data-i18n="Calendar">Calendar</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="app-kanban.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-drag-drop-line" />
                        <div data-i18n="Kanban">Kanban</div>
                    </a>
                </li>
                {/* e-commerce-app menu start */}
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-shopping-bag-3-line" />
                        <div data-i18n="eCommerce">eCommerce</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="app-ecommerce-dashboard.html" className="menu-link">
                                <div data-i18n="Dashboard">Dashboard</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Products">Products</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-ecommerce-product-list.html" className="menu-link">
                                        <div data-i18n="Product List">Product List</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-ecommerce-product-add.html" className="menu-link">
                                        <div data-i18n="Add Product">Add Product</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-ecommerce-category-list.html" className="menu-link">
                                        <div data-i18n="Category List">Category List</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Order">Order</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-ecommerce-order-list.html" className="menu-link">
                                        <div data-i18n="Order List">Order List</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-ecommerce-order-details.html" className="menu-link">
                                        <div data-i18n="Order Details">Order Details</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Customer">Customer</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-ecommerce-customer-all.html" className="menu-link">
                                        <div data-i18n="All Customers">All Customers</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <div data-i18n="Customer Details">Customer Details</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a
                                                href="app-ecommerce-customer-details-overview.html"
                                                className="menu-link"
                                            >
                                                <div data-i18n="Overview">Overview</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="app-ecommerce-customer-details-security.html"
                                                className="menu-link"
                                            >
                                                <div data-i18n="Security">Security</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="app-ecommerce-customer-details-billing.html"
                                                className="menu-link"
                                            >
                                                <div data-i18n="Address & Billing">
                                                    Address &amp; Billing
                                                </div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="app-ecommerce-customer-details-notifications.html"
                                                className="menu-link"
                                            >
                                                <div data-i18n="Notifications">Notifications</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="app-ecommerce-manage-reviews.html" className="menu-link">
                                <div data-i18n="Manage Reviews">Manage Reviews</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-ecommerce-referral.html" className="menu-link">
                                <div data-i18n="Referrals">Referrals</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Settings">Settings</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-settings-detail.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Store Details">Store Details</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-settings-payments.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Payments">Payments</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-settings-checkout.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Checkout">Checkout</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-settings-shipping.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Shipping & Delivery">
                                            Shipping &amp; Delivery
                                        </div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-settings-locations.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Locations">Locations</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-settings-notifications.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Notifications">Notifications</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* e-commerce-app menu end */}
                {/* Academy menu start */}
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-graduation-cap-line" />
                        <div data-i18n="Academy">Academy</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="app-academy-dashboard.html" className="menu-link">
                                <div data-i18n="Dashboard">Dashboard</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-academy-course.html" className="menu-link">
                                <div data-i18n="My Course">My Course</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-academy-course-details.html" className="menu-link">
                                <div data-i18n="Course Details">Course Details</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* Academy menu end */}
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-car-line" />
                        <div data-i18n="Logistics">Logistics</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="app-logistics-dashboard.html" className="menu-link">
                                <div data-i18n="Dashboard">Dashboard</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-logistics-fleet.html" className="menu-link">
                                <div data-i18n="Fleet">Fleet</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-bill-line" />
                        <div data-i18n="Invoice">Invoice</div>
                        <div className="badge bg-danger rounded-pill ms-auto">4</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="app-invoice-list.html" className="menu-link">
                                <div data-i18n="List">List</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-invoice-preview.html" className="menu-link">
                                <div data-i18n="Preview">Preview</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-invoice-edit.html" className="menu-link">
                                <div data-i18n="Edit">Edit</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-invoice-add.html" className="menu-link">
                                <div data-i18n="Add">Add</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-user-line" />
                        <div data-i18n="Users">Users</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="app-user-list.html" className="menu-link">
                                <div data-i18n="List">List</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="View">View</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-user-view-account.html" className="menu-link">
                                        <div data-i18n="Account">Account</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-user-view-security.html" className="menu-link">
                                        <div data-i18n="Security">Security</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-user-view-billing.html" className="menu-link">
                                        <div data-i18n="Billing & Plans">Billing &amp; Plans</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-user-view-notifications.html" className="menu-link">
                                        <div data-i18n="Notifications">Notifications</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-user-view-connections.html" className="menu-link">
                                        <div data-i18n="Connections">Connections</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-lock-2-line" />
                        <div data-i18n="Roles & Permissions">Roles &amp; Permissions</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="app-access-roles.html" className="menu-link">
                                <div data-i18n="Roles">Roles</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="app-access-permission.html" className="menu-link">
                                <div data-i18n="Permission">Permission</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-layout-left-line" />
                        <div data-i18n="Pages">Pages</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="User Profile">User Profile</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="pages-profile-user.html" className="menu-link">
                                        <div data-i18n="Profile">Profile</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="pages-profile-teams.html" className="menu-link">
                                        <div data-i18n="Teams">Teams</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="pages-profile-projects.html" className="menu-link">
                                        <div data-i18n="Projects">Projects</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="pages-profile-connections.html" className="menu-link">
                                        <div data-i18n="Connections">Connections</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Account Settings">Account Settings</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="pages-account-settings-account.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Account">Account</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="pages-account-settings-security.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Security">Security</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="pages-account-settings-billing.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Billing & Plans">Billing &amp; Plans</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="pages-account-settings-notifications.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Notifications">Notifications</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="pages-account-settings-connections.html"
                                        className="menu-link"
                                    >
                                        <div data-i18n="Connections">Connections</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="pages-faq.html" className="menu-link">
                                <div data-i18n="FAQ">FAQ</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="pages-pricing.html" className="menu-link">
                                <div data-i18n="Pricing">Pricing</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Misc">Misc</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="pages-misc-error.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Error">Error</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="pages-misc-under-maintenance.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Under Maintenance">Under Maintenance</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="pages-misc-comingsoon.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Coming Soon">Coming Soon</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="pages-misc-not-authorized.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Not Authorized">Not Authorized</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="pages-misc-server-error.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Server Error">Server Error</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-shield-keyhole-line" />
                        <div data-i18n="Authentications">Authentications</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Login">Login</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="auth-login-basic.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Basic">Basic</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="auth-login-cover.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Cover">Cover</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Register">Register</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="auth-register-basic.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Basic">Basic</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="auth-register-cover.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Cover">Cover</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="auth-register-multisteps.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Multi-steps">Multi-steps</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Verify Email">Verify Email</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="auth-verify-email-basic.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Basic">Basic</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="auth-verify-email-cover.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Cover">Cover</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Reset Password">Reset Password</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="auth-reset-password-basic.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Basic">Basic</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="auth-reset-password-cover.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Cover">Cover</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Forgot Password">Forgot Password</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="auth-forgot-password-basic.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Basic">Basic</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="auth-forgot-password-cover.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Cover">Cover</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <div data-i18n="Two Steps">Two Steps</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a
                                        href="auth-two-steps-basic.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Basic">Basic</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="auth-two-steps-cover.html"
                                        className="menu-link"
                                        target="_blank"
                                    >
                                        <div data-i18n="Cover">Cover</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ri-git-commit-line" />
                        <div data-i18n="Wizard Examples">Wizard Examples</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="wizard-ex-checkout.html" className="menu-link">
                                <div data-i18n="Checkout">Checkout</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="wizard-ex-property-listing.html" className="menu-link">
                                <div data-i18n="Property Listing">Property Listing</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="wizard-ex-create-deal.html" className="menu-link">
                                <div data-i18n="Create Deal">Create Deal</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="modal-examples.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-tv-2-line" />
                        <div data-i18n="Modal Examples">Modal Examples</div>
                    </a>
                </li>

            </ul>
        </aside>

    );
}

export default Sidebar;
