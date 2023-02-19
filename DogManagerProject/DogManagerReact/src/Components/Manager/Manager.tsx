import '../../styles/main/banner.css';
import '../../styles/main/layout.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Manager: React.FC = () => {
    const location = useLocation();
    let dogInfo = location.state;
    console.log(dogInfo);

    return (
        <div className='content'>
       <h2>Your dog info:</h2>
       <p>{dogInfo.name}</p>
       <p>{dogInfo.age}</p>
        
        </div>
    );
};

export default Manager;