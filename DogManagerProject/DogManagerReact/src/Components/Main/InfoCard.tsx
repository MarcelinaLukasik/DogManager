import '../../styles/main/layout.css';
import '../../styles/main/arrow.css';
import '../../styles/main/infoCard.css';
import { IBreedUtils } from '../Interfaces/IBreedUtils';

// type intersectedInterfaces = IBreedInfo & IBreedFunctions;
const InfoCard: React.FC<IBreedUtils> = (props) => {
    return (
        <div className='infoCard'>
            <div className='row'>                           
                <div className='col-2'>
                    <div className="center-con">
                        <div className="round" onClick={props.functions.changeToPreviousBreed}>
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
                        <img src={props.info.imageUrl} alt="dog"/>
                        <p>{props.info.breed ? props.info.breed.toUpperCase() : 'affenpinscher'}</p>
                </div>
                <div className='col-2'>
                    <div className="center-con">
                        <div className="round" onClick={props.functions.changeToNextBreed}>                                   
                            <div id="cta" >
                                <span className="arrow first next "></span>
                                <span className="arrow second next "></span>
                            </div>                                                                    
                        </div>
                    </div>  
                </div>
            </div>
        </div>  
    );
};

export default InfoCard;