import { useState, useEffect, useRef } from 'react';
import * as apis from '../../apis';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function CallHistory() {
    const employeeID = window.localStorage.getItem('employeeID');
    const [callHistory, setCallHistory] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [callStatus, setCallStatus] = useState([]);
    const navigate = useNavigate();
    const getDefaultValueAdd = () => ({
        employeeId: employeeID,
        phoneNumber: '',
        status: 0,
        notes: '',
    });
    const [callHistoryId, setCallHistoryId] =useState ({});
    const [valueAdd, setValueAdd] = useState(getDefaultValueAdd());
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await apis.GetAllEmployee();
                if (res.status === 200) {
                    // toast.success("GetAllEmployee success")
                    setEmployee(res.data.employees);
                }
            } catch (error) {
              toast.error(error)
            }
        };
        fetchEmployee();
    }, []);
    useEffect(() => {
        const fetchCallStatus = async () => {
            try {
                const res = await apis.GetAllCallStatus();
                if (res.status === 200) {
                    // toast.success("GetAllCallStatus success")
                    setCallStatus(res.data);
                }
            } catch (error) {
              toast.error(error)
            }
        };
        fetchCallStatus();
    }, []);
    const FetchApi = async () => {
        try {
            await apis
                .GetCallHistoryByEmployeeId(employeeID)
                .then((res) => {
                    if (res.status === 200) {
                        // toast.success("GetAllCallHistory success")
                        setCallHistory(res.data);
                    }
                })
                .catch((error) => {
                  toast.error(error)
                });
        } catch (error) {
          toast.error(error)
        }
    };
    useEffect(() => {
        FetchApi();
    }, []);
    function handleChange(e) {
        const { name, value } = e.target;

        setValueAdd({
            ...valueAdd,
            [name]: name === 'status' ? Number(value) : value, // Chuyển statusId sang số
        });
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        // const sanitizedData = {
        //     ...valueAdd,
        //     statusId: parseInt(valueAdd.statusId, 10), // Chuyển statusId thành số nếu cần
        // };

        const FetchData = async () => {
            try {
                const res = await apis.AddCallHistory(valueAdd);
                if (res.status === 200) {
                    toast.success('Submission Successful')
                    if (valueAdd.status === 1) {
                        
                        navigate("/addorder")
                        window.localStorage.setItem("callId",res.data.callId)
                    }
                    else{
                        FetchApi();
                        const closeButton = document.querySelector('#offcanvasAddUser .btn-cancel');
                        if (closeButton) {
                            closeButton.click(); // Kích hoạt sự kiện click trên nút đóng
                        }
                        
                    }
                }
            } catch (error) {
                toast.error('Error Submitting Data:', error)
            }
        };

        FetchData();
    };

    async function GetAllCallHistoryById(id) {
        try {
            const res = await apis.GetCallHistoryById(id);
            if (res.status === 200) {
                // toast.success("GetCallHistoryById success")
                setCallHistoryId(res.data);
            }
        } catch (error) {
          toast.error(error)
        }
    }
    const handleDelete = async (id) => {
        try {
            console.log('try');
            const res = await apis.DeleteCallHistory(id);
            console.log(res);
            if (res.status === 200) {
                toast.success('delete success')
                FetchApi();
            }
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
              
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
                                            <span className="d-none d-sm-inline-block"> Add Call History </span>
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
                                        {/* <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            callId
                                        </th> */}
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            Employee
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
                                            Call Date Time
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
                                            Phone Number
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
                                            Status
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
                                            Notes
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
                                            {/* <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{res?.callId}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td> */}
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">
                                                                {
                                                                    employee.find(
                                                                        (r) => r.employeeId === res?.employeeId,
                                                                    )?.firstName
                                                                }{' '}
                                                                {
                                                                    employee.find(
                                                                        (r) => r.employeeId === res?.employeeId,
                                                                    )?.lastName
                                                                }
                                                            </span>
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
                                                            <span className="fw-medium">
                                                                {
                                                                    callStatus.find((r) => r.statusId === res?.status)
                                                                        ?.statusName
                                                                }
                                                            </span>
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
                                                <div id="order" className="d-flex align-items-center">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                                                        data-bs-toggle="tooltip"
                                                        title="Delete Invoice"
                                                        onClick={() => handleDelete(res.callId)}
                                                    >
                                                        <i className="ri-delete-bin-7-line ri-22px" />
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
                                                            id="order-open"
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
                                    <input
                                        type="text"
                                        id="add-user-contact"
                                        className="form-control phone-mask"
                                        placeholder="+84 974365472"
                                        aria-label="john.doe@example.com"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">Phone Number</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>

                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <div className="form-floating form-floating-outline form-floating-select2">
                                        <div className="position-relative">
                                            <select
                                                id="select2Basic"
                                                className="form-select"
                                                name="status"
                                                value={valueAdd.status}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select status</option>

                                                {callStatus.map((res, key) => (
                                                    <option key={key} value={res.statusId}>
                                                        {res.statusName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <label htmlFor="select2Basic">Status</label>
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
                                    <label htmlFor="add-user-fullname">Notes</label>
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
                                    className="btn btn-cancel btn-outline-danger waves-effect"
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
            {/* edit */}
            <div className="modal fade" id="editUser" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            <div className="text-center mb-6">
                                <h4 className="mb-2">Add order</h4>
                            </div>
                            <form
                                // onSubmit={()=>handleSumbitEdit()}
                                id="editUserForm"
                                className="row g-5 fv-plugins-bootstrap5 fv-plugins-framework"
                                noValidate="novalidate"
                            >
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="orderer"
                                        aria-label="John Doe"
                                        // value={valueEdit.departmentName}
                                        // onChange={handleChangeEdit}
                                    />
                                    <label htmlFor="add-user-fullname">Orderer</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="recipientName"
                                        aria-label="John Doe"
                                        // value={valueEdit.managerId}
                                        // onChange={handleChangeEdit}
                                    />
                                    <label htmlFor="add-user-fullname">Recipient Name</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="recipientPhone"
                                        aria-label="John Doe"
                                        // value={valueEdit.managerId}
                                        // onChange={handleChangeEdit}
                                    />
                                    <label htmlFor="add-user-fullname">Recipient Phone</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="recipientAddress"
                                        aria-label="John Doe"
                                        // value={valueEdit.managerId}
                                        // onChange={handleChangeEdit}
                                    />
                                    <label htmlFor="add-user-fullname">Recipient Address</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-3 waves-effect waves-light">
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-cancel btn-outline-secondary waves-effect"
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
            {/* / Content */}
          
        </div>
    );
}
export default CallHistory;
