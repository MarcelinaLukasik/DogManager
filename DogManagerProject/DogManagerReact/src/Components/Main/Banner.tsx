import "../../styles/main/banner.css";
import "../../styles/main/layout.css";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import frontViewDogImage from  '../../images/frontViewDog.jpg';
// import HomeImage from '../images/front-view-beautiful-dog-with-copy-space.jpg';
import Nav from "react-bootstrap/Nav";
import { MainInfo } from "../../Enums/MainInfo";

const Banner: React.FC = () => {
    return (
        <div className='content'>
        <div className='row'>
        <div className='col-1'>       
        </div>
        <div className='col-6'>
        <div className='banner-message'>
            <h1>Welcome!</h1>
            <h3>DogManager is here to help you keep track with all your pet needs!</h3>

            <p>Keep all your pet informations in one place. 
                 DogManager will help you with shedules and daily routine.                     
                 You'll find behavioural advice, dog life-hacks, tips and tricks, 
                 learn about different dog breeds and so much more. Let's get started!              
            </p>
               
        </div>
        <Nav.Link as={Link} to="/getStarted">
            <button >START</button>
        </Nav.Link>
        </div>
           
        <div className='col-5'>
            <p>
            <img className="banner-image" src={frontViewDogImage} alt="frontViewDogImage"/>
            </p>
            
        </div>
      </div>
    </div>
  );
};

export default Banner;
