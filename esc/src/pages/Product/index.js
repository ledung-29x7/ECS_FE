import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as apis from '../../apis';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);
    const [image, setImage] = useState([]);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const idClient = window.sessionStorage.getItem('idClient');
    const [selectedImage, setSelectedImage] = useState(null);
    const [readerImg, setReaderImg] = useState([]);
    const [service, setService] = useState([]);
    const [category, setCategory] = useState([]);

    const [valueEdit, setValueEdit] = useState({
        productId: '',
        clientId: idClient,
        categoryId: 0,
        productName: '',
        price: 0,
        initialQuantity: 0,
        description: '',
        isActive: false,
        status: 0,
        createdAt: '',
    });

    const FetchApi = async () => {
        try {
            await apis
                .GetAllProductByClient(idClient)
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
        } else {
            console.error('No files selected.');
        }
    };

    const handleDelete = async (id) => {
        try {
            console.log('try');
            const res = await apis.DeleteDepartment(id);
            console.log(res);
            if (res.status === 204) {
                console.log('delete success');
                FetchApi();
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleSumbitEdit = async (e) => {
        e.preventDefault();
        const FetchData = async () => {
            try {
                await apis.UpdateProduct(valueEdit).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        setIsShowEdit(false);
                    }
                });
            } catch (error) {
                console.log(error);
            }
        };
        FetchData();
    };
    useEffect(() => {
        FetchApi();
    }, []);
    return (
        <>
            {isShowEdit ? (
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
                                    <button
                                        className="btn btn-outline-secondary waves-effect"
                                        onClick={() => setIsShowEdit(false)}
                                    >
                                        Discard
                                    </button>
                                    <button className="btn btn-outline-primary waves-effect">Save draft</button>
                                    <button
                                        onClick={handleSumbitEdit}
                                        className="btn btn-primary waves-effect waves-light"
                                    >
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
                                                        value={valueEdit.productName}
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
                                                                    value={valueEdit.categoryId} // Gắn giá trị hiện tại
                                                                    onChange={handleChangeEdit} // Gọi hàm xử lý sự kiện
                                                                    aria-hidden="true"
                                                                >
                                                                    <option value="">Option</option>
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
                                                                value={valueEdit.price}
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
                                                    <div className="form-control p-0 pt-1">
                                                        <div
                                                            className="comment-editor border-0 pb-1 ql-container ql-snow"
                                                            id="ecommerce-category-description"
                                                        >
                                                            <input
                                                                type="text"
                                                                className=" border-none "
                                                                name="description"
                                                                value={valueEdit.description}
                                                                onChange={handleChangeEdit}
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
                                                        <a
                                                            className="dz-remove"
                                                            href="javascript:undefined;"
                                                            data-dz-remove=""
                                                        >
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
                                                            <ul
                                                                className="nav nav-pills flex-column w-100"
                                                                role="tablist"
                                                            >
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
                                                                        <span className="align-middle">
                                                                            Global Delivery
                                                                        </span>
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
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="restock"
                                                            role="tabpanel"
                                                        >
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
                                                                <h6 className="mb-2 fw-normal">
                                                                    Product in stock now: 54
                                                                </h6>
                                                                <h6 className="mb-2 fw-normal">
                                                                    Product in transit: 390
                                                                </h6>
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
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="seller"
                                                                    >
                                                                        <span className="h6">Fulfilled by Seller</span>
                                                                        <br />
                                                                        <small>
                                                                            You'll be responsible for product delivery.
                                                                            <br />
                                                                            Any damage or delay during shipping may cost
                                                                            you a Damage fee.
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
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="companyName"
                                                                    >
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
                                                                            For a measly fee, we will handle the
                                                                            delivery process for you.
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
                                                        <div
                                                            className="tab-pane fade"
                                                            id="global-delivery"
                                                            role="tabpanel"
                                                        >
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
                                                                        <a href="javascript:void(0);">
                                                                            Change profile address
                                                                        </a>
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
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="fragile"
                                                                    >
                                                                        <span className="h6 fw-normal">
                                                                            Fragile Product
                                                                        </span>
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
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="biodegradable"
                                                                    >
                                                                        <span className="h6 fw-normal">
                                                                            Biodegradable
                                                                        </span>
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
                            </div>
                        </div>
                    </div>
                    {/* / Content */}
                </div>
            ) : (
                <div className="content-wrapper">
                    {/* Content */}
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
                                                        <span className="badge rounded-pill bg-label-success">
                                                            +5.7%
                                                        </span>
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
                                                        <span className="badge rounded-pill bg-label-success">
                                                            +12.4%
                                                        </span>
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
                                                        <span className="badge rounded-pill bg-label-danger">
                                                            -3.5%
                                                        </span>
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
                        </div>
                        {/* Product List Table */}
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Filter</h5>
                                <div className="d-flex justify-content-between align-items-center row pt-4 gap-4 gap-md-0">
                                    <div className="col-md-4 product_status">
                                        <select id="ProductStatus" className="form-select text-capitalize">
                                            <option value="">Select Status</option>
                                            <option value="Scheduled">Scheduled</option>
                                            <option value="Publish">Publish</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 product_category">
                                        <select id="ProductCategory" className="form-select text-capitalize">
                                            <option value="">Category</option>
                                            <option value="Household">Household</option>
                                            <option value="Office">Office</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Shoes">Shoes</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Game">Game</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 product_stock">
                                        <select id="ProductStock" className="form-select text-capitalize">
                                            <option value=""> Stock </option>
                                            <option value="Out_of_Stock">Out of Stock</option>
                                            <option value="In_Stock">In Stock</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="card-datatable table-responsive">
                                <div
                                    id="DataTables_Table_0_wrapper"
                                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                                >
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
                                                                <span className="d-none d-sm-inline-block">
                                                                    Export{' '}
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>{' '}
                                                    <button
                                                        className="btn btn-secondary btn-primary waves-effect waves-light"
                                                        tabIndex={0}
                                                        onClick={() => navigate('/addProduct')}
                                                        aria-controls="DataTables_Table_0"
                                                        type="button"
                                                    >
                                                        <span>
                                                            <i className="ri-add-line ri-16px me-0 me-sm-1_5" />
                                                            <span className="d-none d-sm-inline-block">
                                                                Add Product
                                                            </span>
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
                                                    className="control sorting_disabled dtr-hidden"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 0, display: 'none' }}
                                                    aria-label=""
                                                />
                                                <th
                                                    className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 18 }}
                                                    data-col={1}
                                                    aria-label=""
                                                >
                                                    <input type="checkbox" className="form-check-input" />
                                                </th>
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
                                                    Product
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
                                                    Category
                                                </th>
                                                <th
                                                    className="sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 55 }}
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
                                                    style={{ width: 46 }}
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
                                                    style={{ width: 76 }}
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
                                                    style={{ width: 36 }}
                                                    aria-label="qty: activate to sort column ascending"
                                                >
                                                    Active
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
                                                    Create At
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
                                                    <td
                                                        className="  control"
                                                        tabIndex={0}
                                                        style={{ display: 'none' }}
                                                    />
                                                    <td className="  dt-checkboxes-cell">
                                                        <input
                                                            type="checkbox"
                                                            className="dt-checkboxes form-check-input"
                                                        />
                                                    </td>
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
                                                            {res?.status}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span>{res?.initialQuantity}</span>
                                                    </td>
                                                    <td>
                                                        <span>${res.price}</span>
                                                    </td>

                                                    <td>
                                                        <span className="text-truncate">
                                                            <label className="switch switch-primary switch-sm">
                                                                <input
                                                                    type="checkbox"
                                                                    value={res?.isActive}
                                                                    className="switch-input"
                                                                    id="switch"
                                                                />
                                                                <span className="switch-toggle-slider">
                                                                    <span className="switch-off" />
                                                                </span>
                                                            </label>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span>{res?.createdAt}</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-inline-block text-nowrap">
                                                            <button
                                                                className="btn btn-sm btn-icon btn-text-secondary waves-effect rounded-pill text-body me-1"
                                                                onClick={() => setIsShowEdit(true)}
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
                                                                <div className="">
                                                                    <button className=" waves-effect waves-light">
                                                                        <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none" />
                                                                        <span className="d-none d-sm-inline-block">
                                                                            View
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
                                                    <li
                                                        className="paginate_button page-item disabled"
                                                        id="DataTables_Table_0_ellipsis"
                                                    >
                                                        <a
                                                            aria-controls="DataTables_Table_0"
                                                            aria-disabled="true"
                                                            role="link"
                                                            data-dt-idx="ellipsis"
                                                            tabIndex={-1}
                                                            className="page-link"
                                                        >
                                                            …
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx={14}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            15
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="paginate_button page-item next"
                                                        id="DataTables_Table_0_next"
                                                    >
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

                    <div className="content-backdrop fade" />
                </div>
            )}
        </>
    );
}
export default Product;
