import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className=" w-100" style={{ backgroundColor: "#2c0047" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="footer_text text-decoration-none">
                <hr className="text-bg-dark" />
                <a
                  href="/"
                  className="text-decoration-none d-block mb-3 "
                  style={{ color: "#f7ea66" }}
                >
                  Copyright © 2023. All rights reserved by Abdelkader{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
