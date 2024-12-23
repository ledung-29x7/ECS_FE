import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as apis from '../../apis';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductAdmin() {
    const navigate = useNavigate();
    var totalItems = product.length
    var pageSize = 5;
    var currentPage = 1;
    var totalPages = Math.Ceiling(totalItems / pageSize);
    const [product, setProduct] = useState([]);
    const [productService, setProductService] = useState([]);
    const [category, setCategory] = useState([]);
    const [service, setService] = useState([]);
    const [productStatus, setProductStatus] = useState([]);
    
    const FetApiProduct = async () => {
        try {
            await apis.GetAllProduct().then((res) => {
                if (res.status === 200) {
                    setProduct(res.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    
    const FetApiProductService = async(idProduct) => {
        try {
            await apis.GetProductServiceByIdProduct(idProduct).then((res) => {
                if (res.status === 200) {
                    setProductService(res.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const FetApiCategory = async () => {
        try {
            await apis.GetAllProductCategory().then((res) => {
                if (res.status === 200) {
                    setCategory(res.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const FetApiService = async () => {
        try {
            await apis.GetAllService().then((res) => {
                if (res.status === 200) {
                    setService(res.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    const FetApiProductStatus = async () => {
        try {
            await apis.GetProductStatus().then((res) => {
                if (res.status === 200) {
                    setProductStatus(res.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleActive = async (productId) => {
        try {
            await apis.ActiveProduct(productId).then((res) => {
                if (res.status === 200) {
                    toast.success('Active thanh cong');
                    FetApiProduct();
                }
            });
        } catch (error) {
            toast.error('active fail');
            console.log(error);
        }
    };

    useEffect(() => {
        FetApiProduct();
        FetApiCategory();
        FetApiService();
        FetApiProductStatus();
    }, []);

    return (
        <>
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
                                <div className="col-md-4 product_status">
                                    <select id="ProductStatus" className="form-select text-capitalize">
                                        <option value="">Select Status</option>
                                        <option value="Scheduled">Scheduled</option>
                                        <option value="Publish">Publish</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                <div className="col-md-4 product_category">
                                    <select id="ProductCategory" className="form-select text-capitalize">
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
                            <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
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
                                            <div className="dataTables_length my-0" id="DataTables_Table_0_length">
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
                                                {' '}
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
                                                            <span className="d-none d-sm-inline-block">Export </span>
                                                        </span>
                                                    </button>
                                                </div>{' '}
                                                <button
                                                    className="btn btn-secondary btn-primary waves-effect waves-light"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    type="button"
                                                >
                                                    <span>
                                                        <i className="ri-add-line ri-16px me-0 me-sm-1_5" />
                                                        <span className="d-none d-sm-inline-block">Add Product</span>
                                                    </span>
                                                </button>{' '}
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
                                                style={{ width: 0, display: 'none' }}
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
                                                Product
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
                                                Category
                                            </th>
                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 55 }}
                                                aria-label="stock"
                                            >
                                                Status
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
                                                InitialQuantity
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
                                                Price
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
                                                Active
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
                                                quantity sold
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
                                                remaining quantity
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
                                        {product?.map((res, key) => (
                                            <tr key={key} className="odd">
                                                <td className="  control" tabIndex={0} style={{ display: 'none' }} />
                                                <td className="  dt-checkboxes-cell">
                                                    <input type="checkbox" className="dt-checkboxes form-check-input" />
                                                </td>
                                                <td className="sorting_1">
                                                    <div className="d-flex justify-content-start align-items-center product-name">
                                                        <div className="avatar-wrapper me-4">
                                                            <div className="avatar rounded-2 bg-label-secondary">
                                                                <img
                                                                    src={`data:${res?.images[0]?.type};base64,${res?.images[0]?.imageBase64}`}
                                                                    alt=""
                                                                    className=""
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
                                                        {
                                                            category.find((r) => r.categoryId === res?.categoryId)
                                                                ?.categoryName
                                                        }
                                                    </h6>
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge rounded-pill bg-label-danger"
                                                        text-capitalized=""
                                                    >
                                                        {
                                                            productStatus.find((r) => r.statusId === res?.status)
                                                                ?.statusName
                                                        }
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>{res?.initialQuantity}</span>
                                                </td>
                                                <td>
                                                    <span>${res?.price}</span>
                                                </td>

                                                <td>
                                                    <div  class="form-check text-truncate form-switch">
                                                        <input
                                                            style={{width: "30px"}}
                                                            class="form-check-input"
                                                            checked={res?.isActive}
                                                            type="checkbox"
                                                            id="flexSwitchCheckDefault"
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>{res?.ActiveProduct}</span>
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
                                                            <div className="">
                                                                <button
                                                                    onClick={() => handleActive(res?.productId)}
                                                                    className=" waves-effect waves-light"
                                                                >
                                                                    <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none" />
                                                                    <span className="d-none d-sm-inline-block">
                                                                        Active
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <a href="javascript:0;" className="dropdown-item">
                                                                Suspend
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
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
                                <div style={{ width: '1%' }} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* / Content */}

                <div className="content-backdrop fade" />
            </div>
        </>
    );
}
export default ProductAdmin;
