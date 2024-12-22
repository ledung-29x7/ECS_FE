import { useEffect, useState } from 'react';
import * as apis from '../../apis';
function RegisterClient(){
const[client,setClient]=useState([])
const[valueAdd,setValueAdd]=useState({
        clientName:"",
        contactPerson:"",
        email:"",
        phoneNumber:"",
        address:"",
        password:""
    })
    const FetchApi = async ()=>{
        try {
            await apis.GetAllClient().then((res)=>{
                if(res.status === 200){
                    setClient(res.data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        FetchApi();
    },[])
    function handleChange(e){
        setValueAdd({...valueAdd,[e.target.name]:e.target.value})
    }
    const handleSumbit=(e)=>{
        e.preventDefault();
        const FetchData=async()=>{
            try {
                await apis.addClient(valueAdd).then((res)=>{
                    if(res.status === 200){
                        window.location.reload();
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        FetchData();
    }
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
                                        </div>
                                        <div className="add-new">
                                            <button
                                                className="btn btn-primary waves-effect waves-light"
                                                 data-bs-target="#editUser"
                                                data-bs-toggle="modal"
                                            >
                                                <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none" />
                                                <span className="d-none d-sm-inline-block"> Add Client </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table
                                className="datatables-products table dataTable no-footer dtr-column collapsed"
                                id="DataTables_Table_0"
                                aria-describedby="DataTables_Table_0_info"
                                style={{ width: 1395 }}
                            >
                                <thead>
                                    <tr>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 18 }}
                                            aria-label="product: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            clientName
                                        </th>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 18 }}
                                            aria-label="product: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            contactPerson
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 88 }}
                                            aria-label="price: activate to sort column ascending"
                                        >
                                            email
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 88 }}
                                            aria-label="qty: activate to sort column ascending"
                                        >
                                            phoneNumber
                                        </th>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 18 }}
                                            aria-label="product: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            address
                                        </th>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 18 }}
                                            aria-label="product: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            createdAt
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 88 }}
                                            aria-label="qty: activate to sort column ascending"
                                        >
                                            actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {client?.map((res)=>(
                                    <tr className="odd">
                                        <td>
                                            <span>{res?.clientName}</span>
                                        </td>
                                        <td>
                                            <span>{res?.contactPerson}</span>
                                        </td>
                                        <td>
                                            <span>{res?.email}</span>
                                        </td>
                                        <td>
                                            <span>{res?.phoneNumber}</span>
                                        </td>
                                        <td>
                                            <span>{res?.address}</span>
                                        </td>
                                        <td>
                                            <span>{res?.createdAt}</span>
                                        </td>
                                        <td className="" style={{}}>
                                            <div className="d-flex align-items-center">
                                                <a
                                                    href="javascript:;"
                                                    className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                                                    data-bs-toggle="tooltip"
                                                    title="Delete Invoice"
                                                    // onClick={() => handleDelete(res?.roleId)}
                                                >
                                                    <i className="ri-delete-bin-7-line ri-22px" />
                                                </a>
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
                                            <li className="paginate_button page-item next" id="DataTables_Table_0_next">
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
            {/* add Client */}
            <div className="modal fade" id="editUser" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            <div className="text-center mb-6">
                                <h4 className="mb-2">Add Client</h4>
                            </div>
                            <form
                                onSubmit={handleSumbit}
                                id="editUserForm"
                                className="row g-5 fv-plugins-bootstrap5 fv-plugins-framework"
                                noValidate="novalidate"
                            >
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                     type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="clientName"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">clientName</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                         type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="contactPerson"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">contactPerson</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                         type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="email"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">email</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                         type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="phoneNumber"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">phoneNumber</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                         type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="address"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">address</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                         type="password"
                                        className="form-control"
                                        placeholder=""
                                        name="password"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">password</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-3 waves-effect waves-light">
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
             {/* add Client */}
            {/* / Content */}
            {/* Footer */}
            <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl">
                    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                        <div className="text-body mb-2 mb-md-0">
                            © 2024, made with{' '}
                            <span className="text-danger">
                                <i className="tf-icons ri-heart-fill" />
                            </span>{' '}
                            by{' '}
                            <a href="https://themeselection.com" target="_blank" className="footer-link">
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
export default RegisterClient;