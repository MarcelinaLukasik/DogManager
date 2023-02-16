import '../../styles/main/layout.css';
import '../../styles/main/panel.css';
import '../../styles/main/slider.css';
import '../../styles/main/arrow.css';
import '../../styles/main/infoCard.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



const Start: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [breed, setBreed] = useState<string>("");
    const [allBreeds, setAllBreeds] = useState<Array<string>>([]);
    // let currentBreedNumber: number = 0;
    const [currentBreedNumber, setCurrentBreedNumber] = useState<number>(1);
    const navigate = useNavigate();

    useEffect(() => {
        const previousArrow = document.getElementById('previous');
        if (previousArrow != null) {
            previousArrow.style.transform = 'scale(-1, 1)';
        }
        fetchDogBreeds(); 
    }, []);

    useEffect(() => {
       fetchDogImage();
    }, [breed]);

    
    useEffect(() => {
        setBreed(allBreeds[currentBreedNumber ]);
     }, [currentBreedNumber]);
  
    
    async function fetchDogBreeds() {
        const res = await fetch(`https://dog.ceo/api/breeds/list/all`); 
        // const res = await fetch(`https://api.thecatapi.com/v1/images/search?size=full`);            
        res.json().then(res => {
            setAllBreeds(Object.keys(res.message));
        });             
    } 

    async function fetchDogImage() {
        const res = await fetch(`https://dog.ceo/api/breed/${breed ? breed : 'affenpinscher'}/images/random/1`);           
        res.json().then(res => {setImageUrl(res.message);});             
      }  


    function changeToNextBreed(){
        if (currentBreedNumber !== allBreeds.length -1){
            setCurrentBreedNumber(currentBreedNumber + 1);
            console.log(currentBreedNumber);
        }
        
    }

    function changeToPreviousBreed(){
        if (currentBreedNumber !== 0){
            setCurrentBreedNumber(currentBreedNumber - 1);
            console.log(currentBreedNumber);
        }     
    }

    function goToDetails(){
        navigate("Details");
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
                        <div className='infoCard'>
                            <div className='row'>                           
                                <div className='col-2'>
                                    <div className="center-con">
                                        <div className="round" onClick={changeToPreviousBreed}>
                                            <div id="cta">
                                                <div id='previous'>
                                                    <span className="arrow first next "></span>
                                                    <span className="arrow second next "></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                                <div  className='col-8'>
                                        <img src={imageUrl} alt="dog"/>
                                        <p>{breed ? breed.toUpperCase() : 'affenpinscher'}</p>
                                </div>
                                <div className='col-2'>
                                    <div className="center-con">
                                        <div className="round" onClick={changeToNextBreed}>                                   
                                            <div id="cta" >
                                                <span className="arrow first next "></span>
                                                <span className="arrow second next "></span>
                                            </div>                                                                    
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>  
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