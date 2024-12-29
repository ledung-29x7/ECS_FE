import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as apis from '../../apis';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function OrderDetail() {

        const [product, setProduct] = useState([]);
        const [orderDetail,setOrderDetail] = useState([]);
        const [image, setImage] = useState([]);
        const idClient = window.sessionStorage.getItem('idClient');
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
    
    const FetchOrderDetail = async() =>{
        try {
            await apis.GetOrderDetail()
            .then(res => {
                if(res.status === 200 ) {
                    setOrderDetail(res.data)
                }
            })
        } catch (error) {
            toast.error("Can't get order detail")
        }
    }
    useEffect(()=>{
        FetchOrderDetail()
    },[])

    useEffect(() => {
        // Hàm để hiển thị ảnh từ JSON
        const images = [];
        function displayImages(imageDTOs) {
            imageDTOs?.forEach((imageDTO) => {
                images.push({
                    id: imageDTO?.id,
                    image: `data:${imageDTO?.type};base64,${imageDTO?.image}`,
                });
            });
        }
        // Gọi hàm hiển thị ảnh
        displayImages(product?.imageFiles);
        setImage(images);
    }, [product]);


    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-6 gap-3">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center mb-1">
                            <h5 className="mb-0">Order #32543</h5>
                            <span className="badge bg-label-success me-2 ms-2 rounded-pill">
                                Paid
                            </span>
                            <span className="badge bg-label-info rounded-pill">
                                Ready to Pickup
                            </span>
                        </div>
                        <p className="mt-1 mb-3">
                            Aug 17, <span id="orderYear">2024</span>, 5:48 (ET)
                        </p>
                    </div>
                    <div className="d-flex align-content-center flex-wrap gap-2">
                        <button className="btn btn-outline-danger delete-order waves-effect">
                            Delete Order
                        </button>
                    </div>
                </div>
                {/* Order Details Table */}
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="card mb-6">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="card-title m-0">Order details</h5>
                                <h6 className="m-0">
                                    <a href=" javascript:void(0)">Edit</a>
                                </h6>
                            </div>
                            <div className="card-datatable table-responsive">
                                <div
                                    id="DataTables_Table_0_wrapper"
                                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                                >
                                    <table
                                        className="datatables-order-details table dataTable no-footer dtr-column"
                                        id="DataTables_Table_0"
                                        style={{ width: 823 }}
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
                                                    className="w-50 sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 371 }}
                                                    aria-label="products"
                                                >
                                                    products
                                                </th>
                                                <th
                                                    className="sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 79 }}
                                                    aria-label="price"
                                                >
                                                    price
                                                </th>
                                                <th
                                                    className="sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 63 }}
                                                    aria-label="qty"
                                                >
                                                    qty
                                                </th>
                                                <th
                                                    className="sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 96 }}
                                                    aria-label="total"
                                                >
                                                    total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {product?.map((res, key) => (

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
                                                    <span>$841</span>
                                                </td>
                                                <td>
                                                    <span>2</span>
                                                </td>
                                                <td>
                                                    <span>$1682</span>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <div style={{ width: "1%" }} />
                                </div>
                                <div className="d-flex justify-content-end align-items-center m-4 p-1 mb-0 pb-0">
                                    <div className="order-calculations">
                                        <div className="d-flex justify-content-start gap-4 mb-2">
                                            <span className="w-px-100 text-heading">Subtotal:</span>
                                            <h6 className="mb-0">$5000.25</h6>
                                        </div>
                                        <div className="d-flex justify-content-start gap-4 mb-2">
                                            <span className="w-px-100 text-heading">Discount:</span>
                                            <h6 className="mb-0">$00.00</h6>
                                        </div>
                                        <div className="d-flex justify-content-start gap-4 mb-2">
                                            <span className="w-px-100 text-heading">Tax:</span>
                                            <h6 className="mb-0">$100.00</h6>
                                        </div>
                                        <div className="d-flex justify-content-start gap-4">
                                            <h6 className="w-px-100 mb-0">Total:</h6>
                                            <h6 className="mb-0">$5100.25</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-6">
                            <div className="card-header">
                                <h5 className="card-title m-0">Shipping activity</h5>
                            </div>
                            <div className="card-body mt-3">
                                <ul className="timeline pb-0 mb-0">
                                    <li className="timeline-item timeline-item-transparent border-primary">
                                        <span className="timeline-point timeline-point-primary" />
                                        <div className="timeline-event">
                                            <div className="timeline-header mb-1">
                                                <h6 className="mb-0">
                                                    Order was placed (Order ID: #32543)
                                                </h6>
                                                <small className="text-muted">Tuesday 11:29 AM</small>
                                            </div>
                                            <p className="mt-1 mb-3">
                                                Your order has been placed successfully
                                            </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item timeline-item-transparent border-primary">
                                        <span className="timeline-point timeline-point-primary" />
                                        <div className="timeline-event">
                                            <div className="timeline-header mb-1">
                                                <h6 className="mb-0">Pick-up</h6>
                                                <small className="text-muted">Wednesday 11:29 AM</small>
                                            </div>
                                            <p className="mt-1 mb-3">Pick-up scheduled with courier</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item timeline-item-transparent border-primary">
                                        <span className="timeline-point timeline-point-primary" />
                                        <div className="timeline-event">
                                            <div className="timeline-header mb-1">
                                                <h6 className="mb-0">Dispatched</h6>
                                                <small className="text-muted">Thursday 11:29 AM</small>
                                            </div>
                                            <p className="mt-1 mb-3">
                                                Item has been picked up by courier
                                            </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item timeline-item-transparent border-primary">
                                        <span className="timeline-point timeline-point-primary" />
                                        <div className="timeline-event">
                                            <div className="timeline-header mb-1">
                                                <h6 className="mb-0">Package arrived</h6>
                                                <small className="text-muted">Saturday 15:20 AM</small>
                                            </div>
                                            <p className="mt-1 mb-3">
                                                Package arrived at an Amazon facility, NY
                                            </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item timeline-item-transparent">
                                        <span className="timeline-point timeline-point-primary" />
                                        <div className="timeline-event">
                                            <div className="timeline-header mb-1">
                                                <h6 className="mb-0">Dispatched for delivery</h6>
                                                <small className="text-muted">Today 14:12 PM</small>
                                            </div>
                                            <p className="mt-1 mb-3">
                                                Package has left an Amazon facility, NY
                                            </p>
                                        </div>
                                    </li>
                                    <li className="timeline-item timeline-item-transparent border-transparent pb-0">
                                        <span className="timeline-point timeline-point-secondary" />
                                        <div className="timeline-event pb-0">
                                            <div className="timeline-header mb-1">
                                                <h6 className="mb-0">Delivery</h6>
                                            </div>
                                            <p className="mt-1 mb-3">
                                                Package will be delivered by tomorrow
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card mb-6">
                            <div className="card-body">
                                <h5 className="card-title mb-6">Customer details</h5>
                                <div className="d-flex justify-content-start align-items-center mb-6">
                                    <div className="avatar me-3">
                                        <img
                                            src="../../assets/img/avatars/1.png"
                                            alt="Avatar"
                                            className="rounded-circle"
                                        />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <a href="app-user-view-account.html">
                                            <h6 className="mb-0">Shamus Tuttle</h6>
                                        </a>
                                        <span>Customer ID: #58909</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mb-6">
                                    <span className="avatar rounded-circle bg-label-success me-3 d-flex align-items-center justify-content-center">
                                        <i className="ri-shopping-cart-line ri-24px" />
                                    </span>
                                    <h6 className="text-nowrap mb-0">12 Orders</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-1">Contact info</h6>
                                    <h6 className="mb-1">
                                        <a
                                            href=" javascript:;"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editUser"
                                        >
                                            Edit
                                        </a>
                                    </h6>
                                </div>
                                <p className="mb-1">Email: Shamus889@yahoo.com</p>
                                <p className="mb-0">Mobile: +1 (609) 972-22-22</p>
                            </div>
                        </div>
                        <div className="card mb-6">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-1">Shipping address</h5>
                                <h6 className="m-0">
                                    <a
                                        href=" javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addNewAddress"
                                    >
                                        Edit
                                    </a>
                                </h6>
                            </div>
                            <div className="card-body">
                                <p className="mb-0">
                                    45 Roker Terrace <br />
                                    Latheronwheel <br />
                                    KW5 8NW,London <br />
                                    UK
                                </p>
                            </div>
                        </div>
                        <div className="card mb-6">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-1">Billing address</h5>
                                <h6 className="m-0">
                                    <a
                                        href=" javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addNewAddress"
                                    >
                                        Edit
                                    </a>
                                </h6>
                            </div>
                            <div className="card-body">
                                <p className="mb-6">
                                    45 Roker Terrace <br />
                                    Latheronwheel <br />
                                    KW5 8NW,London <br />
                                    UK
                                </p>
                                <h5 className="mb-0 pb-1">Mastercard</h5>
                                <p className="mb-0">Card Number: ******4291</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Edit User Modal */}
                <div className="modal fade" id="editUser" tabIndex={-1} aria-hidden="true">
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
                                                <div className="position-relative">
                                                    <select
                                                        id="modalEditUserLanguage"
                                                        name="modalEditUserLanguage"
                                                        className="select2 form-select select2-hidden-accessible"
                                                        multiple=""
                                                        tabIndex={-1}
                                                        aria-hidden="true"
                                                        data-select2-id="modalEditUserLanguage"
                                                    >
                                                        <option value="">Select</option>
                                                        <option
                                                            value="english"
                                                            selected=""
                                                            data-select2-id={18}
                                                        >
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
                                                        data-select2-id={17}
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
                                                                        data-select2-id={19}
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
                                            </div>
                                            <label htmlFor="modalEditUserLanguage">Language</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline form-floating-select2">
                                            <div className="position-relative">
                                                <div className="position-relative">
                                                    <select
                                                        id="modalEditUserCountry"
                                                        name="modalEditUserCountry"
                                                        className="select2 form-select select2-hidden-accessible"
                                                        data-allow-clear="true"
                                                        tabIndex={-1}
                                                        aria-hidden="true"
                                                        data-select2-id="modalEditUserCountry"
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
                                                        <option value="India" selected="" data-select2-id={46}>
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
                                                        data-select2-id={45}
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
                                                                        data-select2-id={47}
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
                {/* Add New Address Modal */}
                <div
                    className="modal fade"
                    id="addNewAddress"
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-simple modal-add-new-address">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                                <div className="text-center mb-6">
                                    <h4 className="address-title mb-2">Add New Address</h4>
                                    <p className="address-subtitle">
                                        Add new address for express delivery
                                    </p>
                                </div>
                                <form
                                    id="addNewAddressForm"
                                    className="row g-5 fv-plugins-bootstrap5 fv-plugins-framework"
                                    onsubmit="return false"
                                    noValidate="novalidate"
                                >
                                    <div className="col-12">
                                        <div className="row g-5">
                                            <div className="col-md mb-md-0">
                                                <div className="form-check custom-option custom-option-basic checked">
                                                    <label
                                                        className="form-check-label custom-option-content"
                                                        htmlFor="customRadioHome"
                                                    >
                                                        <input
                                                            name="customRadioTemp"
                                                            className="form-check-input"
                                                            type="radio"
                                                            defaultValue=""
                                                            id="customRadioHome"
                                                            defaultChecked=""
                                                        />
                                                        <span className="custom-option-header">
                                                            <span className="h6 mb-0 d-flex align-items-center">
                                                                <i className="ri-home-smile-2-line ri-20px me-1" />
                                                                Home
                                                            </span>
                                                        </span>
                                                        <span className="custom-option-body">
                                                            <small>Delivery time (9am – 9pm)</small>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md mb-md-0">
                                                <div className="form-check custom-option custom-option-basic">
                                                    <label
                                                        className="form-check-label custom-option-content"
                                                        htmlFor="customRadioOffice"
                                                    >
                                                        <input
                                                            name="customRadioTemp"
                                                            className="form-check-input"
                                                            type="radio"
                                                            defaultValue=""
                                                            id="customRadioOffice"
                                                        />
                                                        <span className="custom-option-header">
                                                            <span className="h6 mb-0 d-flex align-items-center">
                                                                <i className="ri-building-line ri-20px me-1" />
                                                                Office
                                                            </span>
                                                        </span>
                                                        <span className="custom-option-body">
                                                            <small>Delivery time (9am – 5pm) </small>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 fv-plugins-icon-container">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalAddressFirstName"
                                                name="modalAddressFirstName"
                                                className="form-control"
                                                placeholder="John"
                                            />
                                            <label htmlFor="modalAddressFirstName">First Name</label>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                    </div>
                                    <div className="col-12 col-md-6 fv-plugins-icon-container">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalAddressLastName"
                                                name="modalAddressLastName"
                                                className="form-control"
                                                placeholder="Doe"
                                            />
                                            <label htmlFor="modalAddressLastName">Last Name</label>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating form-floating-outline form-floating-select2">
                                            <div className="position-relative">
                                                <div className="position-relative">
                                                    <select
                                                        id="modalAddressCountry"
                                                        name="modalAddressCountry"
                                                        className="select2 form-select select2-hidden-accessible"
                                                        data-allow-clear="true"
                                                        tabIndex={-1}
                                                        aria-hidden="true"
                                                        data-select2-id="modalAddressCountry"
                                                    >
                                                        <option value="" data-select2-id={74}>
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
                                                    <span
                                                        className="select2 select2-container select2-container--default"
                                                        dir="ltr"
                                                        data-select2-id={73}
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
                                                                aria-labelledby="select2-modalAddressCountry-container"
                                                            >
                                                                <span
                                                                    className="select2-selection__rendered"
                                                                    id="select2-modalAddressCountry-container"
                                                                    role="textbox"
                                                                    aria-readonly="true"
                                                                >
                                                                    <span className="select2-selection__placeholder">
                                                                        Select value
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
                                            </div>
                                            <label htmlFor="modalAddressCountry">Country</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalAddressAddress1"
                                                name="modalAddressAddress1"
                                                className="form-control"
                                                placeholder="12, Business Park"
                                            />
                                            <label htmlFor="modalAddressAddress1">Address Line 1</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalAddressAddress2"
                                                name="modalAddressAddress2"
                                                className="form-control"
                                                placeholder="Mall Road"
                                            />
                                            <label htmlFor="modalAddressAddress2">Address Line 2</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalAddressLandmark"
                                                name="modalAddressLandmark"
                                                className="form-control"
                                                placeholder="Nr. Hard Rock Cafe"
                                            />
                                            <label htmlFor="modalAddressLandmark">Landmark</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalAddressCity"
                                                name="modalAddressCity"
                                                className="form-control"
                                                placeholder="Los Angeles"
                                            />
                                            <label htmlFor="modalAddressCity">City</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalAddressState"
                                                name="modalAddressState"
                                                className="form-control"
                                                placeholder="California"
                                            />
                                            <label htmlFor="modalAddressLandmark">State</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating form-floating-outline">
                                            <input
                                                type="text"
                                                id="modalAddressZipCode"
                                                name="modalAddressZipCode"
                                                className="form-control"
                                                placeholder={99950}
                                            />
                                            <label htmlFor="modalAddressZipCode">Zip Code</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check form-switch">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="billingAddress"
                                            />
                                            <label htmlFor="billingAddress">
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
                {/*/ Add New Address Modal */}
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
export default OrderDetail