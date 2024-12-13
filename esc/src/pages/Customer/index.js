import { useEffect, useState } from 'react';
import * as apis from '../../apis';
import { useParams } from 'react-router-dom';
import { useStore } from 'react-redux';
function Customer() {
    const [valueAdd,setValueAdd]=useState({
        clientName:"",
        contactPerson:"",
        email:"",
        phoneNumber:"",
        address:"",
        password:""
    });

    function handleChange(e){
        setValueAdd({...valueAdd,[e.target.name]:e.target.value})
    }

    const handleSumbit=(e)=>{
        e.preventDefault();
        const FetchData = async ()=>{
            try {
                console.log("try")
                await apis.addClient(valueAdd).then((res)=>{
                    console.log("try1")
                    console.log(res)
                    if(res.status === 200){
                        window.location.reload();
                    }
                })
            } catch (error) {
                console.log(error)
            }
        };
        FetchData();
    }
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row g-6 mb-6">
                    <div className="col-sm-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="me-1">
                                        <p className="text-heading mb-1">Session</p>
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-1 me-2">21,459</h4>
                                            <p className="text-success mb-1">(+29%)</p>
                                        </div>
                                        <small className="mb-0">Total client</small>
                                    </div>
                                    <div className="avatar">
                                        <div className="avatar-initial bg-label-primary rounded">
                                            <div className="ri-group-line ri-26px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="me-1">
                                        <p className="text-heading mb-1">Paid client</p>
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-1 me-2">4,567</h4>
                                            <p className="text-success mb-1">(+18%)</p>
                                        </div>
                                        <small className="mb-0">Last week analytics</small>
                                    </div>
                                    <div className="avatar">
                                        <div className="avatar-initial bg-label-danger rounded">
                                            <div className="ri-user-add-line ri-26px scaleX-n1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="me-1">
                                        <p className="text-heading mb-1">Active client</p>
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-1 me-2">19,860</h4>
                                            <p className="text-danger mb-1">(-14%)</p>
                                        </div>
                                        <small className="mb-0">Last week analytics</small>
                                    </div>
                                    <div className="avatar">
                                        <div className="avatar-initial bg-label-success rounded">
                                            <div className="ri-user-follow-line ri-26px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="me-1">
                                        <p className="text-heading mb-1">Pending client</p>
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-1 me-2">237</h4>
                                            <p className="text-success mb-1">(+42%)</p>
                                        </div>
                                        <small className="mb-0">Last week analytics</small>
                                    </div>
                                    <div className="avatar">
                                        <div className="avatar-initial bg-label-warning rounded">
                                            <div className="ri-user-search-line ri-26px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Users List Table */}
                <div className="card">
                    <div className="card-header border-bottom">
                        <h6 className="card-title mb-0">Filters</h6>
                        <div className="d-flex justify-content-between align-items-center row pt-4 pb-2 gap-4 gap-md-0 gx-5">
                            <div className="col-md-4 user_role">
                                <select id="UserRole" className="form-select text-capitalize">
                                    <option value=""> Select Role </option>
                                    <option value="Admin">Admin</option>
                                    <option value="Author">Author</option>
                                    <option value="Editor">Editor</option>
                                    <option value="Maintainer">Maintainer</option>
                                    <option value="Subscriber">Subscriber</option>
                                </select>
                            </div>
                            <div className="col-md-4 user_plan">
                                <select id="UserPlan" className="form-select text-capitalize">
                                    <option value=""> Select Plan </option>
                                    <option value="Basic">Basic</option>
                                    <option value="Company">Company</option>
                                    <option value="Enterprise">Enterprise</option>
                                    <option value="Team">Team</option>
                                </select>
                            </div>
                            <div className="col-md-4 user_status">
                                <select
                                    id="FilterTransaction"
                                    className="form-select text-capitalize"
                                >
                                    <option value=""> Select Status </option>
                                    <option value="Pending" className="text-capitalize">
                                        Pending
                                    </option>
                                    <option value="Active" className="text-capitalize">
                                        Active
                                    </option>
                                    <option value="Inactive" className="text-capitalize">
                                        Inactive
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-datatable table-responsive">
                        <div
                            id="DataTables_Table_0_wrapper"
                            className="dataTables_wrapper dt-bootstrap5 no-footer"
                        >
                            <div className="row mx-1">
                                <div className="col-md-2 d-flex align-items-center justify-content-md-start justify-content-center ps-4">
                                    <div className="dt-action-buttons mt-4 mt-md-0">
                                        <div className="dt-buttons btn-group flex-wrap">
                                            <div className="btn-group">
                                                <button
                                                    className="btn btn-secondary buttons-collection dropdown-toggle btn-outline-secondary me-4 waves-effect waves-light"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    type="button"
                                                    aria-haspopup="dialog"
                                                    aria-expanded="false"
                                                >
                                                    <span>
                                                        <i className="ri-download-line ri-16px me-1" />{" "}
                                                        <span className="d-none d-sm-inline-block">Export</span>
                                                    </span>
                                                </button>
                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                                        <div className="me-4">
                                            <div
                                                id="DataTables_Table_0_filter"
                                                className="dataTables_filter"
                                            >
                                                <label>
                                                    <input
                                                        type="search"
                                                        className="form-control form-control-sm"
                                                        placeholder="Search User"
                                                        aria-controls="DataTables_Table_0"
                                                    />
                                                </label>
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
                                                    Add New client{" "}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table
                                className="datatables-users table dataTable no-footer dtr-column"
                                id="DataTables_Table_0"
                                aria-describedby="DataTables_Table_0_info"
                                style={{ width: 1383 }}
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
                                            className="sorting sorting_desc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 269 }}
                                            aria-label="User: activate to sort column ascending"
                                            aria-sort="descending"
                                        >
                                            client
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 312 }}
                                            aria-label="Email: activate to sort column ascending"
                                        >
                                            Email
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 139 }}
                                            aria-label="Role: activate to sort column ascending"
                                        >
                                            phoneNumber
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 98 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            address
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 98 }}
                                            aria-label="Status: activate to sort column ascending"
                                        >
                                            Password
                                        </th>
                                        <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 143 }}
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
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper">
                                                    <div className="avatar avatar-sm me-4">
                                                        <img
                                                            src="../../assets/img/avatars/2.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="app-user-view-account.html"
                                                        className="text-heading text-truncate"
                                                    >
                                                        <span className="fw-medium">Zsazsa McCleverty</span>
                                                    </a>
                                                    <small>@zmcclevertye</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>zmcclevertye@soundcloud.com</span>
                                        </td>
                                        <td>
                                            <span className="text-truncate d-flex align-items-center text-heading">
                                                <i className="ri-pie-chart-line ri-22px text-success me-2" />
                                                Maintainer
                                            </span>
                                        </td>
                                        <td>
                                            <span className="text-heading">Enterprise</span>
                                        </td>
                                        <td>
                                            <span
                                                className="badge rounded-pill bg-label-success"
                                                text-capitalized=""
                                            >
                                                Active
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a
                                                    href="javascript:;"
                                                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                                                    data-bs-toggle="tooltip"
                                                    title="Delete Invoice"
                                                >
                                                    <i className="ri-delete-bin-7-line ri-22px" />
                                                </a>
                                                <a
                                                    href="app-user-view-account.html"
                                                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect"
                                                    data-bs-toggle="tooltip"
                                                    title="Preview"
                                                >
                                                    <i className="ri-eye-line ri-22px" />
                                                </a>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line ri-22px" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-user-view-account.html"
                                                        className="dropdown-item"
                                                    >
                                                        <i className="ri-eye-line me-2" />
                                                        <span>View</span>
                                                    </a>
                                                    <a href="javascript:;" className="dropdown-item">
                                                        <i className="ri-edit-box-line me-2" />
                                                        <span>Edit</span>
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        className="dropdown-item delete-record"
                                                    >
                                                        <i className="ri-delete-bin-7-line me-2" />
                                                        <span>Delete</span>
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
                                            <div className="d-flex justify-content-start align-items-center user-name">
                                                <div className="avatar-wrapper">
                                                    <div className="avatar avatar-sm me-4">
                                                        <img
                                                            src="../../assets/img/avatars/7.png"
                                                            alt="Avatar"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a
                                                        href="app-user-view-account.html"
                                                        className="text-heading text-truncate"
                                                    >
                                                        <span className="fw-medium">Yoko Pottie</span>
                                                    </a>
                                                    <small>@ypottiec</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>ypottiec@privacy.gov.au</span>
                                        </td>
                                        <td>
                                            <span className="text-truncate d-flex align-items-center text-heading">
                                                <i className="ri-user-line ri-22px text-primary me-2" />
                                                Subscriber
                                            </span>
                                        </td>
                                        <td>
                                            <span className="text-heading">Basic</span>
                                        </td>
                                        <td>
                                            <span
                                                className="badge rounded-pill bg-label-secondary"
                                                text-capitalized=""
                                            >
                                                Inactive
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a
                                                    href="javascript:;"
                                                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                                                    data-bs-toggle="tooltip"
                                                    title="Delete Invoice"
                                                >
                                                    <i className="ri-delete-bin-7-line ri-22px" />
                                                </a>
                                                <a
                                                    href="app-user-view-account.html"
                                                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect"
                                                    data-bs-toggle="tooltip"
                                                    title="Preview"
                                                >
                                                    <i className="ri-eye-line ri-22px" />
                                                </a>
                                                <button
                                                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ri-more-2-line ri-22px" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end m-0">
                                                    <a
                                                        href="app-user-view-account.html"
                                                        className="dropdown-item"
                                                    >
                                                        <i className="ri-eye-line me-2" />
                                                        <span>View</span>
                                                    </a>
                                                    <a href="javascript:;" className="dropdown-item">
                                                        <i className="ri-edit-box-line me-2" />
                                                        <span>Edit</span>
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        className="dropdown-item delete-record"
                                                    >
                                                        <i className="ri-delete-bin-7-line me-2" />
                                                        <span>Delete</span>
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
                                        Showing 1 to 10 of 50 entries
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
                                Add client
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
                                className="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework"
                                id="addNewUserForm"
                                onSubmit={handleSumbit}
                                noValidate="novalidate"
                            >
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="clientName"
                                        aria-label="John Doe"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">clientName</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5">
                                    <input
                                        type="text"
                                        className="form-control phone-mask"
                                        placeholder=""
                                        name="contactPerson"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-contact">contactPerson</label>
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="john.doe@example.com"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-email">Email</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                               
                                <div className="form-floating form-floating-outline mb-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="+1 (609) 988-44-11"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-company">phoneNumber</label>
                                </div>
                                <div className="form-floating form-floating-outline mb-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label=""
                                        name="address"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-company">address</label>
                                </div>
                                <div className="form-floating form-floating-outline mb-5">
                                    <input
                                        type="password"
                                        className="form-control"
                                        aria-label=""
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-company">password</label>
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
export default Customer;