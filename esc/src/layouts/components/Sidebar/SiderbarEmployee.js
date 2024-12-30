import { useState, useEffect } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SidebarEmployee = (props) => {
    useEffect(() => {
        try {
            // Kiểm tra sự tồn tại của window.Menu
            if (typeof window.Menu === 'function') {
                const layoutMenu = document.querySelector('#layout-menu');
                if (layoutMenu) {
                    new window.Menu(layoutMenu, {
                        orientation: 'vertical',
                        accordion: true,
                        animate: true,
                    });
                    console.log('Menu initialized successfully.');
                } else {
                    console.error('Menu element not found.');
                }
            } else {
                console.error('window.Menu không tồn tại hoặc không phải là constructor.');
            }
        } catch (error) {
            console.error('Lỗi khởi tạo Menu:', error);
        }
    }, []);

    const [collapseOpen, setCollapseOpen] = useState();
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    };
    // toggles collapse between opened and closed (true/false)
    const toggleCollapse = () => {
        setCollapseOpen((data) => !data);
    };
    // closes the collapse
    const closeCollapse = () => {
        setCollapseOpen(false);
    };
    // creates the links that appear in the left menu / Sidebar
    const createLinks = (routes) => {
        return routes.map((prop, key) => {
            if (prop.role === 'employee') {
                return (
                    <NavLink
                        to={prop.path}
                        key={key}
                        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
                    >
                        <li className="menu-link">
                            <i className={`menu-icon  ${prop.icon}`} />
                            <div data-i18n={prop.name}>{prop.name}</div>
                        </li>
                    </NavLink>
                );
            }
        });
    };

    const { bgColor, routes, logo } = props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
        navbarBrandProps = {
            to: logo.innerLink,
            tag: Link,
        };
    } else if (logo && logo.outterLink) {
        navbarBrandProps = {
            href: logo.outterLink,
            target: '_blank',
        };
    }

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-logo demo me-1">
                        <span style={{ color: 'var(--bs-primary)' }}>
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
                    <span className="app-brand-text demo menu-text fw-semibold ms-2">Materio</span>
                </a>
                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                    <i className="menu-toggle-icon d-xl-block align-middle" />
                </a>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
                {/* e-commerce-app menu start */}
                {createLinks(routes)}
                {/* e-commerce-app menu end */}
            </ul>
        </aside>
    );
};

export default SidebarEmployee;
