import { useEffect, useState } from 'react';
import React from 'react';
import * as apis from '../../apis';
import { useParams } from 'react-router-dom';
import { useStore } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductServiceManage() {
    const [productService, setproductService] = useState([]);
    const [serviceId, setServiceId] = useState({});
    const [idService, setIdService] = useState(0);
    const [service, setService] = useState({});
    const [product, setProduct] = useState([]);
    const [client, setClient] = useState([]);
    
    const [newEmployee, setNewEmployee] = useState({
        employeeServiceId: 0,
        employeeId: '',
        serviceId: 0,
    });


    const [valueAdd, setValueAdd] = useState({
        serviceName: '',
        costPerDay: 0,
    });
    const [valueEdit, setValueEdit] = useState({
        serviceId: 0,
        serviceName: '',
        costPerDay: 0,
    });
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const FetchApi = async () => {
        try {
            await apis
                .GetAllProductService()
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res);
                        setproductService(res.data.productServices);
                    }
                })
                .catch((error) => {
                    toast.error('get error GetAllProductService');
                });
        } catch (error) {
            toast.error('get error GetAllProductService');
        }
    };
    useEffect(() => {
        const fetchSevice = async () => {
            try {
                const res = await apis.GetAllService();
                if (res.status === 200) {
                    // toast.success("GetAllService success")
                    setService(res.data);
                }
            } catch (error) {
                toast.error("error GetAllService")
            }
        };
        fetchSevice();
    }, []);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await apis.GetAllProduct();
                if (res.status === 200) {
                    // toast.success("GetAllProduct success")
                    setProduct(res.data.products);
                }
            } catch (error) {
                toast.error("error GetAllProduct")
            }
        };
        fetchProduct();
    }, []);

    useEffect(() => {
        FetchApi();
    }, []);
    function handleChange(e) {
        setValueAdd({ ...valueAdd, [e.target.name]: e.target.value });
    }
    function handleChangeEdit(e) {
        setValueEdit({ ...valueEdit, [e.target.name]: e.target.value });
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        const FetchData = async () => {
            try {
                await apis.AddService(valueAdd).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        toast.success("AddService success")
                        window.location.reload();
                    }
                });
            } catch (error) {
                toast.error("error")
            }
        };
        FetchData();
    };
    const handleGetRequiredEmployees = async (productId, requiredEmployees,serviceId) => {
        try {
            const params = { productId, requiredEmployees };
            const response = await apis.GetAvailableEmployees(params);

            console.log('API Response:', response);
            toast.success('Lấy dữ liệu thành công!');

            if (Array.isArray(response)) {
                setServiceId(response);
                setIdService(serviceId);
            } else {
                console.error('Response is not an array:', response);
                toast.error('Dữ liệu trả về không đúng định dạng!');
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error.response?.data || error.message);
            toast.error('Không thể lấy dữ liệu!');
        }
    };

    const handleAddToService = async (employeeId, serviceId) => {
        try {
            const payload = {
                employeeServiceId: 0, 
                employeeId,
                serviceId,
            };
            const res = await apis.AddEmployeeService(payload);
            toast.success(`Employee ${employeeId} assigned to Service ${serviceId}!`);
        } catch (error) {
            console.error('Error adding employee to service:', error);
            toast.error('Failed to assign employee to service.');
        }
    };


    const handleDelete = async (id) => {
        try {
            console.log('try');
            const res = await apis.DeleteService(id);
            console.log(res);
            if (res.status === 200) {
                toast.success("deleteService success")
                FetchApi();
            }
        } catch (error) {
            toast.error('delete error');
        }
    };
    const handleSumbitEdit = async (e) => {
        e.preventDefault();
        const FetchData = async () => {
            try {
                await apis.PutService(valueEdit.serviceId, valueEdit).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        toast.success("Put Service Success")
                        FetchApi();
                        const closeButton = document.querySelector('#editUser .btn-close');
                        if (closeButton) {
                            closeButton.click(); // Kích hoạt sự kiện click trên nút đóng
                        }
                    }
                });
            } catch (error) {
                toast.error('edit error');
            }
        };
        FetchData();
    };
    async function GetServiceByIdEdit(id) {
        try {
            const res = await apis.GetServiceById(id);
            console.log(res);
            if (res.status === 200) {
                // toast.success("GetServiceByIdEdit success")
                setValueEdit(res.data);
            }
        } catch (error) {
            toast.error("get Service error")
        }
    }
    async function GetServiceById(id) {
        try {
            const res = await apis.GetServiceById(id);
            console.log(res);
            if (res.status === 200) {
                // toast.success("GetServiceById success")
                setServiceId(res.data);
            }
        } catch (error) {
            toast.error("GetServiceById error")
        }
    }
    async function GetAvailableEmployees(id, RequiredEmployees) {
        try {
            const res = await apis.GetAvailableEmployees(id, RequiredEmployees);
            console.log(res);
            if (res.status === 200) {
                // toast.success("GetAvailableEmployees success")
                setServiceId(res.data);
            }
        } catch (error) {
            toast.error("GetAvailableEmployees error")
        }
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
                                        <small className="mb-0">Total Users</small>
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
                                        <p className="text-heading mb-1">Paid Users</p>
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
                                        <p className="text-heading mb-1">Active Users</p>
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
                                        <p className="text-heading mb-1">Pending Users</p>
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
                                <select id="FilterTransaction" className="form-select text-capitalize">
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
                        <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
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
                                                        <i className="ri-download-line ri-16px me-1" />{' '}
                                                        <span className="d-none d-sm-inline-block">Export</span>
                                                    </span>
                                                </button>
                                            </div>{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                                        <div className="me-4">
                                            <div id="DataTables_Table_0_filter" className="dataTables_filter">
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
                                                <span className="d-none d-sm-inline-block"> New Service </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table
                                className="datatables-users table dataTable no-footer dtr-column"
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
                                            className="sorting sorting_desc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 50 }}
                                            aria-label="User: activate to sort column ascending"
                                            aria-sort="descending"
                                        >
                                            Service Name
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 50 }}
                                            aria-label="Email: activate to sort column ascending"
                                        >
                                            Product Name
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 40 }}
                                            aria-label="Email: activate to sort column ascending"
                                        >
                                            Start Date
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 40 }}
                                            aria-label="Email: activate to sort column ascending"
                                        >
                                            End Date
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 30 }}
                                            aria-label="Email: activate to sort column ascending"
                                        >
                                            Person
                                        </th>
                                        <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 30 }}
                                            aria-label="Actions"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productService.map((res) => (
                                        <tr className="odd">
                                            <td
                                                className="control dtr-hidden"
                                                tabIndex={0}
                                                style={{ display: 'none' }}
                                            />
                                            <td className="  dt-checkboxes-cell">
                                                <input type="checkbox" className="dt-checkboxes form-check-input" />
                                            </td>
                                            <td>
                                                <span> {service.find((r) => r.serviceId === res?.serviceId)?.serviceName}</span>
                                            </td>
                                            <td>
                                                <span> {product.find((r) => r.productId === res?.productId)?.productName}</span>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <span className="text-heading text-truncate fw-medium">
                                                            {formatDate(res?.startDate)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <span className="text-heading text-truncate fw-medium">
                                                            {formatDate(res?.endDate)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a
                                                            className="text-heading text-truncate"
                                                        >
                                                            <span className="fw-medium">{res?.requiredEmployees}</span>
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
                                                        onClick={() => handleDelete(res.serviceId)}
                                                    >
                                                        <i className="ri-delete-bin-7-line ri-22px" />
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-item view-record"
                                                        data-bs-target="#viewUser"
                                                        title="Preview"
                                                        data-bs-toggle="modal"
                                                        onClick={() => handleGetRequiredEmployees(res.productId, res.requiredEmployees,res.serviceId)}


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
                                                            onClick={() => GetServiceById(res?.serviceId)}
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
                                                            <span>view</span>
                                                        </a>
                                                  
                                                        <a
                                                            href="javascript:;"
                                                            className="dropdown-item delete-record"
                                                            data-bs-target="#editUser"
                                                            data-bs-toggle="modal"
                                                            onClick={() => GetServiceByIdEdit(res?.serviceId)}
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
                                                            <span>Edit</span>
                                                        </a>

                                                        <a
                                                            href="javascript:;"
                                                            onClick={() => handleDelete(res?.serviceId)}
                                                            className="dropdown-item delete-record"
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
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
                                Add Service
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
                                className=" pt-0 fv-plugins-bootstrap5 fv-plugins-framework"
                                noValidate="novalidate"
                            >
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="serviceName"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">Service Name</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder=""
                                        name="costPerDay"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">Cost Per Day</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <button type="submit" className="btn btn-primary me-sm-3 me-1 waves-effect waves-light">
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
            {/* edit */}
            <div className="modal fade" id="editUser" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            <div className="text-center mb-6">
                                <h4 className="mb-2">Edit despartment</h4>
                            </div>
                            <form
                                onSubmit={handleSumbitEdit}
                                id="editUserForm"
                                className="row g-5 fv-plugins-bootstrap5 fv-plugins-framework"
                                noValidate="novalidate"
                            >
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="serviceName"
                                        aria-label="John Doe"
                                        value={valueEdit.serviceName}
                                        onChange={handleChangeEdit}
                                    />
                                    <label htmlFor="add-user-fullname">Service Name</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                <div className="form-floating form-floating-outline mb-5 fv-plugins-icon-container">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="costPerDay"
                                        aria-label="John Doe"
                                        value={valueEdit.costPerDay}
                                        onChange={handleChangeEdit}
                                    />
                                    <label htmlFor="add-user-fullname">Cost Per Day</label>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                                {/* <div className="col-12 col-md-6">
                                    <div className="form-floating form-floating-outline">
                                        <select
                                            id="modalEditUserStatus"
                                            name="managerId"
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option value={1} selected="">
                                                1
                                            </option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                        </select>
                                        <label htmlFor="modalEditUserStatus">Status</label>
                                    </div>
                                </div> */}
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
            {/* getbyid */}
            <div className="modal fade" id="viewUser" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-view-user">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            <div className="text-center mb-6">
                                <h4 className="mb-2">details despartment</h4>
                            </div>
                            <form
                                id="viewUserForm"
                                className="row g-5 fv-plugins-bootstrap5 fv-plugins-framework"
                                noValidate="novalidate"
                            >
                                 <table
                    className="datatables-users table dataTable no-footer dtr-column"
                    id="DataTables_Table_0"
                    aria-describedby="DataTables_Table_0_info"
                    style={{ width: 1394 , textAlign: 'center'}} 
                >
                    <thead >
                        <tr>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(serviceId) && serviceId.length > 0 ? (
                            serviceId.map((employee) => (
                                <tr key={employee.employeeId}>
                                    <td>{employee.employeeId}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>
                                        <button
                                            onClick={() => handleAddToService(employee.employeeId, idService)}
                                        >
                                         +
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No employees available</td>
                            </tr>
                        )}
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
export default ProductServiceManage;
