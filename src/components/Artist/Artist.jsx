import image2 from "../../images/artist-image.png";
import "./Artist.css";
function Artist() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1
            className="text-center mt-5 font"
            style={{
              fontSize: " 30px",
              fontWeight: "400",
              color: " #f7ea66",
              margin: "25px 0 50px",
            }}
          >
            Our Halloween's Artist
          </h1>
          <div
            className="col-md-6"
            style={{ marginTop: "50px", marginLeft: "-25px", zIndex: " 9" }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <img src={image2} className="w-50" alt="" />
              <div>
                <h3 className="text-white font">DJ Remerson Huke</h3>
                <p className="text-white font">Lead DJ On Deadpoll</p>

                <br />
                <p className="text-white ">
                  Lorem Ipsum Dolor Sit Amet,
                  <br /> Consectetur Adipisicing Elit,
                  <br /> Sed Do Eiusmod Tempor <br /> Incididunt Ut Labore.
                </p>
                <ul className="list-unstyled d-flex ">
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
          <div
            className="col-md-6"
            style={{ marginTop: "50px", marginLeft: "-25px", zIndex: " 9" }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <img src={image2} alt="" className="w-50" />
              <div>
                <h3 className="text-white font">DJ Remerson Huke</h3>
                <p className="text-white font">Lead DJ On Deadpoll</p>
                <br />
                <p className="text-white">
                  Lorem Ipsum Dolor Sit Amet,
                  <br /> Consectetur Adipisicing Elit,
                  <br /> Sed Do Eiusmod Tempor <br /> Incididunt Ut Labore.
                </p>
                <ul className="list-unstyled d-flex ">
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
    </>
  );
}

export default Artist;
