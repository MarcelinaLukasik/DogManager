import '../../styles/main/banner.css';
import '../../styles/main/layout.css';
import '../../styles/manager/wrapper.css';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BasicInfo } from '../../Enums/Notifications';
import { IBreedInfo } from '../Interfaces/IBreedInfo';


const Manager: React.FC = () => {
    const location = useLocation();
    let dogInfo = location.state; 
    let breedFound: boolean = false;
    const [dogFact, setDogFact] = useState<string> ("");
    const [allBreedsInfo, setAllBreedsInfo] = useState<Array<any>> ([]);
    const [breedInfo, setBreedInfo] = useState<IBreedInfo> ();
    const [similarBreeds, setSimilarBreeds] = useState<Array<IBreedInfo>> ([]);
    const [link, setLink] = useState<string> ("https://dogapi.dog/api/v2/breeds");

    useEffect(() => {
        fetchDogFact();
        GetAllBreedsInfo();
    }, []); 

    useEffect(() => {
        GetBreedInfo();
        GetSimiliarBreeds();
        GetAllBreedsInfo();
    }, [link]); 

    
    async function fetchDogFact() {
        const res = await fetch(`https://dogapi.dog/api/v2/facts`);           
        res.json().then(res => {setDogFact(res.data[0].attributes.body)});             
    } 

    async function GetAllBreedsInfo() {     
        fetch(link).then(async res => 
            {
                try {
                    const result = await res.json();
                    setAllBreedsInfo(result.data ); console.log(result.data); setLink(result.links.next)
                }
                catch(error){
                    console.log("invalid link")
                }
            }); 
    }                     

    function GetBreedInfo(){
        if(dogInfo && !breedFound){
           
            allBreedsInfo.forEach((breed) => {
                if(breed.attributes.name.toLowerCase() === dogInfo.breed){
                    setBreedInfo(breed);
                    breedFound = true;
                }
           });
        }      
    }

    function GetSimiliarBreeds() {
        if(dogInfo){         
            allBreedsInfo.forEach((breed) => {              
                if(breed.attributes.name.toLowerCase().includes(dogInfo.breed.toLowerCase()) 
                 && breed.attributes.name.toLowerCase() !== dogInfo.breed.toLowerCase())
                {
                    setSimilarBreeds(oldArray => [...oldArray, breed] )
                }
           });
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
                    <h3>Similar dog breeds:</h3>
                    {similarBreeds.length !== 0 &&
                        <div className='scrollable-list'>
                            
                        {Array.from(new Set(similarBreeds)).map((item, index) => (
                            <p key={index} >
                            {item.attributes.name}
                            </p>
                        ))}
                        </div>
                    }
                    {similarBreeds.length === 0 &&
                        <p>{BasicInfo.NoResults}</p>
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