function Home() {
    return (
        <>

            {/* Content wrapper */}
            <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row gy-6">
                        {/* Congratulations card */}
                        <div className="col-md-12 col-lg-4">
                            <div className="card">
                                <div className="card-body text-nowrap">
                                    <h5 className="card-title mb-0 flex-wrap text-nowrap">
                                        Congratulations Norris! 🎉
                                    </h5>
                                    <p className="mb-2">Best seller of the month</p>
                                    <h4 className="text-primary mb-0">$42.8k</h4>
                                    <p className="mb-2">78% of target 🚀</p>
                                    <a href="javascript:;" className="btn btn-sm btn-primary">
                                        View Sales
                                    </a>
                                </div>
                                <img
                                    src="../../assets/img/illustrations/trophy.png"
                                    className="position-absolute bottom-0 end-0 me-5 mb-5"
                                    width={83}
                                    alt="view sales"
                                />
                            </div>
                        </div>
                        {/*/ Congratulations card */}
                        {/* Transactions */}
                        <div className="col-lg-8">
                            <div className="card h-100">
                                <div className="card-header">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="card-title m-0 me-2">Transactions</h5>
                                        <div className="dropdown">
                                            <button
                                                className="btn text-muted p-0"
                                                type="button"
                                                id="transactionID"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="ri-more-2-line ri-24px" />
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="transactionID"
                                            >
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Refresh
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Update
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="small mb-0">
                                        <span className="h6 mb-0">Total 48.5% Growth</span> 😎
                                        this month
                                    </p>
                                </div>
                                <div className="card-body pt-lg-10">
                                    <div className="row g-6">
                                        <div className="col-md-3 col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar">
                                                    <div className="avatar-initial bg-primary rounded shadow-xs">
                                                        <i className="ri-pie-chart-2-line ri-24px" />
                                                    </div>
                                                </div>
                                                <div className="ms-3">
                                                    <p className="mb-0">Sales</p>
                                                    <h5 className="mb-0">245k</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar">
                                                    <div className="avatar-initial bg-success rounded shadow-xs">
                                                        <i className="ri-group-line ri-24px" />
                                                    </div>
                                                </div>
                                                <div className="ms-3">
                                                    <p className="mb-0">Customers</p>
                                                    <h5 className="mb-0">12.5k</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar">
                                                    <div className="avatar-initial bg-warning rounded shadow-xs">
                                                        <i className="ri-macbook-line ri-24px" />
                                                    </div>
                                                </div>
                                                <div className="ms-3">
                                                    <p className="mb-0">Product</p>
                                                    <h5 className="mb-0">1.54k</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar">
                                                    <div className="avatar-initial bg-info rounded shadow-xs">
                                                        <i className="ri-money-dollar-circle-line ri-24px" />
                                                    </div>
                                                </div>
                                                <div className="ms-3">
                                                    <p className="mb-0">Revenue</p>
                                                    <h5 className="mb-0">$88k</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Transactions */}
                        {/* Weekly Overview Chart */}
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-1">Weekly Overview</h5>
                                        <div className="dropdown">
                                            <button
                                                className="btn text-muted p-0"
                                                type="button"
                                                id="weeklyOverviewDropdown"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="ri-more-2-line ri-24px" />
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="weeklyOverviewDropdown"
                                            >
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Refresh
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Update
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-lg-2">
                                    <div id="weeklyOverviewChart" />
                                    <div className="mt-1 mt-md-3">
                                        <div className="d-flex align-items-center gap-4">
                                            <h4 className="mb-0">45%</h4>
                                            <p className="mb-0">
                                                Your sales performance is 45% 😎 better compared to
                                                last month
                                            </p>
                                        </div>
                                        <div className="d-grid mt-3 mt-md-4">
                                            <button className="btn btn-primary" type="button">
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Weekly Overview Chart */}
                        {/* Total Earnings */}
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <h5 className="card-title m-0 me-2">Total Earning</h5>
                                    <div className="dropdown">
                                        <button
                                            className="btn text-muted p-0"
                                            type="button"
                                            id="totalEarnings"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="ri-more-2-line ri-24px" />
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="totalEarnings"
                                        >
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Last 28 Days
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Last Month
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Last Year
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-lg-8">
                                    <div className="mb-5 mb-lg-12">
                                        <div className="d-flex align-items-center">
                                            <h3 className="mb-0">$24,895</h3>
                                            <span className="text-success ms-2">
                                                <i className="ri-arrow-up-s-line" />
                                                <span>10%</span>
                                            </span>
                                        </div>
                                        <p className="mb-0">Compared to $84,325 last year</p>
                                    </div>
                                    <ul className="p-0 m-0">
                                        <li className="d-flex mb-6">
                                            <div className="avatar flex-shrink-0 bg-lightest rounded me-3">
                                                <img
                                                    src="../../assets/img/icons/misc/zipcar.png"
                                                    alt="zipcar"
                                                />
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Zipcar</h6>
                                                    <p className="mb-0">Vuejs, React &amp; HTML</p>
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">$24,895.65</h6>
                                                    <div
                                                        className="progress bg-label-primary"
                                                        style={{ height: 4 }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-primary"
                                                            style={{ width: "75%" }}
                                                            role="progressbar"
                                                            aria-valuenow={75}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-6">
                                            <div className="avatar flex-shrink-0 bg-lightest rounded me-3">
                                                <img
                                                    src="../../assets/img/icons/misc/bitbank.png"
                                                    alt="bitbank"
                                                />
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Bitbank</h6>
                                                    <p className="mb-0">Sketch, Figma &amp; XD</p>
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">$8,6500.20</h6>
                                                    <div
                                                        className="progress bg-label-info"
                                                        style={{ height: 4 }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-info"
                                                            style={{ width: "75%" }}
                                                            role="progressbar"
                                                            aria-valuenow={75}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="avatar flex-shrink-0 bg-lightest rounded me-3">
                                                <img
                                                    src="../../assets/img/icons/misc/aviato.png"
                                                    alt="aviato"
                                                />
                                            </div>
                                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Aviato</h6>
                                                    <p className="mb-0">HTML &amp; Angular</p>
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">$1,2450.80</h6>
                                                    <div
                                                        className="progress bg-label-secondary"
                                                        style={{ height: 4 }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-secondary"
                                                            style={{ width: "75%" }}
                                                            role="progressbar"
                                                            aria-valuenow={75}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*/ Total Earnings */}
                        {/* Four Cards */}
                        <div className="col-xl-4 col-md-6">
                            <div className="row gy-6">
                                {/* Total Profit line chart */}
                                <div className="col-sm-6">
                                    <div className="card h-100">
                                        <div className="card-header pb-0">
                                            <h4 className="mb-0">$86.4k</h4>
                                        </div>
                                        <div className="card-body">
                                            <div id="totalProfitLineChart" className="mb-3" />
                                            <h6 className="text-center mb-0">Total Profit</h6>
                                        </div>
                                    </div>
                                </div>
                                {/*/ Total Profit line chart */}
                                {/* Total Profit Weekly Project */}
                                <div className="col-sm-6">
                                    <div className="card h-100">
                                        <div className="card-header d-flex align-items-center justify-content-between">
                                            <div className="avatar">
                                                <div className="avatar-initial bg-secondary rounded-circle shadow-xs">
                                                    <i className="ri-pie-chart-2-line ri-24px" />
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button
                                                    className="btn text-muted p-0"
                                                    type="button"
                                                    id="totalProfitID"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-line ri-24px" />
                                                </button>
                                                <div
                                                    className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="totalProfitID"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                    >
                                                        Refresh
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                    >
                                                        Share
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                    >
                                                        Update
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="mb-1">Total Profit</h6>
                                            <div className="d-flex flex-wrap mb-1 align-items-center">
                                                <h4 className="mb-0 me-2">$25.6k</h4>
                                                <p className="text-success mb-0">+42%</p>
                                            </div>
                                            <small>Weekly Project</small>
                                        </div>
                                    </div>
                                </div>
                                {/*/ Total Profit Weekly Project */}
                                {/* New Yearly Project */}
                                <div className="col-sm-6">
                                    <div className="card h-100">
                                        <div className="card-header d-flex align-items-center justify-content-between">
                                            <div className="avatar">
                                                <div className="avatar-initial bg-primary rounded-circle shadow-xs">
                                                    <i className="ri-file-word-2-line ri-24px" />
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button
                                                    className="btn text-muted p-0"
                                                    type="button"
                                                    id="newProjectID"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ri-more-2-line ri-24px" />
                                                </button>
                                                <div
                                                    className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="newProjectID"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                    >
                                                        Refresh
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                    >
                                                        Share
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                    >
                                                        Update
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="mb-1">New Project</h6>
                                            <div className="d-flex flex-wrap mb-1 align-items-center">
                                                <h4 className="mb-0 me-2">862</h4>
                                                <p className="text-danger mb-0">-18%</p>
                                            </div>
                                            <small>Yearly Project</small>
                                        </div>
                                    </div>
                                </div>
                                {/*/ New Yearly Project */}
                                {/* Sessions chart */}
                                <div className="col-sm-6">
                                    <div className="card h-100">
                                        <div className="card-header pb-0">
                                            <h4 className="mb-0">2,856</h4>
                                        </div>
                                        <div className="card-body">
                                            <div id="sessionsColumnChart" className="mb-3" />
                                            <h6 className="text-center mb-0">Sessions</h6>
                                        </div>
                                    </div>
                                </div>
                                {/*/ Sessions chart */}
                            </div>
                        </div>
                        {/*/ four cards */}
                        {/* Performance Chart */}
                        <div className="col-xl-4 col-md-6">
                            <div className="card h-100">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0">Performance</h5>
                                        <div className="dropdown">
                                            <button
                                                className="btn text-muted p-0"
                                                type="button"
                                                id="performanceDropdown"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="ri-more-2-line ri-24px" />
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="performanceDropdown"
                                            >
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Last 28 Days
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Last Month
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0);"
                                                >
                                                    Last Year
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="performanceChart" />
                                </div>
                            </div>
                        </div>
                        {/*/ Performance Chart */}
                        {/* Deposit / Withdraw */}
                        <div className="col-xl-8">
                            <div className="card-group">
                                <div className="card mb-0">
                                    <div className="card-body card-separator">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                                            <h5 className="m-0 me-2">Deposit</h5>
                                            <a className="fw-medium" href="javascript:void(0);">
                                                View all
                                            </a>
                                        </div>
                                        <div className="deposit-content pt-2">
                                            <ul className="p-0 m-0">
                                                <li className="d-flex mb-4 align-items-center pb-2">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/payments/gumroad.png"
                                                            className="img-fluid"
                                                            alt="gumroad"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">Gumroad Account</h6>
                                                            <p className="mb-0">Sell UI Kit</p>
                                                        </div>
                                                        <h6 className="text-success mb-0">+$4,650</h6>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-4 align-items-center pb-2">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/payments/mastercard-2.png"
                                                            className="img-fluid"
                                                            alt="mastercard"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">Mastercard</h6>
                                                            <p className="mb-0">Wallet deposit</p>
                                                        </div>
                                                        <h6 className="text-success mb-0">+$92,705</h6>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-4 align-items-center pb-2">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/payments/stripes.png"
                                                            className="img-fluid"
                                                            alt="stripes"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">Stripe Account</h6>
                                                            <p className="mb-0">iOS Application</p>
                                                        </div>
                                                        <h6 className="text-success mb-0">+$957</h6>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-4 align-items-center pb-2">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/payments/american-bank.png"
                                                            className="img-fluid"
                                                            alt="american"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">American Bank</h6>
                                                            <p className="mb-0">Bank Transfer</p>
                                                        </div>
                                                        <h6 className="text-success mb-0">+$6,837</h6>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/payments/citi.png"
                                                            className="img-fluid"
                                                            alt="citi"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">Bank Account</h6>
                                                            <p className="mb-0">Wallet deposit</p>
                                                        </div>
                                                        <h6 className="text-success mb-0">+$446</h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                                            <h5 className="m-0 me-2">Withdraw</h5>
                                            <a className="fw-medium" href="javascript:void(0);">
                                                View all
                                            </a>
                                        </div>
                                        <div className="withdraw-content pt-2">
                                            <ul className="p-0 m-0">
                                                <li className="d-flex mb-4 align-items-center pb-2">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/brands/google.png"
                                                            className="img-fluid"
                                                            alt="google"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">Google Adsense</h6>
                                                            <p className="mb-0">Paypal deposit</p>
                                                        </div>
                                                        <h6 className="text-danger mb-0">-$145</h6>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-4 align-items-center pb-2">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/brands/github.png"
                                                            className="img-fluid"
                                                            alt="github"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">Github Enterprise</h6>
                                                            <p className="mb-0">
                                                                Security &amp; compliance
                                                            </p>
                                                        </div>
                                                        <h6 className="text-danger mb-0">-$1870</h6>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-4 align-items-center pb-2">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/brands/slack.png"
                                                            className="img-fluid"
                                                            alt="slack"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">Upgrade Slack Plan</h6>
                                                            <p className="mb-0">Debit card deposit</p>
                                                        </div>
                                                        <h6 className="text-danger mb-0">$450</h6>
                                                    </div>
                                                </li>
                                                <li className="d-flex mb-4 align-items-center pb-2">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/payments/digital-ocean.png"
                                                            className="img-fluid"
                                                            alt="digital"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">Digital Ocean</h6>
                                                            <p className="mb-0">Cloud Hosting</p>
                                                        </div>
                                                        <h6 className="text-danger mb-0">-$540</h6>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-4">
                                                        <img
                                                            src="../../assets/img/icons/brands/aws.png"
                                                            className="img-fluid"
                                                            alt="aws"
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>
                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                        <div className="me-2">
                                                            <h6 className="mb-0">AWS Account</h6>
                                                            <p className="mb-0">
                                                                Choosing a Cloud Platform
                                                            </p>
                                                        </div>
                                                        <h6 className="text-danger mb-0">-$21</h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Deposit / Withdraw */}
                        {/* Sales by Countries */}
                        <div className="col-xl-4 col-md-6">
                            <div className="card h-100">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <h5 className="card-title m-0 me-2">Sales by Countries</h5>
                                    <div className="dropdown">
                                        <button
                                            className="btn text-muted p-0"
                                            type="button"
                                            id="saleStatus"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="ri-more-2-line ri-24px" />
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="saleStatus"
                                        >
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Last 28 Days
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Last Month
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Last Year
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="avatar me-4">
                                                <div className="avatar-initial bg-label-success rounded-circle">
                                                    US
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <h6 className="mb-0">$8,656k</h6>
                                                    <i className="ri-arrow-up-s-line ri-24px text-success" />
                                                    <span className="text-success">25.8%</span>
                                                </div>
                                                <p className="mb-0">United states of america</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-1">894k</h6>
                                            <small className="text-muted">Sales</small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="avatar me-4">
                                                <span className="avatar-initial bg-label-danger rounded-circle">
                                                    UK
                                                </span>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <h6 className="mb-0">$2,415k</h6>
                                                    <i className="ri-arrow-down-s-line ri-24px text-danger" />
                                                    <span className="text-danger">6.2%</span>
                                                </div>
                                                <p className="mb-0">United Kingdom</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-1">645k</h6>
                                            <small className="text-muted">Sales</small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="avatar me-4">
                                                <span className="avatar-initial bg-label-warning rounded-circle">
                                                    IN
                                                </span>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <h6 className="mb-0">865k</h6>
                                                    <i className="ri-arrow-up-s-line ri-24px text-success" />
                                                    <span className="text-success"> 12.4%</span>
                                                </div>
                                                <p className="mb-0">India</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-1">148k</h6>
                                            <small className="text-muted">Sales</small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="avatar me-4">
                                                <span className="avatar-initial bg-label-secondary rounded-circle">
                                                    JA
                                                </span>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <h6 className="mb-0">$745k</h6>
                                                    <i className="ri-arrow-down-s-line ri-24px text-danger" />
                                                    <span className="text-danger">11.9%</span>
                                                </div>
                                                <p className="mb-0">Japan</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-1">86k</h6>
                                            <small className="text-muted">Sales</small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="avatar me-4">
                                                <span className="avatar-initial bg-label-danger rounded-circle">
                                                    KO
                                                </span>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <h6 className="mb-0">$45k</h6>
                                                    <i className="ri-arrow-up-s-line ri-24px text-success" />
                                                    <span className="text-success">16.2%</span>
                                                </div>
                                                <p className="mb-0">Korea</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-1">42k</h6>
                                            <small className="text-muted">Sales</small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="avatar me-4">
                                                <span className="avatar-initial bg-label-primary rounded-circle">
                                                    CH
                                                </span>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <h6 className="mb-0">$12k</h6>
                                                    <i className="ri-arrow-up-s-line ri-24px text-success" />
                                                    <span className="text-success">14.8%</span>
                                                </div>
                                                <p className="mb-0">China</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-1">8k</h6>
                                            <small className="text-muted">Sales</small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar me-4">
                                                <span className="avatar-initial bg-label-danger rounded-circle">
                                                    KO
                                                </span>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-1 mb-1">
                                                    <h6 className="mb-0">$95k</h6>
                                                    <i className="ri-arrow-up-s-line ri-24px text-success" />
                                                    <span className="text-success">9.2%</span>
                                                </div>
                                                <p className="mb-0">france</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-1">142k</h6>
                                            <small className="text-muted">Sales</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ Sales by Countries */}
                        {/* Data Tables */}
                        <div className="col-xl-8 col-md-6">
                            <div className="card overflow-hidden">
                                <div className="table-responsive">
                                    <table className="table table-sm">
                                        <thead>
                                            <tr>
                                                <th className="text-truncate">User</th>
                                                <th className="text-truncate">Email</th>
                                                <th className="text-truncate">Role</th>
                                                <th className="text-truncate">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-4">
                                                            <img
                                                                src="../../assets/img/avatars/1.png"
                                                                alt="Avatar"
                                                                className="rounded-circle"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-truncate">
                                                                Jordan Stevenson
                                                            </h6>
                                                            <small className="text-truncate">
                                                                @amiccoo
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-truncate">
                                                    susanna.Lind57@gmail.com
                                                </td>
                                                <td className="text-truncate">
                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-vip-crown-line ri-22px text-primary me-2" />
                                                        <span>Admin</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-warning rounded-pill">
                                                        Pending
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-4">
                                                            <img
                                                                src="../../assets/img/avatars/3.png"
                                                                alt="Avatar"
                                                                className="rounded-circle"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-truncate">
                                                                Benedetto Rossiter
                                                            </h6>
                                                            <small className="text-truncate">
                                                                @brossiter15
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-truncate">
                                                    estelle.Bailey10@gmail.com
                                                </td>
                                                <td className="text-truncate">
                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-edit-box-line text-warning ri-22px me-2" />
                                                        <span>Editor</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-success rounded-pill">
                                                        Active
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-4">
                                                            <img
                                                                src="../../assets/img/avatars/2.png"
                                                                alt="Avatar"
                                                                className="rounded-circle"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-truncate">
                                                                Bentlee Emblin
                                                            </h6>
                                                            <small className="text-truncate">
                                                                @bemblinf
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-truncate">milo86@hotmail.com</td>
                                                <td className="text-truncate">
                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-computer-line text-danger ri-22px me-2" />
                                                        <span>Author</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-success rounded-pill">
                                                        Active
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-4">
                                                            <img
                                                                src="../../assets/img/avatars/5.png"
                                                                alt="Avatar"
                                                                className="rounded-circle"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-truncate">
                                                                Bertha Biner
                                                            </h6>
                                                            <small className="text-truncate">
                                                                @bbinerh
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-truncate">
                                                    lonnie35@hotmail.com
                                                </td>
                                                <td className="text-truncate">
                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-edit-box-line text-warning ri-22px me-2" />
                                                        <span>Editor</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-warning rounded-pill">
                                                        Pending
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-4">
                                                            <img
                                                                src="../../assets/img/avatars/4.png"
                                                                alt="Avatar"
                                                                className="rounded-circle"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-truncate">
                                                                Beverlie Krabbe
                                                            </h6>
                                                            <small className="text-truncate">
                                                                @bkrabbe1d
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-truncate">
                                                    ahmad_Collins@yahoo.com
                                                </td>
                                                <td className="text-truncate">
                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-pie-chart-2-line ri-22px text-info me-2" />
                                                        <span>Maintainer</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-success rounded-pill">
                                                        Active
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-4">
                                                            <img
                                                                src="../../assets/img/avatars/7.png"
                                                                alt="Avatar"
                                                                className="rounded-circle"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-truncate">
                                                                Bradan Rosebotham
                                                            </h6>
                                                            <small className="text-truncate">
                                                                @brosebothamz
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-truncate">
                                                    tillman.Gleason68@hotmail.com
                                                </td>
                                                <td className="text-truncate">
                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-edit-box-line text-warning ri-22px me-2" />
                                                        <span>Editor</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-warning rounded-pill">
                                                        Pending
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-4">
                                                            <img
                                                                src="../../assets/img/avatars/6.png"
                                                                alt="Avatar"
                                                                className="rounded-circle"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-truncate">
                                                                Bree Kilday
                                                            </h6>
                                                            <small className="text-truncate">
                                                                @bkildayr
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-truncate">otho21@gmail.com</td>
                                                <td className="text-truncate">
                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-user-3-line ri-22px text-success me-2" />
                                                        <span>Subscriber</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-success rounded-pill">
                                                        Active
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className="border-transparent">
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-4">
                                                            <img
                                                                src="../../assets/img/avatars/1.png"
                                                                alt="Avatar"
                                                                className="rounded-circle"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0 text-truncate">
                                                                Breena Gallemore
                                                            </h6>
                                                            <small className="text-truncate">
                                                                @bgallemore6
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-truncate">
                                                    florencio.Little@hotmail.com
                                                </td>
                                                <td className="text-truncate">
                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-user-3-line ri-22px text-success me-2" />
                                                        <span>Subscriber</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-secondary rounded-pill">
                                                        Inactive
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/*/ Data Tables */}
                    </div>
                </div>
                {/* / Content */}
                {/* Footer */}
                <footer className="content-footer footer bg-footer-theme">
                    <div className="container-xxl">
                        <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                            <div className="text-body mb-2 mb-md-0">
                                © , made with
                                <span className="text-danger">
                                    <i className="tf-icons ri-heart-fill" />
                                </span>
                                by
                                <a
                                    href="https://themeselection.com/"
                                    target="_blank"
                                    className="footer-link"
                                >
                                    ThemeSelection
                                </a>
                            </div>
                            <div className="d-none d-lg-inline-block">
                                <a
                                    href="https://themeselection.com/license/"
                                    className="footer-link me-4"
                                    target="_blank"
                                >
                                    License
                                </a>
                                <a
                                    href="https://themeselection.com/"
                                    target="_blank"
                                    className="footer-link me-4"
                                >
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
            {/* Content wrapper */}
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
            {/* Drag Target Area To SlideIn Menu On Small Screens */}
            <div className="drag-target" />

            {/* / Layout wrapper */}
            <div className="buy-now">
                <a
                    href="https://themeselection.com/item/materio-aspnet-core-mvc-admin-template/"
                    target="_blank"
                    className="btn btn-danger btn-buy-now"
                >
                    Buy Now
                </a>
            </div>
        </>

    )
}

export default Home;
