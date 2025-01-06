import { useEffect, useState } from 'react';
import React from 'react';
import * as apis from '../../apis';
import { useParams } from 'react-router-dom';
import { useStore } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category() {
    const [category, setCategory] = useState([]);
    const [valueAdd, setValueAdd] = useState({
        categoryName: '',
    });
    function handleChange(e) {
        setValueAdd({ ...valueAdd, [e.target.name]: e.target.value });
    }
    const handleSumbit = async (e) => {
        e.preventDefault();
        const FetchData = async () => {
            try {
                await apis.AddCategory(valueAdd).then((res) => {
                    if (res.status === 200) {
                        toast.success('AddCategory success');
                        window.location.reload();
                    }
                });
            } catch (error) {
                toast.error(error);
            }
        };
        FetchData();
    };
    const handleSumbitEdit = async (e) => {
        e.preventDefault();
        const FetchData = async () => {
            try {
                await apis.PutCategory(valueAdd.categoryId, valueAdd).then((res) => {
                    if (res.status === 200) {
                        toast.success('PutCategory success');
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
    const handleDelete = async (id) => {
        try {
            const res = await apis.DeleteCategory(id);
            if (res.status === 200) {
                toast.success('DeleteCategory success');
                FetchApi();
            }
        } catch (error) {
            toast.error('delete error');
        }
    };
    console.log(valueAdd);
    const FetchApi = async () => {
        try {
            await apis.GetAllCategory().then((res) => {
                if (res.status === 200) {
                    setCategory(res.data);
                }
            });
        } catch (error) {
            toast.error('get error');
        }
    };
    const GetCategoryById = async (id) => {
        try {
            const res = await apis.GetCategoryById(id);
            if (res.status === 200) {
                toast.success('GetCategoryById success');
                setValueAdd(res.data);
            }
        } catch (error) {
            toast.error('get error');
        }
    };
    useEffect(() => {
        FetchApi();
    }, []);
    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                {/* Users List Table */}
                <div className="card">
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
                                                <span className="d-none d-sm-inline-block"> New Category </span>
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
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 315 }}
                                            aria-label="Email: activate to sort column ascending"
                                        >
                                            category Name
                                        </th>
                                        <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 145 }}
                                            aria-label="Actions"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.map((res) => (
                                        <tr className="odd">
                                            <td>
                                                <span className="text-truncate d-flex align-items-center text-heading">
                                                    <i className="ri-pie-chart-line ri-22px text-success me-2" />
                                                    {res?.categoryName}
                                                </span>
                                            </td>

                                            <td className="" style={{}}>
                                                <div className="d-flex align-items-center">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                                                        data-bs-toggle="tooltip"
                                                        title="Delete Invoice"
                                                        onClick={() => handleDelete(res?.categoryId)}
                                                    >
                                                        <i className="ri-delete-bin-7-line ri-22px" />
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-item view-record"
                                                        data-bs-target="#viewUser"
                                                        title="Preview"
                                                        data-bs-toggle="modal"
                                                        // onClick={() => GetRoleById(res?.roleId)}
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
                                                            // onClick={() => GetRoleById(res?.roleId)}
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
                                                            <span>view</span>
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="dropdown-item delete-record"
                                                            data-bs-target="#editUser"
                                                            data-bs-toggle="modal"
                                                            onClick={() => GetCategoryById(res?.categoryId)}
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
                                                            <span>Edit</span>
                                                        </a>

                                                        <a
                                                            href="javascript:;"
                                                            // onClick={() => handleDelete(res?.roleId)}
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
                                Add Category
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
                                        name="categoryName"
                                        aria-label=""
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">categoryName</label>
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
                                <h4 className="mb-2">Edit category</h4>
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
                                        name="categoryName"
                                        aria-label="John Doe"
                                        value={valueAdd.categoryName}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="add-user-fullname">categoryName</label>
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
                                <h4 className="mb-2">details role</h4>
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
                                    style={{ width: 1394 }}
                                >
                                    <thead>
                                        <tr>
                                            <th
                                                className="sorting sorting_desc"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 272 }}
                                                aria-label="User: activate to sort column ascending"
                                                aria-sort="descending"
                                            >
                                                roleName
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 315 }}
                                                aria-label="Email: activate to sort column ascending"
                                            >
                                                baseSalary
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd">
                                            <td>
                                                <span className="text-truncate d-flex align-items-center text-heading">
                                                    <i className="ri-pie-chart-line ri-22px text-success me-2" />
                                                    {/* {roleId?.roleName} */}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-truncate d-flex align-items-center text-heading">
                                                    {/* {roleId?.baseSalary}$ */}
                                                </span>
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
        </div>
    );
}
export default Category;
