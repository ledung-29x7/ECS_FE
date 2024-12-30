import { useEffect, useState } from 'react';
import React from 'react';
import * as apis from '../../apis';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
function Contact() {
    const [contact, setContact] = useState([]);
    const FetchApi = async () => {
        try {
            await apis.GetAllContact().then((res) => {
                if (res.status === 200) {
                    // toast.success("GetAllContact success")
                    setContact(res.data);
                }
            });
        } catch (error) {
            toast.error("error")
        }
    };
    useEffect(() => {
        FetchApi();
    }, []);
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
                    <div className="card-datatable table-responsive">
                        <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
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
                                            className="sorting sorting_desc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 80 }}
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
                                            style={{ width: 80 }}
                                            aria-label="Email: activate to sort column ascending"
                                        >
                                            email
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 80 }}
                                            aria-label="Email: activate to sort column ascending"
                                        >
                                            phoneNumber
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 80 }}
                                            aria-label="Email: activate to sort column ascending"
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
                </div>
            </div>
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
export default Contact;
