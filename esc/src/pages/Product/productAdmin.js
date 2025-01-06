import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as apis from '../../apis';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductAdmin() {
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);
    const [productService, setProductService] = useState([]);
    const [category, setCategory] = useState([]);
    const [service, setService] = useState([]);
    const [productStatus, setProductStatus] = useState([]);
    const [totalItem, setTotalItem] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(12000);

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
        minPrice: 0,
        maxPrice: 0,
        isActive: null,
    });

    const [debouncedFilters, setDebouncedFilters] = useState(filters);

    const handlePriceRangeChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (name === 'minPrice') {
            setMinPrice(value);
            setFilters((prev) => ({
                ...prev,
                [name]: value,
            }));
        } else if (name === 'maxPrice') {
            setMaxPrice(value);
            setFilters((prev) => ({
                ...prev,
                [name]: value,
            }));
        } else {
            setFilters((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    // Debounce logic: Cập nhật giá trị `debouncedFilters` sau 2 giây
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedFilters({ ...filters }); // Sử dụng bản sao mới nhất của filters
        }, 2000); // 2 giây

        return () => {
            clearTimeout(handler); // Clear timeout nếu filters thay đổi trong thời gian debounce
        };
    }, [filters]);

    // Gọi API khi `debouncedFilters` thay đổi
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apis.GetAllProduct(debouncedFilters);
                console.log(response);
                if (response.status === 200) {
                    setCurrentPage(debouncedFilters.pageNumber);
                    setProduct(response.data.products);
                    setTotalItem(response.data.totalRecords);
                    setTotalPage(response.data.totalPages);
                }
            } catch (error) {
                toast.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [debouncedFilters]);

    // Hàm xử lý khi thay đổi tìm kiếm hoặc phân trang
    const handlePageClick = (newPage, newSearchTerm = '') => {
        setFilters((prev) => ({
            ...prev,
            pageNumber: newPage || prev.pageNumber,
            searchTerm: newSearchTerm, // Cập nhật chính xác giá trị rỗng nếu người dùng xóa
        }));
    };

    const FetApiProduct = async () => {
        try {
            await apis.GetAllProduct().then((res) => {
                if (res.status === 200) {
                    // toast.success("GetAllProduct success")
                    setProduct(res.data.products);
                    setTotalItem(res.data.totalRecords);
                    setTotalPage(res.data.totalPages);
                    const priceMaxs = Math.max(...res.data.products.map((item) => item.price));

                    setFilters((prev) => ({
                        ...prev,
                        maxPrice: priceMaxs,
                    }));
                }
            });
        } catch (error) {
            toast.error(error);
        }
    };

    const FetApiProductService = async (idProduct) => {
        try {
            await apis.GetProductServiceByIdProduct(idProduct).then((res) => {
                if (res.status === 200) {
                    // toast.success("FetApiProductService success")
                    setProductService(res.data);
                }
            });
        } catch (error) {
            toast.error(error);
        }
    };

    const FetApiCategory = async () => {
        try {
            await apis.GetAllProductCategory().then((res) => {
                if (res.status === 200) {
                    // toast.success("GetAllProductCategory success")
                    setCategory(res.data);
                }
            });
        } catch (error) {
            toast.error(error);
        }
    };

    const FetApiService = async () => {
        try {
            await apis.GetAllService().then((res) => {
                if (res.status === 200) {
                    // toast.success("GetAllService success")
                    setService(res.data);
                }
            });
        } catch (error) {
            toast.error(error);
        }
    };
    const FetApiProductStatus = async () => {
        try {
            await apis.GetProductStatus().then((res) => {
                if (res.status === 200) {
                    // toast.success("GetProductStatus success")
                    setProductStatus(res.data);
                }
            });
        } catch (error) {
            toast.error(error);
        }
    };
    const handleActive = async (productId) => {
        try {
            await apis.ActiveProduct(productId).then((res) => {
                if (res.status === 200) {
                    toast.success('Active thanh cong');
                    FetApiProduct();
                }
            });
        } catch (error) {
            toast.error('active fail');
            console.log(error);
        }
    };

    useEffect(() => {
        FetApiProduct();
        FetApiCategory();
        FetApiService();
        FetApiProductStatus();
    }, []);

    return (
        <>
            <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="card">
                        <div className="card-datatable table-responsive">
                            <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <div className="card-header row d-flex border-top rounded-0 flex-wrap py-0 pb-5 pb-md-0">
                                    <div className=" col-4">
                                        <div id="DataTables_Table_0_filter" className="">
                                            <label className="w-75">
                                                <input
                                                    type="search"
                                                    className="form-control w-100 form-control-sm"
                                                    placeholder="Search"
                                                    onChange={(e) => handlePageClick(1, e.target.value)}
                                                    aria-controls="DataTables_Table_0"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex col-8 row justify-content-start justify-content-md-end align-items-baseline">
                                        <div className="dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center gap-4 pt-0">
                                            <div className="col-md-6">
                                                <div className="slider-track">
                                                    <div className="d-flex justify-content-between ">
                                                        <h5 style={{ color: 'black' }}>{minPrice}</h5>
                                                        <h5 style={{ color: 'black' }}>{maxPrice}</h5>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        name="minPrice"
                                                        min="0"
                                                        max={12000} // max của minPrice là maxPrice - 1
                                                        value={minPrice}
                                                        onChange={handlePriceRangeChange}
                                                        style={{
                                                            width: '100%',
                                                            background: 'rgb(60, 188, 28)',
                                                            cursor: 'pointer',
                                                        }}
                                                    />
                                                    <input
                                                        type="range"
                                                        name="maxPrice"
                                                        min={0} // min của maxPrice là minPrice + 1
                                                        max={12000}
                                                        value={maxPrice}
                                                        onChange={handlePriceRangeChange}
                                                        style={{
                                                            width: '100%',
                                                            background: 'rgb(60, 188, 28)',
                                                            cursor: 'pointer',
                                                        }}
                                                    />
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span style={{ color: 'rgb(60, 188, 28)' }}>min</span>
                                                        <span style={{ color: 'rgb(60, 188, 28)' }}>max</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <select
                                                    id="select2Basic"
                                                    className="form-control py-1"
                                                    name="isActive"
                                                    value={filters.isActive}
                                                    onChange={handlePriceRangeChange}
                                                >
                                                    <option value={''}>Select Active</option>
                                                    <option value={true}> Active</option>
                                                    <option value={false}>DeActive</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table
                                    className="datatables-products table dataTable no-footer dtr-column"
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
                                                style={{ width: 300 }}
                                                aria-label="product: activate to sort column descending"
                                                aria-sort="ascending"
                                            >
                                                Product
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 70 }}
                                                aria-label="category: activate to sort column ascending"
                                            >
                                                Category
                                            </th>
                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 75 }}
                                                aria-label="stock"
                                            >
                                                Status
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 30 }}
                                                aria-label="sku: activate to sort column ascending"
                                            >
                                                InitialQuantity
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 30 }}
                                                aria-label="price: activate to sort column ascending"
                                            >
                                                Price
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 20 }}
                                                aria-label="qty: activate to sort column ascending"
                                            >
                                                Active
                                            </th>

                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 40 }}
                                                aria-label="Actions"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.map((res, key) => (
                                            <tr key={key} className="odd">
                                                <td className="sorting_1">
                                                    <div className="d-flex justify-content-start align-items-center product-name">
                                                        <div className="avatar-wrapper me-4">
                                                            <div className="avatar rounded-2 bg-label-secondary">
                                                                <img
                                                                    src={`data:${res?.images[0]?.type};base64,${res?.images[0]?.imageBase64}`}
                                                                    alt=""
                                                                    className=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="text-nowrap text-heading fw-medium">
                                                                {res?.productName}
                                                            </span>
                                                            <small className="text-truncate d-none d-sm-block">
                                                                {res?.description}
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6 className="text-truncate d-flex align-items-center mb-0 fw-normal">
                                                        <span className="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-4">
                                                            <i className="ri-home-6-line" />
                                                        </span>
                                                        {
                                                            category.find((r) => r.categoryId === res?.categoryId)
                                                                ?.categoryName
                                                        }
                                                    </h6>
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge rounded-pill bg-label-danger"
                                                        text-capitalized=""
                                                    >
                                                        {
                                                            productStatus.find((r) => r.statusId === res?.status)
                                                                ?.statusName
                                                        }
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>{res?.initialQuantity}</span>
                                                </td>
                                                <td>
                                                    <span>${res?.price}</span>
                                                </td>

                                                <td>
                                                    <div class="form-check text-truncate form-switch">
                                                        <input
                                                            style={{ width: '30px' }}
                                                            class="form-check-input"
                                                            checked={res?.isActive}
                                                            type="checkbox"
                                                            id="flexSwitchCheckDefault"
                                                        />
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-inline-block text-nowrap">
                                                        <button
                                                            className="btn btn-sm btn-success btn-text-white te waves-effect rounded-pill text-body me-1"
                                                            onClick={() => handleActive(res?.productId)}
                                                        >
                                                            active
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="row mx-1">
                                    <div className="col-sm-12 col-md-6"></div>
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
                {/* / Content */}

                <div className="content-backdrop fade" />
            </div>
        </>
    );
}
export default ProductAdmin;
