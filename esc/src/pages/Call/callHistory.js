import { useState } from "react";
import * as apis from "../../apis"

function CallHistory() {
    
    
    
    const handleChangeadd = () => {
       
    }

    const handleSubmitAdd = (e) => {
        e.preventDefault();
        const FetApi = async() =>{
            await apis.AddCallHistory()
        } 
    }

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
                                    <div className="add-new">
                                        <button
                                            className="btn btn-primary waves-effect waves-light"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasAddUser"
                                        >
                                            <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none" />
                                            <span className="d-none d-sm-inline-block">
                                                {" "}
                                                Add New User{" "}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <table
                                className="datatables-order table dataTable no-footer dtr-column"
                                id="DataTables_Table_0"
                                aria-describedby="DataTables_Table_0_info"
                                style={{ width: 1384 }}
                            >
                                <thead>
                                    <tr>
                                        <th
                                            className="control sorting_disabled dtr-hidden"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 0, display: "none" }}
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
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 154 }}
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
                                            style={{ width: 302 }}
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
                                            style={{ width: 117 }}
                                            aria-label="payment: activate to sort column ascending"
                                        >
                                            Phone Number
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{    width: 136 }}
                                            aria-label="status: activate to sort column ascending"
                                        >
                                            status
                                        </th>
                                        
                                        <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 76 }}
                                            aria-label="Actions"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd">
                                        <td
                                            className="  control"
                                            tabIndex={0}
                                            style={{ display: "none" }}
                                        />
                                        <td className="  dt-checkboxes-cell">
                                            <input
                                                type="checkbox"
                                                className="dt-checkboxes form-check-input"
                                            />
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
                                            <span
                                                className="badge px-2 rounded-pill bg-label-success"
                                                text-capitalized=""
                                            >
                                                0971279512
                                            </span>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-warning">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Pending
                                            </h6>
                                        </td>
                                        
                                        <td>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-line" />
                                                </button>
                                                <div
                                                    className="dropdown-menu dropdown-menu-end m-0"
                                                    style={{}}
                                                >
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
                                        <td
                                            className="  control"
                                            tabIndex={0}
                                            style={{ display: "none" }}
                                        />
                                        <td className="  dt-checkboxes-cell">
                                            <input
                                                type="checkbox"
                                                className="dt-checkboxes form-check-input"
                                            />
                                        </td>
                                        
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Apr 17, 2023, 6:43 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <span className="avatar-initial rounded-circle bg-label-primary">
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
                                            <span
                                                className="badge px-2 rounded-pill bg-label-success"
                                                text-capitalized=""
                                            >
                                                    0359512788
                                            </span>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-danger">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Failed
                                            </h6>
                                        </td>
                                        
                                        <td>
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
                                        <td
                                            className="  control"
                                            tabIndex={0}
                                            style={{ display: "none" }}
                                        />
                                        <td className="  dt-checkboxes-cell">
                                            <input
                                                type="checkbox"
                                                className="dt-checkboxes form-check-input"
                                            />
                                        </td>
                                        
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Apr 17, 2023, 8:05 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <span className="avatar-initial rounded-circle bg-label-success">
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
                                            <span
                                                className="badge px-2 rounded-pill bg-label-primary"
                                                text-capitalized=""
                                            >
                                                0311212378
                                            </span>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        
                                        <td>
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
                                        <td
                                            className="  control"
                                            tabIndex={0}
                                            style={{ display: "none" }}
                                        />
                                        <td className="  dt-checkboxes-cell">
                                            <input
                                                type="checkbox"
                                                className="dt-checkboxes form-check-input"
                                            />
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
                                            <span
                                                className="badge px-2 rounded-pill bg-label-info"
                                                text-capitalized=""
                                            >
                                                03456784688
                                            </span>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        
                                        <td>
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
                                        <td
                                            className="  control"
                                            tabIndex={0}
                                            style={{ display: "none" }}
                                        />
                                        <td className="  dt-checkboxes-cell">
                                            <input
                                                type="checkbox"
                                                className="dt-checkboxes form-check-input"
                                            />
                                        </td>
                                        
                                        <td className="sorting_1">
                                            <span className="text-nowrap">Aug 14, 2022, 3:26 </span>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper me-3">
                                                    <div className="avatar avatar-sm">
                                                        <span className="avatar-initial rounded-circle bg-label-dark">
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
                                            <span
                                                className="badge px-2 rounded-pill bg-label-success"
                                                text-capitalized=""
                                            >
                                                09734562719
                                            </span>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        
                                        <td>
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
                                        <td
                                            className="  control"
                                            tabIndex={0}
                                            style={{ display: "none" }}
                                        />
                                        <td className="  dt-checkboxes-cell">
                                            <input
                                                type="checkbox"
                                                className="dt-checkboxes form-check-input"
                                            />
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
                                            <span
                                                className="badge px-2 rounded-pill bg-label-primary"
                                                text-capitalized=""
                                            >
                                                09865721153
                                            </span>
                                        </td>
                                        <td>
                                            <h6 className="mb-0 w-px-100 d-flex align-items-center text-secondary">
                                                <i className="ri-circle-fill ri-10px me-1" />
                                                Cancelled
                                            </h6>
                                        </td>
                                        
                                        <td>
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
                        </div>
                    </div>
                    {/* Offcanvas to add new user */}
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasAddUser"
                        aria-labelledby="offcanvasAddUserLabel"
                    >
                        <div className="offcanvas-header border-bottom">
                            <h5 id="offcanvasAddUserLabel" className="offcanvas-title">
                                Add Call History
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body mx-0 flex-grow-0 h-100">
                            <form
                                onSubmit={handleSubmitAdd}
                                className="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework"
                                id="addNewUserForm"
                                onsubmit="return false"
                                noValidate="novalidate"
                            >
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="add-user-fullname"
                                        placeholder="John Doe"
                                        name="employeeId"
                                        aria-label="John Doe"
                                    />
                                    <label htmlFor="add-user-fullname">Implementation staff</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                
                                <div className="form-floating form-floating-outline mb-5">
                                    <input
                                        type="text"
                                        id="add-user-contact"
                                        className="form-control phone-mask"
                                        placeholder="+84 974365472"
                                        aria-label="john.doe@example.com"
                                        name="phoneNumber"
                                    />
                                    <label htmlFor="add-user-contact">Contact</label>
                                </div>
                                
                                <div className="form-floating form-floating-outline mb-5 form-floating-select2">
                                    <div className="position-relative">
                                        <select
                                            id="country"
                                            className="select2 form-select"
                                            data-select2-id="country"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <option value="" data-select2-id={2}>
                                                Select
                                            </option>
                                            <option value="Australia">Australia</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Canada">Canada</option>
                                            <option value="China">China</option>
                                            <option value="France">France</option>
                                            <option value="Germany">Germany</option>
                                            <option value="India">India</option>
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
                                        
                                    </div>
                                    <label htmlFor="country">Status</label>
                                </div>
                                <div className="form-floating form-floating-outline mb-5">
                                    <select id="user-role" className="form-select">
                                        <option value="subscriber">Subscriber</option>
                                        <option value="editor">Editor</option>
                                        <option value="maintainer">Maintainer</option>
                                        <option value="author">Author</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    <label htmlFor="user-role">User Role</label>
                                </div>
                                <div className="form-floating form-floating-outline mb-5">
                                    <select id="user-plan" className="form-select">
                                        <option value="basic">Basic</option>
                                        <option value="enterprise">Enterprise</option>
                                        <option value="company">Company</option>
                                        <option value="team">Team</option>
                                    </select>
                                    <label htmlFor="user-plan">Select Plan</label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light"
                                >
                                    Submit
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-outline-danger waves-effect"
                                    data-bs-dismiss="offcanvas"
                                >
                                    Cancel
                                </button>
                                <input type="hidden" />
                            </form>
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