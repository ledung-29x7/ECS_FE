
function ProductCategory () {
    return(
        <>
            <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="app-ecommerce-category">
                    {/* Category List Table */}
                    <div className="card">
                        <div className="card-datatable table-responsive">
                            <div
                                id="DataTables_Table_0_wrapper"
                                className="dataTables_wrapper dt-bootstrap5 no-footer"
                            >
                                <div className="card-header d-flex rounded-0 flex-wrap py-0 pb-5 pb-md-0">
                                    <div className="me-5 ms-n2">
                                        <div
                                            id="DataTables_Table_0_filter"
                                            className="dataTables_filter"
                                        >
                                            <label>
                                                <input
                                                    type="search"
                                                    className="form-control form-control-sm"
                                                    placeholder="Search"
                                                    aria-controls="DataTables_Table_0"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start justify-content-md-end align-items-baseline">
                                        <div className="dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-0 gap-4 pt-0">
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
                                                        <option value={7}>7</option>
                                                        <option value={10}>10</option>
                                                        <option value={20}>20</option>
                                                        <option value={50}>50</option>
                                                        <option value={70}>70</option>
                                                        <option value={100}>100</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="dt-buttons btn-group flex-wrap">
                                                {" "}
                                                <div className="btn-group">
                                                    <button
                                                        className="btn btn-secondary buttons-collection dropdown-toggle btn-outline-secondary me-5 waves-effect waves-light"
                                                        tabIndex={0}
                                                        aria-controls="DataTables_Table_0"
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded="false"
                                                    >
                                                        <span>
                                                            <i className="ri-download-line me-1" />{" "}
                                                            <span className="d-none d-sm-inline-block">
                                                                Export
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>{" "}
                                                <button
                                                    className="btn btn-secondary add-new btn-primary ms-n1 waves-effect waves-light"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasEcommerceCategoryList"
                                                >
                                                    <span>
                                                        <i className="ri-add-line me-0 me-sm-1" />
                                                        <span className="d-none d-sm-inline-block">
                                                            Add Category
                                                        </span>
                                                    </span>
                                                </button>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table
                                    className="datatables-category-list table dataTable no-footer dtr-column"
                                    id="DataTables_Table_0"
                                    aria-describedby="DataTables_Table_0_info"
                                    style={{ width: 1394 }}
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
                                                style={{ width: 699 }}
                                                aria-label="Categories: activate to sort column ascending"
                                                aria-sort="descending"
                                            >
                                                Categories
                                            </th>
                                            <th
                                                className="text-nowrap text-sm-end sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 191 }}
                                                aria-label="Total Products &nbsp;: activate to sort column ascending"
                                            >
                                                Total Products &nbsp;
                                            </th>
                                            <th
                                                className="text-nowrap text-sm-end sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 160 }}
                                                aria-label="Total Earning"
                                            >
                                                Total Earning
                                            </th>
                                            <th
                                                className="text-lg-center sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 118 }}
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
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name">
                                                        <div className="avatar">
                                                            <img
                                                                src="../../assets/img/ecommerce-images/product-16.png"
                                                                alt="Product-8"
                                                                className="rounded-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <span className="text-heading fw-medium text-wrap">
                                                            Travel
                                                        </span>
                                                        <small className="text-truncate mb-0 d-none d-sm-block">
                                                            Choose from wide range of travel accessories from
                                                            popular brands
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end pe-3">4186</div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end">$7912.99</div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill me-1">
                                                        <i className="ri-edit-box-line ri-22px" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ri-more-2-line ri-22px" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            View
                                                        </a>
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            Suspend
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
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name">
                                                        <div className="avatar">
                                                            <img
                                                                src="../../assets/img/ecommerce-images/product-1.png"
                                                                alt="Product-1"
                                                                className="rounded-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <span className="text-heading fw-medium text-wrap">
                                                            Smart Phone
                                                        </span>
                                                        <small className="text-truncate mb-0 d-none d-sm-block">
                                                            Choose from wide range of smartphones from popular
                                                            brands
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end pe-3">1947</div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end">$99129</div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill me-1">
                                                        <i className="ri-edit-box-line ri-22px" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ri-more-2-line ri-22px" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            View
                                                        </a>
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            Suspend
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
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name">
                                                        <div className="avatar">
                                                            <img
                                                                src="../../assets/img/ecommerce-images/product-4.png"
                                                                alt="Product-4"
                                                                className="rounded-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <span className="text-heading fw-medium text-wrap">
                                                            Shoes
                                                        </span>
                                                        <small className="text-truncate mb-0 d-none d-sm-block">
                                                            Explore the latest shoes from Top brands
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end pe-3">4940</div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end">$3612.98</div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill me-1">
                                                        <i className="ri-edit-box-line ri-22px" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ri-more-2-line ri-22px" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            View
                                                        </a>
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            Suspend
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
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name">
                                                        <div className="avatar">
                                                            <img
                                                                src="../../assets/img/ecommerce-images/product-22.png"
                                                                alt="Product-10"
                                                                className="rounded-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <span className="text-heading fw-medium text-wrap">
                                                            Jewellery
                                                        </span>
                                                        <small className="text-truncate mb-0 d-none d-sm-block">
                                                            Choose from wide range of Jewellery from popular
                                                            brands
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end pe-3">4186</div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end">$7912.99</div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill me-1">
                                                        <i className="ri-edit-box-line ri-22px" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ri-more-2-line ri-22px" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            View
                                                        </a>
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            Suspend
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
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name">
                                                        <div className="avatar">
                                                            <img
                                                                src="../../assets/img/ecommerce-images/product-10.png"
                                                                alt="Product-7"
                                                                className="rounded-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <span className="text-heading fw-medium text-wrap">
                                                            Home Decor
                                                        </span>
                                                        <small className="text-truncate mb-0 d-none d-sm-block">
                                                            Choose from wide range of home decor from popular
                                                            brands
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end pe-3">9184</div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end">$19120.45</div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill me-1">
                                                        <i className="ri-edit-box-line ri-22px" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ri-more-2-line ri-22px" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            View
                                                        </a>
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            Suspend
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
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name">
                                                        <div className="avatar">
                                                            <img
                                                                src="../../assets/img/ecommerce-images/product-23.png"
                                                                alt="Product-11"
                                                                className="rounded-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <span className="text-heading fw-medium text-wrap">
                                                            Grocery
                                                        </span>
                                                        <small className="text-truncate mb-0 d-none d-sm-block">
                                                            Get fresh groceries delivered at your doorstep
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end pe-3">4186</div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end">$7912.99</div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill me-1">
                                                        <i className="ri-edit-box-line ri-22px" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ri-more-2-line ri-22px" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            View
                                                        </a>
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            Suspend
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
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-wrapper me-3 rounded-2 bg-label-secondary user-name">
                                                        <div className="avatar">
                                                            <img
                                                                src="../../assets/img/ecommerce-images/product-6.png"
                                                                alt="Product-6"
                                                                className="rounded-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <span className="text-heading fw-medium text-wrap">
                                                            Games
                                                        </span>
                                                        <small className="text-truncate mb-0 d-none d-sm-block">
                                                            Dive into world of Virtual Reality with latest games
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end pe-3">5764</div>
                                            </td>
                                            <td>
                                                <div className="text-sm-end">$29129</div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill me-1">
                                                        <i className="ri-edit-box-line ri-22px" />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ri-more-2-line ri-22px" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            View
                                                        </a>
                                                        <a href="javascript:0;" className="dropdown-item">
                                                            Suspend
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
                                            Showing 1 to 7 of 14 entries
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
                    </div>
                    {/* Offcanvas to add new customer */}
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasEcommerceCategoryList"
                        aria-labelledby="offcanvasEcommerceCategoryListLabel"
                    >
                        {/* Offcanvas Header */}
                        <div className="offcanvas-header py-6">
                            <h5
                                id="offcanvasEcommerceCategoryListLabel"
                                className="offcanvas-title"
                            >
                                Add Category
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        {/* Offcanvas Body */}
                        <div className="offcanvas-body border-top">
                            <form
                                className="pt-0 fv-plugins-bootstrap5 fv-plugins-framework"
                                id="eCommerceCategoryListForm"
                                onsubmit="return false"
                                noValidate="novalidate"
                            >
                                {/* Title */}
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ecommerce-category-title"
                                        placeholder="Enter category title"
                                        name="categoryTitle"
                                        aria-label="category title"
                                    />
                                    <label htmlFor="ecommerce-category-title">Title</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                {/* Slug */}
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        id="ecommerce-category-slug"
                                        className="form-control"
                                        placeholder="Enter slug"
                                        aria-label="slug"
                                        name="slug"
                                    />
                                    <label htmlFor="ecommerce-category-slug">Slug</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                {/* Image */}
                                <div className="mb-5">
                                    <input
                                        className="form-control"
                                        type="file"
                                        id="ecommerce-category-image"
                                    />
                                </div>
                                {/* Parent category */}
                                <div className="mb-5 ecommerce-select2-dropdown">
                                    <div className="form-floating form-floating-outline form-floating-select2">
                                        <div className="position-relative">
                                            <select
                                                id="ecommerce-category-parent-category"
                                                className="select2 form-select select2-hidden-accessible"
                                                data-placeholder="Select parent category"
                                                data-allow-clear="true"
                                                data-select2-id="ecommerce-category-parent-category"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                            >
                                                <option value="" data-select2-id={2}>
                                                    Select parent Category
                                                </option>
                                                <option value="Household">Household</option>
                                                <option value="Management">Management</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Office">Office</option>
                                                <option value="Automotive">Automotive</option>
                                            </select>
                                            <span
                                                className="select2 select2-container select2-container--default"
                                                dir="ltr"
                                                data-select2-id={1}
                                                style={{ width: 360 }}
                                            >
                                                <span className="selection">
                                                    <span
                                                        className="select2-selection select2-selection--single"
                                                        role="combobox"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        tabIndex={0}
                                                        aria-disabled="false"
                                                        aria-labelledby="select2-ecommerce-category-parent-category-container"
                                                    >
                                                        <span
                                                            className="select2-selection__rendered"
                                                            id="select2-ecommerce-category-parent-category-container"
                                                            role="textbox"
                                                            aria-readonly="true"
                                                        >
                                                            <span className="select2-selection__placeholder">
                                                                Select parent category
                                                            </span>
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
                                        <label htmlFor="ecommerce-category-parent-category">
                                            Parent category
                                        </label>
                                    </div>
                                </div>
                                {/* Description */}
                                <div className="mb-6">
                                    <div className="form-control p-0 pt-1">
                                        <div
                                            className="comment-editor border-0 ql-container ql-snow"
                                            id="ecommerce-category-description"
                                        >
                                            <div
                                                className="ql-editor ql-blank"
                                                data-gramm="false"
                                                contentEditable="true"
                                                data-placeholder="Write a Comment..."
                                            >
                                                <p>
                                                    <br />
                                                </p>
                                            </div>
                                            <div
                                                className="ql-clipboard"
                                                contentEditable="true"
                                                tabIndex={-1}
                                            />
                                            <div className="ql-tooltip ql-hidden">
                                                <a
                                                    className="ql-preview"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    href="about:blank"
                                                />
                                                <input
                                                    type="text"
                                                    data-formula="e=mc^2"
                                                    data-link="https://quilljs.com"
                                                    data-video="Embed URL"
                                                />
                                                <a className="ql-action" />
                                                <a className="ql-remove" />
                                            </div>
                                        </div>
                                        <div className="comment-toolbar border-0 rounded ql-toolbar ql-snow">
                                            <div className="d-flex justify-content-end">
                                                <span className="ql-formats me-0">
                                                    <button className="ql-bold" type="button">
                                                        <svg viewBox="0 0 18 18">
                                                            {" "}
                                                            <path
                                                                className="ql-stroke"
                                                                d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                                            />{" "}
                                                            <path
                                                                className="ql-stroke"
                                                                d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                                            />{" "}
                                                        </svg>
                                                    </button>
                                                    <button className="ql-italic" type="button">
                                                        <svg viewBox="0 0 18 18">
                                                            {" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={7}
                                                                x2={13}
                                                                y1={4}
                                                                y2={4}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={5}
                                                                x2={11}
                                                                y1={14}
                                                                y2={14}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={8}
                                                                x2={10}
                                                                y1={14}
                                                                y2={4}
                                                            />{" "}
                                                        </svg>
                                                    </button>
                                                    <button className="ql-underline" type="button">
                                                        <svg viewBox="0 0 18 18">
                                                            {" "}
                                                            <path
                                                                className="ql-stroke"
                                                                d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                                            />{" "}
                                                            <rect
                                                                className="ql-fill"
                                                                height={1}
                                                                rx="0.5"
                                                                ry="0.5"
                                                                width={12}
                                                                x={3}
                                                                y={15}
                                                            />{" "}
                                                        </svg>
                                                    </button>
                                                    <button className="ql-list" value="ordered" type="button">
                                                        <svg viewBox="0 0 18 18">
                                                            {" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={7}
                                                                x2={15}
                                                                y1={4}
                                                                y2={4}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={7}
                                                                x2={15}
                                                                y1={9}
                                                                y2={9}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={7}
                                                                x2={15}
                                                                y1={14}
                                                                y2={14}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke ql-thin"
                                                                x1="2.5"
                                                                x2="4.5"
                                                                y1="5.5"
                                                                y2="5.5"
                                                            />{" "}
                                                            <path
                                                                className="ql-fill"
                                                                d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                                                            />{" "}
                                                            <path
                                                                className="ql-stroke ql-thin"
                                                                d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                                                            />{" "}
                                                            <path
                                                                className="ql-stroke ql-thin"
                                                                d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                                                            />{" "}
                                                        </svg>
                                                    </button>
                                                    <button className="ql-list" value="bullet" type="button">
                                                        <svg viewBox="0 0 18 18">
                                                            {" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={6}
                                                                x2={15}
                                                                y1={4}
                                                                y2={4}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={6}
                                                                x2={15}
                                                                y1={9}
                                                                y2={9}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={6}
                                                                x2={15}
                                                                y1={14}
                                                                y2={14}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={3}
                                                                x2={3}
                                                                y1={4}
                                                                y2={4}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={3}
                                                                x2={3}
                                                                y1={9}
                                                                y2={9}
                                                            />{" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={3}
                                                                x2={3}
                                                                y1={14}
                                                                y2={14}
                                                            />{" "}
                                                        </svg>
                                                    </button>
                                                    <button className="ql-link" type="button">
                                                        <svg viewBox="0 0 18 18">
                                                            {" "}
                                                            <line
                                                                className="ql-stroke"
                                                                x1={7}
                                                                x2={11}
                                                                y1={7}
                                                                y2={11}
                                                            />{" "}
                                                            <path
                                                                className="ql-even ql-stroke"
                                                                d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                                                            />{" "}
                                                            <path
                                                                className="ql-even ql-stroke"
                                                                d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                                                            />{" "}
                                                        </svg>
                                                    </button>
                                                    <button className="ql-image" type="button">
                                                        <svg viewBox="0 0 18 18">
                                                            {" "}
                                                            <rect
                                                                className="ql-stroke"
                                                                height={10}
                                                                width={12}
                                                                x={3}
                                                                y={4}
                                                            />{" "}
                                                            <circle className="ql-fill" cx={6} cy={7} r={1} />{" "}
                                                            <polyline
                                                                className="ql-even ql-fill"
                                                                points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                                                            />{" "}
                                                        </svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Status */}
                                <div className="mb-5 ecommerce-select2-dropdown">
                                    <div className="form-floating form-floating-outline form-floating-select2">
                                        <div className="position-relative">
                                            <select
                                                id="ecommerce-category-status"
                                                className="select2 form-select select2-hidden-accessible"
                                                data-placeholder="Select category status"
                                                data-select2-id="ecommerce-category-status"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                            >
                                                <option value="" data-select2-id={4}>
                                                    Select category status
                                                </option>
                                                <option value="Scheduled">Scheduled</option>
                                                <option value="Publish">Publish</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            <span
                                                className="select2 select2-container select2-container--default"
                                                dir="ltr"
                                                data-select2-id={3}
                                                style={{ width: 360 }}
                                            >
                                                <span className="selection">
                                                    <span
                                                        className="select2-selection select2-selection--single"
                                                        role="combobox"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        tabIndex={0}
                                                        aria-disabled="false"
                                                        aria-labelledby="select2-ecommerce-category-status-container"
                                                    >
                                                        <span
                                                            className="select2-selection__rendered"
                                                            id="select2-ecommerce-category-status-container"
                                                            role="textbox"
                                                            aria-readonly="true"
                                                        >
                                                            <span className="select2-selection__placeholder">
                                                                Select category status
                                                            </span>
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
                                        <label htmlFor="ecommerce-category-status">Parent status</label>
                                    </div>
                                </div>
                                {/* Submit and reset */}
                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light"
                                    >
                                        Add
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-outline-danger waves-effect"
                                        data-bs-dismiss="offcanvas"
                                    >
                                        Discard
                                    </button>
                                </div>
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

        </>
    )
}
export default ProductCategory