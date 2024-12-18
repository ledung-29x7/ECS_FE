import { useState, useEffect,useRef } from 'react';
import * as apis from '../../apis';
import 'react-toastify/dist/ReactToastify.css';
function CallHistory() {
    const [callHistory, setCallHistory] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [callStatus,setCallStatus]=useState([])
    // const [callHistoryId, setCallHistoryId] = ({});
    const [valueAdd, setValueAdd] = useState({
        callId: 0,
        employeeId: "",
        callDatetime:"",
        phoneNumber: '',
        status: 0,
        notes: '',
    });
    const datePickerRef = useRef(null); 
    useEffect(() => {
        if (window.flatpickr && datePickerRef.current) {
            window.flatpickr(datePickerRef.current, {
                dateFormat: 'Y-m-d', // Định dạng ngày
                defaultDate: new Date(), // Ngày mặc định
                enableTime: false, // Nếu không cần thời gian
            });
        }
    }, []);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await apis.GetAllEmployee();
                if (res.status === 200) {
                    setEmployee(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchEmployee();
    }, []);
    useEffect(()=>{
        const fetchCallStatus = async ()=>{
            try {
                const res = await apis.GetAllCallStatus();
                if(res.status === 200){
                    setCallStatus(res.data);
                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchCallStatus();
    },[])
    const FetchApi = async () => {
        try {
            await apis
                .GetAllCallHistory()
                .then((res) => {
                    if (res.status === 200) {
                        setCallHistory(res.data);
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
    function handleChange(e) {
        console.log(e.target.value)
        setValueAdd({ ...valueAdd, [e.target.name]: e.target.value });
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        const FetchData = async () => {
            try {
                await apis.AddCallHistory(valueAdd).then((res) => {
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
    // async function GetAllCallHistoryById(id) {
    //     try {
    //         const res = await apis.GetCallHistoryById(id);
    //         if (res.status === 200) {
    //             setCallHistoryId(res.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const handleDelete = async (id) => {
        try {
            console.log('try');
            const res = await apis.DeleteCallHistory(id);
            console.log(res);
            if (res.status === 200) {
                console.log('delete success');
                FetchApi();
            }
        } catch (error) {
            console.error(error);
        }
    };
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
                        <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
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
                                    <div className="dataTables_length my-0" id="DataTables_Table_0_length">
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
                                                        <i className="ri-download-line ri-16px me-2" />{' '}
                                                        <span className="d-none d-sm-inline-block">Export</span>
                                                    </span>
                                                </button>
                                            </div>{' '}
                                        </div>
                                    </div>
                                    <div className="add-new">
                                        <button
                                            className="btn btn-primary waves-effect waves-light"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasAddUser"
                                        >
                                            <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none" />
                                            <span className="d-none d-sm-inline-block"> Add New User </span>
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
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            callId
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            employeeId
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            callDatetime
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            phoneNumber
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            status
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            notes
                                        </th>

                                        <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Actions"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {callHistory.map((res) => (
                                        <tr className="odd">
                                            <td className="  control" tabIndex={0} style={{ display: 'none' }} />
                                            <td className="  dt-checkboxes-cell">
                                                <input type="checkbox" className="dt-checkboxes form-check-input" />
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{res?.callId}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{res?.employeeId}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{res?.callDatetime}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{res?.phoneNumber}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{res?.status}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{res?.notes}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="" style={{}}>
                                                <div className="d-flex align-items-center">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                                                        data-bs-toggle="tooltip"
                                                        title="Delete Invoice"
                                                        onClick={() => handleDelete(res.callId)}
                                                    >
                                                        <i className="ri-delete-bin-7-line ri-22px" />
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-item view-record"
                                                        data-bs-target="#viewUser"
                                                        title="Preview"
                                                        data-bs-toggle="modal"
                                                        // onClick={() => GetAllCallHistoryById(res.callId)}
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
                                                            href="javascript:;"
                                                            className="dropdown-item view-record"
                                                            data-bs-target="#viewUser"
                                                            data-bs-toggle="modal"
                                                            // onClick={() => GetAllCallHistoryById(res?.callId)}
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
                                                            <span>view</span>
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="dropdown-item delete-record"
                                                            data-bs-target="#editUser"
                                                            data-bs-toggle="modal"
                                                            // onClick={()=>GetDepartmentByIdEdit(res.departmentID)}
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
                                                            <span>Edit</span>
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            onClick={() => handleDelete(res?.callId)}
                                                            className="dropdown-item delete-record"
                                                        >
                                                            <i className="ri-delete-bin-7-line me-2" />
                                                            <span>Delete</span>
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
                                onSubmit={handleSumbit}
                                className="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework"
                                id="addNewUserForm"
                                onsubmit="return false"
                                noValidate="novalidate"
                            >
                            <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                <div className="form-floating form-floating-outline form-floating-select2">
                                    <div className="position-relative">
                                        <select
                                            id="select2Basic"
                                            className=" form-select"
                                            name="employeeId"
                                            value={valueAdd.employeeId} // Gắn giá trị hiện tại
                                            onChange={handleChange} // Gọi hàm xử lý sự kiện
                                            aria-hidden="true"
                                        >
                                            <option value="" data-select2-id={2}>
                                            employeeId
                                            </option>
                                            {employee.map((res,key)=>
                                                <option key={key} value={res.employeeId}>
                                                    {res.employeeId}
                                                </option>
                                            )}
                                        </select>
                                    </div>
                                    <label htmlFor="select2Basic">employeeId</label>
                                </div>
                            </div>
                            <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                            <div className=" me-4 d-flex flex-column">
                                <label className="text-sm-start" htmlFor="alignment-birthdate">
                                callDatetime
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        id='alignment-birthdate'
                                        name='callDatetime'
                                        onChange={handleChange}
                                        className="form-control dob-picker flatpickr-input"
                                        placeholder="YYYY-MM-DD"
                                        readOnly
                                        ref={datePickerRef}
                                    />
                                </div>
                            </div>
                            </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        id="add-user-contact"
                                        className="form-control phone-mask"
                                        placeholder="+84 974365472"
                                        aria-label="john.doe@example.com"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">phoneNumber</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>

                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                <div className="form-floating form-floating-outline form-floating-select2">
                                    <div className="position-relative">
                                        <select
                                            id="select2Basic"
                                            className=" form-select"
                                            name="employeeId"
                                            value={valueAdd.status} // Gắn giá trị hiện tại
                                            onChange={handleChange} // Gọi hàm xử lý sự kiện
                                            aria-hidden="true"
                                        >
                                            <option value="" data-select2-id={2}>
                                            Status
                                            </option>
                                            {callStatus.map((res,key)=>
                                                <option key={key} value={res.statusId}>
                                                    {res.statusName}
                                                </option>
                                            )}
                                        </select>
                                    </div>
                                    <label htmlFor="select2Basic">Stautus</label>
                                </div>
                            </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control phone-mask"
                                        placeholder=""
                                        aria-label=""
                                        name="notes"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">notes</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
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
            {/* getbyid */}
            <div className="modal fade" id="viewUser" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-view-user">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            <div className="text-center mb-6">
                                <h4 className="mb-2">details call History</h4>
                            </div>
                            <form
                                id="viewUserForm"
                                className="row g-5 fv-plugins-bootstrap5 fv-plugins-framework"
                                noValidate="novalidate"
                            >
                                <table
                                    className="datatables-order table dataTable no-footer dtr-column"
                                    id="DataTables_Table_0"
                                    aria-describedby="DataTables_Table_0_info"
                                    style={{ width: 1384 }}
                                >
                                    <thead>
                                        <tr>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 99 }}
                                                aria-label="Plan: activate to sort column ascending"
                                            >
                                                callId
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 99 }}
                                                aria-label="Plan: activate to sort column ascending"
                                            >
                                                employeeId
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 99 }}
                                                aria-label="Plan: activate to sort column ascending"
                                            >
                                                callDatetime
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 99 }}
                                                aria-label="Plan: activate to sort column ascending"
                                            >
                                                phoneNumber
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 99 }}
                                                aria-label="Plan: activate to sort column ascending"
                                            >
                                                status
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 99 }}
                                                aria-label="Plan: activate to sort column ascending"
                                            >
                                                notes
                                            </th>

                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 99 }}
                                                aria-label="Actions"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd">
                                            <td className="  control" tabIndex={0} style={{ display: 'none' }} />
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            {/* <span className="fw-medium">{callHistoryId?.callId}</span> */}
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">
                                                                {/* {callHistoryId?.employeeId} */}
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">
                                                                {/* {callHistoryId?.callDatetime} */}
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">
                                                                {/* {callHistoryId?.phoneNumber} */}
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            {/* <span className="fw-medium">{callHistoryId?.status}</span> */}
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            {/* <span className="fw-medium">{callHistoryId?.notes}</span> */}
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="col-12 text-center">
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
            {/* getbyid */}
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
export default CallHistory;
