import { useState, useEffect, useRef } from 'react';
import * as apis from '../../apis';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function AddOrder() {
    const navigate = useNavigate();
    const employeeID = window.localStorage.getItem('employeeID');
    const callId = window.localStorage.getItem('callId');
    const [workList, setWorkList] = useState([]);
    const [valueAdd, setValueAdd] = useState({
        order: {
            callId: callId,
            orderer: '',
            totalAmount: 0,
            recipientName: '',
            recipientPhone: '',
            recipientAddress: '',
        },
        orderDetails: [],
    });
    const [valueAddOrderDetails, setValueAddOrderDetails] = useState({
        orderId: 0,
        productId: '',
        quantity: 0,
        totalPrice: 0,
    });

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const res = await apis.GetAllProduct();
                if (res.status === 200) {
                    // toast.success("GetAllProduct success")
                    setProduct(res.data.products);
                }
            } catch (error) {
                toast.error(error);
            }
        };
        FetchProduct();
    }, []);

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
                toast.error('Error fetching work list:', error);
            }
        };

        fetchWorkList();
    }, [employeeID]);

    const handleAddService = () => {
        if (!valueAddOrderDetails.productId) {
            alert('Please select a product!');
            return;
        }

        const selectedProduct = product.find((p) => p.productId === valueAddOrderDetails.productId);
        if (!selectedProduct) {
            alert('Product not found!');
            return;
        }

        const ttPrice = valueAddOrderDetails.quantity * selectedProduct.price;

        setValueAdd((prev) => {
            const updatedOrderDetails = [...prev.orderDetails, { ...valueAddOrderDetails, totalPrice: ttPrice }];

            const updatedTotalAmount = updatedOrderDetails.reduce(
                (sum, item) => sum + item.totalPrice,
                0, // Giá trị khởi tạo
            );

            return {
                ...prev,
                order: { ...prev.order, totalAmount: updatedTotalAmount },
                orderDetails: updatedOrderDetails,
            };
        });

        // Reset productId trong valueAddOrderDetails (nếu cần)
        setValueAddOrderDetails((prev) => ({
            ...prev,
            productId: '',
            quantity: 0,
        }));
    };

    function handleChange(event) {
        const { name, value } = event.target;
        setValueAdd((prev) => ({
            ...prev,
            order: {
                ...prev.order,
                [name]: value,
            },
        }));
    }

    function handleChangeOrderDetails(event) {
        const { name, value } = event.target;
        setValueAddOrderDetails((prev) => ({
            ...prev,
            [name]: ['quantity'].includes(name) ? Number(value) : value,
        }));
    }
    const handleSubmit = () => {
        const FetchApi = async () => {
            try {
                await apis.AddOrderWithDetails(valueAdd).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        toast.success('AddOrderWithDetails success');
                        navigate('/order');
                    }
                });
            } catch (error) {
                toast.error(error);
            }
        };
        FetchApi();
    };

    return (
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="app-ecommerce">
                    {/* Add Product */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-6 gap-4 gap-md-0">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1">Add a new order</h4>
                            <p className="mb-0">Orders placed across your store</p>
                        </div>
                        <div className="d-flex align-content-center flex-wrap gap-4">
                            <button
                                onClick={() => navigate('/order')}
                                className="btn btn-outline-secondary waves-effect"
                            >
                                Discard
                            </button>

                            <button onClick={handleSubmit} className="btn btn-primary waves-effect waves-light">
                                Publish order
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-8">
                            {/* Order Information */}
                            <div className="card mb-6">
                                <div className="card-header">
                                    <h5 className="card-tile mb-0">Order information</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form-repeater">
                                        <div className="form-floating form-floating-outline mb-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-name"
                                                placeholder="Orderer"
                                                name="orderer"
                                                onChange={handleChange}
                                                aria-label="Product title"
                                            />
                                            <label htmlFor="ecommerce-product-name">Orderer</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-name"
                                                placeholder="Recipient Name"
                                                name="recipientName"
                                                onChange={handleChange}
                                                aria-label="Product title"
                                            />
                                            <label htmlFor="ecommerce-product-name">Recipient Name</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-name"
                                                placeholder="Recipient Phone"
                                                name="recipientPhone"
                                                onChange={handleChange}
                                                aria-label="Product title"
                                            />
                                            <label htmlFor="ecommerce-product-name">Recipient Phone</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-name"
                                                placeholder="Recipient Address"
                                                name="recipientAddress"
                                                onChange={handleChange}
                                                aria-label="Product title"
                                            />
                                            <label htmlFor="ecommerce-product-name">Recipient Address</label>
                                        </div>

                                        {/* Comment */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /Second column */}
                        {/* Second column */}
                        <div className="col-12 col-lg-4">
                            {/* Organize Card */}
                            <div className="card mb-6">
                                {/* Form chung */}
                                <div className="card mb-6">
                                    <h5 className="card-header">Form Order</h5>
                                    <form className="card-body">
                                        <div className="d-flex flex-column">
                                            <label className="text-sm-start" htmlFor="alignment-phone">
                                                Quantity
                                            </label>
                                            <div>
                                                <input
                                                    type="number"
                                                    id="alignment-phone"
                                                    className="form-control"
                                                    name="quantity"
                                                    value={valueAddOrderDetails.quantity}
                                                    min={1}
                                                    onChange={handleChangeOrderDetails}
                                                    placeholder="quantity"
                                                    aria-label="10"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Product</h5>
                                </div>
                                <div className="card-body">
                                    <div className="position-relative mb-5 col ecommerce-select2-dropdown d-flex justify-content-between align-items-center">
                                        <div className="w-100 me-4">
                                            <select
                                                id="select2Basic"
                                                className="form-select"
                                                name="productId"
                                                value={valueAddOrderDetails.productId}
                                                onChange={handleChangeOrderDetails}
                                            >
                                                <option value="">Select product</option>

                                                {workList?.map((res, key) => (
                                                    <option key={key} value={res.productId}>
                                                        {res.productName}
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
                            {/* /Organize Card */}
                        </div>
                        {/* /Second column */}
                    </div>
                    <div className="card mb-6">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="card-title m-0">Order details</h5>
                            <h6 className="m-0">
                                <a href=" javascript:void(0)">Edit</a>
                            </h6>
                        </div>
                        <div className="card-datatable table-responsive">
                            <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                <table
                                    className="datatables-order-details table dataTable no-footer dtr-column"
                                    id="DataTables_Table_0"
                                    style={{ width: 922 }}
                                >
                                    <thead>
                                        <tr>
                                            <th
                                                className="w-50 sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 420 }}
                                                aria-label="products"
                                            >
                                                Products
                                            </th>
                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 96 }}
                                                aria-label="price"
                                            >
                                                Price
                                            </th>
                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 77 }}
                                                aria-label="qty"
                                            >
                                                Qty
                                            </th>
                                            <th
                                                className="sorting_disabled"
                                                rowSpan={1}
                                                colSpan={1}
                                                style={{ width: 115 }}
                                                aria-label="total"
                                            >
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {valueAdd.orderDetails?.map((res, key) => (
                                            <tr className="odd" key={key}>
                                                <td className="sorting_1">
                                                    <div className="d-flex justify-content-start align-items-center product-name">
                                                        <div className="avatar-wrapper me-3">
                                                            <div className="avatar avatar-sm rounded-2 bg-label-secondary">
                                                                <img
                                                                    src={`data:${
                                                                        product.find(
                                                                            (p) => p.productId === res.productId,
                                                                        )?.images[0]?.type
                                                                    };base64,${
                                                                        product.find(
                                                                            (p) => p.productId === res.productId,
                                                                        )?.images[0]?.imageBase64
                                                                    }`}
                                                                    alt="product-Wooden Chair"
                                                                    className="rounded-2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="text-nowrap text-heading fw-medium">
                                                                {
                                                                    product.find((p) => p.productId === res.productId)
                                                                        ?.productName
                                                                }
                                                            </span>
                                                            <small className="text-truncate d-none d-sm-block">
                                                                {
                                                                    product.find((p) => p.productId === res.productId)
                                                                        ?.description
                                                                }
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>
                                                        {product.find((p) => p.productId === res.productId)?.price}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>{res?.quantity}</span>
                                                </td>
                                                <td>
                                                    <span>{res?.totalPrice}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div style={{ width: '1%' }} />
                            </div>
                            <div className="d-flex justify-content-end align-items-center m-4 p-1 mb-0 pb-0">
                                <div className="order-calculations">
                                    <div className="d-flex justify-content-start gap-4">
                                        <h6 className="w-px-100 mb-0">Total:</h6>
                                        <h6 className="mb-0">{valueAdd?.order?.totalAmount}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* / Content */}
            <div className="content-backdrop fade" />
        </div>
    );
}
export default AddOrder;
