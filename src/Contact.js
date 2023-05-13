import React from "react";

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">
          <i style={{ color: "#4a6694" }}>"Get in touch with me."</i>
        </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-11 mx-auto">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group"></div>
              <div class="form-group">
                <label for="exampleInputPassword1">Phone number</label>
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Phone number"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="submit" class="btn btn-outline-secondary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
