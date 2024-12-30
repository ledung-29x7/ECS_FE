import { useState, useEffect } from 'react';
import * as apis from '../../apis';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function WorkList() {
    const employeeID = window.sessionStorage.getItem('employeeID'); // Lấy employeeId từ sessionStorage
    const [workList, setWorkList] = useState([]); // State lưu dữ liệu công việc
    const navigate = useNavigate();

    useEffect(() => {
        if (!employeeID) {
            console.error('Employee ID not found in session storage');
            return;
        }

        const fetchWorkList = async () => {
            try {
                const response = await apis.WorkList(employeeID); // Gọi API WorkList
                if (response.status === 200) {
                    setWorkList(response.data); 
                }
            } catch (error) {
                console.error('Error fetching work list:', error);
            }
        };

        fetchWorkList();
    }, [employeeID]);

    return (
        <div>
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
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Plan: activate to sort column ascending"
                                        >
                                            service Name
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
                                            Product Name
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
                                            sTART DATE
                                        </th>

                                        <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 99 }}
                                            aria-label="Actions"
                                        >
                                            end Date 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {workList.length === 0 ? (
                        <tr>
                            <td colSpan="9" style={{ textAlign: 'center' }}>No work data found</td>
                        </tr>
                    ) : (
                        workList?.map((work, index) => (
                            
                                        <tr className="odd" key={index}>
                                            <td className="  control" tabIndex={0} style={{ display: 'none' }} />
                                        
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{work.serviceName}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{work.productName}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{new Date(work.startDate).toLocaleString()}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>    <td className="sorting_1">
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="d-flex flex-column">
                                                        <a className="text-heading text-truncate">
                                                            <span className="fw-medium">{new Date(work.endDate).toLocaleString()}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                         
                                        </tr>
                                        
                                    ))
                                )}
                                </tbody>
                            </table>
                        
                            </div>
                            <div style={{ width: '1%' }} />
                        </div>
                    </div>
           
        </div>
    );
}

export default WorkList;
