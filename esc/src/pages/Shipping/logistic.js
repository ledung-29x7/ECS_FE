import { useState, useEffect, useRef } from 'react';
import * as apis from '../../apis';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogisticOrder() {
    const employeeID = window.localStorage.getItem('employeeID');
    const [order, setOrder] = useState([]);
    const [oderStatus,setOrderStatus] = useState([])
    const [product,setProduct] = useState([])
    const [orderDetail,setOrderDetail] = useState();
    const navigate = useNavigate()
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };
    const renderPageNumbers = () => {
        const pages = [];
        if(totalPage > 0){
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
                            onClick={()=>
                                handlePageClick(i)
                            }
                        >
                            {i}
                        </a>
                    </li>,
                );
            }
        }
        return pages;
    };
    const [filters, setFilters] = useState({
        pageNumber: 1,
       
    });
    const handlePageClick = (newPage) => {
        setFilters({
            pageNumber: newPage ,
        });
    };
        // Hàm xử lý khi thay đổi tìm kiếm hoặc phân trang
     const [debouncedFilters, setDebouncedFilters] = useState(filters);
    
        // Debounce logic: Cập nhật giá trị `debouncedFilters` sau 2 giây
        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedFilters(filters);
            }, 500); // 1 giây
    
            return () => {
                clearTimeout(handler); // Clear timeout nếu filters thay đổi trong thời gian debounce
            };
        }, [filters]);
    
        // Gọi API khi `debouncedFilters` thay đổi
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await apis.GetAllOrder(debouncedFilters);
                    console.log(response);
                    if (response.status === 200) {
                        setCurrentPage(debouncedFilters.pageNumber);
                        setOrder(response.data.orders);
                        setTotalPage(response.data.totalPages);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
    
            fetchData();
        }, [debouncedFilters]);

    const FetchApi = async () => {
        try {
            await apis.GetAllOrder().then((res) => {
                if (res.status === 200) {
                    setOrder(res.data.orders);
                    
                }
            });
        } catch (error) {
            console.log(error);
            
        }
    };
    const FetchProduct = async () => {
        try {
            await apis
                .GetProduct()
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        setProduct(res.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleViewOrderDetail = (id) => {

        const FetchDetailOrder = async() =>{
            try {
                await apis.GetOrderDetailById(id)
                .then(res =>{
                    if(res.status === 200){
                        setOrderDetail(res.data)
                        FetchProduct();
                    }
                })
            } catch (error) {
                toast.error("Get not Order detail")
            }
        }
        FetchDetailOrder()
    }

    const handleChangeStatusOrder = (e,orderId) =>{
        const {value} = e.target;
        console.log(value)
        const payload = {
            statusid:value
        };
        const UpdateOrder = async() =>{
            try {
                await apis.UpdateOrderStatus(payload,orderId)
                .then(res => {
                    if(res.status === 200)
                    {
                        FetchApi();
                        toast.success("Order updated successfully.")
                    }
                })
            } catch (error) {
                toast.error(error.message)
            }
        }
        UpdateOrder();
    }

    const FetchOrderStatus = async() =>{

        try {
            await apis.GetOrderStatus()
            .then(res => {
                if(res.status === 200)
                {
                    setOrderStatus(res.data)
                }
            })
        } catch (error) {
            console.log(error)
            toast.error("Get not order status")
        }
    }

    useEffect(() => {
        FetchApi();
        FetchOrderStatus()
    }, []);

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
                                            onClick={()=> navigate('/addOrder')}
                                        >
                                            <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none" />
                                            <span className="d-none d-sm-inline-block"> Add Order </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <table
                                className="datatables-order table dataTable no-footer dtr-column"
                                id="DataTables_Table_0"
                                aria-describedby="DataTables_Table_0_info"
                                style={{ width: 1052 }}
                            >
                                <thead>
                                    <tr>
                                        <th
                                            className="control sorting_disabled dtr-hidden"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 5, display: 'none' }}
                                            aria-label=""
                                        />
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 40 }}
                                            data-toggle="tooltip" data-placement="top" title="order"
                                            aria-label="order: activate to sort column ascending"
                                        >
                                            order
                                        </th>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 20 }}
                                            data-toggle="tooltip" data-placement="top" title="Recipient Name"
                                            aria-label="date: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            recipient Name
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 30 }}
                                            data-toggle="tooltip" data-placement="top" title=" Recipient Phone"
                                            aria-label="payment: activate to sort column ascending"
                                        >
                                            recipient Phone
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 40 }}
                                            data-toggle="tooltip" data-placement="top" title=" recipient Address"
                                            aria-label="status: activate to sort column ascending"
                                        >
                                            recipient Address
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 20 }}
                                            aria-label="method: activate to sort column ascending"
                                            data-toggle="tooltip" data-placement="top" title="Order Status"
                                        >
                                            order Status
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 40 }}
                                            aria-label="method: activate to sort column ascending"
                                            data-toggle="tooltip" data-placement="top" title="Order Date"
                                        >
                                            orderDate
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 30 }}
                                            aria-label="method: activate to sort column ascending"
                                            data-toggle="tooltip" data-placement="top" title="Total Amount"
                                        >
                                            total Amount
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
                                    {order?.map((res) => (
                                        <tr className="odd">
                                            <td
                                                className="control dtr-hidden"
                                                tabIndex={0}
                                                style={{ display: 'none' }}
                                            />
                                            <td data-toggle="tooltip" data-placement="top" title={res?.orderer}>
                                                <span>{res?.orderer}</span>
                                            </td>
                                            <td className="sorting_1" data-toggle="tooltip" data-placement="top" title={res?.recipient_Name}>
                                                <span className="text-nowrap">{res?.recipient_Name}</span>
                                            </td>
                                            <td className="sorting_1"  data-toggle="tooltip" data-placement="top" title={res?.recipient_Phone}>
                                                <span className="text-nowrap">{res?.recipient_Phone}</span>
                                            </td>

                                            <td className="sorting_1"  data-toggle="tooltip" data-placement="top" title={res?.recipient_Address}>
                                                <span className="text-nowrap">{res?.recipient_Address}</span>
                                            </td>
                                            <td className=''>
                                               
                                                    <select
                                                        id="alignment-country"
                                                        typeof="number"
                                                        className=" form-control  py-1 px-1"
                                                        name="orderStatus"
                                                        value={res?.orderStatus}
                                                        onChange={(e)=>handleChangeStatusOrder(e,res.orderId)}
                                                    >
                                                        {oderStatus?.map((res) => (
                                                            <option key={res?.statusId} value={Number(res?.statusId)}>
                                                                {res?.statusName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                <div className="badge px-2 position-relative rounded-pill ">
                                                    {/* <button style={{position: "absolute", right: "-20px", top: "2px"}} className='btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-item view-record'>
                                                        <i class="ri-pencil-fill editSO"/>
                                                    </button> */}
                                                </div>

                                            </td>
                                            <td className="sorting_1"  data-toggle="tooltip" data-placement="top" title={formatDate(res?.orderDate)}>
                                                <span className="text-nowrap" >{formatDate(res?.orderDate)}</span>
                                            </td>
                                            <td className="sorting_1"  data-toggle="tooltip" data-placement="top" title={res?.totalAmount}>
                                                <span className="text-nowrap">{res?.totalAmount}$</span>
                                            </td>
                                            <td className="" style={{}}>
                                                <div>
                                                    <button
                                                        className="btn btn-sm btn-icon btn-text-secondary text-body waves-effect rounded-pill dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ri-more-2-line" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end m-0">
                                                        <a
                                                            href="#"
                                                            className="dropdown-item delete-record"
                                                            data-bs-target="#editUser"
                                                            data-bs-toggle="modal"
                                                            onClick={()=>handleViewOrderDetail(res.orderId)}
                                                            
                                                        >
                                                            View
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
                                                        onClick={() => {
                                                            
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
                                                            if (currentPage < totalPage)
                                                                handlePageClick(currentPage + 1);
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
            {/* add order */}
            <div className="modal fade" id="editUser" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            <div className="text-center mb-6">
                                <h4 className="mb-2">Order Detail</h4>
                            </div>
                            <table
                                className="datatables-order table dataTable no-footer dtr-column"
                                id="DataTables_Table_0"
                                aria-describedby="DataTables_Table_0_info"
                                style={{ width: 800 }}
                            >
                                <thead>
                                    <tr>
                                        
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 40 }}
                                            data-toggle="tooltip" data-placement="top" title="order"
                                            aria-label="order: activate to sort column ascending"
                                        >
                                            Product
                                        </th>
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 20 }}
                                            data-toggle="tooltip" data-placement="top" title="Recipient Name"
                                            aria-label="date: activate to sort column descending"
                                            aria-sort="ascending"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="DataTables_Table_0"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: 30 }}
                                            data-toggle="tooltip" data-placement="top" title=" Recipient Phone"
                                            aria-label="payment: activate to sort column ascending"
                                        >
                                            Total Price
                                        </th>

                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderDetail?.map((res) => (
                                        <tr className="odd">
                                           
                                            <td data-toggle="tooltip" data-placement="top" title={res?.orderer}>
                                                <span>{res?.productName}</span>
                                            </td>
                                            <td className="sorting_1" data-toggle="tooltip" data-placement="top" title={res?.recipient_Name}>
                                                <span className="text-nowrap">{res?.quantity}</span>
                                            </td>
                                            <td className="sorting_1"  data-toggle="tooltip" data-placement="top" title={res?.recipient_Phone}>
                                                <span className="text-nowrap">{res?.totalPrice}</span>
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
export default  LogisticOrder;
