import "./Contact.css";
import images from "../../images/contact.png";
function Contact() {
  return (
    <>
      <div className="container py-4">
        <div className="row  justify-content-center align-items-center ">
          <div className="col-md-3 banner-img d-none d-md-block">
            <img src={images} className="img-fluid contact" alt="Banner" />
          </div>
          <div className="col-12 col-md-10 mb-3">
            <div id="contact">
              <div className="container py-5">
                <div className="row">
                  <div className="col-md-12">
                    <h1
                      className="text-center font "
                      style={{
                        fontSize: " 60px",
                        fontWeight: "400",
                        color: " #f7ea66",
                        margin: "25px 0 50px",
                      }}
                    >
                      Signup For Newsletter
                    </h1>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-12">
                    <div className="col-md-12 text-center w-50 m-auto ">
                      <form action="#">
                        <div className>
                          <div className="input-group mb-3 white-placeholder">
                            <input
                              type="text"
                              className="form-control bg-transparent rounded-start-pill border-1 border-white "
                              placeholder=" Your E-Mail Address Here"
                            />
                            <button
                              className="btn btn-outline-secondary rounded-end-pill font border-1 border-white"
                              type="button"
                              style={{
                                backgroundColor: "#f7ea66",
                                color: "#80479a",
                              }}
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="w-25 m-auto mt-4">
                        <h6 className="text-white font">Get Update</h6>
                        <ul className="list-unstyled d-flex mt-3">
                          <li
                            className=" p-2 rounded rounded-circle me-2"
                            style={{ border: "1px solid #f7ea66" }}
                          >
                            <a href="/">
                              <i
                                className="fa fa-facebook"
                                style={{ color: "#f7ea66" }}
                              />
                            </a>
                          </li>
                          <li
                            className=" p-2 rounded rounded-circle  me-2"
                            style={{ border: "1px solid #f7ea66" }}
                          >
                            <a href="/">
                              <i
                                className="fa fa-twitter"
                                style={{ color: "#f7ea66" }}
                              />
                            </a>
                          </li>
                          <li
                            className=" p-2 rounded rounded-circle  me-2"
                            style={{ border: "1px solid #f7ea66" }}
                          >
                            <a href="/">
                              <i
                                className="fa fa-dribbble"
                                style={{ color: "#f7ea66" }}
                              />
                            </a>
                          </li>
                          <li
                            className=" p-2 rounded rounded-circle  me-2"
                            style={{ border: "1px solid #f7ea66" }}
                          >
                            <a href="/">
                              <i
                                className="fa fa-behance"
                                style={{ color: "#f7ea66" }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
