import "../../styles/main/layout.css";
import { IBreedInfo } from "../Interfaces/IBreedInfo";

const BreedInfo: React.FC<IBreedInfo> = (breedInfo) => {
  return (
    <div>
      <h3>Breed name:</h3>
      <p>{breedInfo.attributes.name}</p>
      <h3>Description:</h3>
      <p>{breedInfo.attributes.description}</p>
      <h3>Hypoallergenic:</h3>
      {breedInfo.attributes.hypoallergenic && <p>Yes</p>}
      {!breedInfo.attributes.hypoallergenic && <p>No</p>}
    </div>
  );
};

export default BreedInfo;
