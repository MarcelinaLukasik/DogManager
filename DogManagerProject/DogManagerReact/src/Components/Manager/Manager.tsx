import '../../styles/main/banner.css';
import '../../styles/main/layout.css';
import '../../styles/manager/wrapper.css';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BasicInfo } from '../../Enums/Notifications';
import { BreedInfo } from '../Interfaces/IBreedInfo';


const Manager: React.FC = () => {
    const location = useLocation();
    let dogInfo = location.state;
    const [dogFact, setDogFact] = useState<string> ("");
    const [allBreedsInfo, setAllBreedsInfo] = useState<Array<any>> ([]);
    const [breedInfo, setBreedInfo] = useState<BreedInfo> ();

    useEffect(() => {
        fetchDogFact();
        GetAllBreedsInfo();
    }, []); 

    useEffect(() => {
        GetBreedInfo();
    }, [allBreedsInfo]); 

    
    async function fetchDogFact() {
        const res = await fetch(`https://dogapi.dog/api/v2/facts`);           
        res.json().then(res => {setDogFact(res.data[0].attributes.body)});             
    } 

    async function GetAllBreedsInfo() {
        const res = await fetch(`https://dogapi.dog/api/v2/breeds`);           
        res.json().then(res => {setAllBreedsInfo(res.data)});     
    }

    function GetBreedInfo (){
        if(dogInfo){
            allBreedsInfo.forEach((breed) => {
                if(breed.attributes.name.toLowerCase().includes(dogInfo.breed)){
                    setBreedInfo(breed);
                }
           })
        }      
    }
    
    return (
        <div className='content'>
            <h2>Your dog info:</h2>
            <div className="wrapper">
            <div className="item1">
                {breedInfo && 
                <div>
                    <h3>Breed name:</h3>
                    <p>{breedInfo.attributes.name}</p>
                    <h3>Description:</h3>
                    <p>{breedInfo.attributes.description}</p>
                    <h3>Hypoallergenic:</h3>
                    {breedInfo.attributes.hypoallergenic && 
                    <p>Yes</p>
                    }
                    {!breedInfo.attributes.hypoallergenic && 
                    <p>No</p>
                    }
                </div>}
                {!breedInfo &&
                 <p>{BasicInfo.BreedInfoNotFound}</p>
                }
               
            </div>
            <div className="item2">
                {dogInfo &&
                    <img src={dogInfo.imageUrl} alt="dog"/>
                }          
            </div>
            <div className="item3">
                <h3>Fun facts</h3>
                <p>{dogFact}</p>
                <button onClick={fetchDogFact}>Another one!</button>
            </div>
            <div className="item4">
                {dogInfo && <div className='row'>
                    <h3>Dog info</h3>
                    <div className='col-6'>
                    <p>Name: {dogInfo.name}</p>
                    <p>Age: {dogInfo.age}</p>
                    </div>
                    <div className='col-6'>
                    <p>Gender: {dogInfo.gender}</p>
                    <p>Weight: {dogInfo.weight}</p>
                    </div>                   
                </div>
                }
                {!dogInfo &&        
                <p>{BasicInfo.NoData}</p>
                }       
            </div>
        </div>


            
            
        </div>
    );
};

export default Manager;