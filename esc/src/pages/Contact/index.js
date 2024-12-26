import { useEffect, useState } from 'react';
import React from 'react';
import * as apis from '../../apis';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const [contact, setContact] = useState([]);
    const FetchApi = async () => {
        try {
            await apis.GetAllContact().then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    setContact(res.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        FetchApi();
    }, []);
    return (
        <div>
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
                            name
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
                            email
                        </th>
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
                            phoneNumber
                        </th>
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
                            message
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contact.map((res) => (
                        <tr className="odd">
                        <td className="sorting_1">
                                <div className="d-flex justify-content-start align-items-center user-name">
                                    <div className="d-flex flex-column">
                                        <a className="text-heading text-truncate">
                                            <span className="fw-medium">{res?.name}</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td className="sorting_1">
                                <div className="d-flex justify-content-start align-items-center user-name">
                                    <div className="d-flex flex-column">
                                        <a className="text-heading text-truncate">
                                            <span className="fw-medium">{res?.email}</span>
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
                                            <span className="fw-medium">{res?.message}</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            {/* <td className="" style={{}}>
                                                <div className="d-flex align-items-center">
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect delete-record"
                                                        data-bs-toggle="tooltip"
                                                        title="Delete Invoice"
                                                        onClick={() => handleDelete(res?.roleId)}
                                                    >
                                                        <i className="ri-delete-bin-7-line ri-22px" />
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-item view-record"
                                                        data-bs-target="#viewUser"
                                                        title="Preview"
                                                        data-bs-toggle="modal"
                                                        onClick={() => GetRoleById(res?.roleId)}

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
                                                            onClick={() => GetRoleById(res?.roleId)}
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
                                                            <span>view</span>
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="dropdown-item delete-record"
                                                            data-bs-target="#editUser"
                                                            data-bs-toggle="modal"
                                                            onClick={() => GetRoleByIdEdit(res?.roleId)}
                                                        >
                                                            <i className="ri-edit-box-line me-2" />
                                                            <span>Edit</span>
                                                        </a>

                                                            <a
                                                                href="javascript:;"
                                                                onClick={() => handleDelete(res?.roleId)}
                                                                className="dropdown-item delete-record"
                                                            >
                                                                <i className="ri-edit-box-line me-2" />
                                                                <span>Delete</span>
                                                            </a>
                                                    </div>
                                                </div>
                                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="row mx-1">
                <div className="col-sm-12 col-md-6">
                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">
                        Showing 1 to 10 of 50 entries
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
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
    );
}
export default Contact;
