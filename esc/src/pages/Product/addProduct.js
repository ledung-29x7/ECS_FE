import { useState, useEffect, useRef } from 'react';
import * as apis from '../../apis';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProducts() {
    const navigate = useNavigate();
    const idClient = window.sessionStorage.getItem('idClient');
    const [selectedImage, setSelectedImage] = useState(null);
    const [readerImg, setReaderImg] = useState([]);
    const [service, setService] = useState([]);
    const [category, setCategory] = useState([]);
    const [addService, setAddService] = useState({
        serviceId: 0,
        clientId: idClient,
        startDate: '',
        endDate: '',
        requiredEmployees: 0,
    });

    const [valueAdd, setValueAdd] = useState({
        clientId: window.sessionStorage.getItem('idClient'),
        categoryId: 0,
        productName: '',
        price: 0,
        initialQuantity: 0,
        description: '',
        productServiceJson: [],
    });
    const datePickerRef = useRef(null);
    useEffect(() => {
        if (window.flatpickr && datePickerRef.current) {
            window.flatpickr(datePickerRef.current, {
                dateFormat: 'Y-m-d', // Định dạng ngày
                defaultDate: new Date(), // Ngày mặc định
                enableTime: false, // Nếu không cần thời gian
            });
        }
    }, []);

    const handleAddService = () => {
        if (!addService.serviceId) {
            alert('Please select a service!');
            return;
        }

        // Thêm dịch vụ mới vào danh sách
        setValueAdd((prev) => ({
            ...prev,
            productServiceJson: [
                ...prev.productServiceJson,
                { ...addService }, // Copy dữ liệu từ addService
            ],
        }));

        // Reset serviceId trong addService (nếu cần)
        setAddService((prev) => ({
            ...prev,
            serviceId: 0,
        }));
    };

    // Fetch danh mục sản phẩm
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await apis.GetAllProductCategory();
                if (res.status === 200) {
                    setCategory(res.data);
                }
            } catch (error) {
                console.error('Lỗi khi lấy danh mục:', error);
            }
        };
        fetchCategories();
    }, []);

    // Lấy danh sách file từ input
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            setSelectedImage(files); // Lưu file vào state
            const imgUpload = Array.from(files).map((file) => URL.createObjectURL(file));
            setReaderImg(imgUpload); // Tạo URL preview ảnh
        } else {
            console.error('No files selected.');
        }
    };

    // Cập nhật giá trị trong form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValueAdd((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //
    const handleChangeProductService = (event) => {
        const { name, value } = event.target;

        setAddService((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // get service
    const FetchService = async () => {
        try {
            await apis
                .GetAllService()
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        setService(res.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        FetchService();
    }, []);
    // Gửi dữ liệu
    const handleSumbit = () => {
        const formData = new FormData();

        // Thêm các trường dữ liệu khác vào FormData
        formData.append('ClientId', valueAdd.clientId);
        formData.append('CategoryId', valueAdd.categoryId);
        formData.append('ProductName', valueAdd.productName);
        formData.append('Price', valueAdd.price);
        formData.append('InitialQuantity', valueAdd.initialQuantity);
        formData.append('Description', valueAdd.description);
        // Thêm file vào FormData
        if (selectedImage && selectedImage.length > 0) {
            for (let i = 0; i < selectedImage.length; i++) {
                formData.append('ImageFiles', selectedImage[i]);
            }
        } else {
            console.error('No files to upload.');
            return;
        }

        // Gửi FormData qua Axios
        const fetchData = async () => {
            try {
                const res = await apis.AddProduct(formData);
                if (res.status === 200) {
                    console.log('Upload thành công:', res.data);
                    navigate('/product');
                }
            } catch (error) {
                console.error('Lỗi khi gửi API:', error.response?.data || error.message);
            }
        };

        fetchData();
    };

    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="app-ecommerce">
                    {/* Add Product */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-6 gap-4 gap-md-0">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1">Add a new Product</h4>
                            <p className="mb-0">Orders placed across your store</p>
                        </div>
                        <div className="d-flex align-content-center flex-wrap gap-4">
                            <button className="btn btn-outline-secondary waves-effect">Discard</button>
                            <button className="btn btn-outline-primary waves-effect">Save draft</button>
                            <button onClick={handleSumbit} className="btn btn-primary waves-effect waves-light">
                                Publish product
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-8">
                            {/* Product Information */}
                            <div className="card mb-6">
                                <div className="card-header">
                                    <h5 className="card-tile mb-0">Product information</h5>
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
                                                onChange={handleChange}
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
                                                            value={valueAdd.categoryId} // Gắn giá trị hiện tại
                                                            onChange={handleChange} // Gọi hàm xử lý sự kiện
                                                            aria-hidden="true"
                                                        >
                                                            <option value="" data-select2-id={2}>
                                                                Option
                                                            </option>
                                                            {category?.map((res, key) => (
                                                                <option key={key} value={res.categoryId}>
                                                                    {res.categoryName}
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
                                                        onChange={handleChange}
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
                                                        onChange={handleChange}
                                                        aria-label="Product barcode"
                                                    />
                                                    <label htmlFor="ecommerce-product-name">Quantity</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Comment */}
                                        <div>
                                            <label className="mb-1">Description (Optional)</label>
                                            <div className="form-control p-0 pt-1">
                                                <div
                                                    className="comment-editor border-0 pb-1 ql-container ql-snow"
                                                    id="ecommerce-category-description"
                                                >
                                                    <input
                                                        type="text"
                                                        className=" border-none "
                                                        name="description"
                                                        onChange={handleChange}
                                                        data-formula="e=mc^2"
                                                        data-link="https://quilljs.com"
                                                        data-video="Embed URL"
                                                    />
                                                    <div
                                                        className="ql-editor ql-blank"
                                                        data-gramm="false"
                                                        contentEditable="true"
                                                    ></div>
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
                                    <form
                                        action="/upload"
                                        className="dropzone needsclick dz-clickable"
                                        id="dropzone-basic"
                                    >
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
                                        {readerImg.map((img, key) => (
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
                            {/* /Media */}
                            {/* Variants */}
                            <div className="card mb-6">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Variants</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-repeater">
                                        <div>
                                            <button
                                                className="btn btn-primary waves-effect waves-light"
                                                data-repeater-create=""
                                            >
                                                <i className="ri-add-line ri-16px me-1_5" />
                                                Add another option
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* /Variants */}
                            {/* Inventory */}
                            <div className="card mb-6">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Inventory</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {/* Navigation */}
                                        <div className="col-12 col-md-4 col-xl-5 col-xxl-4 mx-auto card-separator">
                                            <div className="d-flex justify-content-between flex-column mb-4 mb-md-0 pe-md-4">
                                                <div className="nav-align-left">
                                                    <ul className="nav nav-pills flex-column w-100" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link active waves-effect waves-light"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#restock"
                                                                aria-selected="true"
                                                                role="tab"
                                                            >
                                                                <i className="ri-add-line me-1_5" />
                                                                <span className="align-middle">Restock</span>
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link waves-effect waves-light"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#shipping"
                                                                aria-selected="false"
                                                                tabIndex={-1}
                                                                role="tab"
                                                            >
                                                                <i className="ri-car-line me-1_5" />
                                                                <span className="align-middle">Shipping</span>
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link waves-effect waves-light"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#global-delivery"
                                                                aria-selected="false"
                                                                tabIndex={-1}
                                                                role="tab"
                                                            >
                                                                <i className="ri-global-line me-1_5" />
                                                                <span className="align-middle">Global Delivery</span>
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link waves-effect waves-light"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#attributes"
                                                                aria-selected="false"
                                                                tabIndex={-1}
                                                                role="tab"
                                                            >
                                                                <i className="ri-link-m me-1_5" />
                                                                <span className="align-middle">Attributes</span>
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link waves-effect waves-light"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#advanced"
                                                                aria-selected="false"
                                                                tabIndex={-1}
                                                                role="tab"
                                                            >
                                                                <i className="ri-lock-unlock-line me-1_5" />
                                                                <span className="align-middle">Advanced</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Navigation */}
                                        {/* Options */}
                                        <div className="col-12 col-md-8 col-xl-7 col-xxl-8 pt-6 pt-md-0">
                                            <div className="tab-content p-0 pe-xl-0 ps-md-4">
                                                {/* Restock Tab */}
                                                <div className="tab-pane fade show active" id="restock" role="tabpanel">
                                                    <h6 className="text-body">Options</h6>
                                                    <div className="row mb-4 g-4">
                                                        <div className="col-12 col-sm-8 col-lg-12 col-xxl-8">
                                                            <div>
                                                                <input
                                                                    type="number"
                                                                    className="form-control form-control-sm"
                                                                    id="ecommerce-product-stock"
                                                                    placeholder="Add to Stock"
                                                                    name="Add to Stock"
                                                                    aria-label="Add to Stock"
                                                                />{' '}
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-sm-4 col-lg-6 col-xxl-4">
                                                            <button className="btn btn-primary waves-effect waves-light">
                                                                <i className="ri-check-line ri-16px me-1_5" />
                                                                Confirm
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-2 fw-normal">Product in stock now: 54</h6>
                                                        <h6 className="mb-2 fw-normal">Product in transit: 390</h6>
                                                        <h6 className="mb-2 fw-normal">
                                                            Last time restocked: 24th June, 2023
                                                        </h6>
                                                        <h6 className="mb-0 fw-normal">
                                                            Total stock over lifetime: 2430
                                                        </h6>
                                                    </div>
                                                </div>
                                                {/* Shipping Tab */}
                                                <div className="tab-pane fade" id="shipping" role="tabpanel">
                                                    <h6 className="mb-3 text-body">Shipping Type</h6>
                                                    <div>
                                                        <div className="form-check mb-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="shippingType"
                                                                id="seller"
                                                            />
                                                            <label className="form-check-label" htmlFor="seller">
                                                                <span className="h6">Fulfilled by Seller</span>
                                                                <br />
                                                                <small>
                                                                    You'll be responsible for product delivery.
                                                                    <br />
                                                                    Any damage or delay during shipping may cost you a
                                                                    Damage fee.
                                                                </small>
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-6">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="shippingType"
                                                                id="companyName"
                                                                defaultChecked=""
                                                            />
                                                            <label className="form-check-label" htmlFor="companyName">
                                                                <span className="h6">
                                                                    Fulfilled by Company name &nbsp;
                                                                    <span className="badge rounded-pill badge-warning bg-label-warning fs-tiny py-1">
                                                                        RECOMMENDED
                                                                    </span>
                                                                </span>
                                                                <br />
                                                                <small>
                                                                    Your product, Our responsibility.
                                                                    <br />
                                                                    For a measly fee, we will handle the delivery
                                                                    process for you.
                                                                </small>
                                                            </label>
                                                        </div>
                                                        <p className="mb-0">
                                                            See our{' '}
                                                            <a href="javascript:void(0);">
                                                                Delivery terms and conditions
                                                            </a>{' '}
                                                            for details
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Global Delivery Tab */}
                                                <div className="tab-pane fade" id="global-delivery" role="tabpanel">
                                                    <h6 className="mb-3 text-body">Global Delivery</h6>
                                                    {/* Worldwide delivery */}
                                                    <div className="form-check mb-4">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="globalDel"
                                                            id="worldwide"
                                                        />
                                                        <label className="form-check-label" htmlFor="worldwide">
                                                            <span className="h6">Worldwide delivery</span>
                                                            <br />
                                                            <small>
                                                                Only available with Shipping method:
                                                                <a href="javascript:void(0);">
                                                                    Fulfilled by Company name
                                                                </a>
                                                            </small>
                                                        </label>
                                                    </div>
                                                    {/* Global delivery */}
                                                    <div className="form-check mb-4">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="globalDel"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label w-75 pe-12 mb-2"
                                                            htmlFor="country-selected"
                                                        >
                                                            <span className="h6">Selected Countries</span>
                                                        </label>
                                                        <div>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm"
                                                                placeholder="Countries"
                                                                id="country-selected"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Local delivery */}
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="globalDel"
                                                            id="local"
                                                        />
                                                        <label className="form-check-label" htmlFor="local">
                                                            <span className="h6">Local delivery</span>
                                                            <br />
                                                            <small>
                                                                Deliver to your country of residence :
                                                                <a href="javascript:void(0);">Change profile address</a>
                                                            </small>
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* Attributes Tab */}
                                                <div className="tab-pane fade" id="attributes" role="tabpanel">
                                                    <h6 className="mb-2 text-body">Attributes</h6>
                                                    <div>
                                                        {/* Fragile Product */}
                                                        <div className="form-check mb-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue="fragile"
                                                                id="fragile"
                                                            />
                                                            <label className="form-check-label" htmlFor="fragile">
                                                                <span className="h6 fw-normal">Fragile Product</span>
                                                            </label>
                                                        </div>
                                                        {/* Biodegradable */}
                                                        <div className="form-check mb-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue="biodegradable"
                                                                id="biodegradable"
                                                            />
                                                            <label className="form-check-label" htmlFor="biodegradable">
                                                                <span className="h6 fw-normal">Biodegradable</span>
                                                            </label>
                                                        </div>
                                                        {/* Frozen Product */}
                                                        <div className="form-check mb-4">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="frozen"
                                                                defaultValue="frozen"
                                                                defaultChecked=""
                                                            />
                                                            <label
                                                                className="form-check-label w-75 pe-12 mb-2"
                                                                htmlFor="frozen"
                                                            >
                                                                <span className="h6 fw-normal mb-1">
                                                                    Frozen Product
                                                                </span>
                                                            </label>
                                                            <div>
                                                                <input
                                                                    type="number"
                                                                    className="form-control form-control-sm"
                                                                    placeholder="Max. allowed Temperature"
                                                                    id="temp"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* Exp Date */}
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue="expDate"
                                                                id="expDate"
                                                                defaultChecked=""
                                                            />
                                                            <label
                                                                className="form-check-label w-75 pe-12 mb-2"
                                                                htmlFor="expDate"
                                                            >
                                                                <span className="h6 fw-normal mb-1">
                                                                    Expiry Date of Product
                                                                </span>
                                                            </label>
                                                            <div>
                                                                <input
                                                                    type="text"
                                                                    className="product-date form-control form-control-sm flatpickr-input"
                                                                    id="flatpickr-date"
                                                                    readOnly="readonly"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Attributes Tab */}
                                                {/* Advanced Tab */}
                                                <div className="tab-pane fade" id="advanced" role="tabpanel">
                                                    <h6 className="mb-3 text-body">Advanced</h6>
                                                    <div className="row">
                                                        {/* Product Id Type */}
                                                        <div className="col">
                                                            <h6 className="mb-2">Product ID Type</h6>
                                                            <div>
                                                                <select
                                                                    id="product-id"
                                                                    className="form-select form-select-sm"
                                                                    data-placeholder="ISBN"
                                                                    data-allow-clear="true"
                                                                >
                                                                    <option value="ISBN">ISBN</option>
                                                                    <option value="UPC">UPC</option>
                                                                    <option value="EAN">EAN</option>
                                                                    <option value="JAN">JAN</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {/* Product Id */}
                                                        <div className="col">
                                                            <h6 className="mb-2">Product ID</h6>
                                                            <div>
                                                                <input
                                                                    type="number"
                                                                    id="product-id-1"
                                                                    className="form-control form-control-sm"
                                                                    placeholder="ISBN Number"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Advanced Tab */}
                                            </div>
                                        </div>
                                        {/* /Options*/}
                                    </div>
                                </div>
                            </div>
                            {/* /Inventory */}
                        </div>
                        {/* /Second column */}
                        {/* Second column */}
                        <div className="col-12 col-lg-4">
                            {/* Service Card */}
                            
                            {/* Service Card */}
                            {/* Organize Card */}
                            <div>
                                <div className="card mb-6">
                                    {/* Form chung */}
                                <div className="card mb-6">
                                    <h5 className="card-header">Form Label Alignment</h5>
                                    <form className="card-body">
                                        <div className="me-4 d-flex flex-column">
                                            <label className="text-sm-start" htmlFor="alignment-birthdate">
                                                Start Date
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    id="alignment-birthdate"
                                                    name="startDate"
                                                    value={addService.startDate}
                                                    onChange={handleChangeProductService}
                                                    className="form-control dob-picker flatpickr-input"
                                                    placeholder="YYYY-MM-DD"
                                                    readOnly
                                                    ref={datePickerRef}
                                                />
                                            </div>
                                        </div>
                                        <div className="me-4 d-flex flex-column">
                                            <label className="text-sm-start" htmlFor="alignment-birthdate">
                                                End Date
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    id="alignment-birthdate"
                                                    name="endDate"
                                                    value={addService.endDate}
                                                    onChange={handleChangeProductService}
                                                    className="form-control dob-picker flatpickr-input"
                                                    placeholder="YYYY-MM-DD"
                                                    readOnly
                                                    ref={datePickerRef}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <label className="text-sm-start" htmlFor="alignment-phone">
                                                Number Employee
                                            </label>
                                            <div>
                                                <input
                                                    type="number"
                                                    id="alignment-phone"
                                                    className="form-control phone-mask"
                                                    name="requiredEmployees"
                                                    value={addService.requiredEmployees}
                                                    min={1}
                                                    onChange={handleChangeProductService}
                                                    placeholder="Number Employee"
                                                    aria-label="658 799 8941"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Pricing</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="position-relative mb-5 col ecommerce-select2-dropdown d-flex justify-content-between align-items-center">
                                            <div className="w-100 me-4">
                                                <select
                                                    id="alignment-country"
                                                    className="select2 form-select form-select-sm"
                                                    name="serviceId"
                                                    value={addService.serviceId}
                                                    onChange={handleChangeProductService}
                                                >
                                                    <option value="">Select Service</option>
                                                    {service?.map((res) => (
                                                        <option key={res.serviceId} value={res.serviceId}>
                                                            {res.serviceName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn-outline-primary btn-icon waves-effect"
                                                    onClick={handleAddService}
                                                >
                                                    <i className="ri-add-line" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            {/* /Organize Card */}
                        </div>
                        {/* /Second column */}
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
export default AddProducts;
