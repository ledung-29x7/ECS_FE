import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { publicRoutes } from '~/routes';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
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
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
