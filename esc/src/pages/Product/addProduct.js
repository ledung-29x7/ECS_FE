import { useState, useEffect, useRef } from 'react';
import * as apis from '../../apis';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

function AddProducts() {
    const navigate = useNavigate();
    const idClient = window.sessionStorage.getItem('idClient');
    const [selectedImage, setSelectedImage] = useState(null);
    const [readerImg, setReaderImg] = useState([]);
    const [service, setService] = useState([]);
    const [category, setCategory] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const date = new Date();
    var setDateout = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1);
    const [addService, setAddService] = useState({
        ServiceId: 0,
        ClientId: idClient,
        StartDate: new Date(),
        EndDate: setDateout,
        RequiredEmployees: '',
    });

    const [valueAdd, setValueAdd] = useState({
        clientId: idClient,
        CategoryId: 0,
        ProductName: '',
        Price: 0,
        InitialQuantity: 0,
        Description: '',
        productServicesJson: [],
    });
    const datePickerRef = useRef(null);
    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.click();
    };

    const { RangePicker } = DatePicker;
    const disabledDate = (current) => {
        // Không thể chọn ngày trước ngày hiện tại
        return current && current < dayjs().endOf('day');
    };

    // xử lý lấy định dạng ngày
    const dateFormatAux = (date) => {
        let d = new Date(date);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();

        if (day.length < 2) {
            day = '0' + day;
        }
        if (month.length < 2) {
            month = '0' + month;
        }

        return [year, month, day].join('-');
    };

    // xử lý ngày tháng
    useEffect(() => {
        const date = new Date();
        var setDatein = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        setAddService({
            ...addService,
            StartDate: dateFormatAux(setDatein),
            EndDate: dateFormatAux(setDateout),
        });
    }, []);
    // xử lý khi thay đổi ngày
    const handleinDate = (dates, dateStrings) => {
        setAddService({
            ...addService,
            StartDate: dateFormatAux(dateStrings[0]) && dateFormatAux(dates[0]),
            EndDate: dateFormatAux(dateStrings[1] && dateFormatAux(dates[1])),
        });
    };
    const handleChangeProductService = (event) => {
        const { name, value } = event.target;
        console.log(value);
        console.log(`Selected ${name}:`, value);
        setAddService((prev) => ({
            ...prev,
            [name]: name === 'ServiceId' || name === 'RequiredEmployees' ? Number(value) : value,
        }));
    };

    const handleAddService = () => {
        if (!addService.ServiceId) {
            alert('Please select a service!');
            return;
        }
        // Tính số ngày
        const startDate = new Date(addService.StartDate);
        const endDate = new Date(addService.EndDate);
        const days = Math.max(1, (endDate - startDate) / (1000 * 60 * 60 * 24));

        // Lấy giá dịch vụ
        const selectedService = service.find((s) => s.serviceId === addService.ServiceId);
        const serviceCost = days * addService.RequiredEmployees * selectedService.costPerDay;

        // Thêm dịch vụ mới vào danh sách
        setValueAdd((prev) => ({
            ...prev,
            productServicesJson: [
                ...prev.productServicesJson,
                { ...addService }, // Copy dữ liệu từ addService
            ],
        }));
        setTotalCost((prev) => prev + serviceCost);
        // Reset serviceId trong addService (nếu cần)
        setAddService((prev) => ({
            ...prev,
            ServiceId: 0,
        }));
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
                // console.error('Lỗi khi lấy danh mục:', error);
                toast.error("Lỗi khi lấy danh mục:")
            }
        };
        fetchCategories();
    }, []);

    // Lấy danh sách file từ input
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            setSelectedImage(files); // Lưu file vào state
            // Tạo danh sách URL ảnh từ danh sách file
            const imgUpload = Array.from(files).map((file) => URL.createObjectURL(file));

            // Cập nhật `readerImg` là một mảng
            setReaderImg((prev) => [...prev, ...imgUpload]);
        } else {
            console.error('No files selected.');
        }
    };

    // Cập nhật giá trị trong form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValueAdd((prev) => ({
            ...prev,
            [name]: ['CategoryId', 'Price', 'InitialQuantity'].includes(name) ? Number(value) : value,
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
                        // toast.success("GetAllService success")
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
        formData.append('CategoryId', valueAdd.CategoryId);
        formData.append('ProductName', valueAdd.ProductName);
        formData.append('Price', valueAdd.Price);
        formData.append('InitialQuantity', valueAdd.InitialQuantity);
        formData.append('Description', valueAdd.Description);
        // Thêm file vào FormData
        if (selectedImage && selectedImage.length > 0) {
            for (let i = 0; i < selectedImage.length; i++) {
                formData.append('ImageFiles', selectedImage[i]);
            }
        } else {
            console.error('No files to upload.');
            return;
        }
        valueAdd.productServicesJson.forEach((service) => {
            service.RequiredEmployees = Number(service.RequiredEmployees);
        });
        formData.append('productServicesJson', JSON.stringify(valueAdd.productServicesJson));

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
                            <button
                                onClick={() => navigate('/product')}
                                className="btn btn-outline-secondary waves-effect"
                            >
                                Discard
                            </button>
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
                                                name="ProductName"
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
                                                            name="CategoryId"
                                                            value={valueAdd.CategoryId} // Gắn giá trị hiện tại
                                                            onChange={handleChange} // Gọi hàm xử lý sự kiện
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
                                                        placeholder=""
                                                        name="Price"
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
                                                        placeholder=""
                                                        name="InitialQuantity"
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
                                            <div className=" p-0 pt-1">
                                                <div
                                                    className="comment-editor border-0 pb-1 ql-container ql-snow"
                                                    id="ecommerce-category-description"
                                                >
                                                    <textarea
                                                        type="text"
                                                        name="Description"
                                                        onChange={handleChange}
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
                                                onClick={focusInput}
                                            >
                                                Browse image
                                                <input
                                                    type="file"
                                                    multiple
                                                    hidden
                                                    ref={inputElement}
                                                    class="dz-hidden-input "
                                                    onChange={handleFileChange}
                                                    accept=".jpg,.jpeg,.png,.gif"
                                                />
                                            </span>
                                        </div>

                                        {readerImg?.map((img, key) => (
                                            <div
                                                key={key}
                                                className="dz-preview dz-processing dz-image-preview dz-success dz-complete"
                                            >
                                                <div className="dz-details">
                                                    <div className="dz-thumbnail">
                                                        <img
                                                            data-dz-thumbnail=""
                                                            className="w-12 h-7"
                                                            alt=""
                                                            src={img}
                                                        />
                                                        <span className="dz-nopreview">No preview</span>
                                                        <div className="dz-success-mark" />
                                                        <div className="dz-error-mark" />
                                                        <div className="dz-error-message">
                                                            <span data-dz-errormessage="" />
                                                        </div>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar progress-bar-primary"
                                                                role="progressbar"
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                data-dz-uploadprogress=""
                                                                style={{ width: '100%' }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="dz-filename" data-dz-name="">
                                                        Screenshot (8).png
                                                    </div>
                                                    <div className="dz-size" data-dz-size="">
                                                        <strong>1.6</strong> MB
                                                    </div>
                                                </div>
                                                <button
                                                    className="dz-remove border-none "
                                                    onClick={() => img}
                                                    data-dz-remove=""
                                                >
                                                    Remove file
                                                </button>
                                            </div>
                                        ))}
                                    </form>
                                </div>
                            </div>
                            {/* /Media */}
                        </div>
                        {/* /Second column */}
                        {/* Second column */}
                        <div className="col-12 col-lg-4">
                            {/* Organize Card */}
                            <div>
                                {/* Form chung */}
                                <div className="card mb-6">
                                    <h5 className="card-header">Choose Service</h5>
                                    <div className="card-body">
                                        <div className="d-flex row flex-column">
                                            <label className="text-sm-start col-12" htmlFor="date">
                                                Date
                                            </label>
                                            <div className="col-md-4 col-xl-10">
                                                <RangePicker
                                                    id={'date'}
                                                    placeholder={''}
                                                    className=""
                                                    onChange={handleinDate}
                                                    defaultValue={[
                                                        dayjs(addService.StartDate),
                                                        dayjs(addService.EndDate),
                                                    ]}
                                                    disabledDate={disabledDate}
                                                    format={'DD/MM/YYYY'}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3 row flex-column">
                                            <label className="text-sm-start col-12" htmlFor="alignment-phone">
                                                Number Employee
                                            </label>
                                            <div className="col-md-4 col-xl-10">
                                                <input
                                                    type="number"
                                                    id="alignment-phone"
                                                    className="form-control py-1 col-4 phone-mask"
                                                    name="RequiredEmployees"
                                                    value={addService.RequiredEmployees}
                                                    min={1}
                                                    onChange={handleChangeProductService}
                                                    placeholder="Number Employee"
                                                    aria-label="658 799 8941"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4 row flex-column">
                                            <label className="text-sm-start col-12" htmlFor="alignment-country">
                                                Service
                                            </label>
                                            <div className="position-relative mb-5 col-xl-12 col-md-5 ecommerce-select2-dropdown d-flex  align-items-center">
                                                <div className="w-100 me-4">
                                                    <select
                                                        id="alignment-country"
                                                        typeof="number"
                                                        className="select2 form-select py-1 form-select-sm"
                                                        name="ServiceId"
                                                        value={addService.ServiceId}
                                                        onChange={handleChangeProductService}
                                                    >
                                                        <option value="">Select Service</option>
                                                        {service?.map((res) => (
                                                            <option key={res.serviceId} value={Number(res.serviceId)}>
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
                                <div className="card mb-6">
                                    <div className="border rounded p-5 mb-4">
                                        {/* Estimated Delivery */}
                                        <h6>Estimated Delivery Date</h6>
                                        <ul className="list-unstyled">
                                            {valueAdd.productServicesJson.map((serv, key) => (
                                                <li key={key} className="d-flex gap-4 mb-4">
                                                    <div className="flex-shrink-0">
                                                        {
                                                            service.find((r) => r.serviceId === serv.ServiceId)
                                                                ?.serviceName
                                                        }
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <p className="mb-0">
                                                            <a className="text-body" href="javascript:void(0)">
                                                                {serv.RequiredEmployees}
                                                            </a>
                                                        </p>
                                                        <p className="fw-medium mb-3">{serv.StartDate}</p>
                                                        <p className="fw-medium mb-3">{serv.EndDate}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <hr className="mx-n5 mt-2" />
                                        {/* Price Details */}
                                        <h6>Price Details</h6>
                                        <dl className="row mb-0">
                                            <dt className="col-6 fw-normal text-heading">Order Total</dt>
                                            <dd className="col-6 text-end">${totalCost}</dd>
                                            <dt className="col-6 fw-normal text-heading">Delivery Charges</dt>
                                            <dd className="col-6 text-end">
                                                <s className="text-muted">$5.00</s>{' '}
                                                <span className="badge bg-label-success rounded-pill text-uppercase">
                                                    Free
                                                </span>
                                            </dd>
                                        </dl>
                                        <hr className="mx-n5 my-5" />
                                        <dl className="row mb-0">
                                            <dt className="col-6 text-heading">Total</dt>
                                            <dd className="col-6 fw-medium text-heading text-end mb-0">
                                                ${totalCost.toFixed(2)}
                                            </dd>
                                        </dl>
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
           
        </div>
    );
}
export default AddProducts;
