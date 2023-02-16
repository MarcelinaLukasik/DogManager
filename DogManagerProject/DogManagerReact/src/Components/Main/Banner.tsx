import '../../styles/main/banner.css';
import '../../styles/main/layout.css';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Banner: React.FC = () => {
    return (
        <div className='content'>
        <div className='row'>
        <div className='col-1'>       
        </div>
        <div className='col-5'>
        <h2>Welcome!</h2>
        <p className='div2'>DogManager is here to help you keep track with all your pet needs!
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
         deserunt mollit anim id est laborum."
        </p>
        <Nav.Link as={Link} to="/getStarted">
            <button >START</button>
        </Nav.Link>
        </div>
           
        <div className='col-5'>
            <p>
            image here
            </p>
            
        </div>
               
             
        
        </div>
        </div>
    );
};

export default Banner;