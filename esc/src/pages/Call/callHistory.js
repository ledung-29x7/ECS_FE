function CallHistory() {
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                {/* Order List Widget */}
                <div className="card mb-6">
                    <div className="card-widget-separator-wrapper">
                        <div className="card-body card-widget-separator">
                            <div className="row gy-4 gy-sm-1">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                                        <div>
                                            <h4 className="mb-0">56</h4>
                                            <p className="mb-0">Pending Payment</p>
                                        </div>
                                        <div className="avatar me-sm-6">
                                            <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                <i className="ri-calendar-2-line ri-24px" />
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="d-none d-sm-block d-lg-none me-6" />
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                                        <div>
                                            <h4 className="mb-0">12,689</h4>
                                            <p className="mb-0">Completed</p>
                                        </div>
                                        <div className="avatar me-lg-6">
                                            <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                <i className="ri-check-double-line ri-24px" />
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="d-none d-sm-block d-lg-none" />
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                                        <div>
                                            <h4 className="mb-0">124</h4>
                                            <p className="mb-0">Refunded</p>
                                        </div>
                                        <div className="avatar me-sm-6">
                                            <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                <i className="ri-wallet-3-line ri-24px" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h4 className="mb-0">32</h4>
                                            <p className="mb-0">Failed</p>
                                        </div>
                                        <div className="avatar">
                                            <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                <i className="ri-error-warning-line ri-24px" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Order List Table */}
                <div className="card">
                    <div className="card-datatable table-responsive">
                        <div
                            id="DataTables_Table_0_wrapper"
                            className="dataTables_wrapper dt-bootstrap5 no-footer"
                        >
                            <div className="card-header d-flex flex-column flex-md-row align-items-start align-items-md-center py-0 pb-5 pb-md-0">
                                <div>
                                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                        <label>
                                            <input
                                                type="search"
                                                className="form-control form-control-sm ms-0"
                                                placeholder="Search Order"
                                                aria-controls="DataTables_Table_0"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex align-items-md-baseline justify-content-md-end gap-4">
                                    <div
                                        className="dataTables_length my-0"
                                        id="DataTables_Table_0_length"
                                    >
                                        <label>
                                            <select
                                                name="DataTables_Table_0_length"
                                                aria-controls="DataTables_Table_0"
                                                className="form-select form-select-sm"
                                            >
                                                <option value={10}>10</option>
                                                <option value={40}>40</option>
                                                <option value={60}>60</option>
                                                <option value={80}>80</option>
                                                <option value={100}>100</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="dt-action-buttons pt-0">
                                        <div className="dt-buttons btn-group flex-wrap">
                                            <div className="btn-group">
                                                <button
                                                    className="btn btn-secondary buttons-collection dropdown-toggle btn-outline-secondary waves-effect waves-light"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    type="button"
                                                    aria-haspopup="dialog"
                                                    aria-expanded="false"
                                                >
                                                    <span>
                                                        <i className="ri-download-line ri-16px me-2" />{" "}
                                                        <span className="d-none d-sm-inline-block">Export</span>
                                                    </span>
                                                </button>
                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table
                                className="datatables-order table dataTable no-footer dtr-column collapsed"
                                id="DataTables_Table_0"
                                aria-describedby="DataTables_Table_0_info"
                                style={{ width: 1143 }}
                            >
                                <thead>
                                    <tr>
                                        <th
                                            className="control sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 0 }}
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
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 46 }}
                                            aria-label="order: activate to sort column ascending"
                                        >
                                            order
                                        </th>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 126 }}
                                            aria-label="date: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            date
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 253 }}
                                            aria-label="customers: activate to sort column ascending"
                                        >
                                            Staff
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 94 }}
                                            aria-label="payment: activate to sort column ascending"
                                        >
                                            phone number
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 111 }}
                                            aria-label="status: activate to sort column ascending"
                                        >
                                            status
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 139 }}
                                            aria-label="method: activate to sort column ascending"
                                        >
                                            method
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#6979</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Apr 15, 2023, 10:21</span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <img
                                                            src="../../assets/img/avatars/19.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Cristine Easom</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        ceasomw@theguardian.com
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-warning">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Pending
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-success"
                                                text-capitalized=""
                                            >
                                                Delivered
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/master-light.png"
                                                    alt="master-light"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    2356
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#6624</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Apr 17, 2023, 6:43 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <span className="avatar-initial rounded-circle bg-label-dark">
                                                            FS
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Fayre Screech</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        fscreechs@army.mil
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-danger">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Failed
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-success"
                                                text-capitalized=""
                                            >
                                                Delivered
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/master-light.png"
                                                    alt="master-light"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    2077
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#9305</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Apr 17, 2023, 8:05 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <span className="avatar-initial rounded-circle bg-label-dark">
                                                            PP
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Pauline Pfaffe</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        ppfaffe1i@wikia.com
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-primary"
                                                text-capitalized=""
                                            >
                                                Out for Delivery
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/paypal.png"
                                                    alt="paypal"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    @gmail.com
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#8005</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Apr 22, 2023, 3:01 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <img
                                                            src="../../assets/img/avatars/17.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Maurits Nealey</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        mnealeyf@japanpost.jp
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-success">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Paid
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-warning"
                                                text-capitalized=""
                                            >
                                                Dispatched
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/master-light.png"
                                                    alt="master-light"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    1555
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#5859</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Apr 29, 2023, 9:52 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <span className="avatar-initial rounded-circle bg-label-primary">
                                                            EV
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Eydie Vogelein</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        evogelein2g@forbes.com
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-primary"
                                                text-capitalized=""
                                            >
                                                Out for Delivery
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/paypal.png"
                                                    alt="paypal"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    @gmail.com
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#8114</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Apr 8, 2023, 3:39 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <img
                                                            src="../../assets/img/avatars/20.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Ulysses Goodlife</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        ugoodlife2p@blogger.com
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-danger">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Failed
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-primary"
                                                text-capitalized=""
                                            >
                                                Out for Delivery
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/master-light.png"
                                                    alt="master-light"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    4509
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#6890</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Aug 1, 2022, 7:24 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <img
                                                            src="../../assets/img/avatars/9.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Etienne Duke</span>
                                                    </a>
                                                    <small className="text-truncate">eduke1z@dell.com</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-info"
                                                text-capitalized=""
                                            >
                                                Ready to Pickup
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/master-light.png"
                                                    alt="master-light"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    3507
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#5911</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Aug 14, 2022, 3:26 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <span className="avatar-initial rounded-circle bg-label-success">
                                                            HM
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Hilliard Merck</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        hmerck2n@printfriendly.com
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-success"
                                                text-capitalized=""
                                            >
                                                Delivered
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/paypal.png"
                                                    alt="paypal"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    @gmail.com
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#5531</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Aug 20, 2022, 3:21 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <img
                                                            src="../../assets/img/avatars/19.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Cletus Arias</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        carias21@rambler.ru
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-danger">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Failed
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-warning"
                                                text-capitalized=""
                                            >
                                                Dispatched
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/master-light.png"
                                                    alt="master-light"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    5851
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
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
                                        <td>
                                            <a href="app-ecommerce-order-details.html">
                                                <span>#8044</span>
                                            </a>
                                        </td>
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Aug 22, 2022, 6:36 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <img
                                                            src="../../assets/img/avatars/5.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="pages-profile-user.html"
                                                        className="text-truncate text-heading"
                                                    >
                                                        <span className="fw-medium">Nowell Cornford</span>
                                                    </a>
                                                    <small className="text-truncate">
                                                        ncornfordn@sogou.com
                                                    </small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        <td>
                                            <span
                                                className="badge px-2 rounded-pill bg-label-primary"
                                                text-capitalized=""
                                            >
                                                Out for Delivery
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center text-nowrap">
                                                <img
                                                    src="../../assets/img/icons/payments/paypal.png"
                                                    alt="paypal"
                                                    className="me-2"
                                                    width={29}
                                                />
                                                <span>
                                                    <i className="ri-more-line" />
                                                    @gmail.com
                                                </span>
                                            </div>
                                        </td>
                                        <td className="dtr-hidden" style={{ display: "none" }}>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-ecommerce-order-details.html"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </a>
                                                    <a
                                                        href="javascript:0;"
                                                        className="dropdown-item delete-record"
                                                    >
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row mx-1">
                                <div className="col-sm-12 col-md-6">
                                    <div
                                        className="dataTables_info"
                                        id="DataTables_Table_0_info"
                                        role="status"
                                        aria-live="polite"
                                    >
                                        Displaying 1 to 10 of 100 entries
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
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
                                                    data-dt-idx={9}
                                                    tabIndex={0}
                                                    className="page-link"
                                                >
                                                    10
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
export default CallHistory;