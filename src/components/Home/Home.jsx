import images from "../../images/Banner.png";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="container">
        <div className="row  justify-content-center align-items-center ">
          <div className="col-md-7 banner-img d-none d-md-block">
            <img src={images} className="img-fluid" alt="Banner" />
          </div>
          <div className="col-12 col-md-5">
            <div className="text-center" style={{ color: "#fff" }}>
              <h2 className="font">31th octobar 2018</h2>
              <h5
                className="font"
                style={{
                  fontSize: " 60px",
                  fontWeight: "400",
                  color: " #f7ea66",
                  margin: "25px 0 50px",
                }}
              >
                Halloween Party
              </h5>
              <p
                className="text-center"
                style={{
                  fontSize: "14px",
                  padding: "0 0 35px",
                }}
              >
                Halloween or Hallowe'en (a contraction of All Hallows' Evening)
                also known as Allhalloween, All Hallows' Eve or All Saints' Eve
                is a celebration observed in a number of countries on 31
                October.
              </p>
              <div className="btn-bar text-center">
                <button
                  className=" btn rounded-pill p-2 font"
                  style={{ backgroundColor: "#f7ea66", color: "#80479a" }}
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
