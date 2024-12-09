import { useState } from "react";
import * as apis from "../../apis"
function Employee() {
    
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                {/* Product List Widget */}
                <div className="card mb-6">
                    <div className="card-widget-separator-wrapper">
                        <div className="card-body card-widget-separator">
                            <div className="row gy-4 gy-sm-1">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                                        <div>
                                            <p className="mb-1">In-store Sales</p>
                                            <h4 className="mb-1">$5,345.43</h4>
                                            <p className="mb-0">
                                                <span className="me-2">5k orders</span>
                                                <span className="badge rounded-pill bg-label-success">+5.7%</span>
                                            </p>
                                        </div>
                                        <div className="avatar me-sm-6">
                                            <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                <i className="ri-home-6-line ri-24px" />
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="d-none d-sm-block d-lg-none me-6" />
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                                        <div>
                                            <p className="mb-1">Website Sales</p>
                                            <h4 className="mb-1">$674,347.12</h4>
                                            <p className="mb-0">
                                                <span className="me-2">21k orders</span>
                                                <span className="badge rounded-pill bg-label-success">+12.4%</span>
                                            </p>
                                        </div>
                                        <div className="avatar me-lg-6">
                                            <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                <i className="ri-computer-line ri-24px" />
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="d-none d-sm-block d-lg-none" />
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                                        <div>
                                            <p className="mb-1">Discount</p>
                                            <h4 className="mb-1">$14,235.12</h4>
                                            <p className="mb-0">6k orders</p>
                                        </div>
                                        <div className="avatar me-sm-6">
                                            <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                <i className="ri-gift-line ri-24px" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="mb-1">Affiliate</p>
                                            <h4 className="mb-1">$8,345.23</h4>
                                            <p className="mb-0">
                                                <span className="me-2">150 orders</span>
                                                <span className="badge rounded-pill bg-label-danger">-3.5%</span>
                                            </p>
                                        </div>
                                        <div className="avatar">
                                            <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                <i className="ri-money-dollar-circle-line ri-24px" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product List Table */}
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">Filter</h5>
                        <div className="d-flex justify-content-between align-items-center row pt-4 gap-4 gap-md-0">
                            <div className="col-md-4 product_status" />
                            <div className="col-md-4 product_category" />
                            <div className="col-md-4 product_stock" />
                        </div>
                    </div>
                    <div className="card-datatable table-responsive">
                        <table className="datatables-products table">
                            <thead>
                                <tr>
                                    <th />
                                    <th />
                                    <th>product</th>
                                    <th>category</th>
                                    <th>stock</th>
                                    <th>sku</th>
                                    <th>price</th>
                                    <th>qty</th>
                                    <th>status</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* / Content */}
            {/* Footer */}
            <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl">
                    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                        <div className="text-body mb-2 mb-md-0">
                            © , made with
                            <span className="text-danger">
                                <i className="tf-icons ri-heart-fill" />
                            </span>
                            by
                            <a href="https://themeselection.com/" target="_blank" className="footer-link">
                                ThemeSelection
                            </a>
                        </div>
                        <div className="d-none d-lg-inline-block">
                            <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">
                                License
                            </a>
                            <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">
                                More Themes
                            </a>
                            <a
                                href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/net-core-mvc-introduction.html"
                                target="_blank"
                                className="footer-link me-4"
                            >
                                Documentation
                            </a>
                            <a
                                href="https://themeselection.com/support/"
                                target="_blank"
                                className="footer-link d-none d-sm-inline-block"
                            >
                                Support
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* / Footer */}
            <div className="content-backdrop fade" />
        </div>
    );
}
export default Employee;
