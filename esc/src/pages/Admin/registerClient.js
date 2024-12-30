import { useEffect, useState } from 'react';
import * as apis from '../../apis';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function RegisterClient() {
    const navigate = useNavigate();
    const [client, setClient] = useState([]);
    const [totalItem, setTotalItem] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [valueAdd, setValueAdd] = useState({
        clientName: '',
        contactPerson: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: '',
    });

   const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <li key={i} className={`paginate_button page-item ${currentPage === i ? 'active' : ''}`}>
                    <a
                        href="#"
                        aria-controls="DataTables_Table_0"
                        role="link"
                        aria-current="page"
                        data-dt-idx={0}
                        tabIndex={0}
                        className="page-link"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageClick(i);
                        }}
                    >
                        {i}
                    </a>
                </li>,
            );
        }
        return pages;
    };

    const [filters, setFilters] = useState({
        pageNumber: 1,
        searchTerm: '',
    });

    const [debouncedFilters, setDebouncedFilters] = useState(filters);

    // Debounce logic: Cập nhật giá trị `debouncedFilters` sau 2 giây
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedFilters({ ...filters }); // Sử dụng bản sao mới nhất của filters
        }, 2000); // 2 giây
    
        return () => {
            clearTimeout(handler); // Clear timeout nếu filters thay đổi trong thời gian debounce
        };
    }, [filters]);
    console.log(debouncedFilters)
    // Gọi API khi `debouncedFilters` thay đổi
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apis.GetAllClient(debouncedFilters);
                console.log(response);
                if (response.status === 200) {
                    setCurrentPage(debouncedFilters.pageNumber);
                    setClient(response.data.clients);
                    setTotalItem(response.data.totalRecords);
                    setTotalPage(response.data.totalPages);
                }
            } catch (error) {
                toast.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [debouncedFilters]);
    console.log(debouncedFilters)
    // Hàm xử lý khi thay đổi tìm kiếm hoặc phân trang
    const handlePageClick = (newPage, newSearchTerm = '') => {
        setFilters((prev) => ({
            ...prev,
            pageNumber: newPage || prev.pageNumber,
            searchTerm: newSearchTerm, // Cập nhật chính xác giá trị rỗng nếu người dùng xóa
        }));
    };
    const FetchApi = async () => {
        try {
            await apis.GetAllClient().then((res) => {
                if (res.status === 200) {
                    // toast.success("GetAllClient success")
                    setClient(res.data.clients);
                    setTotalItem(res.data.totalRecords);
                    setTotalPage(res.data.totalPages);
                    
                }
            });
        } catch (error) {
            toast.error(error);
        }
    };

    function handleChange(e) {
        setValueAdd({ ...valueAdd, [e.target.name]: e.target.value });
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        const FetchData = async () => {
            try {
                await apis.addClient(valueAdd).then((res) => {
                    if (res.status === 200) {
                        toast.success("addClient success")
                        window.location.reload();
                    }
                });
            } catch (error) {
                toast.error(error);
            }
        };
        FetchData();
    };
    useEffect(() => {
        FetchApi();
    }, []);
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                
                <div className="card">
                   
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
                                                onChange={(e) => handlePageClick(1, e.target.value)}
                                                aria-controls="DataTables_Table_0"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start justify-content-md-end align-items-baseline">
                                    <div className="dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center gap-4 pt-0">
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
                                            style={{ width: 60 }}
                                            aria-label="product: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            client Name
                                        </th>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 60 }}
                                            aria-label="product: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            contact Person
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
                                            style={{ width: 50 }}
                                            aria-label="qty: activate to sort column ascending"
                                        >
                                            phone Number
                                        </th>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 30 }}
                                            aria-label="product: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            address
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 40 }}
                                            aria-label="qty: activate to sort column ascending"
                                        >
                                            actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {client?.map((res) => (
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
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill text-body dropdown-toggle hide-arrow"
                                                        onClick={()=>(navigate("/product-admin-with-client"), window.localStorage.setItem('idAdminWithClient',res.clientId) )}
                                                        >
                                                            <i className="ri-eye-line ri-22px" />
                                                        </button>
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
                                                className={`paginate_button page-item previous ${
                                                    currentPage === 1 ? 'disabled' : ''
                                                }`}
                                                id="DataTables_Table_0_previous"
                                            >
                                                <a
                                                    aria-controls="DataTables_Table_0"
                                                    aria-disabled="true"
                                                    role="link"
                                                    data-dt-idx="previous"
                                                    tabIndex={-1}
                                                    className="page-link"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (currentPage > 1) handlePageClick(currentPage - 1);
                                                    }}
                                                >
                                                    <i className="ri-arrow-left-s-line" />
                                                </a>
                                            </li>

                                            {renderPageNumbers()}

                                            <li
                                                className={`paginate_button page-item next ${
                                                    currentPage === totalPage ? 'disabled' : ''
                                                }`}
                                                id="DataTables_Table_0_next"
                                            >
                                                <a
                                                    href="#"
                                                    aria-controls="DataTables_Table_0"
                                                    role="link"
                                                    data-dt-idx="next"
                                                    tabIndex={0}
                                                    className="page-link"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (currentPage < totalPage) handlePageClick(currentPage + 1);
                                                    }}
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
                                    <label htmlFor="add-user-fullname">Client Name</label>
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
                                    <label htmlFor="add-user-fullname">Contact Person</label>
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
                                    <label htmlFor="add-user-fullname">Email</label>
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
                                    <label htmlFor="add-user-fullname">Phone Number</label>
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
                                    <label htmlFor="add-user-fullname">Address</label>
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
                                    <label htmlFor="add-user-fullname">Password</label>
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
        </div>
    );
}
export default RegisterClient;
