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
                         
                        </div>
                    </div>
                </div>
            </div>
            {/* / Content */}
           
        </div>
    );
}
export default Contact;
