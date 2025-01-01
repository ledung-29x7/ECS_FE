import { useState, useEffect, useRef } from 'react';
import * as apis from '../../apis';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductCategory() {
    const idClient = window.localStorage.getItem('idClient');
    const [productService, setProductService] = useState([]);
    const [showAddService, setShowAddService] = useState(false);
    const [product, setProduct] = useState([]);
    const [service, setService] = useState([]);
    const [addProductService, setAddProductService] = useState({
        productServiceId: 0,
        serviceId: 0,
        productId: '',
        clientId: idClient,
        startDate: '',
        endDate: '',
        requiredEmployees: 0,
    });
    const datePickerRef = useRef(null); // Tạo ref để gắn input

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddProductService((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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
        // Kiểm tra jQuery và select2 đã được tải lên từ thẻ script
        if (window.$) {
            const $select = window.$('#alignment-country');

            // Khởi tạo select2
            $select.select2({
                placeholder: 'Select Product',
                allowClear: true,
            });

            // Lắng nghe sự kiện thay đổi giá trị
            $select.on('change', (e) => {
                const value = e.target.value;
                setAddProductService((prev) => ({
                    ...prev,
                    productId: value,
                }));
            });

            // Dọn dẹp select2 khi component bị unmount
            return () => {
                $select.select2('destroy');
            };
        } else {
            toast.error('jQuery or select2 is not loaded.');
        }
    }, [addProductService]);

    // get product service
    const FetchProductService = async () => {
        try {
            await apis
                .GetProductServiceById(idClient)
                .then((res) => {
                    
                    if (res.status === 200) {
                        // toast.success("GetProductServiceById success")
                        setProductService(res.data.productServices);
                    }
                })
                .catch((error) => {
                    toast.error(error)
                });
        } catch (error) {
            toast.error(error)
        }
    };

    // get service
    const FetchService = async () => {
        try {
            await apis
                .GetAllService()
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        // toast.success("GetAllService success")
                        setService(res.data);
                    }
                })
                .catch((error) => {
                   toast.error(error)
                });
        } catch (error) {
            toast.error(error)
        }
    };
    // get product
    const FetchProduct = async () => {
        try {
            await apis
                .GetAllProductByClient(idClient)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        // toast.success("GetAllProductByClient success")
                        setProduct(res.data);
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
        FetchProductService();
        FetchService();
    }, []);

    const handleShowAdd = (id) => {
        
        setAddProductService((prev) => ({
            ...prev,
            serviceId: id,
        }));
        setShowAddService(true);
        FetchProduct();
    };
    
    return (
        <>
        
            <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    {/* Header */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-6">
                                <div className="user-profile-header-banner">
                                    <img
                                        src="../../assets/img/pages/profile-banner.png"
                                        alt="Banner image"
                                        className="rounded-top"
                                    />
                                </div>
                                <div className="user-profile-header d-flex flex-column flex-lg-row text-sm-start text-center mb-4">
                                    <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                        <img
                                            src="../../assets/img/avatars/1.png"
                                            alt="user image"
                                            className="d-block h-auto ms-0 ms-sm-5 rounded user-profile-img"
                                        />
                                    </div>
                                    <div className="flex-grow-1 mt-3 mt-lg-5">
                                        <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-4">
                                            <div className="user-profile-info">
                                                <h4 className="mb-2 mt-lg-6">John Doe</h4>
                                                <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                                                    <li className="list-inline-item">
                                                        <i className="ri-palette-line me-2 ri-24px" />
                                                        <span className="fw-medium">UX Designer</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="ri-map-pin-line me-2 ri-24px" />
                                                        <span className="fw-medium">Vatican City</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="ri-calendar-line me-2 ri-24px" />
                                                        <span className="fw-medium"> Joined April 2021</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href="javascript:void(0)"
                                                className="btn btn-primary waves-effect waves-light"
                                            >
                                                <i className="ri-user-follow-line ri-16px me-1_5" />
                                                Connected
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Header */}

                    {/* User Profile Content */}
                    {productService.length > 0 ? (
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-5">
                                {/* About User */}
                                <div className="card mb-6">
                                    <div className="card-body">
                                        <small className="card-text text-uppercase text-muted small">About</small>
                                        <ul className="list-unstyled my-3 py-1">
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-user-3-line ri-24px" />
                                                <span className="fw-medium mx-2">Full Name:</span>{' '}
                                                <span>John Doe</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-check-line ri-24px" />
                                                <span className="fw-medium mx-2">Status:</span> <span>Active</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-star-smile-line ri-24px" />
                                                <span className="fw-medium mx-2">Role:</span> <span>Developer</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-flag-2-line ri-24px" />
                                                <span className="fw-medium mx-2">Country:</span> <span>USA</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <i className="ri-translate-2 ri-24px" />
                                                <span className="fw-medium mx-2">Languages:</span>{' '}
                                                <span>English</span>
                                            </li>
                                        </ul>
                                        <small className="card-text text-uppercase text-muted small">
                                            Contacts
                                        </small>
                                        <ul className="list-unstyled my-3 py-1">
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-phone-line ri-24px" />
                                                <span className="fw-medium mx-2">Contact:</span>{' '}
                                                <span>(123) 456-7890</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-wechat-line ri-24px" />
                                                <span className="fw-medium mx-2">Skype:</span> <span>john.doe</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <i className="ri-mail-open-line ri-24px" />
                                                <span className="fw-medium mx-2">Email:</span>{' '}
                                                <span>john.doe@example.com</span>
                                            </li>
                                        </ul>
                                        <small className="card-text text-uppercase text-muted small">Teams</small>
                                        <ul className="list-unstyled mb-0 mt-3 pt-1">
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-github-line ri-24px text-body me-2" />
                                                <div className="d-flex flex-wrap">
                                                    <span className="fw-medium me-2">Backend Developer</span>
                                                    <span>(126 Members)</span>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className="ri-reactjs-line ri-24px text-body me-2" />
                                                <div className="d-flex flex-wrap">
                                                    <span className="fw-medium me-2">React Developer</span>
                                                    <span>(98 Members)</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*/ About User */}
                                {/* Profile Overview */}
                                <div className="card mb-6">
                                    <div className="card-body">
                                        <small className="card-text text-uppercase text-muted small">
                                            Overview
                                        </small>
                                        <ul className="list-unstyled mb-0 mt-3 pt-1">
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-check-line ri-24px" />
                                                <span className="fw-medium mx-2">Task Compiled:</span>{' '}
                                                <span>13.5k</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-4">
                                                <i className="ri-user-3-line ri-24px" />
                                                <span className="fw-medium mx-2">Projects Compiled:</span>{' '}
                                                <span>146</span>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className="ri-star-smile-line ri-24px" />
                                                <span className="fw-medium mx-2">Connections:</span>{' '}
                                                <span>897</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*/ Profile Overview */}
                            </div>
                            <div className="col-xl-8 col-lg-7 col-md-7">
                                {/* Project table */}
                                <div className="card mb-4">
                                    <h5 className="card-header">Project List</h5>
                                    <div className="card-datatable table-responsive pb-0 mb-n4">
                                        <div
                                            id="DataTables_Table_0_wrapper"
                                            className="dataTables_wrapper dt-bootstrap5 no-footer"
                                        >
                                            <table
                                                className="table datatable-project table-border-bottom-0 dataTable no-footer dtr-column collapsed"
                                                id="DataTables_Table_0"
                                                style={{ width: 736 }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="control sorting_disabled"
                                                            rowSpan={1}
                                                            colSpan={1}
                                                            style={{ width: 10 }}
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
                                                            style={{ width: 271 }}
                                                            aria-label="Project: activate to sort column ascending"
                                                            aria-sort="descending"
                                                        >
                                                            Project
                                                        </th>
                                                        <th
                                                            className="sorting"
                                                            tabIndex={0}
                                                            aria-controls="DataTables_Table_0"
                                                            rowSpan={1}
                                                            colSpan={1}
                                                            style={{ width: 91 }}
                                                            aria-label="leader: activate to sort column ascending"
                                                        >
                                                            leader
                                                        </th>
                                                        <th
                                                            className="sorting"
                                                            tabIndex={0}
                                                            aria-controls="DataTables_Table_0"
                                                            rowSpan={1}
                                                            colSpan={1}
                                                            style={{ width: 128 }}
                                                            aria-label="teams: activate to sort column ascending"
                                                        >
                                                            teams
                                                        </th>
                                                        <th
                                                            className="sorting dtr-hidden"
                                                            tabIndex={0}
                                                            aria-controls="DataTables_Table_0"
                                                            rowSpan={1}
                                                            colSpan={1}
                                                            style={{ width: 0, display: 'none' }}
                                                            aria-label="Progress: activate to sort column ascending"
                                                        >
                                                            Progress
                                                        </th>
                                                        <th
                                                            className="sorting_disabled dtr-hidden"
                                                            rowSpan={1}
                                                            colSpan={1}
                                                            style={{ width: 0, display: 'none' }}
                                                            aria-label="Actions"
                                                        >
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="odd">
                                                        <td className="control" tabIndex={0} style={{}} />
                                                        <td className="dt-checkboxes-cell" style={{}}>
                                                            <input
                                                                type="checkbox"
                                                                className="dt-checkboxes form-check-input"
                                                            />
                                                        </td>
                                                        <td className="sorting_1" style={{}}>
                                                            <div className="d-flex justify-content-left align-items-center">
                                                                <div className="avatar-wrapper">
                                                                    <div className="avatar avatar-sm me-3">
                                                                        <img
                                                                            src="../../assets/img/icons/brands/vue.png"
                                                                            alt="Project Image"
                                                                            className="rounded-circle"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <span className="text-truncate fw-medium text-heading">
                                                                        Vue Admin template
                                                                    </span>
                                                                    <small>Vuejs Project</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <span className="text-heading">Georgie</span>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <div className="d-flex align-items-center">
                                                                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/18.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/13.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/17.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    div=""
                                                                    className="progress rounded-pill w-px-75"
                                                                    style={{ height: 8 }}
                                                                >
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: '26%' }}
                                                                        aria-valuenow={26}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                                <div className="text-heading ms-2">26%</div>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a
                                                                        href="javascript:;"
                                                                        className="btn btn-sm btn-icon btn-text-secondary dropdown-toggle hide-arrow rounded-pill waves-effect"
                                                                        data-bs-toggle="dropdown"
                                                                    >
                                                                        <i className="ri-more-2-line ri-22px" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Download
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="even">
                                                        <td className="control" tabIndex={0} style={{}} />
                                                        <td className="dt-checkboxes-cell" style={{}}>
                                                            <input
                                                                type="checkbox"
                                                                className="dt-checkboxes form-check-input"
                                                            />
                                                        </td>
                                                        <td className="sorting_1" style={{}}>
                                                            <div className="d-flex justify-content-left align-items-center">
                                                                <div className="avatar-wrapper">
                                                                    <div className="avatar avatar-sm me-3">
                                                                        <img
                                                                            src="../../assets/img/icons/brands/xamarin.png"
                                                                            alt="Project Image"
                                                                            className="rounded-circle"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <span className="text-truncate fw-medium text-heading">
                                                                        Hoffman Website
                                                                    </span>
                                                                    <small>HTML Project</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <span className="text-heading">Jarvis</span>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <div className="d-flex align-items-center">
                                                                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/1.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/5.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    div=""
                                                                    className="progress rounded-pill w-px-75"
                                                                    style={{ height: 8 }}
                                                                >
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: '24%' }}
                                                                        aria-valuenow={24}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                                <div className="text-heading ms-2">24%</div>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a
                                                                        href="javascript:;"
                                                                        className="btn btn-sm btn-icon btn-text-secondary dropdown-toggle hide-arrow rounded-pill waves-effect"
                                                                        data-bs-toggle="dropdown"
                                                                    >
                                                                        <i className="ri-more-2-line ri-22px" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Download
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="odd">
                                                        <td className="control" tabIndex={0} style={{}} />
                                                        <td className="dt-checkboxes-cell" style={{}}>
                                                            <input
                                                                type="checkbox"
                                                                className="dt-checkboxes form-check-input"
                                                            />
                                                        </td>
                                                        <td className="sorting_1" style={{}}>
                                                            <div className="d-flex justify-content-left align-items-center">
                                                                <div className="avatar-wrapper">
                                                                    <div className="avatar avatar-sm me-3">
                                                                        <img
                                                                            src="../../assets/img/icons/brands/python.png"
                                                                            alt="Project Image"
                                                                            className="rounded-circle"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <span className="text-truncate fw-medium text-heading">
                                                                        Foodista Mobile App
                                                                    </span>
                                                                    <small>Xamarin Project</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <span className="text-heading">Michelina</span>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <div className="d-flex align-items-center">
                                                                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/15.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/16.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/14.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    div=""
                                                                    className="progress rounded-pill w-px-75"
                                                                    style={{ height: 8 }}
                                                                >
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: '53%' }}
                                                                        aria-valuenow={53}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                                <div className="text-heading ms-2">53%</div>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a
                                                                        href="javascript:;"
                                                                        className="btn btn-sm btn-icon btn-text-secondary dropdown-toggle hide-arrow rounded-pill waves-effect"
                                                                        data-bs-toggle="dropdown"
                                                                    >
                                                                        <i className="ri-more-2-line ri-22px" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Download
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="even">
                                                        <td className="control" tabIndex={0} style={{}} />
                                                        <td className="dt-checkboxes-cell" style={{}}>
                                                            <input
                                                                type="checkbox"
                                                                className="dt-checkboxes form-check-input"
                                                            />
                                                        </td>
                                                        <td className="sorting_1" style={{}}>
                                                            <div className="d-flex justify-content-left align-items-center">
                                                                <div className="avatar-wrapper">
                                                                    <div className="avatar avatar-sm me-3">
                                                                        <img
                                                                            src="../../assets/img/icons/brands/sketch-label.png"
                                                                            alt="Project Image"
                                                                            className="rounded-circle"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <span className="text-truncate fw-medium text-heading">
                                                                        Foodista mobile app
                                                                    </span>
                                                                    <small>iPhone Project</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <span className="text-heading">Merline</span>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <div className="d-flex align-items-center">
                                                                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/1.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/5.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/7.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li className="avatar avatar-sm">
                                                                        <span
                                                                            className="avatar-initial rounded-circle pull-up text-heading"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-placement="top"
                                                                            title="6 more"
                                                                        >
                                                                            +6
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    div=""
                                                                    className="progress rounded-pill w-px-75"
                                                                    style={{ height: 8 }}
                                                                >
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: '64%' }}
                                                                        aria-valuenow={64}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                                <div className="text-heading ms-2">64%</div>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a
                                                                        href="javascript:;"
                                                                        className="btn btn-sm btn-icon btn-text-secondary dropdown-toggle hide-arrow rounded-pill waves-effect"
                                                                        data-bs-toggle="dropdown"
                                                                    >
                                                                        <i className="ri-more-2-line ri-22px" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Download
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="odd">
                                                        <td className="control" tabIndex={0} style={{}} />
                                                        <td className="dt-checkboxes-cell" style={{}}>
                                                            <input
                                                                type="checkbox"
                                                                className="dt-checkboxes form-check-input"
                                                            />
                                                        </td>
                                                        <td className="sorting_1" style={{}}>
                                                            <div className="d-flex justify-content-left align-items-center">
                                                                <div className="avatar-wrapper">
                                                                    <div className="avatar avatar-sm me-3">
                                                                        <img
                                                                            src="../../assets/img/icons/brands/xd-label.png"
                                                                            alt="Project Image"
                                                                            className="rounded-circle"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <span className="text-truncate fw-medium text-heading">
                                                                        Falcon Logo Design
                                                                    </span>
                                                                    <small>UI/UX Project</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <span className="text-heading">Owen</span>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <div className="d-flex align-items-center">
                                                                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/1.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/5.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    div=""
                                                                    className="progress rounded-pill w-px-75"
                                                                    style={{ height: 8 }}
                                                                >
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: '80%' }}
                                                                        aria-valuenow={80}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                                <div className="text-heading ms-2">80%</div>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a
                                                                        href="javascript:;"
                                                                        className="btn btn-sm btn-icon btn-text-secondary dropdown-toggle hide-arrow rounded-pill waves-effect"
                                                                        data-bs-toggle="dropdown"
                                                                    >
                                                                        <i className="ri-more-2-line ri-22px" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Download
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="even">
                                                        <td className="control" tabIndex={0} style={{}} />
                                                        <td className="dt-checkboxes-cell" style={{}}>
                                                            <input
                                                                type="checkbox"
                                                                className="dt-checkboxes form-check-input"
                                                            />
                                                        </td>
                                                        <td className="sorting_1" style={{}}>
                                                            <div className="d-flex justify-content-left align-items-center">
                                                                <div className="avatar-wrapper">
                                                                    <div className="avatar avatar-sm me-3">
                                                                        <img
                                                                            src="../../assets/img/icons/brands/react-info.png"
                                                                            alt="Project Image"
                                                                            className="rounded-circle"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <span className="text-truncate fw-medium text-heading">
                                                                        Dojo React Project
                                                                    </span>
                                                                    <small>React Project</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <span className="text-heading">Harmonia</span>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <div className="d-flex align-items-center">
                                                                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/1.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/5.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/7.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li className="avatar avatar-sm">
                                                                        <span
                                                                            className="avatar-initial rounded-circle pull-up text-heading"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-placement="top"
                                                                            title="5 more"
                                                                        >
                                                                            +5
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    div=""
                                                                    className="progress rounded-pill w-px-75"
                                                                    style={{ height: 8 }}
                                                                >
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: '10%' }}
                                                                        aria-valuenow={10}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                                <div className="text-heading ms-2">10%</div>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a
                                                                        href="javascript:;"
                                                                        className="btn btn-sm btn-icon btn-text-secondary dropdown-toggle hide-arrow rounded-pill waves-effect"
                                                                        data-bs-toggle="dropdown"
                                                                    >
                                                                        <i className="ri-more-2-line ri-22px" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Download
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="odd">
                                                        <td className="control" tabIndex={0} style={{}} />
                                                        <td className="dt-checkboxes-cell" style={{}}>
                                                            <input
                                                                type="checkbox"
                                                                className="dt-checkboxes form-check-input"
                                                            />
                                                        </td>
                                                        <td className="sorting_1" style={{}}>
                                                            <div className="d-flex justify-content-left align-items-center">
                                                                <div className="avatar-wrapper">
                                                                    <div className="avatar avatar-sm me-3">
                                                                        <img
                                                                            src="../../assets/img/icons/brands/figma-label-info.png"
                                                                            alt="Project Image"
                                                                            className="rounded-circle"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <span className="text-truncate fw-medium text-heading">
                                                                        Dashboard Design
                                                                    </span>
                                                                    <small>Vuejs Project</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <span className="text-heading">Keith</span>
                                                        </td>
                                                        <td className="" style={{}}>
                                                            <div className="d-flex align-items-center">
                                                                <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/1.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/8.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li
                                                                        data-bs-toggle="tooltip"
                                                                        data-popup="tooltip-custom"
                                                                        data-bs-placement="top"
                                                                        title="Kim Karlos"
                                                                        className="avatar avatar-sm pull-up"
                                                                    >
                                                                        <img
                                                                            className="rounded-circle"
                                                                            src="../../assets/img/avatars/9.png"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    div=""
                                                                    className="progress rounded-pill w-px-75"
                                                                    style={{ height: 8 }}
                                                                >
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: '47%' }}
                                                                        aria-valuenow={47}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                                <div className="text-heading ms-2">47%</div>
                                                            </div>
                                                        </td>
                                                        <td className="dtr-hidden" style={{ display: 'none' }}>
                                                            <div>
                                                                <div className="dropdown">
                                                                    <a
                                                                        href="javascript:;"
                                                                        className="btn btn-sm btn-icon btn-text-secondary dropdown-toggle hide-arrow rounded-pill waves-effect"
                                                                        data-bs-toggle="dropdown"
                                                                    >
                                                                        <i className="ri-more-2-line ri-22px" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Download
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                        <a
                                                                            href="javascript:;"
                                                                            className="dropdown-item"
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div style={{ width: '1%' }} />
                                            <div style={{ width: '1%' }} />
                                        </div>
                                    </div>
                                </div>
                                {/* /Project table */}
                                <div className="row">
                                    {/* Connections */}
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="card card-action mb-6">
                                            <div className="card-header align-items-center">
                                                <h5 className="card-action-title mb-0">Connections</h5>
                                                <div className="card-action-element">
                                                    <div className="dropdown">
                                                        <button
                                                            type="button"
                                                            className="btn dropdown-toggle hide-arrow p-0"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="ri-more-2-line ri-22px text-muted" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item waves-effect"
                                                                    href="javascript:void(0);"
                                                                >
                                                                    Share connections
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item waves-effect"
                                                                    href="javascript:void(0);"
                                                                >
                                                                    Suggest edits
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item waves-effect"
                                                                    href="javascript:void(0);"
                                                                >
                                                                    Report bug
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/avatars/2.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">Cecilia Payne</h6>
                                                                    <small>45 Connections</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="btn btn-outline-primary btn-icon waves-effect">
                                                                    <i className="ri-user-add-line ri-22px" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/avatars/3.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">Curtis Fletcher</h6>
                                                                    <small>1.32k Connections</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="btn btn-primary btn-icon waves-effect waves-light">
                                                                    <i className="ri-user-3-line ri-22px" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/avatars/12.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">Alice Stone</h6>
                                                                    <small>125 Connections</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="btn btn-primary btn-icon waves-effect waves-light">
                                                                    <i className="ri-user-3-line ri-22px" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/avatars/7.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">Darrell Barnes</h6>
                                                                    <small>456 Connections</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="btn btn-outline-primary btn-icon waves-effect">
                                                                    <i className="ri-user-add-line ri-22px" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/avatars/8.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">Eugenia Moore</h6>
                                                                    <small>1.2k Connections</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <button className="btn btn-outline-primary btn-icon waves-effect">
                                                                    <i className="ri-user-add-line ri-22px" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="text-center">
                                                        <a
                                                            href="javascript:;"
                                                            className="btn btn-text-primary waves-effect"
                                                        >
                                                            View all connections
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ Connections */}
                                    {/* Teams */}
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="card card-action mb-6">
                                            <div className="card-header align-items-center">
                                                <h5 className="card-action-title mb-0">Teams</h5>
                                                <div className="card-action-element">
                                                    <div className="dropdown">
                                                        <button
                                                            type="button"
                                                            className="btn dropdown-toggle hide-arrow p-0"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="ri-more-2-line ri-22px text-muted" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item waves-effect"
                                                                    href="javascript:void(0);"
                                                                >
                                                                    Share teams
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item waves-effect"
                                                                    href="javascript:void(0);"
                                                                >
                                                                    Suggest edits
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item waves-effect"
                                                                    href="javascript:void(0);"
                                                                >
                                                                    Report bug
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/icons/brands/react-label.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">React Developers</h6>
                                                                    <small>72 Members</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <a href="javascript:;">
                                                                    <span className="badge bg-label-danger rounded-pill">
                                                                        Developer
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/icons/brands/support-label.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">Support Team</h6>
                                                                    <small>122 Members</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <a href="javascript:;">
                                                                    <span className="badge bg-label-primary rounded-pill">
                                                                        Support
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/icons/brands/figma-label.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">UI Designers</h6>
                                                                    <small>7 Members</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <a href="javascript:;">
                                                                    <span className="badge bg-label-info rounded-pill">
                                                                        Designer
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/icons/brands/vue-label.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-2">
                                                                    <h6 className="mb-1">Vue.js Developers</h6>
                                                                    <small>289 Members</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <a href="javascript:;">
                                                                    <span className="badge bg-label-danger rounded-pill">
                                                                        Developer
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar me-2">
                                                                    <img
                                                                        src="../../assets/img/icons/brands/twitter-label.png"
                                                                        alt="Avatar"
                                                                        className="rounded-circle"
                                                                    />
                                                                </div>
                                                                <div className="me-w">
                                                                    <h6 className="mb-1">Digital Marketing</h6>
                                                                    <small>24 Members</small>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <a href="javascript:;">
                                                                    <span className="badge bg-label-secondary rounded-pill">
                                                                        Marketing
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="text-center">
                                                        <a
                                                            href="javascript:;"
                                                            className="btn btn-text-primary waves-effect"
                                                        >
                                                            View all teams
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ Teams */}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="content-wrapper">
                            {/* Content */}
                            <div className=" flex-grow-1">
                                <div className="card">
                                    {/* Pricing Plans */}
                                    <div className="pb-sm-12 pb-2 rounded-top">
                                        <div className="container py-12">
                                            <h3 className="text-center mb-2 mt-0 mt-md-4">Pricing Plans</h3>
                                            <p className="text-center mb-2">
                                                All plans include 40+ advanced tools and features to boost your
                                                product. Choose the best plan to fit your needs.
                                            </p>
                                            <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-5 mb-6">
                                                <label className="switch switch-sm ms-sm-5 ps-sm-5 me-0">
                                                    <span className="switch-label fw-medium text-body">
                                                        Monthly
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        className="switch-input price-duration-toggler"
                                                        defaultChecked=""
                                                    />
                                                    <span className="switch-toggle-slider">
                                                        <span className="switch-on" />
                                                        <span className="switch-off" />
                                                    </span>
                                                    <span className="switch-label fw-medium text-body">Annual</span>
                                                </label>
                                                <div className="mt-n5 ms-n5 ml-2 mb-10 d-none d-sm-flex align-items-center gap-1">
                                                    <i className="ri-corner-left-down-fill ri-24px text-muted scaleX-n1-rtl" />
                                                    <span className="badge badge-sm bg-label-primary rounded-pill mb-2 ">
                                                        Save up to 10%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="pricing-plans container row mx-4 gy-3 px-lg-12">
                                                {/* Standard */}
                                                {service.map((res) => (
                                                    <div className="col-lg mb-lg-0 mb-3">
                                                        <div className="card border-primary border shadow-none">
                                                            <div className="card-body position-relative pt-4">
                                                                <div className="my-5 pt-6 text-center">
                                                                    <img
                                                                        src="../../assets/img/illustrations/pricing-standard.png"
                                                                        alt="Standard Image"
                                                                        height={100}
                                                                    />
                                                                </div>
                                                                <h4 className="card-title text-center text-capitalize mb-1">
                                                                    {res?.serviceName}
                                                                </h4>
                                                                {/* <p className="text-center mb-5">
                                                                For small to medium businesses
                                                            </p> */}
                                                                <div className="text-center">
                                                                    <div className="d-flex justify-content-center">
                                                                        <sup className="h6 pricing-currency mt-2 mb-0 me-1 text-body">
                                                                            $
                                                                        </sup>
                                                                        <h1 className="price-toggle price-yearly text-primary mb-0">
                                                                            {res?.costPerDay}
                                                                        </h1>

                                                                        <sub className="h6 text-body pricing-duration mt-auto mb-1">
                                                                            /staff
                                                                        </sub>
                                                                    </div>
                                                                </div>

                                                                <button
                                                                    onClick={() => handleShowAdd(res?.serviceId)}
                                                                    className="btn btn-primary mt-3 d-grid w-100 waves-effect waves-light"
                                                                >
                                                                    Upgrade
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ Pricing Plans */}
                                </div>
                            </div>
                            {/* / Content */}

                            <div className="content-backdrop fade" />
                        </div>
                    )}
                    {/*/ User Profile Content */}
                </div>
                {/* / Content */}
                
            </div>
            
        </>
    );
}
export default ProductCategory;
