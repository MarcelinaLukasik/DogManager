import "../../styles/main/banner.css";
import "../../styles/main/layout.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import frontViewDogImage from "../../images/frontViewDog.jpg";
import { MainInfo } from "../../Enums/MainInfo";

const Banner: React.FC = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6">
          <div className="banner-message">
            <h1>Welcome!</h1>
            <h3>
              {MainInfo.Header}
            </h3>

            <p>
              {MainInfo.Description}
            </p>
          </div>
          <Nav.Link as={Link} to="/getStarted">
            <button>START</button>
          </Nav.Link>
        </div>

        <div className="col-5">
          <p>
            <img
              className="banner-image"
              src={frontViewDogImage}
              alt="frontViewDogImage"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
