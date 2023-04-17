import '../../styles/main/layout.css';
import { IDogData } from '../Interfaces/IDogData';

const DogInfo: React.FC<IDogData> = ({name,age,gender,weight}) => {
    return (
        <div>
            <h3>Dog info</h3>
            <div className='col-6'>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </div>
            <div className='col-6'>
                <p>Gender: {gender}</p>
                <p>Weight: {weight}</p>
            </div>            
        </div>
    );
};

export default DogInfo;

