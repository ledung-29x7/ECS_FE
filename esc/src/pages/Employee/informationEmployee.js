import { useState, useEffect, useRef } from 'react';
import * as apis from '../../apis';
import { toast } from 'react-toastify';

function InformationEmployee() {
        const [changePassword, setChangepassword] = useState({
            oldPassword: '',
            newPassword: '',
        });
        const [passwordVisibility, setPasswordVisibility] = useState({
            oldPassword: false,
            newPassword: false,
        });
    
        const togglePasswordVisibility = (field) => {
            setPasswordVisibility((prevState) => ({
                ...prevState,
                [field]: !prevState[field], // Đảo ngược trạng thái của trường được chỉ định
            }));
        };
        const handleChange = (event) => {
            const { name, value } = event.target;
            setChangepassword((prev) => ({
                ...prev,
                [name]: value,
            }));
        };

            const handleChangePassword = (e) => {
                e.preventDefault()
                const FetchChangePassWord = async () => {
                    try {
                        await apis.changePassword(changePassword).then((res) => {
                            console.log(res)
                            if (res.status === 200) {
                                toast.success('Change Password success');
                                setTimeout(()=>{
                                    window.location.reload()
                                },2000)
                            }
                        });
                    } catch (error) {
                        toast.error(error.message);
                    }
                };
                FetchChangePassWord()
            };
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between mb-6 text-center text-sm-start gap-2">
                    <div className="mb-2 mb-sm-0">
                        <h4 className="mb-1">Customer ID #634759</h4>
                  
                    </div>
                   
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
                                        Security
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card mb-6">
                                        <h5 className="card-header">Change Password</h5>
                                        <div className="card-body">
                                            <form
                                                id="formChangePassword"
                                                
                                                onSubmit={handleChangePassword}
                                                className="fv-plugins-bootstrap5 fv-plugins-framework"
                                                noValidate="novalidate"
                                            >
                                                <div className="alert alert-warning alert-dismissible" role="alert">
                                                    <h5 className="alert-heading mb-1">
                                                        Ensure that these requirements are met
                                                    </h5>
                                                    <span>Minimum 8 characters long, uppercase &amp; symbol</span>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="alert"
                                                        aria-label="Close"
                                                    />
                                                </div>
                                                <div className="row gx-5">
                                                    {/* Old Password */}
                                                    <div className="mb-4 col-12 col-sm-6 form-password-toggle fv-plugins-icon-container">
                                                        <div className="input-group input-group-merge">
                                                            <div className="form-floating form-floating-outline">
                                                                <input
                                                                    className="form-control"
                                                                    type={
                                                                        passwordVisibility.oldPassword
                                                                            ? 'text'
                                                                            : 'password'
                                                                    } // Đổi type dựa trên trạng thái
                                                                    id="oldPassword"
                                                                    name="oldPassword"
                                                                    onChange={handleChange}
                                                                    placeholder="············"
                                                                />
                                                                <label htmlFor="oldPassword">Old Password</label>
                                                            </div>
                                                            <span
                                                                className="input-group-text cursor-pointer"
                                                                onClick={() => togglePasswordVisibility('oldPassword')} // Xác định trường cần thay đổi
                                                            >
                                                                <i
                                                                    className={`ri-${
                                                                        passwordVisibility.oldPassword
                                                                            ? 'eye-line'
                                                                            : 'eye-off-line'
                                                                    } ri-20px`}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                    </div>

                                                    {/* New Password */}
                                                    <div className="mb-4 col-12 col-sm-6 form-password-toggle fv-plugins-icon-container">
                                                        <div className="input-group input-group-merge">
                                                            <div className="form-floating form-floating-outline">
                                                                <input
                                                                    className="form-control"
                                                                    type={
                                                                        passwordVisibility.newPassword
                                                                            ? 'text'
                                                                            : 'password'
                                                                    } // Đổi type dựa trên trạng thái
                                                                    id="newPassword"
                                                                    onChange={handleChange}
                                                                    name="newPassword"
                                                                    placeholder="············"
                                                                />
                                                                <label htmlFor="newPassword">New Password</label>
                                                            </div>
                                                            <span
                                                                className="input-group-text cursor-pointer"
                                                                onClick={() => togglePasswordVisibility('newPassword')} // Xác định trường cần thay đổi
                                                            >
                                                                <i
                                                                    className={`ri-${
                                                                        passwordVisibility.newPassword
                                                                            ? 'eye-line'
                                                                            : 'eye-off-line'
                                                                    } ri-20px`}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                                    </div>
                                                    <div className="col-12 text-end">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary me-2 waves-effect waves-light"
                                                        >
                                                            Change Password
                                                        </button>
                                                        <button
                                                            type="reset"
                                                            className="btn btn-outline-secondary waves-effect "
                                                            
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                            </form>
                                        </div>
                                    </div>
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

        </div>

    )
}
export default InformationEmployee