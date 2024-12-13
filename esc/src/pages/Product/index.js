import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import * as apis from "../../apis"
function Product() {
    const navigate = useNavigate()

      const [product, setProduct] = useState([]);
        const idClient = window.sessionStorage.getItem("idClient")
        const [valueEdit, setValueEdit] = useState({
            productId: "",
            clientId: "",
            categoryId: 0,
            productName: "",
            price: 0,
            initialQuantity: 0,
            description: "",
            isActive: true,
            status: 0,
            createdAt: ""   
        });
    
        const FetchApi = async () => {
            try {
                await apis
                    .GetAllProductByClient(idClient)
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            setProduct(res.data);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        useEffect(() => {
            FetchApi();
        }, []);
        
        function handleChangeEdit(e) {
            setValueEdit({ ...valueEdit, [e.target.name]: e.target.value });
        }
        
        const handleDelete = async (id) => {
            try {
                console.log('try');
                const res = await apis.DeleteDepartment(id);
                console.log(res);
                if (res.status === 204) {
                    console.log('delete success');
                    FetchApi();
                }
            } catch (error) {
                console.error(error);
            }
        };
        const handleSumbitEdit = async (e) => {
            e.preventDefault();
            const FetchData = async () => {
                try {
                    await apis.UpdateProduct(valueEdit).then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            window.location.reload();
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
            };
            FetchData();
        };
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
                                                <span className="badge rounded-pill bg-label-success">
                                                    +5.7%
                                                </span>
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
                                                <span className="badge rounded-pill bg-label-success">
                                                    +12.4%
                                                </span>
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
                                                <span className="badge rounded-pill bg-label-danger">
                                                    -3.5%
                                                </span>
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
                            <div className="col-md-4 product_status">
                                <select id="ProductStatus" className="form-select text-capitalize">
                                    <option value="">Select Status</option>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Publish">Publish</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="col-md-4 product_category">
                                <select
                                    id="ProductCategory"
                                    className="form-select text-capitalize"
                                >
                                    <option value="">Category</option>
                                    <option value="Household">Household</option>
                                    <option value="Office">Office</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Game">Game</option>
                                </select>
                            </div>
                            <div className="col-md-4 product_stock">
                                <select id="ProductStock" className="form-select text-capitalize">
                                    <option value=""> Stock </option>
                                    <option value="Out_of_Stock">Out of Stock</option>
                                    <option value="In_Stock">In Stock</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-datatable table-responsive">
                        <div
                            id="DataTables_Table_0_wrapper"
                            className="dataTables_wrapper dt-bootstrap5 no-footer"
                        >
                            <div className="card-header d-flex border-top rounded-0 flex-wrap py-0 pb-5 pb-md-0">
                                <div className="me-5 ms-n2">
                                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
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
                                    <div className="dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center gap-4 pt-0">
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
                                        <div className="dt-buttons btn-group flex-wrap d-flex">
                                            {" "}
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
                                                        <i className="ri-download-line ri-16px me-2" />
                                                        <span className="d-none d-sm-inline-block">
                                                            Export{" "}
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>{" "}
                                            <button
                                                className="btn btn-secondary btn-primary waves-effect waves-light"
                                                tabIndex={0}
                                                onClick={()=> navigate("/addProduct")}
                                                aria-controls="DataTables_Table_0"
                                                type="button"
                                            >
                                                <span>
                                                    <i className="ri-add-line ri-16px me-0 me-sm-1_5" />
                                                    <span className="d-none d-sm-inline-block">
                                                        Add Product
                                                    </span>
                                                </span>
                                            </button>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table
                                className="datatables-products table dataTable no-footer dtr-column"
                                id="DataTables_Table_0"
                                aria-describedby="DataTables_Table_0_info"
                                style={{ width: 1395 }}
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
                                            style={{ width: 446 }}
                                            aria-label="product: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            product
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 139 }}
                                            aria-label="category: activate to sort column ascending"
                                        >
                                            category
                                        </th>
                                        <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 55 }}
                                            aria-label="stock"
                                        >
                                            stock
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 46 }}
                                            aria-label="sku: activate to sort column ascending"
                                        >
                                            sku
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 76 }}
                                            aria-label="price: activate to sort column ascending"
                                        >
                                            price
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 36 }}
                                            aria-label="qty: activate to sort column ascending"
                                        >
                                            qty
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="status: activate to sort column ascending"
                                        >
                                            status
                                        </th>
                                        <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 88 }}
                                            aria-label="Actions"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product?.map((res,key)=>
                                    <tr key={key} className="odd">
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
                                        <div className="d-flex justify-content-start align-items-center product-name">
                                            <div className="avatar-wrapper me-4">
                                                <div className="avatar rounded-2 bg-label-secondary">
                                                    <img
                                                        src="../../assets/img/ecommerce-images/product-9.png"
                                                        alt="Product-9"
                                                        className="rounded-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span className="text-nowrap text-heading fw-medium">
                                                    {res?.productName}
                                                </span>
                                                <small className="text-truncate d-none d-sm-block">
                                                    {res?.description}
                                                </small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className="text-truncate d-flex align-items-center mb-0 fw-normal">
                                            <span className="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-4">
                                                <i className="ri-home-6-line" />
                                            </span>
                                            {res?.categoryId}
                                        </h6>
                                    </td>
                                    <td>
                                        <span className="text-truncate">
                                            <label className="switch switch-primary switch-sm">
                                                <input
                                                    type="checkbox"
                                                    className="switch-input"
                                                    id="switch"
                                                />
                                                <span className="switch-toggle-slider">
                                                    <span className="switch-off" />
                                                </span>
                                            </label>
                                            <span className="d-none">Out_of_Stock</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span>31063</span>
                                    </td>
                                    <td>
                                        <span>${res.price}</span>
                                    </td>
                                    <td>
                                        <span>942</span>
                                    </td>
                                    <td>
                                        <span
                                            className="badge rounded-pill bg-label-danger"
                                            text-capitalized=""
                                        >
                                            {res?.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-block text-nowrap">
                                            <button className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill text-body me-1">
                                                <i className="ri-edit-box-line ri-22px" />
                                            </button>
                                            <button
                                                className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill text-body dropdown-toggle hide-arrow"
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
                                    )}
                                    
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
                                        Displaying 1 to 7 of 100 entries
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
                                                    data-dt-idx={14}
                                                    tabIndex={0}
                                                    className="page-link"
                                                >
                                                    15
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
export default Product;