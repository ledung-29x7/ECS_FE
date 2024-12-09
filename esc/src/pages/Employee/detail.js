function DetailEmployee() {
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between mb-6 text-center text-sm-start gap-2">
                    <div className="mb-2 mb-sm-0">
                        <h4 className="mb-1">Customer ID #634759</h4>
                        <p className="mb-0">Aug 17, 2020, 5:48 (ET)</p>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-danger delete-customer waves-effect"
                    >
                        Delete Customer
                    </button>
                </div>
                <div className="row">
                    {/* Customer-detail Sidebar */}
                    <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
                        {/* Customer-detail Card */}
                        <div className="card mb-6">
                            <div className="card-body pt-12">
                                <div className="customer-avatar-section">
                                    <div className="d-flex align-items-center flex-column">
                                        <img
                                            className="img-fluid rounded mb-4"
                                            src="../../assets/img/avatars/1.png"
                                            height={120}
                                            width={120}
                                            alt="User avatar"
                                        />
                                        <div className="customer-info text-center mb-6">
                                            <h5 className="mb-0">Lorine Hischke</h5>
                                            <span>Customer ID #634759</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around flex-wrap mb-6 gap-0 gap-md-3 gap-lg-4">
                                    <div className="d-flex align-items-center gap-4 me-5">
                                        <div className="avatar">
                                            <div className="avatar-initial rounded bg-label-primary">
                                                <i className="ri-shopping-cart-line ri-24px" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">184</h5>
                                            <span>Orders</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="avatar">
                                            <div className="avatar-initial rounded bg-label-primary">
                                                <i className="ri-money-dollar-circle-line ri-24px" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">$12,378</h5>
                                            <span>Spent</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-container">
                                    <h5 className="border-bottom text-capitalize pb-4 mt-6 mb-4">
                                        Details
                                    </h5>
                                    <ul className="list-unstyled mb-6">
                                        <li className="mb-2">
                                            <span className="h6 me-1">Username:</span>
                                            <span>lorine.hischke</span>
                                        </li>
                                        <li className="mb-2">
                                            <span className="h6 me-1">Email:</span>
                                            <span>vafgot@vultukir.org</span>
                                        </li>
                                        <li className="mb-2">
                                            <span className="h6 me-1">Status:</span>
                                            <span className="badge bg-label-success rounded-pill">
                                                Active
                                            </span>
                                        </li>
                                        <li className="mb-2">
                                            <span className="h6 me-1">Contact:</span>
                                            <span>(123) 456-7890</span>
                                        </li>
                                        <li className="mb-2">
                                            <span className="h6 me-1">Country:</span>
                                            <span>USA</span>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-content-center">
                                        <a
                                            href="javascript:;"
                                            className="btn btn-primary w-100 waves-effect waves-light"
                                            data-bs-target="#editUser"
                                            data-bs-toggle="modal"
                                        >
                                            Edit Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Customer-detail Card */}
                        {/* Plan Card */}
                        <div className="card mb-4 bg-primary">
                            <div className="card-body">
                                <div className="row justify-content-between mb-4">
                                    <div className="col-md-12 col-lg-7 col-xl-12 col-xxl-7 text-center text-lg-start text-xl-center text-xxl-start order-1  order-lg-0 order-xl-1 order-xxl-0">
                                        <h5 className="card-title text-white text-nowrap mb-4">
                                            Upgrade to premium
                                        </h5>
                                        <p className="card-text text-white">
                                            Upgrade customer to premium membership to access pro features.
                                        </p>
                                    </div>
                                    <span className="col-md-12 col-lg-5 col-xl-12 col-xxl-5 text-center mx-auto mx-md-0 mb-2">
                                        <img
                                            src="../../assets/img/illustrations/rocket.png"
                                            className="w-px-75 m-2"
                                            alt="3dRocket"
                                        />
                                    </span>
                                </div>
                                <button
                                    className="btn btn-white text-primary w-100 fw-medium shadow-sm waves-effect waves-light"
                                    data-bs-target="#upgradePlanModal"
                                    data-bs-toggle="modal"
                                >
                                    Upgrade to premium
                                </button>
                            </div>
                        </div>
                        {/* /Plan Card */}
                    </div>
                    {/*/ Customer Sidebar */}
                    {/* Customer Content */}
                    <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                        {/* Customer Pills */}
                        <div className="nav-align-top">
                            <ul className="nav nav-pills flex-column flex-md-row mb-6 row-gap-2">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active waves-effect waves-light"
                                        href="javascript:void(0);"
                                    >
                                        <i className="ri-group-line me-1_5" />
                                        Overview
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link waves-effect waves-light"
                                        href="app-ecommerce-customer-details-security.html"
                                    >
                                        <i className="ri-lock-2-line me-1_5" />
                                        Security
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link waves-effect waves-light"
                                        href="app-ecommerce-customer-details-billing.html"
                                    >
                                        <i className="ri-map-pin-line me-1_5" />
                                        Address &amp; Billing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link waves-effect waves-light"
                                        href="app-ecommerce-customer-details-notifications.html"
                                    >
                                        <i className="ri-notification-4-line me-1_5" />
                                        Notifications
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/*/ Customer Pills */}
                        {/*  Customer cards */}
                        <div className="row text-nowrap">
                            <div className="col-md-6 mb-6">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="card-icon mb-2">
                                            <div className="avatar">
                                                <div className="avatar-initial rounded bg-label-primary">
                                                    <i className="ri-money-dollar-circle-line ri-24px" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <h5 className="card-title mb-2">Account Balance</h5>
                                            <div className="d-flex align-items-baseline gap-1">
                                                <h5 className="text-primary mb-0">$2345</h5>
                                                <p className="mb-0"> Credit Left</p>
                                            </div>
                                            <p className="mb-0 text-truncate">
                                                Account balance for next purchase
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-icon mb-2">
                                            <div className="avatar">
                                                <div className="avatar-initial rounded bg-label-success">
                                                    <i className="ri-gift-line ri-24px" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <h5 className="card-title mb-2">Loyalty Program</h5>
                                            <span className="badge bg-label-success mb-2 rounded-pill">
                                                Platinum member
                                            </span>
                                            <p className="mb-0">3000 points to next tier</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-icon mb-2">
                                            <div className="avatar">
                                                <div className="avatar-initial rounded bg-label-warning">
                                                    <i className="ri-star-smile-line ri-24px" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <h5 className="card-title mb-2">Wishlist</h5>
                                            <div className="d-flex align-items-baseline gap-1">
                                                <h5 className="text-warning mb-0">15</h5>
                                                <p className="mb-0">Items in wishlist</p>
                                            </div>
                                            <p className="mb-0 text-truncate">
                                                Receive notification when items go on sale
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-icon mb-2">
                                            <div className="avatar">
                                                <div className="avatar-initial rounded bg-label-info">
                                                    <i className="ri-vip-crown-line ri-24px" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <h5 className="card-title mb-2">Coupons</h5>
                                            <div className="d-flex align-items-baseline gap-1">
                                                <h5 className="text-info mb-0">21</h5>
                                                <p className="mb-0">Coupons you win</p>
                                            </div>
                                            <p className="mb-0 text-truncate">
                                                Use coupon on next purchase
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ customer cards */}
                        {/* Invoice table */}
                        <div className="card mb-6">
                            <div className="table-responsive mb-4">
                                <div
                                    id="DataTables_Table_0_wrapper"
                                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                                >
                                    <div className="card-header d-flex flex-wrap py-0 pt-5 pt-sm-0 flex-column flex-sm-row">
                                        <div className="head-label text-center me-4 ms-1">
                                            <h5 className="card-title mb-0 text-nowrap">Orders placed</h5>
                                        </div>
                                        <div
                                            id="DataTables_Table_0_filter"
                                            className="dataTables_filter"
                                        >
                                            <label>
                                                <input
                                                    type="search"
                                                    className="form-control"
                                                    placeholder="Search order"
                                                    aria-controls="DataTables_Table_0"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <table
                                        className="table datatables-customer-order dataTable no-footer dtr-column collapsed"
                                        id="DataTables_Table_0"
                                        aria-describedby="DataTables_Table_0_info"
                                        style={{ width: 682 }}
                                    >
                                        <thead>
                                            <tr>
                                                <th
                                                    className="control sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 7 }}
                                                    aria-label=""
                                                />
                                                <th
                                                    className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 18 }}
                                                    data-col={1}
                                                    aria-label=""
                                                >
                                                    <input type="checkbox" className="form-check-input" />
                                                </th>
                                                <th
                                                    className="sorting sorting_desc"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 61 }}
                                                    aria-label="Order: activate to sort column ascending"
                                                    aria-sort="descending"
                                                >
                                                    Order
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 114 }}
                                                    aria-label="Date: activate to sort column ascending"
                                                >
                                                    Date
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 149 }}
                                                    aria-label="Status: activate to sort column ascending"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 69 }}
                                                    aria-label="Spent: activate to sort column ascending"
                                                >
                                                    Spent
                                                </th>
                                                <th
                                                    className="sorting_disabled dtr-hidden"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 0, display: "none" }}
                                                    aria-label="Actions"
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="odd">
                                                <td className="control" tabIndex={0} style={{}} />
                                                <td className="  dt-checkboxes-cell">
                                                    <input
                                                        type="checkbox"
                                                        className="dt-checkboxes form-check-input"
                                                    />
                                                </td>
                                                <td className="sorting_1">
                                                    <a href="app-ecommerce-order-details.html">
                                                        <span>#9957</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-nowrap">Nov 29, 2022</span>{" "}
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge rounded-pill bg-label-primary"
                                                        text-capitalized=""
                                                    >
                                                        Out for delivery
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$59.28</span>
                                                </td>
                                                <td className="dtr-hidden" style={{ display: "none" }}>
                                                    <div>
                                                        <button
                                                            className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ri-more-2-line ri-22px" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <a href="javascript:;" className="dropdown-item">
                                                                View
                                                            </a>
                                                            <a
                                                                href="javascript:;"
                                                                className="dropdown-item  delete-record"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="control" tabIndex={0} style={{}} />
                                                <td className="  dt-checkboxes-cell">
                                                    <input
                                                        type="checkbox"
                                                        className="dt-checkboxes form-check-input"
                                                    />
                                                </td>
                                                <td className="sorting_1">
                                                    <a href="app-ecommerce-order-details.html">
                                                        <span>#9941</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-nowrap">Jun 20, 2022</span>{" "}
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge rounded-pill bg-label-info"
                                                        text-capitalized=""
                                                    >
                                                        Ready to Pickup
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$333.83</span>
                                                </td>
                                                <td className="dtr-hidden" style={{ display: "none" }}>
                                                    <div>
                                                        <button
                                                            className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ri-more-2-line ri-22px" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <a href="javascript:;" className="dropdown-item">
                                                                View
                                                            </a>
                                                            <a
                                                                href="javascript:;"
                                                                className="dropdown-item  delete-record"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="control" tabIndex={0} style={{}} />
                                                <td className="  dt-checkboxes-cell">
                                                    <input
                                                        type="checkbox"
                                                        className="dt-checkboxes form-check-input"
                                                    />
                                                </td>
                                                <td className="sorting_1">
                                                    <a href="app-ecommerce-order-details.html">
                                                        <span>#9885</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-nowrap">Sep 11, 2022</span>{" "}
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge rounded-pill bg-label-success"
                                                        text-capitalized=""
                                                    >
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$62.71</span>
                                                </td>
                                                <td className="dtr-hidden" style={{ display: "none" }}>
                                                    <div>
                                                        <button
                                                            className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ri-more-2-line ri-22px" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <a href="javascript:;" className="dropdown-item">
                                                                View
                                                            </a>
                                                            <a
                                                                href="javascript:;"
                                                                className="dropdown-item  delete-record"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="control" tabIndex={0} style={{}} />
                                                <td className="  dt-checkboxes-cell">
                                                    <input
                                                        type="checkbox"
                                                        className="dt-checkboxes form-check-input"
                                                    />
                                                </td>
                                                <td className="sorting_1">
                                                    <a href="app-ecommerce-order-details.html">
                                                        <span>#9879</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-nowrap">Dec 23, 2022</span>{" "}
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge rounded-pill bg-label-warning"
                                                        text-capitalized=""
                                                    >
                                                        Dispatched
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$100.18</span>
                                                </td>
                                                <td className="dtr-hidden" style={{ display: "none" }}>
                                                    <div>
                                                        <button
                                                            className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ri-more-2-line ri-22px" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <a href="javascript:;" className="dropdown-item">
                                                                View
                                                            </a>
                                                            <a
                                                                href="javascript:;"
                                                                className="dropdown-item  delete-record"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="control" tabIndex={0} style={{}} />
                                                <td className="  dt-checkboxes-cell">
                                                    <input
                                                        type="checkbox"
                                                        className="dt-checkboxes form-check-input"
                                                    />
                                                </td>
                                                <td className="sorting_1">
                                                    <a href="app-ecommerce-order-details.html">
                                                        <span>#9877</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-nowrap">Nov 1, 2022</span>{" "}
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge rounded-pill bg-label-success"
                                                        text-capitalized=""
                                                    >
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$67.26</span>
                                                </td>
                                                <td className="dtr-hidden" style={{ display: "none" }}>
                                                    <div>
                                                        <button
                                                            className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ri-more-2-line ri-22px" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <a href="javascript:;" className="dropdown-item">
                                                                View
                                                            </a>
                                                            <a
                                                                href="javascript:;"
                                                                className="dropdown-item  delete-record"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="control" tabIndex={0} style={{}} />
                                                <td className="  dt-checkboxes-cell">
                                                    <input
                                                        type="checkbox"
                                                        className="dt-checkboxes form-check-input"
                                                    />
                                                </td>
                                                <td className="sorting_1">
                                                    <a href="app-ecommerce-order-details.html">
                                                        <span>#9793</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-nowrap">Jan 23, 2023</span>{" "}
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge rounded-pill bg-label-success"
                                                        text-capitalized=""
                                                    >
                                                        Delivered
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$856.58</span>
                                                </td>
                                                <td className="dtr-hidden" style={{ display: "none" }}>
                                                    <div>
                                                        <button
                                                            className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ri-more-2-line ri-22px" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <a href="javascript:;" className="dropdown-item">
                                                                View
                                                            </a>
                                                            <a
                                                                href="javascript:;"
                                                                className="dropdown-item  delete-record"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="row mx-4">
                                        <div className="col-md-12 col-xxl-6 text-center text-xxl-start pb-2 pb-xxl-0 pe-0">
                                            <div
                                                className="dataTables_info"
                                                id="DataTables_Table_0_info"
                                                role="status"
                                                aria-live="polite"
                                            >
                                                Showing 1 to 6 of 100 entries
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-xxl-6">
                                            <div
                                                className="dataTables_paginate paging_simple_numbers"
                                                id="DataTables_Table_0_paginate"
                                            >
                                                <ul className="pagination">
                                                    <li
                                                        className="paginate_button page-item previous disabled"
                                                        id="DataTables_Table_0_previous"
                                                    >
                                                        <a
                                                            aria-controls="DataTables_Table_0"
                                                            aria-disabled="true"
                                                            role="link"
                                                            data-dt-idx="previous"
                                                            tabIndex={-1}
                                                            className="page-link"
                                                        >
                                                            <i className="ri-arrow-left-s-line" />
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            aria-current="page"
                                                            data-dt-idx={0}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx={1}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            2
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx={2}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            3
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx={3}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            4
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx={4}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            5
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="paginate_button page-item disabled"
                                                        id="DataTables_Table_0_ellipsis"
                                                    >
                                                        <a
                                                            aria-controls="DataTables_Table_0"
                                                            aria-disabled="true"
                                                            role="link"
                                                            data-dt-idx="ellipsis"
                                                            tabIndex={-1}
                                                            className="page-link"
                                                        >
                                                            …
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx={16}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            17
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="paginate_button page-item next"
                                                        id="DataTables_Table_0_next"
                                                    >
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx="next"
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            <i className="ri-arrow-right-s-line" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: "1%" }} />
                                    <div style={{ width: "1%" }} />
                                </div>
                            </div>
                        </div>
                        {/* /Invoice table */}
                    </div>
                    {/*/ Customer Content */}
                </div>
                {/* Modal */}
                {/* Edit User Modal */}
                <div
                    className="modal fade"
                    id="editUser"
                    tabIndex={-1}
                    style={{ display: "none" }}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                                <div className="text-center mb-6">
                                    <h4 className="mb-2">Edit User Information</h4>
                                    <p className="mb-6">
                                        Updating user details will receive a privacy audit.
                                    </p>
                                </div>
                                <form
                                    id="editUserForm"
                                    className="row g-5 fv-plugins-bootstrap5 fv-plugins-framework"
                                    onsubmit="return false"
                                    noValidate="novalidate"
                                >
                                    <div className="col-12 col-md-6 fv-plugins-icon-container">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalEditUserFirstName"
                                                name="modalEditUserFirstName"
                                                className="form-control"
                                                defaultValue="Oliver"
                                                placeholder="Oliver"
                                            />
                                            <label htmlFor="modalEditUserFirstName">First Name</label>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                    </div>
                                    <div className="col-12 col-md-6 fv-plugins-icon-container">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalEditUserLastName"
                                                name="modalEditUserLastName"
                                                className="form-control"
                                                defaultValue="Queen"
                                                placeholder="Queen"
                                            />
                                            <label htmlFor="modalEditUserLastName">Last Name</label>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                    </div>
                                    <div className="col-12 fv-plugins-icon-container">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalEditUserName"
                                                name="modalEditUserName"
                                                className="form-control"
                                                defaultValue="oliver.queen"
                                                placeholder="oliver.queen"
                                            />
                                            <label htmlFor="modalEditUserName">Username</label>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalEditUserEmail"
                                                name="modalEditUserEmail"
                                                className="form-control"
                                                defaultValue="oliverqueen@gmail.com"
                                                placeholder="oliverqueen@gmail.com"
                                            />
                                            <label htmlFor="modalEditUserEmail">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline">
                                            <select
                                                id="modalEditUserStatus"
                                                name="modalEditUserStatus"
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option value={1} selected="">
                                                    Active
                                                </option>
                                                <option value={2}>Inactive</option>
                                                <option value={3}>Suspended</option>
                                            </select>
                                            <label htmlFor="modalEditUserStatus">Status</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalEditTaxID"
                                                name="modalEditTaxID"
                                                className="form-control modal-edit-tax-id"
                                                placeholder="123 456 7890"
                                            />
                                            <label htmlFor="modalEditTaxID">Tax ID</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="input-group input-group-merge">
                                            <span className="input-group-text">US (+1)</span>
                                            <div className="form-floating form-floating-outline">
                                                <input
                                                    type="text"
                                                    id="modalEditUserPhone"
                                                    name="modalEditUserPhone"
                                                    className="form-control phone-number-mask"
                                                    defaultValue="+1 609 933 4422"
                                                    placeholder="+1 609 933 4422"
                                                />
                                                <label htmlFor="modalEditUserPhone">Phone Number</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline form-floating-select2">
                                            <div className="position-relative">
                                                <select
                                                    id="modalEditUserLanguage"
                                                    name="modalEditUserLanguage"
                                                    className="select2 form-select select2-hidden-accessible"
                                                    multiple=""
                                                    data-select2-id="modalEditUserLanguage"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="english" selected="" data-select2-id={2}>
                                                        English
                                                    </option>
                                                    <option value="spanish">Spanish</option>
                                                    <option value="french">French</option>
                                                    <option value="german">German</option>
                                                    <option value="dutch">Dutch</option>
                                                    <option value="hebrew">Hebrew</option>
                                                    <option value="sanskrit">Sanskrit</option>
                                                    <option value="hindi">Hindi</option>
                                                </select>
                                                <span
                                                    className="select2 select2-container select2-container--default"
                                                    dir="ltr"
                                                    data-select2-id={1}
                                                    style={{ width: "auto" }}
                                                >
                                                    <span className="selection">
                                                        <span
                                                            className="select2-selection select2-selection--multiple"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabIndex={-1}
                                                            aria-disabled="false"
                                                        >
                                                            <ul className="select2-selection__rendered">
                                                                <li
                                                                    className="select2-selection__choice"
                                                                    title="English"
                                                                    data-select2-id={3}
                                                                >
                                                                    <span
                                                                        className="select2-selection__choice__remove"
                                                                        role="presentation"
                                                                    >
                                                                        ×
                                                                    </span>
                                                                    English
                                                                </li>
                                                                <li className="select2-search select2-search--inline">
                                                                    <input
                                                                        className="select2-search__field"
                                                                        type="search"
                                                                        tabIndex={0}
                                                                        autoComplete="off"
                                                                        autoCorrect="off"
                                                                        autoCapitalize="none"
                                                                        spellCheck="false"
                                                                        role="searchbox"
                                                                        aria-autocomplete="list"
                                                                        placeholder=""
                                                                        style={{ width: "0.75em" }}
                                                                    />
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <label htmlFor="modalEditUserLanguage">Language</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline form-floating-select2">
                                            <div className="position-relative">
                                                <select
                                                    id="modalEditUserCountry"
                                                    name="modalEditUserCountry"
                                                    className="select2 form-select select2-hidden-accessible"
                                                    data-allow-clear="true"
                                                    data-select2-id="modalEditUserCountry"
                                                    tabIndex={-1}
                                                    aria-hidden="true"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="China">China</option>
                                                    <option value="France">France</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="India" selected="" data-select2-id={5}>
                                                        India
                                                    </option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Korea">Korea, Republic of</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Russia">Russian Federation</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Emirates">
                                                        United Arab Emirates
                                                    </option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="United States">United States</option>
                                                </select>
                                                <span
                                                    className="select2 select2-container select2-container--default"
                                                    dir="ltr"
                                                    data-select2-id={4}
                                                    style={{ width: "auto" }}
                                                >
                                                    <span className="selection">
                                                        <span
                                                            className="select2-selection select2-selection--single"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabIndex={0}
                                                            aria-disabled="false"
                                                            aria-labelledby="select2-modalEditUserCountry-container"
                                                        >
                                                            <span
                                                                className="select2-selection__rendered"
                                                                id="select2-modalEditUserCountry-container"
                                                                role="textbox"
                                                                aria-readonly="true"
                                                                title="India"
                                                            >
                                                                <span
                                                                    className="select2-selection__clear"
                                                                    title="Remove all items"
                                                                    data-select2-id={6}
                                                                >
                                                                    ×
                                                                </span>
                                                                India
                                                            </span>
                                                            <span
                                                                className="select2-selection__arrow"
                                                                role="presentation"
                                                            >
                                                                <b role="presentation" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <label htmlFor="modalEditUserCountry">Country</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check form-switch">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="editBillingAddress"
                                            />
                                            <label htmlFor="editBillingAddress" className="text-heading">
                                                Use as a billing address?
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary me-3 waves-effect waves-light"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-outline-secondary waves-effect"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                    <input type="hidden" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ Edit User Modal */}
                {/* Add New Credit Card Modal */}
                <div
                    className="modal fade"
                    id="upgradePlanModal"
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
                        <div className="modal-content">
                            <div className="modal-body pt-md-0 px-0">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                                <div className="text-center mb-6">
                                    <h4 className="mb-2">Upgrade Plan</h4>
                                    <p>Choose the best plan for user.</p>
                                </div>
                                <form
                                    id="upgradePlanForm"
                                    className="row g-5 d-flex align-items-center"
                                    onsubmit="return false"
                                >
                                    <div className="col-sm-9">
                                        <select
                                            id="choosePlan"
                                            name="choosePlan"
                                            className="form-select form-select-sm"
                                            aria-label="Choose Plan"
                                        >
                                            <option selected="">Choose Plan</option>
                                            <option value="standard">Standard - $99/month</option>
                                            <option value="exclusive">Exclusive - $249/month</option>
                                            <option value="Enterprise">Enterprise - $499/month</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 d-flex align-items-end">
                                        <button
                                            type="submit"
                                            className="btn btn-primary waves-effect waves-light"
                                        >
                                            Upgrade
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <hr className="mx-md-n5 mx-n3" />
                            <div className="modal-body pb-md-0 px-0">
                                <p className="mb-0">User current plan is standard plan</p>
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="d-flex justify-content-center me-2 mt-3">
                                        <sup className="h5 pricing-currency pt-1 mt-2 mb-0 me-1 text-primary">
                                            $
                                        </sup>
                                        <h1 className="display-3 mb-0 text-primary">99</h1>
                                        <sub className="h6 pricing-duration mt-auto mb-2 pb-1 text-body">
                                            /month
                                        </sub>
                                    </div>
                                    <button className="btn btn-outline-danger cancel-subscription mt-4 waves-effect">
                                        Cancel Subscription
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ Add New Credit Card Modal */}
                {/* /Modal */}
            </div>
            {/* / Content */}
            {/* Footer */}
            <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl">
                    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                        <div className="text-body mb-2 mb-md-0">
                            © 2024, made with{" "}
                            <span className="text-danger">
                                <i className="tf-icons ri-heart-fill" />
                            </span>{" "}
                            by{" "}
                            <a
                                href="https://themeselection.com"
                                target="_blank"
                                className="footer-link"
                            >
                                ThemeSelection
                            </a>
                        </div>
                        <div className="d-none d-lg-inline-block">
                            <a
                                href="https://themeselection.com/license/"
                                className="footer-link me-4"
                                target="_blank"
                            >
                                License
                            </a>
                            <a
                                href="https://themeselection.com/"
                                target="_blank"
                                className="footer-link me-4"
                            >
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

    )
}
export default DetailEmployee;