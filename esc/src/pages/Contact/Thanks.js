import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../../layouts/components/Header';
import styles from '../../layouts/DefaultLayout/DefaultLayout.module.scss';
import { publicRoutes } from '~/routes';
import SidebarClient from '../../layouts/components/Sidebar/SiderbarClient';
const cx = classNames.bind(styles);
function Thank({ children }) {
    const idClient = window.sessionStorage.getItem('idClient');
    return (
        <>
              {idClient !== null ? (
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
            ) : (
                <div className="misc-wrapper"  style={{
                    background: `url(https://cdn.create.vista.com/api/media/small/285625338/stock-photo-cropped-view-man-giving-white-card-frame-thank-you-lettering) no-repeat center`,
                    backgroundSize: 'cover'
                }}>
                    <h1 className="mb-2 mx-2" style={{ fontSize: '6rem', lineHeight: '6rem' }}>
                    </h1>
                    {/* <h4 className="mb-2">thank you</h4>
                    <p className="mb-10 mx-2">Thank you for using our service!</p> */}
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
                        <div className="d-flex flex-column align-items-center " style={{
                                paddingTop: '800px',
                            }}>
                            <div>
                                <a
                                    href="index.html"
                                    className="btn btn-primary text-center my-6 waves-effect waves-light"
                                >
                                    Back to home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

Thank.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Thank;
