import image2 from "../../images/artist-image.png";
import "./About";
function About() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12">
            <h1
              className="text-center font"
              style={{
                fontSize: " 60px",
                fontWeight: "400",
                color: " #f7ea66",
                margin: "25px 0 50px",
              }}
            >
              About The Party
            </h1>
            <p className="text-center text-white w-75 m-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt. <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button
              className=" btn rounded-pill p-2 d-block m-auto mt-5 font mb-2"
              style={{ backgroundColor: "#f7ea66", color: "#80479a" }}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
