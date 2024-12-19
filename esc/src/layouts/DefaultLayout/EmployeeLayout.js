import SidebarEmployee from "../components/Sidebar/SiderbarEmployee"

function EmployeeLayout (){
    const employee = window.sessionStorage.getItem("employeeID")
    return(
        <>
        {employee !== null ? (
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <SidebarEmployee routes={publicRoutes} />
                    <div class="layout-page">
                        <Header />
                        <div className="">
                            <div className="">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="misc-wrapper">
            <h1 className="mb-2 mx-2" style={{ fontSize: "6rem", lineHeight: "6rem" }}>
              401
            </h1>
            <h4 className="mb-2">You are not authorized! 🔐</h4>
            <p className="mb-10 mx-2">
              You don’t have permission to access this page. Go Home!
            </p>
            <div className="d-flex justify-content-center mt-5">
              <img
                src="../../assets/img/illustrations/tree-3.png"
                alt="misc-tree"
                className="img-fluid misc-object d-none d-lg-inline-block"
              />
              <img
                src="../../assets/img/illustrations/tree.png"
                alt="misc-tree"
                className="img-fluid misc-object-right d-none d-lg-inline-block"
              />
              <img
                src="../../assets/img/illustrations/misc-mask-light.png"
                alt="misc-error"
                className="scaleX-n1-rtl misc-bg d-none d-lg-inline-block"
                height={172}
                data-app-light-img="illustrations/misc-mask-light.png"
                data-app-dark-img="illustrations/misc-mask-dark.png"
              />
              <div className="d-flex flex-column align-items-center">
                <img
                  src="../../assets/img/illustrations/401.png"
                  alt="misc-error"
                  className="misc-model img-fluid z-1"
                  width={780}
                />
                <div>
                  <Link
                    to="/login"
                    className="btn btn-primary text-center my-6 waves-effect waves-light"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        )}
    </>
    )
}
export default EmployeeLayout