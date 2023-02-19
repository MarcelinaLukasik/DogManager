import '../../styles/main/layout.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IDogData } from '../Interfaces/IDogData';



const Details: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let dogInfo = location.state;

    const [dogData, setDogData] = useState<IDogData>({
        breed : dogInfo.breed,
        name : "",
        age : 0,
        imageUrl: dogInfo.imageUrl,
        gender: "",
        weight: 0
    });

    function handleInfoSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate("/Manager", { state: dogData});
    }

    function handleChange (event : React.ChangeEvent<HTMLInputElement>)  {
        setDogData({...dogData,[event.target.name] : event.target.value});
      
    }

    return (
        <div className='content'>
            <div className='panel'>
                <h2>Your pet ({dogInfo.breed}) info:</h2>               
                    <form onSubmit={handleInfoSubmit}>
                    <div className='row'>
                        <div className='col-12 form'>
                            <label htmlFor="name">Name</label>
                            <input id="name" value={dogData.name} name={"name"} onChange={handleChange}/>

                            <label htmlFor="age">Age</label>
                            <input id="age" value={dogData.age} name={"age"} onChange={handleChange}/>

                            <label htmlFor="gender">Gender</label>
                            <input id="gender" value={dogData.gender} name={"gender"} onChange={handleChange}/>

                            <label htmlFor="weight">Weight</label>
                            <input id="weight" value={dogData.weight} name={"weight"} onChange={handleChange}/>
                        </div>                      
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                        <button type={"submit"}>Done!</button>
                        </div>                       
                    </div>
                    </form>             
            </div>       
        </div>
    );
};

export default Details;