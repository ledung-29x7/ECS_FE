import { useState, useEffect } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SidebarLogistic = (props) => {
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

    // creates the links that appear in the left menu / Sidebar
    const createLinks = (routes) => {
        return routes.map((prop, key) => {
            if (prop.role === 'logistic') {
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

export default SidebarLogistic;
