import '../../styles/main/layout.css';
import '../../styles/main/panel.css';
import '../../styles/main/slider.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import InfoCard from './InfoCard';



const Start: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [breed, setBreed] = useState<string>("");
    const [allBreeds, setAllBreeds] = useState<Array<string>>([]);
    const [currentBreedNumber, setCurrentBreedNumber] = useState<number>(1);
    const navigate = useNavigate();

    useEffect(() => {
        const previousArrow = document.getElementById('previous');
        if (previousArrow != null) {
            previousArrow.style.transform = 'scale(-1, 1)';
        }
        fetchDogBreeds(); 
        // fetchDogList();
    }, []);

    useEffect(() => {
       fetchDogImage();
    }, [breed]);

    
    useEffect(() => {
        setBreed(allBreeds[currentBreedNumber ]);
     }, [currentBreedNumber]);
  
    
    async function fetchDogBreeds() {
        const res = await fetch(`https://dog.ceo/api/breeds/list/all`);        
        res.json().then(res => {
            setAllBreeds(Object.keys(res.message));
        });             
    } 

    async function fetchDogImage() {
        const res = await fetch(`https://dog.ceo/api/breed/${breed ? breed : 'affenpinscher'}/images/random/1`);           
        res.json().then(res => {setImageUrl(res.message);});             
      } 

    // async function fetchDogList() {
    //     const res = await fetch(`https://dogapi.dog/api/v2/breeds?page[number]=2`);           
    //     res.json().then(res => {console.log(res.data[0].attributes.name)});             
    //   } 
      
    //   https://dogapi.dog/api/v2/breeds


    function changeToNextBreed() : void{
        if (currentBreedNumber !== allBreeds.length -1){
            setCurrentBreedNumber(currentBreedNumber + 1);
        }
        
    }

    function changeToPreviousBreed() : void{
        if (currentBreedNumber !== 0){
            setCurrentBreedNumber(currentBreedNumber - 1);
        }     
    }

    function goToDetails(){
        navigate("Details", { state: {breed: breed, imageUrl: imageUrl}});
    }

    function selectChange(event: React.ChangeEvent<HTMLSelectElement>){
        const value = event.target.value;
        const key = event.target.options.selectedIndex;
        setBreed(value);
        setCurrentBreedNumber(key -1);
    }


    return (
        <div className='content'>
            <div className='panel'>
                <h3>Let's get started!</h3>
                <p>Choose your dog breed:</p>  
                <div className='row'>
                    <div className='col-6'>
                         <InfoCard info={{breed, imageUrl}} functions={{changeToNextBreed,
                         changeToPreviousBreed}}/>
                    </div>
                    <div className='col-6'>
                        <p>Or choose from list below:</p>
                        <select onChange={selectChange}>
                            <option value="">Select</option>
                            {allBreeds.map((item, index) => (
                                <option key={index} value={item} >
                                {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>             
               
                <button onClick={goToDetails}>Next</button>                  
            </div>                
        </div>
    );
};

export default Start;