import "../../styles/main/banner.css";
import "../../styles/main/layout.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { MainInfo } from "../../Enums/MainInfo";

const Banner: React.FC = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
          <h2>Welcome!</h2>
          <p className="div2">
            {MainInfo.Header}
          </p>
          <Nav.Link as={Link} to="/getStarted">
            <button>START</button>
          </Nav.Link>
        </div>

        <div className="col-5">
          <p>image here</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
