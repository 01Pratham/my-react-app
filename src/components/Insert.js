import React from "react";


function Insert(){
  return (
    <>
    <div>
    <div className="content-wrapper">
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          {/* <h1>Validation</h1> */}
        </div>
       
      </div>
    </div>
  </section>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 ml-5">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">
              Manage Users
              </h3>
            </div>
            <form id="quickForm">
              <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter full name"
                  />
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Employee ID</label>
                  <input
                    type="text"
                    name="empid"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Employee ID"
                  />
                </div>
                </div>
                </div>


                <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Email Address"
                  />
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Date Of Joining</label>
                  <input
                    type="text"
                    name="date"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter date Of Joing"
                  />
                </div>
                </div>
                </div>


                <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter password"
                  />
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Confirm password</label>
                  <input
                    type="cpassword"
                    name="cpassword"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                  />
                </div>
                </div>
                </div>
              
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  </section>
</div>


    </div>
    </>
  );
}

export default Insert;
