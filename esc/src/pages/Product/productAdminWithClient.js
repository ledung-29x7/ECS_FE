import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as apis from '../../apis';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductAdminWithClient() {
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);
    const [image, setImage] = useState([]);
    const idClient = window.localStorage.getItem('idAdminWithClient');
    const [selectedImage, setSelectedImage] = useState(null);
    const [readerImg, setReaderImg] = useState([]);
    const [service, setService] = useState([]);
    const [category, setCategory] = useState([]);
    const [productStatus, setProductStatus] = useState([]);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [addImage, setAddImage] = useState({
        productImageId: 0,
        productId: '',
        imageId: 0,
        product: '',
    });
    const [valueEdit, setValueEdit] = useState({
        productId: '',
        clientId: '',
        categoryId: 0,
        productName: '',
        price: 0,
        initialQuantity: 0,
        description: '',
        isActive: false,
        status: 0,
        createdAt: '',
        images: [],
    });

    useEffect(() => {
        FetchApi();
        FetApiProductStatus();
    }, []);

    const FetchApi = async () => {
        try {
            await apis
                .GetAllProductByClient(idClient)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        // toast.success("GetAllProductByClient success")
                        setProduct(res.data.products);
                    }
                })
                .catch((error) => {
                    toast.error(error)
                });
        } catch (error) {
           toast.error(error)
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
           toast.error(error)
        }
    };
    // Fetch danh mục sản phẩm
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await apis.GetAllProductCategory();
                if (res.status === 200) {
                    // toast.success("GetAllProductCategory success")
                    setCategory(res.data);
                }
            } catch (error) {
                toast.error(error)
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        // Hàm để hiển thị ảnh từ JSON
        const images = [];
        function displayImages(imageDTOs) {
            imageDTOs?.forEach((imageDTO) => {
                images.push({
                    id: imageDTO?.id,
                    image: `data:${imageDTO?.type};base64,${imageDTO?.image}`,
                });
            });
        }
        // Gọi hàm hiển thị ảnh
        displayImages(product?.imageFiles);
        setImage(images);
    }, [product]);

    function handleChangeEdit(e) {
        setValueEdit({ ...valueEdit, [e.target.name]: e.target.value });
    }

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            setSelectedImage(files); // Lưu file vào state
            const imgUpload = Array.from(files).map((file) => URL.createObjectURL(file));
            setReaderImg(imgUpload); // Tạo URL preview ảnh
            if (!addImage.productImageId) {
                alert('Please select a service!');
                return;
            }

            // Thêm dịch vụ mới vào danh sách
            setValueEdit((prev) => ({
                ...prev,
                productImages: [
                    ...prev.productImages,
                    { ...addImage }, // Copy dữ liệu từ addService
                ],
            }));

            // Reset serviceId trong addService (nếu cần)
            setAddImage((prev) => ({
                ...prev,
                productImageId: 0,
            }));
        } else {
            toast.error("error")
        }
    };

    const handleAddService = () => {};

    const handleShowEdit = (pram) => {
        const FetchData = async () => {
            try {
                await apis.GetProductById(pram).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        toast.success("GetProductById success")
                        setIsShowEdit(true);
                        setValueEdit(res.data.products);
                    }
                });
            } catch (error) {
                toast.error(error)
            }
        };
        FetchData();
    };

    const handleDelete = async (id) => {
        try {
            console.log('try');
            const res = await apis.DeleteDepartment(id);
            console.log(res);
            if (res.status === 204) {
                toast.success("delete success")
                FetchApi();
            }
        } catch (error) {
            toast.error(error)
        }
    };

    const handleSumbitEdit = async () => {
        const FetchData = async () => {
            try {
                await apis.UpdateProduct(valueEdit).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        toast.success("UpdateProduct success")
                        setIsShowEdit(false);
                        FetchApi();
                        FetApiProductStatus();
                    }
                });
            } catch (error) {
                toast.error(error)
            }
        };
        FetchData();
    };

    return (
        <div className="content-wrapper">
            {/* Content */}
            {isShowEdit ? (
                <div className="row">
                    {/* First column*/}
                    <div className="col-12 col-lg-8">
                        {/* Product Information */}
                        <div className="card mb-6">
                            <div className="card-header d-flex justify-content-between">
                                <h5 className="card-tile mb-0">Product information</h5>
                                <button className="btn btn-primary waves-effect waves-light" onClick={handleSumbitEdit}>
                                    Save
                                </button>
                            </div>
                            <div className="card-body">
                                <form className="form-repeater">
                                    <div className="form-floating form-floating-outline mb-5">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ecommerce-product-name"
                                            placeholder="Product title"
                                            name="productName"
                                            value={valueEdit?.productName}
                                            onChange={handleChangeEdit}
                                            aria-label="Product title"
                                        />
                                        <label htmlFor="ecommerce-product-name">Name</label>
                                    </div>
                                    <div className="row gx-5 mb-5">
                                        <div className="col">
                                            <div className="form-floating form-floating-outline form-floating-select2">
                                                <div className="position-relative">
                                                    <select
                                                        id="select2Basic"
                                                        className=" form-select"
                                                        name="categoryId"
                                                        value={valueEdit?.categoryId} // Gắn giá trị hiện tại
                                                        onChange={handleChangeEdit} // Gọi hàm xử lý sự kiện
                                                        aria-hidden="true"
                                                    >
                                                        <option value="">Option</option>
                                                        {category?.map((res, key) => (
                                                            <option key={key} value={res?.categoryId}>
                                                                {res?.categoryName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <label htmlFor="select2Basic">Option</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating form-floating-outline">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="ecommerce-product-barcode"
                                                    placeholder="0123-4567"
                                                    name="price"
                                                    value={valueEdit?.price}
                                                    onChange={handleChangeEdit}
                                                    aria-label="Product barcode"
                                                />
                                                <label htmlFor="ecommerce-product-name">Price</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating form-floating-outline">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="ecommerce-product-barcode"
                                                    placeholder="0123-4567"
                                                    name="initialQuantity"
                                                    value={valueEdit.initialQuantity}
                                                    onChange={handleChangeEdit}
                                                    aria-label="Product barcode"
                                                />
                                                <label htmlFor="ecommerce-product-name">Quantity</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Comment */}
                                    <div>
                                        <label className="mb-1">Description (Optional)</label>
                                        <div className=" p-0 pt-1">
                                            <div
                                                className="comment-editor border-0 pb-1 ql-container ql-snow"
                                                id="ecommerce-category-description"
                                            >
                                                <textarea
                                                    type="text"
                                                    name="description"
                                                    value={valueEdit?.description}
                                                    onChange={handleChangeEdit}
                                                    class="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="3"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* /Product Information */}
                        {/* Media */}
                        <div className="card mb-6">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 card-title">Product Image</h5>
                                <a href="javascript:void(0);" className="fw-medium">
                                    Add media from URL
                                </a>
                            </div>
                            <div className="card-body">
                                <form action="/upload" className="dropzone needsclick dz-clickable" id="dropzone-basic">
                                    <div className="dz-message needsclick">
                                        <div className="d-flex justify-content-center">
                                            <div className="avatar avatar-md">
                                                <span className="avatar-initial rounded bg-label-secondary">
                                                    <i className="ri-upload-2-line ri-24px" />
                                                </span>
                                            </div>
                                        </div>
                                        <p className="h4 needsclick my-2">Drag and drop your image here</p>
                                        <small className="text-muted d-block fs-6 my-2">or</small>
                                        <span
                                            className="needsclick btn btn-sm btn-outline-primary waves-effect"
                                            id="btnBrowse"
                                        >
                                            Browse image
                                        </span>
                                    </div>
                                    <input
                                        type="file"
                                        multiple
                                        class="dz-hidden-input "
                                        onChange={handleFileChange}
                                        accept=".jpg,.jpeg,.png,.gif"
                                    />
                                    {valueEdit.images.map((img, key) => (
                                        <div
                                            key={key}
                                            className="dz-preview dz-processing dz-image-preview dz-success dz-complete"
                                        >
                                            <div className="dz-details">
                                                {' '}
                                                <div className="dz-thumbnail">
                                                    {' '}
                                                    <img
                                                        data-dz-thumbnail=""
                                                        className="w-12 h-7"
                                                        alt=""
                                                        src={img}
                                                    />{' '}
                                                    <span className="dz-nopreview">No preview</span>{' '}
                                                    <div className="dz-success-mark" />{' '}
                                                    <div className="dz-error-mark" />{' '}
                                                    <div className="dz-error-message">
                                                        <span data-dz-errormessage="" />
                                                    </div>{' '}
                                                    <div className="progress">
                                                        {' '}
                                                        <div
                                                            className="progress-bar progress-bar-primary"
                                                            role="progressbar"
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            data-dz-uploadprogress=""
                                                            style={{ width: '100%' }}
                                                        />{' '}
                                                    </div>
                                                </div>{' '}
                                                <div className="dz-filename" data-dz-name="">
                                                    Screenshot (8).png
                                                </div>{' '}
                                                <div className="dz-size" data-dz-size="">
                                                    <strong>1.6</strong> MB
                                                </div>
                                            </div>
                                            <a className="dz-remove" href="javascript:undefined;" data-dz-remove="">
                                                Remove file
                                            </a>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-xxl flex-grow-1 container-p-y">
                    {/* Product List Widget */}
                    <div className="card mb-6">
                        <div className="card-widget-separator-wrapper">
                            <div className="card-body card-widget-separator">
                                <div className="row gy-4 gy-sm-1">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                                            <div>
                                                <p className="mb-1">In-store Sales</p>
                                                <h4 className="mb-1">$5,345.43</h4>
                                                <p className="mb-0">
                                                    <span className="me-2">5k orders</span>
                                                    <span className="badge rounded-pill bg-label-success">+5.7%</span>
                                                </p>
                                            </div>
                                            <div className="avatar me-sm-6">
                                                <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                    <i className="ri-home-6-line ri-24px" />
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="d-none d-sm-block d-lg-none me-6" />
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                                            <div>
                                                <p className="mb-1">Website Sales</p>
                                                <h4 className="mb-1">$674,347.12</h4>
                                                <p className="mb-0">
                                                    <span className="me-2">21k orders</span>
                                                    <span className="badge rounded-pill bg-label-success">+12.4%</span>
                                                </p>
                                            </div>
                                            <div className="avatar me-lg-6">
                                                <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                    <i className="ri-computer-line ri-24px" />
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="d-none d-sm-block d-lg-none" />
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                                            <div>
                                                <p className="mb-1">Discount</p>
                                                <h4 className="mb-1">$14,235.12</h4>
                                                <p className="mb-0">6k orders</p>
                                            </div>
                                            <div className="avatar me-sm-6">
                                                <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                    <i className="ri-gift-line ri-24px" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <p className="mb-1">Affiliate</p>
                                                <h4 className="mb-1">$8,345.23</h4>
                                                <p className="mb-0">
                                                    <span className="me-2">150 orders</span>
                                                    <span className="badge rounded-pill bg-label-danger">-3.5%</span>
                                                </p>
                                            </div>
                                            <div className="avatar">
                                                <span className="avatar-initial rounded bg-label-secondary text-heading">
                                                    <i className="ri-money-dollar-circle-line ri-24px" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                    aria-controls="DataTables_Table_0"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start justify-content-md-end align-items-baseline">
                                        <div className="dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center gap-4 pt-0">
                                            <div className="dataTables_length my-0" id="DataTables_Table_0_length">
                                                <label>
                                                    <select
                                                        name="DataTables_Table_0_length"
                                                        aria-controls="DataTables_Table_0"
                                                        className="form-select form-select-sm"
                                                    >
                                                        <option value={7}>7</option>
                                                        <option value={10}>10</option>
                                                        <option value={20}>20</option>
                                                        <option value={50}>50</option>
                                                        <option value={70}>70</option>
                                                        <option value={100}>100</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="dt-buttons btn-group flex-wrap d-flex">
                                                {' '}
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
                                                            <i className="ri-download-line ri-16px me-2" />
                                                            <span className="d-none d-sm-inline-block">Export </span>
                                                        </span>
                                                    </button>
                                                </div>{' '}
                                                <button
                                                    className="btn btn-secondary btn-primary waves-effect waves-light"
                                                    tabIndex={0}
                                                 
                                                    aria-controls="DataTables_Table_0"
                                                    type="button"
                                                >
                                                    <span>
                                                        <i className="ri-add-line ri-16px me-0 me-sm-1_5" />
                                                        <span className="d-none d-sm-inline-block">Add Product</span>
                                                    </span>
                                                </button>{' '}
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
                                                style={{ width: 446 }}
                                                aria-label="product: activate to sort column descending"
                                                aria-sort="ascending"
                                            >
                                                product
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 139 }}
                                                aria-label="category: activate to sort column ascending"
                                            >
                                                category
                                            </th>
                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 55 }}
                                                aria-label="stock"
                                            >
                                                active
                                            </th>

                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 76 }}
                                                aria-label="price: activate to sort column ascending"
                                            >
                                                price
                                            </th>

                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 99 }}
                                                aria-label="status: activate to sort column ascending"
                                            >
                                                status
                                            </th>
                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 88 }}
                                                aria-label="Actions"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product?.map((res, key) => (
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
                                                        {
                                                            category.find((r) => r.categoryId === res?.categoryId)
                                                                ?.categoryName
                                                        }
                                                    </h6>
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
                                                    <span>${res?.price}</span>
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
                                                    <div className="d-inline-block text-nowrap">
                                                        <button
                                                            onClick={() => handleShowEdit(res?.productId)}
                                                            className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill text-body me-1"
                                                        >
                                                            <i className="ri-edit-box-line ri-22px" />
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill text-body dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ri-more-2-line ri-22px" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <div className="add-new">
                                                                <button
                                                                    className=" waves-effect waves-light"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#offcanvasAddUser"
                                                                >
                                                                    <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none" />
                                                                    <span className="d-none d-sm-inline-block">
                                                                        Choose Service
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <a href="javascript:0;" className="dropdown-item">
                                                                Suspend
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
            )}
            {/* / Content */}

            <div className="content-backdrop fade" />
        </div>
    );
}
export default ProductAdminWithClient;
