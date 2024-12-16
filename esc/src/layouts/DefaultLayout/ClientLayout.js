import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import { publicRoutes } from '~/routes';
import SidebarClient from '../components/Sidebar/SiderbarClient';

const cx = classNames.bind(styles);

function ClientLayout({ children }) {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <SidebarClient routes={publicRoutes} />
                <div class="layout-page">
                    <Header />
                    <div className="">
                        <div className="">{children}</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

ClientLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ClientLayout;
